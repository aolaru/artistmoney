export type ArtistArticle = {
  seoTitle: string;
  shortAnswer: string;
  sources: string[];
  insight: string;
};

export const artistArticles: Record<string, ArtistArticle> = {
  "mobb-deep": {
    seoTitle: "Does Mobb Deep still make money in 2026?",
    shortAnswer: "Yes — estimated $300K-$1M/year.",
    sources: [
      "Streaming catalog demand keeps classic tracks active.",
      "Publishing royalties continue from songwriting rights.",
      "Sync placements, including long-tail association with 8 Mile-era exposure, support catalog value."
    ],
    insight: "Catalog ownership = long-term passive income."
  },
  "aphex-twin": {
    seoTitle: "Does Aphex Twin still earn money from old tracks?",
    shortAnswer: "Yes — approximately $1M-$5M/year.",
    sources: [
      "Streaming from a niche but highly loyal audience.",
      "Licensing value tied to distinctive electronic catalog use.",
      "Vinyl demand and reissues keep physical revenue active."
    ],
    insight: "Cult artists monetize depth, not mainstream volume."
  },
  "the-weeknd": {
    seoTitle: "How much does The Weeknd make from streaming per year?",
    shortAnswer: "Estimated $20M-$70M/year.",
    sources: [
      "Billions of yearly streams across a global catalog.",
      "Placement across major international playlists.",
      "Sync and brand deals expand earnings beyond pure streaming."
    ],
    insight: "Scale + global reach = exponential income."
  },
  "daft-punk": {
    seoTitle: "Do Daft Punk still make money after retiring?",
    shortAnswer: "Yes — estimated $5M-$15M/year.",
    sources: [
      "Streaming remains strong across a globally recognizable catalog.",
      "Licensing in films, ads, and branded media continues to add value.",
      "Catalog sales and re-engagement keep revenue flowing after retirement."
    ],
    insight: "Retired artists can still earn massive passive income."
  },
  "dr-dre": {
    seoTitle: "Does Dr. Dre still make money from his catalog?",
    shortAnswer: "Yes — estimated $5M-$20M/year.",
    sources: [
      "Still D.R.E. and The Next Episode continue to stream at evergreen rap-catalog scale.",
      "Producer and songwriter participation can materially improve artist-side economics.",
      "Catalog recognition and licensing demand keep the Dre-era sound commercially relevant."
    ],
    insight: "Producer ownership and writing participation can make classic catalogs far more valuable than simple performer royalties suggest."
  },
  enigma: {
    seoTitle: "Does Enigma still make money from old tracks?",
    shortAnswer: "Yes — estimated $500K-$2M/year.",
    sources: [
      "Global streaming continues to support the project's best-known crossover singles.",
      "Mood, ambient, and nostalgia playlist placement keeps long-tail listening active.",
      "Creator-led songwriting and production participation can improve the retained share versus performer-only catalogs."
    ],
    insight: "Atmospheric crossover catalogs can keep earning for decades when they remain distinctive enough for both playlists and sync-style use."
  },
  "depeche-mode": {
    seoTitle: "Does Depeche Mode still make money from its catalog?",
    shortAnswer: "Yes — estimated $2M-$6M/year.",
    sources: [
      "Enjoy the Silence and Personal Jesus continue to stream at global legacy-catalog scale.",
      "The catalog remains sync-friendly because the songs are both recognizable and tonally distinctive.",
      "Songwriter participation materially improves the retained value of the band's best-known recordings."
    ],
    insight: "Catalogs with distinctive sound design and strong hooks age unusually well because they remain easy to place, remember, and replay."
  },
  "tears-for-fears": {
    seoTitle: "Do Tears for Fears still make money from old songs?",
    shortAnswer: "Yes — estimated $1M-$4M/year.",
    sources: [
      "Everybody Wants to Rule the World remains one of the strongest evergreen songs of the 1980s on streaming platforms.",
      "Shout and other crossover hits continue to perform through nostalgia playlists and media reuse.",
      "Writer-side participation strengthens artist economics even when master ownership remains label-heavy."
    ],
    insight: "Big melodic pop songs can keep earning for decades when they remain broad enough for playlists and specific enough to stay memorable."
  }
};
