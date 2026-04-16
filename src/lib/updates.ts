import { execFileSync } from "node:child_process";

const COMMIT_MARKER = "__HMM_UPDATE_COMMIT__";

export type CatalogUpdate = {
  hash: string;
  shortHash: string;
  date: string;
  summary: string;
  artistSlugs: string[];
  songSlugs: string[];
  includesAlbumMetadata: boolean;
};

function unique(values: string[]) {
  return [...new Set(values)];
}

export function getCatalogUpdates(limit = 24): CatalogUpdate[] {
  try {
    const raw = execFileSync(
      "git",
      [
        "log",
        "--date=short",
        `--pretty=format:${COMMIT_MARKER}%n%H|%ad|%s`,
        "--name-only",
        "--",
        "src/data/artists",
        "src/data/songs",
        "src/data/albumMetadata.ts",
        "src/data/artistArticles.ts",
        "src/data/songMetadata.ts",
        "src/data/artistMetadata.ts"
      ],
      { encoding: "utf8" }
    );

    return raw
      .split(COMMIT_MARKER)
      .map((block) => block.trim())
      .filter(Boolean)
      .map((block) => {
        const [header = "", ...fileLines] = block.split("\n");
        const [hash = "", date = "", summary = "Catalog update"] = header.split("|");
        const files = fileLines.map((line) => line.trim()).filter(Boolean);

        const artistSlugs = unique(
          files
            .map((file) => file.match(/^src\/data\/artists\/(.+)\.json$/)?.[1])
            .filter((slug): slug is string => Boolean(slug))
        );

        const songSlugs = unique(
          files
            .map((file) => file.match(/^src\/data\/songs\/(.+)\.json$/)?.[1])
            .filter((slug): slug is string => Boolean(slug))
        );

        return {
          hash,
          shortHash: hash.slice(0, 7),
          date,
          summary,
          artistSlugs,
          songSlugs,
          includesAlbumMetadata: files.includes("src/data/albumMetadata.ts")
        };
      })
      .filter(
        (entry) =>
          entry.artistSlugs.length > 0 ||
          entry.songSlugs.length > 0 ||
          entry.includesAlbumMetadata
      )
      .slice(0, limit);
  } catch {
    return [];
  }
}
