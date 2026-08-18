import type { EditorialSource } from "./editorialSources";

export type CaseStudy = {
  slug: string;
  title: string;
  artist: string;
  focus: string;
  summary: string;
  documentedRecord: string[];
  editorialReading: string[];
  rightsQuestion: string;
  limitations: string[];
  reviewedOn: string;
  sources: EditorialSource[];
};

const copyrightContext: EditorialSource = {
  label: "U.S. Copyright Office: Sound recordings and musical compositions",
  url: "https://www.copyright.gov/circs/circ56a.pdf",
  note: "Explains that a sound recording and the musical composition embodied in it are separate copyrighted works. This is general U.S. rights context, not a record of this song's agreements.",
  role: "rights-context"
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "all-i-want-for-christmas-is-you-seasonal-demand",
    title: "All I Want for Christmas Is You: seasonal demand is visible; royalties are not",
    artist: "Mariah Carey",
    focus: "Seasonal recurrence",
    summary:
      "This case study separates a recurring public demand signal from the private rights and contract information needed to calculate anyone's annual income.",
    documentedRecord: [
      "Official Charts records the song reaching number one in the UK in 2020, 26 years after its first release.",
      "The RIAA announced in 2021 that the recording had received Diamond certification in the United States."
    ],
    editorialReading: [
      "A seasonal song can return to public attention on a predictable calendar without that pattern disclosing a stable annual payout. The useful public evidence is recurrence, not a claimed royalty total.",
      "This is a strong example of why a chart position, certification, and listening activity should be treated as different signals. They show demand in different ways, while the split between writers, publishers, performers, labels, and other rightsholders remains private."
    ],
    rightsQuestion:
      "Which rights are involved when one recording returns each holiday season, and which of those rights are actually controlled by the artist, writers, publishers, or record company?",
    limitations: [
      "The cited public records do not disclose streaming revenue, publishing income, label terms, or recoupment.",
      "This article does not infer Mariah Carey's personal share from the song's chart or certification history.",
      "Seasonal attention can be measured publicly; the resulting payments depend on territory, service, rights ownership, and contracts."
    ],
    reviewedOn: "August 18, 2026",
    sources: [
      {
        label: "Official Charts: All I Want for Christmas Is You",
        url: "https://www.officialcharts.com/songs/mariah-carey-all-i-want-for-christmas-is-you/",
        note: "Documents the UK chart history, including the song's first number-one run in 2020.",
        role: "independent-reporting"
      },
      {
        label: "RIAA: All I Want for Christmas Is You makes history",
        url: "https://www.riaa.com/mariah-careys-all-i-want-for-christmas-is-you-makes-history/",
        note: "Documents the RIAA Diamond certification announcement and the song's credited co-writers in the announcement.",
        role: "primary-record"
      },
      copyrightContext
    ]
  },
  {
    slug: "blinding-lights-chart-longevity",
    title: "Blinding Lights: chart longevity is not a royalty statement",
    artist: "The Weeknd",
    focus: "Chart longevity",
    summary:
      "The record for Blinding Lights is unusually strong, but a public chart achievement cannot reveal the distribution of money behind the recording and composition.",
    documentedRecord: [
      "Billboard Canada reported in 2021 that Blinding Lights had been named the top Billboard Hot 100 song of all time under Billboard's then-current methodology.",
      "Official Charts maintains a public UK chart history for the recording."
    ],
    editorialReading: [
      "A long chart life is useful evidence of sustained audience demand. It is not a conversion table from popularity to artist income.",
      "The central reporting question is not simply whether a song was a large hit. It is whether a source identifies the relevant right, territory, period, and recipient. Public chart histories generally do not answer those questions."
    ],
    rightsQuestion:
      "How should a researcher describe a globally successful recording when the public record shows demand but not the master, publishing, distributor, and performer splits?",
    limitations: [
      "No source here provides a royalty statement, a label agreement, or a publisher agreement.",
      "The Billboard ranking is a chart-methodology result, not a financial valuation.",
      "The case study does not estimate The Weeknd's personal income from the recording."
    ],
    reviewedOn: "August 18, 2026",
    sources: [
      {
        label: "Billboard Canada: Blinding Lights and Billboard's all-time Hot 100 chart",
        url: "https://ca.billboard.com/music/chart-beat/the-weeknds-blinding-lights-is-no-1-on-billboards-top-hot-100-songs-of-the-21st-century-chart",
        note: "Reports Billboard's 2021 all-time Hot 100 ranking for the song.",
        role: "independent-reporting"
      },
      {
        label: "Official Charts: Blinding Lights",
        url: "https://www.officialcharts.com/songs/weeknd-blinding-lights/",
        note: "Provides the public UK chart history for the recording.",
        role: "primary-record"
      },
      copyrightContext
    ]
  },
  {
    slug: "mr-brightside-long-tail",
    title: "Mr Brightside: a long-tail hit is a demand story, not an ownership map",
    artist: "The Killers",
    focus: "Long-tail catalog demand",
    summary:
      "Mr Brightside shows how a song can grow after its initial release cycle. It does not show which people or companies receive the resulting income.",
    documentedRecord: [
      "Official Charts reports that the recording first entered the UK singles chart in 2004 and later became its longest-running hit by weeks on the Official Singles Chart.",
      "Official Charts also reported in 2024 that the song had become the UK's biggest single never to reach number one under its combined sales-and-streams measure."
    ],
    editorialReading: [
      "The initial peak alone would have been a weak description of this song's public life. The longer record shows why a research page needs a time horizon instead of treating release-week performance as the whole story.",
      "Long-tail demand may involve repeat listening, format changes, and continued cultural presence. Those are plausible topics for research, but they still do not establish private ownership shares or take-home income."
    ],
    rightsQuestion:
      "What can public evidence establish about a recording that stays active across formats, and what remains unknowable without its rights and contract history?",
    limitations: [
      "The public chart record does not identify the current owners of the recording or composition.",
      "Combined sales and streams are not the same as payments to performers or writers.",
      "No personal-income estimate is made in this case study."
    ],
    reviewedOn: "August 18, 2026",
    sources: [
      {
        label: "Official Charts: Mr Brightside",
        url: "https://www.officialcharts.com/songs/killers-mr-brightside/",
        note: "Documents the recording's UK chart history and the long-run chart context described in this article.",
        role: "primary-record"
      },
      {
        label: "Official Charts: Mr Brightside overtakes Wonderwall",
        url: "https://www.officialcharts.com/chart-news/killers-mr-brightside-UK-biggest-song-not-number-1/",
        note: "Reports the 2024 combined sales-and-streams milestone and provides release-cycle context.",
        role: "independent-reporting"
      },
      copyrightContext
    ]
  },
  {
    slug: "bohemian-rhapsody-reissues",
    title: "Bohemian Rhapsody: a catalog life can contain more than one release moment",
    artist: "Queen",
    focus: "Reissues and renewed attention",
    summary:
      "The public record shows Bohemian Rhapsody returning to the top of the UK chart in different eras. That history is evidence of renewed demand, not a disclosure of its rights income.",
    documentedRecord: [
      "Official Charts records the song reaching number one in the UK in 1975 and again in 1991.",
      "Official Charts later placed the recording second in its list of the UK's most-streamed songs from the 1970s, 1980s, and 1990s."
    ],
    editorialReading: [
      "A catalog title can have several public lives: original release, later reissue, and later streaming-era discovery. A serious article should identify which period its evidence concerns rather than flattening all activity into one lifetime number.",
      "The visible chart record supports a discussion of durability. It does not establish how revenue was divided between the sound recording and the composition, or among the people and companies connected to either."
    ],
    rightsQuestion:
      "When a legacy recording returns in a later era, what public evidence distinguishes renewed audience demand from an actual financial claim?",
    limitations: [
      "Chart history does not disclose the commercial terms of any reissue, license, or later use.",
      "This article does not attribute income to any individual band member, estate, writer, publisher, or label.",
      "A streaming ranking is not a substitute for a royalty statement."
    ],
    reviewedOn: "August 18, 2026",
    sources: [
      {
        label: "Official Charts: Bohemian Rhapsody",
        url: "https://www.officialcharts.com/songs/queen-bohemian-rhapsody/",
        note: "Documents the song's UK chart history, including its number-one runs.",
        role: "primary-record"
      },
      {
        label: "Official Charts: most-streamed songs of the 1970s, 1980s, and 1990s",
        url: "https://www.officialcharts.com/chart-news/the-uks-official-top-300-most-streamed-songs-of-the-70s-80s-and-90s-revealed__37690/",
        note: "Provides the later streaming-era ranking referenced in this article.",
        role: "independent-reporting"
      },
      copyrightContext
    ]
  },
  {
    slug: "shape-of-you-demand-and-splits",
    title: "Shape of You: a major hit still has separate rights paths",
    artist: "Ed Sheeran",
    focus: "Demand versus rights splits",
    summary:
      "Shape of You has a substantial public chart record. The important rights lesson is that the recording and the underlying musical work are distinct even when listeners experience one song.",
    documentedRecord: [
      "Official Charts records Shape of You spending 14 weeks at number one on the UK singles chart.",
      "Official Charts describes the song as Ed Sheeran's biggest on the Official UK Chart."
    ],
    editorialReading: [
      "A song can dominate public charts while the money associated with its recording and composition travels through separate rights paths. That is why a headline about popularity should never be written as if it identifies one recipient.",
      "For this case, the documented fact is sustained chart demand. The missing facts are the contractual splits, territorial mix, and accounting arrangements that would be required for a financial conclusion."
    ],
    rightsQuestion:
      "How can a public article explain a song's scale without implying that its performer receives all of the income connected to the recording and composition?",
    limitations: [
      "The chart record does not disclose writer shares, publisher shares, master ownership, or label terms.",
      "No earnings number is inferred from weeks at number one or from chart rank.",
      "The U.S. Copyright Office source explains a legal distinction; it does not identify this song's specific agreements."
    ],
    reviewedOn: "August 18, 2026",
    sources: [
      {
        label: "Official Charts: Shape of You",
        url: "https://www.officialcharts.com/songs/ed-sheeran-shape-of-you/",
        note: "Provides the public UK chart record, including the number-one run.",
        role: "primary-record"
      },
      {
        label: "Official Charts: Ed Sheeran's biggest songs",
        url: "https://www.officialcharts.com/chart-news/ed-sheerans-official-top-20-biggest-songs-on-the-official-uk-chart__33491/",
        note: "Provides the Official Charts ranking context for Shape of You within Ed Sheeran's catalog.",
        role: "independent-reporting"
      },
      copyrightContext
    ]
  },
  {
    slug: "lose-yourself-film-and-song-rights",
    title: "Lose Yourself: a film song highlights separate creative credits and rights",
    artist: "Eminem",
    focus: "Film placement and songwriting",
    summary:
      "The Academy's Original Song record makes Lose Yourself a useful starting point for explaining why music, lyrics, recording, and film use should not be collapsed into one revenue claim.",
    documentedRecord: [
      "The Academy of Motion Picture Arts and Sciences records Lose Yourself as the 2003 Original Song winner from 8 Mile, with music credited to Eminem, Jeff Bass, and Luis Resto and lyrics credited to Eminem.",
      "Official Charts maintains a public UK chart history for the recording."
    ],
    editorialReading: [
      "The Academy credit is a public fact about the song's authorship in that award context. It is not a complete map of music publishing or sound-recording ownership.",
      "A song attached to a film may have multiple relevant rights questions: the composition, the recording, the audiovisual use, and the contracts between the parties. Public credits help identify the work; they do not reveal every payment path."
    ],
    rightsQuestion:
      "What does a public award credit establish about a song, and what additional records would be needed before making a claim about ownership or income?",
    limitations: [
      "The Academy's credit record does not disclose publishing splits, master ownership, or film-license terms.",
      "The chart record does not reveal payments from streaming, sales, synchronization, or performance rights.",
      "This article makes no estimate of income for any credited writer or performer."
    ],
    reviewedOn: "August 18, 2026",
    sources: [
      {
        label: "Academy Awards: 75th Oscars Original Song record",
        url: "https://www.oscars.org/oscars/ceremonies/2003/0--9",
        note: "Documents the Original Song award and the music and lyric credits for Lose Yourself.",
        role: "primary-record"
      },
      {
        label: "Official Charts: Lose Yourself",
        url: "https://www.officialcharts.com/songs/eminem-lose-yourself/",
        note: "Provides the public UK chart history for the recording.",
        role: "independent-reporting"
      },
      copyrightContext
    ]
  },
  {
    slug: "happy-soundtrack-context",
    title: "Happy: soundtrack visibility does not disclose a license fee",
    artist: "Pharrell Williams",
    focus: "Soundtrack context",
    summary:
      "Happy is a useful example of a song with both chart activity and film context. Those public facts should not be converted into an invented synchronization or royalty figure.",
    documentedRecord: [
      "The Academy recorded Happy, from Despicable Me 2, as a 2013 Original Song nominee with music and lyric by Pharrell Williams.",
      "Official Charts identifies Happy as the UK's biggest song of 2014 and notes that it reached number one on three separate occasions."
    ],
    editorialReading: [
      "A soundtrack association is meaningful context, but it is not proof of the terms on which a song was used. An article should distinguish the publicly documented placement from any private agreement behind it.",
      "The song's chart record and its film connection show two different kinds of exposure. Neither one, alone or combined, supplies a reliable number for the people who participated in the recording or composition."
    ],
    rightsQuestion:
      "How should a reader think about a song that is both a chart hit and connected to a film without assuming that the public record reveals a synchronization fee?",
    limitations: [
      "The Academy record identifies an award nomination, not a film-license amount.",
      "Chart performance does not disclose songwriter, publisher, label, or performer payments.",
      "No income figure is assigned to Pharrell Williams or any other party."
    ],
    reviewedOn: "August 18, 2026",
    sources: [
      {
        label: "Academy Awards: Pharrell Williams to perform Happy",
        url: "https://www.oscars.org/news/pharrell-williams-perform-oscarsr",
        note: "Documents that Happy was written and produced for Despicable Me 2 and was nominated for Original Song.",
        role: "primary-record"
      },
      {
        label: "Official Charts: biggest songs of every year",
        url: "https://www.officialcharts.com/galleries/biggest-songs-of-every-year/",
        note: "Provides the 2014 UK chart context and the three separate number-one runs noted here.",
        role: "independent-reporting"
      },
      copyrightContext
    ]
  },
  {
    slug: "dancing-queen-catalog-context",
    title: "Dancing Queen: catalog recognition is not the same as a personal payout",
    artist: "ABBA",
    focus: "Catalog context",
    summary:
      "Dancing Queen has an extensive public chart record. The case is a reminder that a song's cultural reach and the private distribution of its money are different questions.",
    documentedRecord: [
      "Official Charts records Dancing Queen as a UK number-one single in 1976, with six weeks at number one.",
      "Official Charts identifies it among ABBA's UK number-one singles and documents later streaming-chart activity for the recording."
    ],
    editorialReading: [
      "A legacy song can remain visible in public charts long after its original run. That evidence supports a conversation about continued demand, not a conclusion about who holds the relevant master or publishing rights today.",
      "The responsible editorial move is to identify the exact record being discussed and then state the boundary: visibility and chart history do not provide a payment ledger."
    ],
    rightsQuestion:
      "What does a multi-era public chart history tell us about a catalog title, and what does it leave unanswered about ownership and participation?",
    limitations: [
      "The cited chart sources do not disclose current ownership or contractual shares.",
      "Later streaming-chart appearances do not establish an annual revenue amount.",
      "This article does not make an individual or group earnings claim."
    ],
    reviewedOn: "August 18, 2026",
    sources: [
      {
        label: "Official Charts: ABBA artist history",
        url: "https://www.officialcharts.com/artist/8604/abba/",
        note: "Documents ABBA's UK number-one singles, including Dancing Queen.",
        role: "primary-record"
      },
      {
        label: "Official Charts: Dancing Queen",
        url: "https://www.officialcharts.com/songs/abba-dancing-queen/",
        note: "Provides the public chart history and later streaming-chart entries for the recording.",
        role: "independent-reporting"
      },
      copyrightContext
    ]
  },
  {
    slug: "smells-like-teen-spirit-catalog-discovery",
    title: "Smells Like Teen Spirit: later discovery is not a universal payout rate",
    artist: "Nirvana",
    focus: "Catalog discovery",
    summary:
      "Public streaming-era rankings can show that an older recording remains discoverable. They cannot reveal a universal per-stream rate or the recipient of each rights payment.",
    documentedRecord: [
      "Official Charts lists Smells Like Teen Spirit as a number-seven UK hit in 1991.",
      "Official Charts placed the recording at number 14 in its 2022 list of the UK's most-streamed songs from the 1970s, 1980s, and 1990s."
    ],
    editorialReading: [
      "The two public records describe different moments: the original chart run and a later streaming-era ranking. Together they show continuing discoverability, not a single financial outcome that applies across eras.",
      "A reader should resist turning a streaming-related ranking into a payout claim. Services, territories, rights holders, and private agreements all affect what happens after listening activity is counted."
    ],
    rightsQuestion:
      "How can public evidence show that a legacy song remains discoverable without pretending that every stream produces the same payment or reaches the same person?",
    limitations: [
      "The cited list is a UK streaming ranking, not a worldwide royalty report.",
      "No source here discloses the recording's master or publishing agreements.",
      "This case study does not calculate a per-stream or annual payout."
    ],
    reviewedOn: "August 18, 2026",
    sources: [
      {
        label: "Official Charts: song-title history",
        url: "https://www.officialcharts.com/chart-news/why-are-some-songs-titles-not-part-of-the-lyrics__23584/",
        note: "Documents the 1991 UK chart peak used for this case study.",
        role: "primary-record"
      },
      {
        label: "Official Charts: most-streamed songs of the 1970s, 1980s, and 1990s",
        url: "https://www.officialcharts.com/chart-news/the-uks-official-top-300-most-streamed-songs-of-the-70s-80s-and-90s-revealed__37690/",
        note: "Provides the later streaming-era ranking referenced in this article.",
        role: "independent-reporting"
      },
      copyrightContext
    ]
  },
  {
    slug: "every-breath-you-take-rights-layers",
    title: "Every Breath You Take: one familiar song can involve separate rights layers",
    artist: "The Police",
    focus: "Recording and composition",
    summary:
      "This case uses a well-known legacy recording to make one precise point: the sound recording and the musical composition are distinct works, so popularity alone cannot identify a single payee.",
    documentedRecord: [
      "Official Charts maintains a public UK chart history for Every Breath You Take.",
      "The U.S. Copyright Office explains that sound recordings and the musical compositions embodied in them are separate copyrighted works."
    ],
    editorialReading: [
      "Listeners generally encounter one song. Rights systems may treat the recording and the underlying composition separately. That distinction is more useful than an unsupported claim that one public performance figure equals an artist's income.",
      "The correct conclusion from a public chart record is limited: the recording reached listeners in a measurable market. It cannot identify every writer, publisher, label, performer, successor, or contractual recipient."
    ],
    rightsQuestion:
      "Why should research separate the recording from the composition before discussing who may participate in music income?",
    limitations: [
      "The public chart page is not a rights database or a royalty statement.",
      "The Copyright Office guidance is general legal context, not a title-specific ownership record.",
      "This article does not assign earnings to any member of The Police or another rightsholder."
    ],
    reviewedOn: "August 18, 2026",
    sources: [
      {
        label: "Official Charts: Every Breath You Take",
        url: "https://www.officialcharts.com/songs/police-every-breath-you-take/",
        note: "Provides the public UK chart history for the recording.",
        role: "primary-record"
      },
      {
        label: "Official Charts: The Police artist history",
        url: "https://www.officialcharts.com/artist/17182/police/",
        note: "Provides catalog-level chart context for The Police in the UK.",
        role: "independent-reporting"
      },
      copyrightContext
    ]
  },
  {
    slug: "shake-it-off-version-identity",
    title: "Shake It Off: identify the version before making a rights claim",
    artist: "Taylor Swift",
    focus: "Version identity",
    summary:
      "A song title can exist in more than one recorded form over time. This case explains why a research page must identify the specific recording before it can responsibly discuss any rights context.",
    documentedRecord: [
      "Official Charts records Shake It Off entering the UK singles chart in 2014 and peaking at number three.",
      "The U.S. Copyright Office explains that the musical composition and a sound recording are separate copyrighted works."
    ],
    editorialReading: [
      "A title is not always enough to identify the exact recording a listener encountered. A researcher should establish the version, release context, and source record before attempting to discuss any right connected to it.",
      "This is especially important where later recordings, reissues, live versions, or edits exist. The public chart record can identify a release-era result, but it is not a substitute for a chain-of-title or contract review."
    ],
    rightsQuestion:
      "What must be identified about a recording before a page can make a careful statement about the rights connected to it?",
    limitations: [
      "The cited chart record does not establish the ownership of any version of the song.",
      "No claim is made about master ownership, re-recording terms, or artist income.",
      "The Copyright Office source provides general context rather than title-specific legal advice."
    ],
    reviewedOn: "August 18, 2026",
    sources: [
      {
        label: "Official Charts: Shake It Off",
        url: "https://www.officialcharts.com/songs/taylor-swift-shake-it-off/",
        note: "Provides the public UK chart history and 2014 release-era context for the recording.",
        role: "primary-record"
      },
      {
        label: "Official Charts: Taylor Swift artist history",
        url: "https://www.officialcharts.com/artist/5387/taylor-swift/",
        note: "Provides catalog-level UK chart context for Taylor Swift.",
        role: "independent-reporting"
      },
      copyrightContext
    ]
  }
];

export const caseStudyBySlug = new Map(caseStudies.map((caseStudy) => [caseStudy.slug, caseStudy]));
