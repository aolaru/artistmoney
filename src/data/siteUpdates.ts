export type SiteUpdateKind = "New" | "Updated" | "Fixed";

export type SiteUpdate = {
  date: string;
  kind: SiteUpdateKind;
  title: string;
  detail: string;
  links?: Array<{ label: string; href: string }>;
};

// This is a curated visitor-facing record, not a raw export of every repository commit.
export const recentSiteUpdates: SiteUpdate[] = [
  {
    date: "August 20, 2026",
    kind: "New",
    title: "Amy Winehouse research case study",
    detail:
      "Published a source-backed article on the public record around Back to Black. It separates documented recognition from claims that public sources cannot verify, including royalties, ownership, and personal income.",
    links: [{ label: "Read the case study", href: "/case-studies/amy-winehouse-back-to-black-public-record/" }]
  },
  {
    date: "August 20, 2026",
    kind: "Updated",
    title: "Research queue now requires source-led publication",
    detail:
      "The daily queue check now validates research candidates and reports their status without creating catalog pages. New public articles are published only after source review.",
    links: [{ label: "Read the editorial policy", href: "/editorial-policy/" }]
  },
  {
    date: "August 19, 2026",
    kind: "Updated",
    title: "Case studies now show clearer evidence boundaries",
    detail:
      "Published articles now make their source links, editorial reading, and limits easier to identify before readers reach catalog research profiles.",
    links: [{ label: "Browse case studies", href: "/case-studies/" }]
  },
  {
    date: "August 18, 2026",
    kind: "New",
    title: "Publisher and editor details added",
    detail:
      "The About and editorial pages now name the publisher, responsible editor, correction path, and the distinction between source-backed case studies and browseable catalog records.",
    links: [
      { label: "About How Much Music", href: "/about/" },
      { label: "Editorial policy", href: "/editorial-policy/" }
    ]
  },
  {
    date: "August 18, 2026",
    kind: "New",
    title: "Music rights case-study library launched",
    detail:
      "Added source-backed articles that examine public chart, certification, award, and rights records without converting popularity into unsupported royalty totals.",
    links: [{ label: "Browse case studies", href: "/case-studies/" }]
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
    date: "June 18, 2026",
    kind: "Updated",
    title: "Catalog discovery and navigation simplified",
    detail:
      "Search, artist browsing, song browsing, reviewed pages, and methodology links were reorganized to make the catalog easier to explore.",
    links: [
      { label: "Search", href: "/search/" },
      { label: "Browse artists", href: "/artists/" },
      { label: "Browse songs", href: "/songs/" }
    ]
  }
];

export const archivedSiteUpdates: SiteUpdate[] = [
  {
    date: "June 2026",
    kind: "Updated",
    title: "Reviewed-page experience expanded",
    detail:
      "Reviewed artist and song collections added clearer source context, confidence explanations, and direct routes into the catalog."
  },
  {
    date: "June 2026",
    kind: "New",
    title: "Trust and reader-information pages added",
    detail:
      "Added About, Contact, Privacy, Credits, and Editorial Policy pages, including a reader route for corrections and source suggestions."
  },
  {
    date: "June 2026",
    kind: "Updated",
    title: "Homepage and catalog pages refined",
    detail:
      "Simplified first-step actions, improved catalog access, and clarified that displayed figures are editorial models rather than private royalty statements."
  }
];
