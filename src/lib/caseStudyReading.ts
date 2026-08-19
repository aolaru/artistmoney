import type { CaseStudy } from "../data/caseStudies";

export type RelatedExplainer = {
  href: string;
  label: string;
  note: string;
};

const explainersByFocus: Record<string, RelatedExplainer[]> = {
  "Seasonal recurrence": [
    {
      href: "/insights/evergreen-songs/",
      label: "Why old songs still make money",
      note: "How long-running public attention differs from a royalty statement."
    },
    {
      href: "/insights/catalog-ownership/",
      label: "What catalog ownership means",
      note: "Why demand does not identify every rights recipient."
    }
  ],
  "Long-tail catalog demand": [
    {
      href: "/insights/evergreen-songs/",
      label: "Why old songs still make money",
      note: "A framework for reading long-running catalog attention."
    },
    {
      href: "/insights/streaming-payouts/",
      label: "How streaming payouts work",
      note: "Why listening activity is not a universal payout rate."
    }
  ],
  "Catalog context": [
    {
      href: "/insights/evergreen-songs/",
      label: "Why old songs still make money",
      note: "How a catalog can retain public attention across eras."
    },
    {
      href: "/insights/catalog-ownership/",
      label: "What catalog ownership means",
      note: "Why recognition and rights participation are separate questions."
    }
  ],
  "Catalog discovery": [
    {
      href: "/insights/evergreen-songs/",
      label: "Why old songs still make money",
      note: "How to interpret ongoing discovery without inventing an income figure."
    },
    {
      href: "/insights/streaming-payouts/",
      label: "How streaming payouts work",
      note: "Why platform activity does not disclose a recipient's payment."
    }
  ],
  "Demand versus rights splits": [
    {
      href: "/insights/catalog-ownership/",
      label: "What catalog ownership means",
      note: "The difference between a recording, a composition, and their rights holders."
    },
    {
      href: "/insights/artist-share-vs-label-share/",
      label: "Artist share vs label share",
      note: "Why public popularity does not identify a single payee."
    }
  ],
  "Recording and composition": [
    {
      href: "/insights/catalog-ownership/",
      label: "What catalog ownership means",
      note: "A plain-language guide to separate music rights layers."
    },
    {
      href: "/insights/artist-share-vs-label-share/",
      label: "Artist share vs label share",
      note: "Why a single public-performance number cannot identify every recipient."
    }
  ],
  "Film placement and songwriting": [
    {
      href: "/insights/sync-licensing/",
      label: "Why sync licensing matters",
      note: "What an audiovisual use can involve without assuming a fee."
    },
    {
      href: "/insights/catalog-ownership/",
      label: "What catalog ownership means",
      note: "How distinct rights questions can exist around one song."
    }
  ],
  "Soundtrack context": [
    {
      href: "/insights/sync-licensing/",
      label: "Why sync licensing matters",
      note: "How to discuss a film connection without inventing a license amount."
    },
    {
      href: "/insights/catalog-ownership/",
      label: "What catalog ownership means",
      note: "Why soundtrack visibility is not a complete rights record."
    }
  ],
  "Version identity": [
    {
      href: "/insights/catalog-ownership/",
      label: "What catalog ownership means",
      note: "Why a research claim must identify the relevant work and right."
    },
    {
      href: "/insights/methodology/",
      label: "How earnings are modeled",
      note: "The site-wide evidence and uncertainty framework."
    }
  ],
  "Public earnings question": [
    {
      href: "/insights/methodology/",
      label: "How earnings are modeled",
      note: "What public evidence can support before a financial claim is made."
    },
    {
      href: "/insights/catalog-ownership/",
      label: "What catalog ownership means",
      note: "Why public demand is not the same as a recipient's income."
    }
  ],
  "Artist earnings question": [
    {
      href: "/insights/methodology/",
      label: "How earnings are modeled",
      note: "The records needed before a personal-income claim can be verified."
    },
    {
      href: "/insights/artist-share-vs-label-share/",
      label: "Artist share vs label share",
      note: "Why chart scale does not show contractual participation."
    }
  ]
};

const fallbackExplainers: RelatedExplainer[] = [
  {
    href: "/insights/methodology/",
    label: "How earnings are modeled",
    note: "The site-wide evidence and uncertainty framework."
  },
  {
    href: "/insights/catalog-ownership/",
    label: "What catalog ownership means",
    note: "Why public performance and rights participation are different questions."
  }
];

export function getCaseStudyExplainers(caseStudy: CaseStudy) {
  return explainersByFocus[caseStudy.focus] ?? fallbackExplainers;
}
