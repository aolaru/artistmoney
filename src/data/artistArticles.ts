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
  }
};
