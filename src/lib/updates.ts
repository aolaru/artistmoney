import { execFileSync } from "node:child_process";

const COMMIT_MARKER = "__HMM_UPDATE_COMMIT__";

export type CatalogUpdate = {
  hash: string;
  shortHash: string;
  date: string;
  summary: string;
  artistSlugs: string[];
  songSlugs: string[];
  addedArtistSlugs: string[];
  addedSongSlugs: string[];
  includesAlbumMetadata: boolean;
  includesArtistEditorial: boolean;
  includesSongEditorial: boolean;
  category: "catalog-expansion" | "album-enrichment" | "editorial-upgrade" | "mixed";
  sourceType: "autopilot" | "manual";
  highlights: string[];
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
        "--name-status",
        "--",
        "src/data/artists",
        "src/data/songs",
        "src/data/albumMetadata.ts",
        "src/data/artistArticles.ts",
        "src/data/songArticles.ts",
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
        const files = fileLines
          .map((line) => line.trim())
          .filter(Boolean)
          .map((line) => {
            const [status = "", ...pathParts] = line.split(/\s+/);
            return {
              status,
              path: pathParts.join(" ")
            };
          });

        const artistSlugs = unique(
          files
            .map((file) => file.path.match(/^src\/data\/artists\/(.+)\.json$/)?.[1])
            .filter((slug): slug is string => Boolean(slug))
        );

        const songSlugs = unique(
          files
            .map((file) => file.path.match(/^src\/data\/songs\/(.+)\.json$/)?.[1])
            .filter((slug): slug is string => Boolean(slug))
        );

        const addedArtistSlugs = unique(
          files
            .filter((file) => file.status === "A")
            .map((file) => file.path.match(/^src\/data\/artists\/(.+)\.json$/)?.[1])
            .filter((slug): slug is string => Boolean(slug))
        );

        const addedSongSlugs = unique(
          files
            .filter((file) => file.status === "A")
            .map((file) => file.path.match(/^src\/data\/songs\/(.+)\.json$/)?.[1])
            .filter((slug): slug is string => Boolean(slug))
        );

        const includesAlbumMetadata = files.some((file) => file.path === "src/data/albumMetadata.ts");
        const includesArtistEditorial = files.some((file) =>
          file.path === "src/data/artistArticles.ts" || file.path === "src/data/artistMetadata.ts"
        );
        const includesSongEditorial = files.some((file) =>
          file.path === "src/data/songArticles.ts" || file.path === "src/data/songMetadata.ts"
        );

        const categories = [
          addedArtistSlugs.length > 0 || addedSongSlugs.length > 0 ? "catalog-expansion" : null,
          includesAlbumMetadata ? "album-enrichment" : null,
          includesArtistEditorial || includesSongEditorial ? "editorial-upgrade" : null
        ].filter(Boolean) as Array<CatalogUpdate["category"]>;

        const category =
          categories.length > 1 ? "mixed" : categories[0] ?? "editorial-upgrade";

        const sourceType =
          summary.toLowerCase().includes("backfill existing page content") ||
          summary.toLowerCase().includes("autopilot")
            ? "autopilot"
            : "manual";

        const highlights = [
          addedArtistSlugs.length > 0
            ? `${addedArtistSlugs.length} new artist page${addedArtistSlugs.length === 1 ? "" : "s"}`
            : null,
          addedSongSlugs.length > 0
            ? `${addedSongSlugs.length} new song page${addedSongSlugs.length === 1 ? "" : "s"}`
            : null,
          includesAlbumMetadata ? "album metadata improved" : null,
          includesArtistEditorial ? "artist editorial refreshed" : null,
          includesSongEditorial ? "song editorial refreshed" : null
        ].filter(Boolean) as string[];

        if (sourceType === "autopilot") {
          highlights.push("autopilot refresh");
        } else {
          highlights.push("manual editorial release");
        }

        return {
          hash,
          shortHash: hash.slice(0, 7),
          date,
          summary,
          artistSlugs,
          songSlugs,
          addedArtistSlugs,
          addedSongSlugs,
          includesAlbumMetadata,
          includesArtistEditorial,
          includesSongEditorial,
          category,
          sourceType,
          highlights
        };
      })
      .filter(
        (entry) =>
          entry.artistSlugs.length > 0 ||
          entry.songSlugs.length > 0 ||
          entry.includesAlbumMetadata ||
          entry.includesArtistEditorial ||
          entry.includesSongEditorial
      )
      .slice(0, limit);
  } catch {
    return [];
  }
}
