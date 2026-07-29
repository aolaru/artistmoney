import type { EvidenceRole } from "../lib/publication";

export type EditorialSource = {
  label: string;
  url: string;
  note: string;
  role: EvidenceRole;
};

export const editorialSources = {
  methodology: [
    {
      label: "Spotify Loud & Clear",
      url: "https://loudandclear.byspotify.com/",
      note: "Explains Spotify's recorded-music payout framework and why listener activity is not a universal artist payout rate.",
      role: "primary-record"
    },
    {
      label: "The Mechanical Licensing Collective",
      url: "https://www.themlc.com/",
      note: "Explains the U.S. blanket mechanical licensing system and the role of musical-work royalties.",
      role: "rights-context"
    },
    {
      label: "U.S. Copyright Office: Music Modernization Act",
      url: "https://www.copyright.gov/music-modernization/",
      note: "Provides statutory context for the U.S. mechanical licensing system; it does not disclose any artist's earnings.",
      role: "primary-record"
    }
  ],
  ownership: [
    {
      label: "U.S. Copyright Office: Sound recordings and musical compositions",
      url: "https://www.copyright.gov/circs/circ56a.pdf",
      note: "Explains that a sound recording and the musical composition embodied in it are separate copyrighted works.",
      role: "primary-record"
    },
    {
      label: "The Mechanical Licensing Collective",
      url: "https://www.themlc.com/",
      note: "Provides rights-administration context for musical works in the United States.",
      role: "rights-context"
    },
    {
      label: "U.S. Copyright Office: Music Modernization Act",
      url: "https://www.copyright.gov/music-modernization/",
      note: "Provides public context for modern U.S. music-licensing administration.",
      role: "primary-record"
    }
  ],
  streaming: [
    {
      label: "Spotify Loud & Clear",
      url: "https://loudandclear.byspotify.com/",
      note: "Explains Spotify's payment framework and the role of rights holders in the payment chain.",
      role: "primary-record"
    },
    {
      label: "The Mechanical Licensing Collective",
      url: "https://www.themlc.com/",
      note: "Explains the separate mechanical-rights side of music payments in the United States.",
      role: "rights-context"
    },
    {
      label: "U.S. Copyright Office: Music Modernization Act",
      url: "https://www.copyright.gov/music-modernization/",
      note: "Provides public policy context for digital mechanical licensing.",
      role: "primary-record"
    }
  ],
  evergreen: [
    {
      label: "Official Charts: Mr Brightside chart history",
      url: "https://www.officialcharts.com/songs/killers-mr-brightside/",
      note: "A concrete example of a catalog recording with exceptionally durable public chart activity. It is not evidence of royalty income.",
      role: "independent-reporting"
    },
    {
      label: "RIAA: All I Want for Christmas Is You makes history",
      url: "https://www.riaa.com/mariah-careys-all-i-want-for-christmas-is-you-makes-history/",
      note: "A public example of recurring seasonal recording demand and certification context, not a payout disclosure.",
      role: "primary-record"
    },
    {
      label: "U.S. Copyright Office: Sound recordings and musical compositions",
      url: "https://www.copyright.gov/circs/circ56a.pdf",
      note: "Explains why long-term value can involve more than one rightsholder lane.",
      role: "primary-record"
    }
  ],
  sync: [
    {
      label: "U.S. Copyright Office: Sound recordings and musical compositions",
      url: "https://www.copyright.gov/circs/circ56a.pdf",
      note: "Explains the separate musical-work and sound-recording rights that matter when music is licensed for audiovisual use.",
      role: "primary-record"
    },
    {
      label: "ASCAP Music Licensing",
      url: "https://www.ascap.com/help",
      note: "Provides public licensing and performance-rights background. It does not establish a fee for a particular song.",
      role: "rights-context"
    },
    {
      label: "The Mechanical Licensing Collective",
      url: "https://www.themlc.com/",
      note: "Provides public rights-administration context for musical works.",
      role: "rights-context"
    }
  ]
} satisfies Record<string, EditorialSource[]>;
