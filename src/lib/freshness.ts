import { execFileSync } from "node:child_process";

function unique(values: string[]) {
  return [...new Set(values)];
}

export function getLatestGitDate(paths: string[]) {
  const safePaths = unique(paths.filter(Boolean));

  if (safePaths.length === 0) return undefined;

  try {
    const raw = execFileSync(
      "git",
      ["log", "-1", "--date=short", "--format=%ad", "--", ...safePaths],
      {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"]
      }
    ).trim();

    return raw || undefined;
  } catch {
    return undefined;
  }
}

export function formatFreshnessDate(value?: string) {
  if (!value) return undefined;

  const parsed = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return value;

  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC"
  });
}
