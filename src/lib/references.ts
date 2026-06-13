import type { Song } from "./catalog";

export type ReferenceLink = {
  label: string;
  url: string;
  note: string;
  category?: string;
};

function dedupeLinks(links: ReferenceLink[]) {
  const seen = new Set<string>();
  return links.filter((link) => {
    if (seen.has(link.url)) return false;
    seen.add(link.url);
    return true;
  });
}

export function withReferenceCategory(reference: ReferenceLink): ReferenceLink {
  if (reference.category) return reference;

  const combined = `${reference.label} ${reference.url} ${reference.note}`.toLowerCase();
  if (combined.includes("riaa") || combined.includes("gold-platinum") || combined.includes("certification")) {
    return { ...reference, category: "Certification context" };
  }
  if (combined.includes("apple") || combined.includes("spotify") || combined.includes("youtube") || combined.includes("amazon")) {
    return { ...reference, category: "Platform identity" };
  }
  if (combined.includes("catalog") || combined.includes("ownership") || combined.includes("publishing") || combined.includes("master")) {
    return { ...reference, category: "Ownership context" };
  }
  if (combined.includes("release") || combined.includes("album") || combined.includes("track")) {
    return { ...reference, category: "Release metadata" };
  }

  return { ...reference, category: "Public context" };
}

export function getSongReferenceLinks(song: Song): ReferenceLink[] {
  const links = song.player?.links ?? {};
  const references: ReferenceLink[] = [];

  if (song.platformMetrics?.youtubeVideoId) {
    references.push({
      label: "Official YouTube video",
      url: `https://www.youtube.com/watch?v=${song.platformMetrics.youtubeVideoId}`,
      category: "Platform identity",
      note: song.platformMetrics.youtubeSource
        ? `Configured as ${song.platformMetrics.youtubeSource.replaceAll("_", " ")} in the platform signal dataset.`
        : "Configured public YouTube reference for this song."
    });
  }

  if (links.appleMusic ?? song.player?.appleMusic) {
    references.push({
      label: "Apple Music track page",
      url: links.appleMusic ?? song.player?.appleMusic ?? "",
      category: "Release metadata",
      note: "Used for track identity, artwork, preview availability, and release context."
    });
  }

  if (links.spotify) {
    references.push({
      label: "Spotify reference",
      url: links.spotify,
      category: "Platform identity",
      note: song.platformMetrics?.spotifyTrackId
        ? "Linked to the configured Spotify track signal."
        : "Used as a public Spotify lookup reference for track identity."
    });
  }

  if (links.youtubeMusic) {
    references.push({
      label: "YouTube Music reference",
      url: links.youtubeMusic,
      category: "Platform identity",
      note: "Used as a public listening-platform reference for the song."
    });
  }

  return dedupeLinks(references.filter((link) => link.url)).map(withReferenceCategory);
}

export function getArtistReferenceLinks(topSongs: Song[], limit = 6): ReferenceLink[] {
  return dedupeLinks(
    topSongs.flatMap((song) =>
      getSongReferenceLinks(song).slice(0, 2).map((link) => ({
        ...link,
        category: link.category ?? "Top-song context",
        label: `${song.title}: ${link.label}`
      }))
    )
  ).slice(0, limit).map(withReferenceCategory);
}
