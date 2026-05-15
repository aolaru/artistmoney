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
  "anti-hero": {
    youtubeVideoId: "b1kbLwvqugk",
    youtubeSource: "official_video"
  },
  "bad": {
    youtubeVideoId: "dsUXAEzaC3Q",
    youtubeSource: "official_video"
  },
  "bad-guy": {
    youtubeVideoId: "DyDfgMOUjCI",
    youtubeSource: "official_video"
  },
  "bad-romance": {
    youtubeVideoId: "qrO4YZeyl0I",
    youtubeSource: "official_video"
  },
  "beat-it": {
    youtubeVideoId: "oRdxUFDoQe0",
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
  "careless-whisper": {
    youtubeVideoId: "izGwDsrQ1eQ",
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
  "enter-sandman": {
    youtubeVideoId: "CD-E-LDc384",
    youtubeSource: "official_video"
  },
  "fix-you": {
    youtubeVideoId: "k4V3Mo61fJM",
    youtubeSource: "official_video"
  },
  "gangstas-paradise": {
    youtubeVideoId: "fPO76Jlnz6c",
    youtubeSource: "official_video"
  },
  "happy": {
    youtubeVideoId: "ZbZSe6N_BXs",
    youtubeSource: "official_video"
  },
  "hello": {
    youtubeVideoId: "YQHsXMglC9A",
    youtubeSource: "official_video"
  },
  "i-will-always-love-you": {
    youtubeVideoId: "3JWTaaS7LdU",
    youtubeSource: "official_video"
  },
  "in-da-club": {
    youtubeVideoId: "5qm8PH4xAss",
    youtubeSource: "official_video"
  },
  "in-the-end": {
    youtubeVideoId: "eVTXPUF4Oz4",
    youtubeSource: "official_video"
  },
  "just-a-girl": {
    youtubeVideoId: "PHzOOQfhPFg",
    youtubeSource: "official_video"
  },
  "lose-yourself": {
    youtubeVideoId: "_Yhyp-_hX2s",
    youtubeSource: "official_video"
  },
  "nothing-else-matters": {
    youtubeVideoId: "tAGnKpE4NCI",
    youtubeSource: "official_video"
  },
  "november-rain": {
    youtubeVideoId: "8SbUC-UaAxE",
    youtubeSource: "official_video"
  },
  "numb": {
    youtubeVideoId: "kXYiU_JCYtU",
    youtubeSource: "official_video"
  },
  "poker-face": {
    youtubeVideoId: "bESGLojNYSo",
    youtubeSource: "official_video"
  },
  "shake-it-off": {
    youtubeVideoId: "nfWlot6h_JM",
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
  "smells-like-teen-spirit": {
    youtubeVideoId: "hTWKbfoikeg",
    youtubeSource: "official_video"
  },
  "smooth-criminal": {
    youtubeVideoId: "h_D3VFfhvs4",
    youtubeSource: "official_video"
  },
  "stan": {
    youtubeVideoId: "gOMhN-hfMtY",
    youtubeSource: "official_video"
  },
  "starboy": {
    youtubeVideoId: "34Na4j8AVgA",
    youtubeSource: "official_video"
  },
  "sweet-child-o-mine": {
    youtubeVideoId: "1w7OgIMMRc4",
    youtubeSource: "official_video"
  },
  "thriller": {
    youtubeVideoId: "sOnqjkJTMaA",
    youtubeSource: "official_video"
  },
  "time-after-time": {
    youtubeVideoId: "VdQY7BusJNU",
    youtubeSource: "official_video"
  },
  "umbrella": {
    youtubeVideoId: "CvBfHwUxHIk",
    youtubeSource: "official_video"
  },
  "vogue": {
    youtubeVideoId: "GuJQSAiODqI",
    youtubeSource: "official_video"
  },
  "we-belong-together": {
    youtubeVideoId: "0habxsuXW4g",
    youtubeSource: "official_video"
  },
  "without-me": {
    youtubeVideoId: "YVkUvmDQ3HY",
    youtubeSource: "official_video"
  },
  "wonderwall": {
    youtubeVideoId: "bx1Bh8ZvH84",
    youtubeSource: "official_video"
  },
  "yellow": {
    youtubeVideoId: "yKNxeF4KMsY",
    youtubeSource: "official_video"
  }
};
