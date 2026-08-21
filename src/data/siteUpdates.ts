export type SiteUpdateKind = "New" | "Updated" | "Fixed" | "Release";

export type SiteUpdate = {
  date: string;
  kind: SiteUpdateKind;
  title: string;
  detail: string;
  links?: Array<{ label: string; href: string }>;
};

export const updateHighlights = [
  {
    title: "Source-backed case studies are now the editorial front door",
    detail:
      "The site now leads with reviewed articles that show public sources, analysis, and evidence limits instead of treating catalog records as finished reporting.",
    href: "/case-studies/",
    label: "Browse case studies"
  },
  {
    title: "Catalog research and published reporting are kept separate",
    detail:
      "Artist and song profiles remain useful for browsing, but pages without sufficient documented context stay out of search indexing and advertising.",
    href: "/editorial-policy/",
    label: "Read the editorial policy"
  },
  {
    title: "Reader trust information is now easier to verify",
    detail:
      "Publisher details, a responsible editor, visible source standards, and a corrections route are available from the public site.",
    href: "/about/",
    label: "About How Much Music"
  }
];

// This is a curated visitor-facing record, not a raw export of every repository commit.
export const recentSiteUpdates: SiteUpdate[] = [
  {
    date: "August 21, 2026",
    kind: "Updated",
    title: "Updates page rebuilt as a curated public log",
    detail:
      "Replaced the automated catalog activity feed with a reader-facing record of significant additions, improvements, and fixes.",
    links: [{ label: "Read updates", href: "/updates/" }]
  },
  {
    date: "August 20, 2026",
    kind: "New",
    title: "Amy Winehouse research case study published",
    detail:
      "Published a source-backed article on the public record around Back to Black, separating documented recognition from claims about royalties, ownership, or personal income that public sources cannot verify.",
    links: [{ label: "Read the case study", href: "/case-studies/amy-winehouse-back-to-black-public-record/" }]
  },
  {
    date: "August 20, 2026",
    kind: "Updated",
    title: "Research queue now requires source-led publication",
    detail:
      "The daily queue check validates research candidates and reports their status without creating catalog pages. New public articles are published only after source review.",
    links: [{ label: "Read the editorial policy", href: "/editorial-policy/" }]
  },
  {
    date: "August 19, 2026",
    kind: "Updated",
    title: "Case studies received clearer evidence boundaries",
    detail:
      "Published articles now make their source links, editorial reading, related profiles, and limits easier to identify before readers reach catalog research records.",
    links: [{ label: "Browse case studies", href: "/case-studies/" }]
  },
  {
    date: "August 18, 2026",
    kind: "Release",
    title: "Source-backed music rights case-study library launched",
    detail:
      "Added a dedicated article collection for chart, certification, award, and rights context without converting popularity into unsupported royalty totals.",
    links: [{ label: "Browse case studies", href: "/case-studies/" }]
  },
  {
    date: "August 18, 2026",
    kind: "New",
    title: "Publisher, editor, and analytics details added",
    detail:
      "The public site now identifies the publisher and responsible editor, adds an author profile and correction route, and includes Cloudflare Web Analytics.",
    links: [
      { label: "About How Much Music", href: "/about/" },
      { label: "Editor profile", href: "/author/andrei-olaru/" }
    ]
  },
  {
    date: "July 30, 2026",
    kind: "Updated",
    title: "Publication checks strengthened",
    detail:
      "The site now checks that published editorial pages have page-specific context, visible sources, stated limitations, and a clear correction route.",
    links: [{ label: "How pages are reviewed", href: "/editorial-policy/" }]
  },
  {
    date: "July 15, 2026",
    kind: "Fixed",
    title: "Catalog research separated from published reporting",
    detail:
      "Artist and song profiles remain available for browsing, while pages without sufficient editorial context stay outside search indexing and advertising.",
    links: [
      { label: "Search catalog records", href: "/search/" },
      { label: "Read the methodology", href: "/insights/methodology/" }
    ]
  },
  {
    date: "June 27, 2026",
    kind: "Updated",
    title: "Catalog coverage and editorial paths expanded",
    detail:
      "Added researched artist and song records while improving reviewed-page discovery and reader paths into the catalog."
  },
  {
    date: "June 18, 2026",
    kind: "Updated",
    title: "Catalog navigation and trust pages refined",
    detail:
      "Search, artist browsing, song browsing, reviewed pages, homepage actions, and trust-page links were reorganized to make the site easier to use.",
    links: [
      { label: "Search", href: "/search/" },
      { label: "Browse artists", href: "/artists/" },
      { label: "Browse songs", href: "/songs/" }
    ]
  },
  {
    date: "June 13, 2026",
    kind: "Updated",
    title: "Reviewed content experience expanded",
    detail:
      "Reviewed artist and song collections gained clearer source context, confidence explanations, and direct routes into the broader catalog."
  },
  {
    date: "May 26, 2026",
    kind: "Updated",
    title: "Priority song articles received visible source context",
    detail:
      "Expanded evidence sections on leading song pages so readers can distinguish public context from the limits of an estimate."
  },
  {
    date: "May 25, 2026",
    kind: "New",
    title: "Review-ready navigation and public contact details added",
    detail:
      "Added an info@howmuchmusic.com contact route, article references, and a clearer path toward reviewed content during the publisher-review work."
  },
  {
    date: "May 10, 2026",
    kind: "Updated",
    title: "Top pages, album context, and artist images improved",
    detail:
      "Improved priority content, album quality, image coverage, and the presentation of modeled ranges."
  },
  {
    date: "May 6, 2026",
    kind: "Updated",
    title: "Directory discovery and image coverage improved",
    detail:
      "Made artist browsing easier to scan, added content explainers, and expanded artist-photo coverage."
  },
  {
    date: "April 30, 2026",
    kind: "Fixed",
    title: "Header search and catalog sorting refined",
    detail:
      "Corrected header autosuggest behavior, improved browse-page filters and sorting, and added the current logo and favicon assets."
  },
  {
    date: "April 28, 2026",
    kind: "New",
    title: "Full catalog search page added",
    detail:
      "Added a dedicated search-results experience and strengthened trust framing across key pages.",
    links: [{ label: "Search artists and songs", href: "/search/" }]
  }
];

export const archivedSiteUpdates: SiteUpdate[] = [
  {
    date: "April 26, 2026",
    kind: "New",
    title: "Header autosuggest added",
    detail: "Added quick artist and song suggestions to the shared header search field."
  },
  {
    date: "April 25, 2026",
    kind: "Updated",
    title: "Artist and song page layouts standardized",
    detail: "Improved song-page presentation, optimized artist images, and made artist-page structure more consistent."
  },
  {
    date: "April 23, 2026",
    kind: "Updated",
    title: "Album pages and homepage artist-split context improved",
    detail: "Improved album metadata and strengthened the way artist-share context was presented on the homepage."
  },
  {
    date: "April 17, 2026",
    kind: "Updated",
    title: "Song pages, album coverage, and asset checks expanded",
    detail: "Added richer song-page comparison context, broader album coverage, and an asset audit for missing or stale files."
  },
  {
    date: "April 16, 2026",
    kind: "New",
    title: "First public Updates page and confidence labels added",
    detail: "Introduced the original updates route, provider artwork for songs and albums, confidence scoring, and richer discovery context."
  },
  {
    date: "April 14, 2026",
    kind: "Release",
    title: "Rankings, explainers, and song previews expanded",
    detail: "Added song preview support, ranking pages, editorial explainers, album metadata, sitemap output, and improved browse filters."
  },
  {
    date: "April 13, 2026",
    kind: "Release",
    title: "How Much Music moved to its public domain",
    detail: "Moved the site to howmuchmusic.com, added the shared footer, album pages, self-hosted artist images, and richer catalog context."
  },
  {
    date: "April 12, 2026",
    kind: "New",
    title: "Artist and song directories added",
    detail: "Added dedicated browse pages and navigation for artist and song records."
  },
  {
    date: "April 11, 2026",
    kind: "Release",
    title: "How Much Music first launched",
    detail: "Launched the Astro-based site with its initial artist and song catalog, Pages deployment, typography, artwork, credits, filters, and early editorial pages."
  }
];
