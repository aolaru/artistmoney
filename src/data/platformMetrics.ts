export type PlatformMetricSource = "official_video" | "official_audio" | "lyric_video" | "topic";

export type SongPlatformMetrics = {
  spotifyTrackId?: string;
  spotifyPopularity?: number;
  youtubeVideoId?: string;
  youtubeViews?: number;
  youtubeSource?: PlatformMetricSource;
  lastChecked?: string;
};

export const songPlatformMetrics: Record<string, SongPlatformMetrics> = {
  "all-i-want-for-christmas-is-you": {
    youtubeVideoId: "aAkMkVFwAoo",
    youtubeSource: "official_video"
  },
  "billie-jean": {
    youtubeVideoId: "Zi_XLOBDo_Y",
    youtubeSource: "official_video"
  },
  "blinding-lights": {
    youtubeVideoId: "4NRXx6U8ABQ",
    youtubeSource: "official_video"
  },
  "bohemian-rhapsody": {
    youtubeVideoId: "fJ9rUzIMcZQ",
    youtubeSource: "official_video"
  },
  "dancing-queen": {
    youtubeVideoId: "xFrGuyw1V8s",
    youtubeSource: "official_video"
  },
  "dont-stop-me-now": {
    youtubeVideoId: "HgzGwKwLmgM",
    youtubeSource: "official_video"
  },
  "happy": {
    youtubeVideoId: "ZbZSe6N_BXs",
    youtubeSource: "official_video"
  },
  "in-the-end": {
    youtubeVideoId: "eVTXPUF4Oz4",
    youtubeSource: "official_video"
  },
  "numb": {
    youtubeVideoId: "kXYiU_JCYtU",
    youtubeSource: "official_video"
  },
  "shape-of-you": {
    youtubeVideoId: "JGwWNGJdvx8",
    youtubeSource: "official_video"
  },
  "sicko-mode": {
    youtubeVideoId: "6ONRf7h3Mdk",
    youtubeSource: "official_video"
  },
  "starboy": {
    youtubeVideoId: "34Na4j8AVgA",
    youtubeSource: "official_video"
  },
  "thriller": {
    youtubeVideoId: "sOnqjkJTMaA",
    youtubeSource: "official_video"
  },
  "umbrella": {
    youtubeVideoId: "CvBfHwUxHIk",
    youtubeSource: "official_video"
  }
};
