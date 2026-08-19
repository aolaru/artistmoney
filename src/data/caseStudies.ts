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
  questionAnswer?: string;
  analysisSections?: Array<{
    title: string;
    paragraphs: string[];
  }>;
  limitations: string[];
  reviewedOn: string;
  sources: EditorialSource[];
  documentedSourceIndexes?: number[];
  relatedProfiles?: Array<{
    type: "artist" | "song";
    slug: string;
    label: string;
  }>;
  relatedCaseStudies?: Array<{
    slug: string;
    note: string;
  }>;
};

export type CaseStudyPublicationHistory = {
  publishedOn: string;
  lastReviewedOn: string;
};

const copyrightContext = {
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
    questionAnswer:
      "The public record supports a conclusion about recurring chart attention and certification. It does not identify the private agreements or accounting needed to verify what any participant received.",
    analysisSections: [
      {
        title: "What the seasonal record establishes",
        paragraphs: [
          "The Official Charts and RIAA records document two different forms of public recognition: a UK number-one run and a U.S. certification announcement. Together, they support the narrow claim that the recording has returned to public prominence and reached a documented certification milestone.",
          "Neither record is an annual ledger. They do not show how listening, sales, publishing, or other uses were divided among the people and companies connected to the recording and composition."
        ]
      },
      {
        title: "Why a seasonal pattern is not an income figure",
        paragraphs: [
          "A recurring calendar pattern is useful evidence of repeat attention, but each period can contain a different mix of territories, services, uses, and rights participants. That prevents a chart pattern from serving as a reliable proxy for a personal payment.",
          "The article therefore describes the documented recurrence and leaves any individual royalty total unanswered unless a source discloses the relevant financial record."
        ]
      }
    ],
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
    ],
    relatedProfiles: [
      { type: "artist", slug: "mariah-carey", label: "Mariah Carey catalog profile" },
      { type: "song", slug: "all-i-want-for-christmas-is-you", label: "All I Want for Christmas Is You catalog profile" }
    ],
    relatedCaseStudies: [
      {
        slug: "mr-brightside-long-tail",
        note: "Compare a different form of long-running public demand without treating it as an ownership record."
      }
    ]
  },
  {
    slug: "blinding-lights-chart-longevity",
    title: "How much did The Weeknd make from Blinding Lights? Public demand is visible; royalty totals are not",
    artist: "The Weeknd",
    focus: "Public earnings question",
    summary:
      "No public source in this article establishes a verified revenue total for Blinding Lights or The Weeknd. The public record does establish unusually durable demand, which is a different claim.",
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
    questionAnswer:
      "Describe the demand precisely, identify the sources that support it, and stop before assigning a revenue amount or recipient that those sources do not disclose.",
    analysisSections: [
      {
        title: "What the chart record answers",
        paragraphs: [
          "The Billboard Canada report records a specific ranking under Billboard's chart methodology. The Official Charts page supplies a separate UK chart record for the same recording. Together, those sources support a narrow conclusion: the song has been publicly documented as an unusually durable hit in more than one chart context.",
          "That is more useful than calling the song simply successful. It identifies the kind of evidence available and the markets and chart systems it describes. It does not combine those records into a worldwide stream total, sales total, or financial valuation."
        ]
      },
      {
        title: "Why demand and payout are different questions",
        paragraphs: [
          "A chart measures public performance according to its own rules. A payment depends on the relevant use, territory, recording or composition right, recipient, contractual share, costs, and accounting period. Those are different evidence systems, and neither cited chart source is a payment statement.",
          "The responsible conclusion is therefore about documented demand, not about what The Weeknd, a writer, a publisher, a label, or any other participant received."
        ]
      }
    ],
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
    ],
    relatedProfiles: [
      { type: "artist", slug: "the-weeknd", label: "The Weeknd catalog profile" },
      { type: "song", slug: "blinding-lights", label: "Blinding Lights catalog profile" }
    ],
    relatedCaseStudies: [
      {
        slug: "the-weeknd-public-success-and-private-income",
        note: "Compare the song-level evidence with the artist-level question."
      },
      {
        slug: "mr-brightside-long-tail",
        note: "Compare a second case about durable public demand over time."
      }
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
    questionAnswer:
      "The chart record supports a conclusion about unusually long public demand. It does not disclose who owns the relevant rights or what any participant was paid.",
    analysisSections: [
      {
        title: "Why the time horizon matters",
        paragraphs: [
          "The two Official Charts records describe the song across more than one moment: its original chart entry and a later combined sales-and-streams milestone. This makes a stronger public-demand record than a release-week result alone.",
          "It still does not create a financial history. The sources do not identify the uses counted in any payment period or the agreements that determine who participates in them."
        ]
      },
      {
        title: "What a long-tail claim should stop short of",
        paragraphs: [
          "Long-running visibility can justify careful language about sustained audience attention. It cannot establish a current master owner, a publishing split, or a take-home amount for a performer or writer.",
          "That boundary keeps the article useful: it explains why the public record is notable without presenting popularity as a substitute for contracts or accounting."
        ]
      }
    ],
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
    ],
    relatedProfiles: [
      { type: "artist", slug: "the-killers", label: "The Killers catalog profile" },
      { type: "song", slug: "mr-brightside", label: "Mr Brightside catalog profile" }
    ],
    relatedCaseStudies: [
      {
        slug: "bohemian-rhapsody-reissues",
        note: "Compare another recording with public demand documented across separate eras."
      }
    ]
  },
  {
    slug: "bohemian-rhapsody-reissues",
    title: "How much money did Queen make from Bohemian Rhapsody? Chart history is not a royalty total",
    artist: "Queen",
    focus: "Public earnings question",
    summary:
      "No public source in this article establishes a verified revenue total for Bohemian Rhapsody or any Queen member. Its chart record documents renewed demand across eras, not the distribution of rights income.",
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
    questionAnswer:
      "Use each chart record to describe the period it covers, then keep ownership, licensing, and payment questions separate unless a source documents them directly.",
    analysisSections: [
      {
        title: "One title, several public periods",
        paragraphs: [
          "The Official Charts sources identify more than one period of public attention: UK number-one runs in 1975 and 1991, followed by a later streaming-era ranking. These are not interchangeable records. Each describes a particular chart setting and time period.",
          "Reading them together supports a case for multi-era public demand. It does not show that each period generated the same type of use, the same amount of revenue, or the same participants in the payment chain."
        ]
      },
      {
        title: "The missing financial record",
        paragraphs: [
          "A royalty total would require evidence about the uses being counted and the agreements behind them. The chart pages do not identify a master-rights recipient, publishing participants, distribution terms, recoupment, or a payment period.",
          "That boundary matters especially for a legacy recording: later public attention is a fact about audience activity, not proof that a named performer or estate received a particular sum."
        ]
      }
    ],
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
    ],
    relatedProfiles: [
      { type: "artist", slug: "queen", label: "Queen catalog profile" },
      { type: "song", slug: "bohemian-rhapsody", label: "Bohemian Rhapsody catalog profile" }
    ],
    relatedCaseStudies: [
      {
        slug: "mr-brightside-long-tail",
        note: "Compare another case where a long public chart life is not an ownership record."
      }
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
    questionAnswer:
      "The chart sources establish sustained public demand. The Copyright Office source explains why the recording and composition must be treated separately; none of these sources verifies a recipient or amount.",
    analysisSections: [
      {
        title: "What the chart evidence can describe",
        paragraphs: [
          "The Official Charts records identify a specific number-one run and place the recording within Ed Sheeran's UK chart history. That is evidence about a defined chart system and the recording's public performance there.",
          "It is not a complete record of every use of the recording or composition, and it does not provide a calculation for any performer, writer, publisher, or label."
        ]
      },
      {
        title: "Why the two works stay separate",
        paragraphs: [
          "The Copyright Office guidance provides general context for a basic research distinction: a sound recording and the musical composition embodied in it are different works. A page about a popular song should not collapse that distinction into one implied payee.",
          "The article therefore uses the chart record to describe demand and the rights source to explain the boundary, rather than assigning the income from either work to one person."
        ]
      }
    ],
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
    ],
    relatedProfiles: [
      { type: "artist", slug: "ed-sheeran", label: "Ed Sheeran catalog profile" },
      { type: "song", slug: "shape-of-you", label: "Shape of You catalog profile" }
    ],
    relatedCaseStudies: [
      {
        slug: "every-breath-you-take-rights-layers",
        note: "Read the rights-layer explanation behind the recording-and-composition distinction."
      }
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
    questionAnswer:
      "The award record identifies credited work in a defined ceremony context, while the chart page records public performance. Neither source provides the agreements or accounting needed for an ownership or income claim.",
    analysisSections: [
      {
        title: "What a public credit can identify",
        paragraphs: [
          "The Academy record identifies music and lyric credits in its Original Song award context. That is useful for identifying the work and the contributors named by that source.",
          "Those credits do not amount to a complete rights or publishing record. They do not disclose later agreements, shares, sound-recording ownership, or payments connected to the film or song."
        ]
      },
      {
        title: "Why film context needs a separate question",
        paragraphs: [
          "The chart page and the Academy record document different public facts: performance of the recording and recognition of a song connected to a film. Combining them does not reveal the terms of any audiovisual use or music-rights agreement.",
          "This case therefore identifies the documented credits and public chart context while leaving license fees and individual income outside the evidence."
        ]
      }
    ],
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
    ],
    relatedProfiles: [
      { type: "artist", slug: "eminem", label: "Eminem catalog profile" },
      { type: "song", slug: "lose-yourself", label: "Lose Yourself catalog profile" }
    ],
    relatedCaseStudies: [
      {
        slug: "happy-soundtrack-context",
        note: "Compare another film-connected song where public visibility does not disclose a license fee."
      }
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
    questionAnswer:
      "The public sources document film and chart context. They do not disclose the terms, amount, or recipient of a synchronization or royalty payment.",
    analysisSections: [
      {
        title: "Two public contexts, not one payment record",
        paragraphs: [
          "The Academy source documents the song's connection to Despicable Me 2 and its award-nomination context. The Official Charts source supplies separate UK chart context. Each source supports a defined public fact rather than a financial conclusion.",
          "Neither source identifies the commercial terms of a film use, how any music right was licensed, or how revenue related to the recording and composition was allocated."
        ]
      },
      {
        title: "What soundtrack visibility leaves unknown",
        paragraphs: [
          "A soundtrack association can help explain why a song had multiple forms of public exposure. It is not evidence of the fee or contractual participation behind that use.",
          "The article keeps those questions separate, describing the documented placement and chart performance without adding a number that the public record does not contain."
        ]
      }
    ],
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
    ],
    relatedProfiles: [
      { type: "artist", slug: "pharrell-williams", label: "Pharrell Williams catalog profile" },
      { type: "song", slug: "happy", label: "Happy catalog profile" }
    ],
    relatedCaseStudies: [
      {
        slug: "lose-yourself-film-and-song-rights",
        note: "Compare how public award credits identify a work without revealing film or music payments."
      }
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
    questionAnswer:
      "The chart sources establish public performance across distinct periods. They do not disclose current ownership, contractual shares, or a payment amount for any individual or company.",
    analysisSections: [
      {
        title: "Read each era in its own context",
        paragraphs: [
          "The cited sources describe a 1976 UK number-one run and later chart and streaming-era context. These records are useful because they distinguish original-period recognition from later public activity.",
          "They should not be merged into a single financial total. The sources do not identify the mix of uses, rights, territories, or participants behind any later activity."
        ]
      },
      {
        title: "What catalog recognition cannot establish",
        paragraphs: [
          "A familiar recording can remain publicly visible for decades, but visibility is not an ownership map. It cannot confirm who controls the relevant recording or composition rights at a given time.",
          "This case uses the public chart history to describe the title's reach while leaving personal payouts and contractual participation outside the evidence."
        ]
      }
    ],
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
    ],
    relatedProfiles: [
      { type: "artist", slug: "abba", label: "ABBA catalog profile" },
      { type: "song", slug: "dancing-queen", label: "Dancing Queen catalog profile" }
    ],
    relatedCaseStudies: [
      {
        slug: "bohemian-rhapsody-reissues",
        note: "Compare a second legacy recording with public evidence from more than one era."
      }
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
    questionAnswer:
      "The cited chart records show public performance in defined UK contexts. They do not establish a universal per-stream rate, a worldwide total, or any recipient's payment.",
    analysisSections: [
      {
        title: "What the two chart records show",
        paragraphs: [
          "The sources place the recording in two different public contexts: its 1991 UK chart peak and a later UK streaming-era ranking. That supports a limited observation about continued discoverability across time.",
          "The sources do not represent all territories or services, and they do not disclose the agreements that apply after any listener activity is counted."
        ]
      },
      {
        title: "Why a streaming ranking is not a rate",
        paragraphs: [
          "A ranking describes relative public performance under a defined chart methodology. It is not an accounting record and does not state the value of one play or the share of a particular recipient.",
          "The useful conclusion is about public discoverability, not a calculation of yearly income or a universal payment rule."
        ]
      }
    ],
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
    ],
    relatedProfiles: [
      { type: "artist", slug: "nirvana", label: "Nirvana catalog profile" },
      { type: "song", slug: "smells-like-teen-spirit", label: "Smells Like Teen Spirit catalog profile" }
    ],
    relatedCaseStudies: [
      {
        slug: "mr-brightside-long-tail",
        note: "Compare another case where public longevity is not a payment record."
      }
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
    questionAnswer:
      "The Copyright Office explains the general distinction between the recording and composition, while the chart record documents public performance. Neither source identifies a complete ownership chain or a payment recipient for this song.",
    analysisSections: [
      {
        title: "The evidence answers two different questions",
        paragraphs: [
          "The Official Charts pages document public chart context for the recording and artist. The Copyright Office guidance explains a general legal distinction between a sound recording and the musical composition embodied in it.",
          "Read together, they help a reader avoid treating one public performance record as proof that one person receives all income associated with a familiar song."
        ]
      },
      {
        title: "Why the distinction protects the reader",
        paragraphs: [
          "A rights discussion needs to identify which work it concerns before it can responsibly discuss ownership or participation. A chart page alone cannot provide that level of title-specific detail.",
          "This article explains the distinction without claiming that the general legal framework reveals the private agreements for this recording."
        ]
      }
    ],
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
    ],
    documentedSourceIndexes: [0, 2],
    relatedProfiles: [
      { type: "artist", slug: "the-police", label: "The Police catalog profile" },
      { type: "song", slug: "every-breath-you-take", label: "Every Breath You Take catalog profile" }
    ],
    relatedCaseStudies: [
      {
        slug: "shape-of-you-demand-and-splits",
        note: "Apply the recording-and-composition distinction to a modern chart hit."
      }
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
    questionAnswer:
      "A source should identify the relevant recording and release context before a rights claim is considered. The cited public records do not establish ownership or income for any version of the song.",
    analysisSections: [
      {
        title: "Why the title alone is not enough",
        paragraphs: [
          "The Official Charts record identifies a specific UK chart context for a recording released in 2014. That kind of source helps anchor a claim to a defined release-era record rather than to a title in the abstract.",
          "It does not identify every later version, related recording, or agreement. A title match should not be treated as a complete chain-of-title review."
        ]
      },
      {
        title: "What the rights framework adds",
        paragraphs: [
          "The Copyright Office source explains the general separation between a musical composition and a sound recording. That distinction makes version identification a necessary first step before discussing a particular right.",
          "The article applies that caution without claiming that the public chart page or general rights guidance proves ownership, re-recording terms, or personal income."
        ]
      }
    ],
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
    ],
    documentedSourceIndexes: [0, 2],
    relatedProfiles: [
      { type: "artist", slug: "taylor-swift", label: "Taylor Swift catalog profile" },
      { type: "song", slug: "shake-it-off", label: "Shake It Off catalog profile" }
    ],
    relatedCaseStudies: [
      {
        slug: "taylor-swift-public-success-and-income-limits",
        note: "Read the artist-level case on why public recognition does not verify private annual income."
      }
    ]
  },
  {
    slug: "the-weeknd-public-success-and-private-income",
    title: "How much does The Weeknd make a year? Public success is visible; personal income is not",
    artist: "The Weeknd",
    focus: "Artist earnings question",
    summary:
      "No public source in this article establishes The Weeknd's verified annual music income. Public chart records can show career-scale demand; they do not disclose artist, label, publisher, or songwriter payments.",
    documentedRecord: [
      "Official Charts identifies Blinding Lights as The Weeknd's biggest song in the UK and records four UK number-one albums for the artist.",
      "IFPI's Global Charts page lists The Weeknd among the top 10 global recording artists for 2025."
    ],
    editorialReading: [
      "The public record supports a limited conclusion: The Weeknd's catalog has substantial chart-recognized demand across recordings and albums. That does not reveal what portion of recorded-music revenue reaches the performer, writers, publishers, labels, distributors, or other parties.",
      "An annual-income claim would need time-specific accounting and rights information that public charts do not provide. The responsible answer is not to convert chart scale into a personal-income figure."
    ],
    rightsQuestion:
      "What can public chart records show about a major artist's catalog, and what would still be needed before anyone could verify annual personal music income?",
    questionAnswer:
      "Public chart records can establish career-scale demand. Verifying personal income would require time-specific revenue, rights, cost, and accounting information that is not in the cited public sources.",
    analysisSections: [
      {
        title: "What the artist-level evidence covers",
        paragraphs: [
          "The Official Charts artist page is useful for UK album and song context, while IFPI's Global Charts page supplies a separate international chart context. The sources describe public performance; neither is a consolidated financial record for the artist's catalog.",
          "This distinction is important because an artist-level question spans more than one recording. Public chart entries can identify the scale and breadth of attention without revealing whether that attention belongs to the artist, a label, a publisher, writers, producers, or other parties in financial terms."
        ]
      },
      {
        title: "What a verified annual-income claim would need",
        paragraphs: [
          "An annual personal-income claim would need a defined accounting period and a record of the revenues and costs included. It would also need evidence of the relevant rights and contractual participation, rather than a chart position alone.",
          "Because none of the sources provide that record, this article does not convert chart achievement into a yearly income estimate. The useful conclusion is about visible public demand and the limit of that evidence."
        ]
      }
    ],
    limitations: [
      "The cited chart pages do not disclose contracts, royalty statements, recoupment, or accounting periods.",
      "A global-artist chart position is a measure of chart-recognized recorded-music performance, not a personal earnings record.",
      "This article does not estimate The Weeknd's net worth, salary, annual income, or personal share of any recording."
    ],
    reviewedOn: "August 18, 2026",
    sources: [
      {
        label: "Official Charts: The Weeknd artist history",
        url: "https://www.officialcharts.com/artist/22895/weeknd/",
        note: "Documents the UK chart context for The Weeknd, including the career context described in this article.",
        role: "primary-record"
      },
      {
        label: "IFPI: Global Charts",
        url: "https://www.ifpi.org/our-industry/global-charts/",
        note: "Lists the IFPI Global Recording Artist chart results referenced here. It is a chart source, not an earnings disclosure.",
        role: "independent-reporting"
      },
      copyrightContext
    ],
    relatedProfiles: [
      { type: "artist", slug: "the-weeknd", label: "The Weeknd catalog profile" },
      { type: "song", slug: "blinding-lights", label: "Blinding Lights catalog profile" }
    ],
    relatedCaseStudies: [
      {
        slug: "blinding-lights-chart-longevity",
        note: "See the recording-level evidence behind one part of the artist's public chart context."
      }
    ]
  },
  {
    slug: "sicko-mode-public-record-and-income-limits",
    title: "How much money did SICKO MODE make? Chart records are not royalty statements",
    artist: "Travis Scott",
    focus: "Public earnings question",
    summary:
      "No public source in this article establishes a verified revenue total for SICKO MODE or a payment to any participant. The linked records document chart performance and award-nomination credits, which are different facts.",
    documentedRecord: [
      "Official Charts records SICKO MODE reaching number nine on the UK Official Singles Chart and spending 39 weeks in the chart's Top 100.",
      "The Recording Academy lists SICKO MODE as a 2019 nominee for Best Rap Song and Best Rap Performance, with credited contributors identified separately in the two categories."
    ],
    editorialReading: [
      "The Official Charts record supports a narrow public-demand conclusion about one market and one chart system. The Recording Academy record supports a separate conclusion about recognition and credits. Neither source is a revenue ledger.",
      "That difference is especially important for a collaborative recording. A public credit can identify participation in an award context, but it does not disclose master ownership, publishing shares, deal terms, costs, or the payment received by any person or company."
    ],
    rightsQuestion:
      "What can public chart and award records establish about SICKO MODE, and what would be needed before a revenue claim for the recording could be verified?",
    questionAnswer:
      "The linked records establish UK chart performance, award-nomination context, and public credits. A verified revenue claim would require title-specific accounting and rights information that these sources do not disclose.",
    analysisSections: [
      {
        title: "What the public record documents",
        paragraphs: [
          "Official Charts gives the recording a dated UK chart history, including its peak position and time on the chart. That is useful, bounded evidence of public performance in that market. It should not be expanded into a total for every territory, format, or revenue stream.",
          "The Recording Academy's 2019 category pages identify SICKO MODE as a nominee and list contributor credits in the relevant award contexts. Those credits help explain why a single-song income question cannot be answered by looking only at the headline performer."
        ]
      },
      {
        title: "Why the money question remains unanswered",
        paragraphs: [
          "A payment claim needs to identify the relevant use, territory, accounting period, right, recipient, contractual share, and applicable costs. Chart placement and award recognition do not supply those inputs, even when the recording's public scale is clear.",
          "The responsible answer is therefore not a number. The article records the public evidence, identifies its limits, and leaves revenue or participant-payment claims unanswered unless a credible source provides the necessary financial record."
        ]
      }
    ],
    limitations: [
      "The cited sources do not disclose streaming, sales, publishing, synchronization, or other revenue totals for SICKO MODE.",
      "The cited credits do not establish current master ownership, publishing shares, contractual participation, or payment amounts.",
      "This article does not estimate Travis Scott's, Drake's, any writer's, or any other participant's share of the recording."
    ],
    reviewedOn: "August 19, 2026",
    sources: [
      {
        label: "Official Charts: SICKO MODE",
        url: "https://www.officialcharts.com/songs/travis-scott-sicko-mode/",
        note: "Documents the recording's public UK Official Singles Chart history, including the peak and weeks cited in this article.",
        role: "primary-record"
      },
      {
        label: "Recording Academy: 2019 Best Rap Song nominees",
        url: "https://www.grammy.com/awards/categories/best-rap-song/2019/",
        note: "Documents the 2019 Best Rap Song nomination and credited contributors for SICKO MODE.",
        role: "independent-reporting"
      },
      copyrightContext
    ],
    relatedProfiles: [
      { type: "artist", slug: "travis-scott", label: "Travis Scott catalog profile" },
      { type: "song", slug: "sicko-mode", label: "SICKO MODE catalog profile" }
    ],
    relatedCaseStudies: [
      {
        slug: "travis-scott-public-records-and-income-limits",
        note: "Read the related artist-level question without treating chart or award context as personal income."
      }
    ]
  },
  {
    slug: "travis-scott-public-records-and-income-limits",
    title: "How much does Travis Scott make a year? Public records show scale, not personal income",
    artist: "Travis Scott",
    focus: "Artist earnings question",
    summary:
      "No public source in this article establishes Travis Scott's verified annual music income. Chart and award records can document work and public recognition, but not the private terms that determine who receives music revenue.",
    documentedRecord: [
      "Official Charts records Astroworld reaching number one on the UK Official Albums Streaming Chart in 2018 and appearing on that chart for 127 weeks.",
      "The Recording Academy lists Sicko Mode as a 2019 nominee for Best Rap Song and Best Rap Performance, with separate credited contributors in the song category."
    ],
    editorialReading: [
      "The chart record and award record describe different public facts: audience performance and credited work. Neither one supplies a payment ledger for the sound recording, composition, publishing, features, production, label relationship, or any other contractual participant.",
      "This distinction matters because a high-profile recording can involve multiple credited and contractual participants. Public visibility should not be presented as proof of one person's annual income."
    ],
    rightsQuestion:
      "What can public chart and award records show about a major artist's work, and why do they not establish the artist's personal annual earnings?",
    questionAnswer:
      "The public sources establish release performance and credited work. They do not identify the contractual and accounting information needed to calculate an individual's annual music income.",
    analysisSections: [
      {
        title: "Two records, two different uses",
        paragraphs: [
          "The Official Charts record concerns Astroworld's position and duration on a UK album chart. The Recording Academy page concerns award-nomination history and credits for Sicko Mode. Both are useful public records, but they answer different questions.",
          "The first speaks to chart-recognized album activity; the second helps identify credited work in an award context. Neither source says how rights or revenue were divided among every participant connected to the album or recording."
        ]
      },
      {
        title: "Why a single artist-income number would mislead",
        paragraphs: [
          "An artist's public profile can include recordings, compositions, collaborative performances, and business activity that do not share one public payment record. Combining chart presence and award recognition into a single income claim would add information that these sources do not supply.",
          "A careful article can document the public scale of the work while leaving personal earnings unanswered when the underlying agreements and statements are not public."
        ]
      }
    ],
    limitations: [
      "The cited sources do not disclose Travis Scott's recording, publishing, touring, merchandise, or endorsement agreements.",
      "Award nominations and chart positions do not establish ownership shares or payment amounts.",
      "This article does not estimate Travis Scott's salary, annual income, net worth, or share of Sicko Mode."
    ],
    reviewedOn: "August 18, 2026",
    sources: [
      {
        label: "Official Charts: Travis Scott artist history",
        url: "https://www.officialcharts.com/artist/48337/travis-scott/",
        note: "Documents the UK chart history for Travis Scott releases, including the Astroworld streaming-chart entry cited here.",
        role: "primary-record"
      },
      {
        label: "Recording Academy: Travis Scott awards and nominations",
        url: "https://www.grammy.com/artists/travis-scott/24827/",
        note: "Documents the Grammy nomination records and credits referenced for Sicko Mode.",
        role: "independent-reporting"
      },
      copyrightContext
    ],
    relatedProfiles: [
      { type: "artist", slug: "travis-scott", label: "Travis Scott catalog profile" },
      { type: "song", slug: "sicko-mode", label: "SICKO MODE catalog profile" }
    ],
    relatedCaseStudies: [
      {
        slug: "sicko-mode-public-record-and-income-limits",
        note: "Read the song-level evidence and its limits before treating a public hit as a payment record."
      },
      {
        slug: "lose-yourself-film-and-song-rights",
        note: "Compare how public credits identify a work without disclosing its payment path."
      }
    ]
  },
  {
    slug: "taylor-swift-public-success-and-income-limits",
    title: "How much does Taylor Swift make a year? Public success is not a private-income record",
    artist: "Taylor Swift",
    focus: "Artist earnings question",
    summary:
      "No public source in this article establishes Taylor Swift's verified annual music income. Industry and chart records show exceptional demand, but they do not disclose all rights, costs, accounting, or personal receipts.",
    documentedRecord: [
      "IFPI named Taylor Swift its Global Recording Artist of the Year for 2024 and stated that The Tortured Poets Department topped four of its 2024 global album charts.",
      "Official Charts records Taylor Swift's UK chart history, including 14 UK number-one albums on the artist page."
    ],
    editorialReading: [
      "Public chart achievements can establish commercial scale and catalog reach. They cannot establish a verified annual personal-income figure because revenue and costs move through separate recordings, compositions, formats, territories, rights holders, and agreements.",
      "A sound recording and its underlying composition are distinct works. Even a detailed public chart record cannot replace title-specific ownership records or private accounting."
    ],
    rightsQuestion:
      "What do public global and national chart records establish about an artist's scale, and why are they insufficient to verify annual personal music income?",
    questionAnswer:
      "The cited records establish public chart recognition in specific contexts. They do not disclose the complete rights, costs, or accounting information required for a verified personal-income total.",
    analysisSections: [
      {
        title: "Read each public recognition in its own context",
        paragraphs: [
          "IFPI's Global Recording Artist recognition and the Official Charts artist page describe different public chart contexts. The IFPI source records global recognition for 2024; the Official Charts source records UK chart history. Neither source claims to be an earnings statement.",
          "The sources therefore support a conclusion about exceptional public demand and catalog reach. They should not be treated as interchangeable measures or added together as though they disclosed one financial outcome."
        ]
      },
      {
        title: "Why chart scale cannot verify personal income",
        paragraphs: [
          "Chart evidence does not list every revenue source, every cost, the territory of each use, or the share retained by each participant. It also cannot establish the contractual treatment of a particular recording or composition.",
          "That is why this case study does not offer a numerical answer to the headline question. The evidence is strong enough to describe public scale, but not to verify private receipts."
        ]
      }
    ],
    limitations: [
      "The cited sources do not disclose royalty statements, production and marketing costs, tax, recoupment, or contractual shares.",
      "Global chart results are not a complete record of every revenue stream or every recipient.",
      "This article does not estimate Taylor Swift's annual income, net worth, salary, or personal share of any catalog."
    ],
    reviewedOn: "August 18, 2026",
    sources: [
      {
        label: "IFPI: Taylor Swift named Global Recording Artist of the Year 2024",
        url: "https://www.ifpi.org/taylor-swift-makes-music-history-as-ifpis-biggest-selling-global-recording-artist-of-the-year-for-the-fifth-time/",
        note: "Documents IFPI's 2024 Global Recording Artist recognition and the global-album-chart context cited here.",
        role: "primary-record"
      },
      {
        label: "Official Charts: Taylor Swift artist history",
        url: "https://www.officialcharts.com/artist/5387/taylor-swift/",
        note: "Documents the UK chart history and album-chart context cited in this article.",
        role: "independent-reporting"
      },
      copyrightContext
    ],
    relatedProfiles: [
      { type: "artist", slug: "taylor-swift", label: "Taylor Swift catalog profile" },
      { type: "song", slug: "shake-it-off", label: "Shake It Off catalog profile" }
    ],
    relatedCaseStudies: [
      {
        slug: "shake-it-off-version-identity",
        note: "Read why identifying the precise recording comes before any rights claim."
      }
    ]
  }
];

export const caseStudyPublicationHistory: Record<string, CaseStudyPublicationHistory> = Object.fromEntries(
  caseStudies.map((caseStudy) => [
    caseStudy.slug,
    {
      publishedOn: "2026-08-18",
      lastReviewedOn: "2026-08-19"
    }
  ])
);
