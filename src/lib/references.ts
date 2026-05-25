import type { Song } from "./catalog";

export type ReferenceLink = {
  label: string;
  url: string;
  note: string;
};

function dedupeLinks(links: ReferenceLink[]) {
  const seen = new Set<string>();
  return links.filter((link) => {
    if (seen.has(link.url)) return false;
    seen.add(link.url);
    return true;
  });
}

export function getSongReferenceLinks(song: Song): ReferenceLink[] {
  const links = song.player?.links ?? {};
  const references: ReferenceLink[] = [];

  if (song.platformMetrics?.youtubeVideoId) {
    references.push({
      label: "Official YouTube video",
      url: `https://www.youtube.com/watch?v=${song.platformMetrics.youtubeVideoId}`,
      note: song.platformMetrics.youtubeSource
        ? `Configured as ${song.platformMetrics.youtubeSource.replaceAll("_", " ")} in the platform signal dataset.`
        : "Configured public YouTube reference for this song."
    });
  }

  if (links.appleMusic ?? song.player?.appleMusic) {
    references.push({
      label: "Apple Music track page",
      url: links.appleMusic ?? song.player?.appleMusic ?? "",
      note: "Used for track identity, artwork, preview availability, and release context."
    });
  }

  if (links.spotify) {
    references.push({
      label: "Spotify reference",
      url: links.spotify,
      note: song.platformMetrics?.spotifyTrackId
        ? "Linked to the configured Spotify track signal."
        : "Used as a public Spotify lookup reference for track identity."
    });
  }

  if (links.youtubeMusic) {
    references.push({
      label: "YouTube Music reference",
      url: links.youtubeMusic,
      note: "Used as a public listening-platform reference for the song."
    });
  }

  if (links.amazonMusic) {
    references.push({
      label: "Amazon Music reference",
      url: links.amazonMusic,
      note: "Used as an additional public catalog lookup reference."
    });
  }

  return dedupeLinks(references.filter((link) => link.url));
}

export function getArtistReferenceLinks(topSongs: Song[], limit = 6): ReferenceLink[] {
  return dedupeLinks(
    topSongs.flatMap((song) =>
      getSongReferenceLinks(song).slice(0, 2).map((link) => ({
        ...link,
        label: `${song.title}: ${link.label}`
      }))
    )
  ).slice(0, limit);
}
