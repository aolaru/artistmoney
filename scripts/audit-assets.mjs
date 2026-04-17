import { mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative, resolve } from "node:path";

const IMAGE_DIR = resolve("public/images/artists");
const REPORT_DIR = resolve(".reports");
const REPORT_PATH = join(REPORT_DIR, "asset-audit.json");
const WARN_SIZE_BYTES = 2_000_000;
const FAIL_SIZE_BYTES = 10_000_000;
const MAX_DIMENSION = 5_000;
const SUPPORTED_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

function getPngSize(buffer) {
  if (buffer.length < 24) return null;
  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20)
  };
}

function getJpegSize(buffer) {
  let offset = 2;

  while (offset < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }

    const marker = buffer[offset + 1];

    if (!marker || marker === 0xd8 || marker === 0xd9) {
      offset += 2;
      continue;
    }

    const length = buffer.readUInt16BE(offset + 2);
    if (!length || offset + 2 + length > buffer.length) break;

    const isStartOfFrame =
      marker >= 0xc0 &&
      marker <= 0xcf &&
      ![0xc4, 0xc8, 0xcc].includes(marker);

    if (isStartOfFrame) {
      return {
        height: buffer.readUInt16BE(offset + 5),
        width: buffer.readUInt16BE(offset + 7)
      };
    }

    offset += 2 + length;
  }

  return null;
}

function getWebpSize(buffer) {
  if (buffer.length < 30) return null;
  const chunk = buffer.toString("ascii", 12, 16);

  if (chunk === "VP8 ") {
    return {
      width: buffer.readUInt16LE(26) & 0x3fff,
      height: buffer.readUInt16LE(28) & 0x3fff
    };
  }

  if (chunk === "VP8L") {
    const bits = buffer.readUInt32LE(21);
    return {
      width: (bits & 0x3fff) + 1,
      height: ((bits >> 14) & 0x3fff) + 1
    };
  }

  if (chunk === "VP8X") {
    return {
      width: 1 + buffer.readUIntLE(24, 3),
      height: 1 + buffer.readUIntLE(27, 3)
    };
  }

  return null;
}

function getImageDimensions(filePath) {
  const buffer = readFileSync(filePath);
  const signature = buffer.toString("hex", 0, 12);

  if (signature.startsWith("89504e470d0a1a0a")) return getPngSize(buffer);
  if (signature.startsWith("ffd8ff")) return getJpegSize(buffer);
  if (buffer.toString("ascii", 0, 4) === "RIFF" && buffer.toString("ascii", 8, 12) === "WEBP") {
    return getWebpSize(buffer);
  }

  return null;
}

function auditImage(filePath) {
  const stats = statSync(filePath);
  const dimensions = getImageDimensions(filePath);
  const warnings = [];
  const failures = [];

  if (!dimensions) {
    failures.push("unreadable image dimensions");
  } else {
    if (dimensions.width > MAX_DIMENSION || dimensions.height > MAX_DIMENSION) {
      failures.push(`dimensions exceed ${MAX_DIMENSION}px`);
    }
  }

  if (stats.size > FAIL_SIZE_BYTES) {
    failures.push(`file size exceeds ${(FAIL_SIZE_BYTES / 1_000_000).toFixed(0)}MB hard limit`);
  } else if (stats.size > WARN_SIZE_BYTES) {
    warnings.push(`file size exceeds ${(WARN_SIZE_BYTES / 1_000_000).toFixed(0)}MB target`);
  }

  return {
    path: relative(process.cwd(), filePath),
    sizeBytes: stats.size,
    width: dimensions?.width ?? null,
    height: dimensions?.height ?? null,
    warnings,
    failures
  };
}

function main() {
  const entries = readdirSync(IMAGE_DIR)
    .filter((name) => SUPPORTED_EXTENSIONS.has(name.slice(name.lastIndexOf(".")).toLowerCase()))
    .map((name) => auditImage(join(IMAGE_DIR, name)))
    .sort((left, right) => right.sizeBytes - left.sizeBytes);

  const warnings = entries.filter((entry) => entry.warnings.length > 0);
  const failures = entries.filter((entry) => entry.failures.length > 0);

  mkdirSync(REPORT_DIR, { recursive: true });
  writeFileSync(
    REPORT_PATH,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        imageCount: entries.length,
        totalBytes: entries.reduce((sum, entry) => sum + entry.sizeBytes, 0),
        warnings,
        failures,
        largestAssets: entries.slice(0, 10)
      },
      null,
      2
    )
  );

  if (warnings.length > 0) {
    console.warn(`Asset audit warnings: ${warnings.length} file(s) exceed the 2MB target.`);
    warnings.slice(0, 5).forEach((entry) => {
      console.warn(`- ${entry.path}: ${(entry.sizeBytes / 1_000_000).toFixed(2)}MB`);
    });
  }

  if (failures.length > 0) {
    console.error(`Asset audit failed. See ${relative(process.cwd(), REPORT_PATH)} for details.`);
    failures.forEach((entry) => {
      console.error(`- ${entry.path}: ${entry.failures.join(", ")}`);
    });
    process.exit(1);
  }
}

main();
