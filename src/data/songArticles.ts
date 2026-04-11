export type SongArticle = {
  seoTitle: string;
  shortAnswer: string;
  breakdown: string[];
  lifetimeEstimate: string;
  whyItStillMakesMoney: string[];
  insight: string;
};

export const songArticles: Record<string, SongArticle> = {
  "spotify-per-stream": {
    seoTitle: "How much does Spotify pay per stream in 2026?",
    shortAnswer: "Estimated earnings: $0.003-$0.005 per stream.",
    breakdown: [
      "At 1M streams, a song can generate roughly $3,000-$5,000 before rights splits.",
      "Payouts vary depending on country, subscription tier, and platform mix.",
      "Master and publishing shares are split across artists, labels, distributors, and writers."
    ],
    lifetimeEstimate: "Lifetime earnings depend on scale, rights ownership, and whether the song keeps streaming over many years.",
    whyItStillMakesMoney: [
      "Streaming compounds when songs stay on playlists for years.",
      "High-volume catalogs convert even small per-stream rates into meaningful income.",
      "Global listeners create broader monetization than a single market can."
    ],
    insight: "Revenue depends on geography, subscription type, and rights splits."
  },
  "gangstas-paradise": {
    seoTitle: "How much does Gangsta’s Paradise make per year?",
    shortAnswer: "Estimated earnings: $500K-$1M+ per year.",
    breakdown: [
      "Massive Spotify streams keep the song active across multiple generations.",
      "Film sync value remains strong because of its connection to Dangerous Minds.",
      "Legacy playlist placement helps maintain steady catalog listening."
    ],
    lifetimeEstimate: "Estimated lifetime earnings: several million dollars over the life of the catalog.",
    whyItStillMakesMoney: [
      "The song remains one of the most recognizable rap hits of its era.",
      "Its soundtrack legacy keeps it culturally visible.",
      "Catalog and nostalgia playlists continue to drive repeat listening."
    ],
    insight: "Cultural hits generate long-term income decades later when they stay recognizable and keep showing up in playlists, film references, and memory-driven listening."
  },
  "in-this-shirt": {
    seoTitle: "How much does In This Shirt make per year?",
    shortAnswer: "Estimated earnings: $60K-$150K per year.",
    breakdown: [
      "Spotify payouts can land around $0.003-$0.005 per stream.",
      "YouTube and TikTok exposure help revive demand and create new listening cycles.",
      "Sync licensing adds value because emotionally resonant songs travel well in visual media."
    ],
    lifetimeEstimate: "Estimated lifetime earnings: $1M-$2M+.",
    whyItStillMakesMoney: [
      "Viral resurgence through TikTok and short-form edits.",
      "Emotional replay value that keeps people coming back.",
      "Playlist longevity across cinematic, melancholy, and reflective listening."
    ],
    insight: "Slow-burn songs can outperform short-lived hits over time when they keep finding new audiences and stay emotionally useful."
  },
  "viral-tiktok-songs": {
    seoTitle: "How much do viral TikTok songs make?",
    shortAnswer: "Estimated earnings: $50K-$500K+ depending on resulting streams.",
    breakdown: [
      "Streaming spikes drive the biggest immediate revenue jump.",
      "YouTube monetization can add incremental income from short-form discovery spillover.",
      "Sync and licensing opportunities often follow when a song becomes culturally visible."
    ],
    lifetimeEstimate: "Lifetime outcomes vary widely because some viral songs fade quickly while others convert into long-term catalog value.",
    whyItStillMakesMoney: [
      "Virality can push a song into mainstream playlists.",
      "Short-form loops create massive awareness in a short period.",
      "Media and brand interest can follow if the track breaks out beyond the platform."
    ],
    insight: "Virality creates short-term revenue bursts."
  },
  "youtube-music-payouts": {
    seoTitle: "How much does YouTube pay per music stream?",
    shortAnswer: "Estimated earnings: about $0.0006-$0.008 per stream.",
    breakdown: [
      "YouTube usually pays less per stream than premium audio platforms.",
      "Ad rates, viewer geography, and watch behavior all affect final payouts.",
      "Large view volume can still turn lower unit economics into meaningful revenue."
    ],
    lifetimeEstimate: "Lifetime earnings can become substantial for songs with hundreds of millions of views or repeated catalog discovery.",
    whyItStillMakesMoney: [
      "Video search behavior creates ongoing discovery long after release.",
      "Official uploads, lyric videos, and fan usage extend a song's footprint.",
      "Catalog songs can keep generating views through mood and nostalgia listening."
    ],
    insight: "YouTube pays less per stream but scales via volume."
  },
  "evergreen-songs-money": {
    seoTitle: "Why do old songs still make money decades later?",
    shortAnswer: "Because of streaming + licensing.",
    breakdown: [
      "Playlists keep older songs in daily listening circulation.",
      "Nostalgia drives repeat plays across multiple generations.",
      "Sync usage in film, TV, trailers, and social media keeps catalog tracks commercially active."
    ],
    lifetimeEstimate: "The strongest evergreen songs can earn for decades, making music one of the few creative assets with true long-tail revenue.",
    whyItStillMakesMoney: [
      "Listeners revisit familiar songs more often than trend-driven tracks.",
      "Cultural memory keeps classic songs relevant in media and conversation.",
      "Catalog assets can outlast release cycles by many years."
    ],
    insight: "Music is one of the few assets that generates income forever."
  }
};
