export type ArticleReference = {
  label: string;
  url: string;
  note: string;
  category?: string;
};

export type SongArticle = {
  seoTitle: string;
  shortAnswer: string;
  breakdown: string[];
  lifetimeEstimate: string;
  whyItStillMakesMoney: string[];
  insight: string;
  evidence?: string[];
  methodologyNotes?: string[];
  references?: ArticleReference[];
};

export const songArticles: Record<string, SongArticle> = {
  "spotify-per-stream": {
    "seoTitle": "How much does Spotify pay per stream in 2026?",
    "shortAnswer": "Estimated earnings: $0.003-$0.005 per stream.",
    "breakdown": [
      "At 1M streams, a song can generate roughly $3,000-$5,000 before rights splits.",
      "Payouts vary depending on country, subscription tier, and platform mix.",
      "Master and publishing shares are split across artists, labels, distributors, and writers."
    ],
    "lifetimeEstimate": "Lifetime earnings depend on scale, rights ownership, and whether the song keeps streaming over many years.",
    "whyItStillMakesMoney": [
      "Streaming compounds when songs stay on playlists for years.",
      "High-volume catalogs convert even small per-stream rates into meaningful income.",
      "Global listeners create broader monetization than a single market can."
    ],
    "insight": "Revenue depends on geography, subscription type, and rights splits."
  },
  "gangstas-paradise": {
    "seoTitle": "How much does Gangsta’s Paradise make per year?",
    "shortAnswer": "Estimated earnings: $500K-$1M+ per year.",
    "breakdown": [
      "Massive Spotify streams keep the song active across multiple generations.",
      "Film sync value remains strong because of its connection to Dangerous Minds.",
      "Legacy playlist placement helps maintain steady catalog listening."
    ],
    "lifetimeEstimate": "Estimated lifetime earnings: several million dollars over the life of the catalog.",
    "whyItStillMakesMoney": [
      "The song remains one of the most recognizable rap hits of its era.",
      "Its soundtrack legacy keeps it culturally visible.",
      "Catalog and nostalgia playlists continue to drive repeat listening."
    ],
    "insight": "Cultural hits generate long-term income decades later when they stay recognizable and keep showing up in playlists, film references, and memory-driven listening."
  },
  "in-this-shirt": {
    "seoTitle": "How much does In This Shirt make per year?",
    "shortAnswer": "Estimated earnings: $60K-$150K per year.",
    "breakdown": [
      "Spotify payouts can land around $0.003-$0.005 per stream.",
      "YouTube and TikTok exposure help revive demand and create new listening cycles.",
      "Sync licensing adds value because emotionally resonant songs travel well in visual media."
    ],
    "lifetimeEstimate": "Estimated lifetime earnings: $1M-$2M+.",
    "whyItStillMakesMoney": [
      "Viral resurgence through TikTok and short-form edits.",
      "Emotional replay value that keeps people coming back.",
      "Playlist longevity across cinematic, melancholy, and reflective listening."
    ],
    "insight": "Slow-burn songs can outperform short-lived hits over time when they keep finding new audiences and stay emotionally useful."
  },
  "viral-tiktok-songs": {
    "seoTitle": "How much do viral TikTok songs make?",
    "shortAnswer": "Estimated earnings: $50K-$500K+ depending on resulting streams.",
    "breakdown": [
      "Streaming spikes drive the biggest immediate revenue jump.",
      "YouTube monetization can add incremental income from short-form discovery spillover.",
      "Sync and licensing opportunities often follow when a song becomes culturally visible."
    ],
    "lifetimeEstimate": "Lifetime outcomes vary widely because some viral songs fade quickly while others convert into long-term catalog value.",
    "whyItStillMakesMoney": [
      "Virality can push a song into mainstream playlists.",
      "Short-form loops create massive awareness in a short period.",
      "Media and brand interest can follow if the track breaks out beyond the platform."
    ],
    "insight": "Virality creates short-term revenue bursts."
  },
  "youtube-music-payouts": {
    "seoTitle": "How much does YouTube pay per music stream?",
    "shortAnswer": "Estimated earnings: about $0.0006-$0.008 per stream.",
    "breakdown": [
      "YouTube usually pays less per stream than premium audio platforms.",
      "Ad rates, viewer geography, and watch behavior all affect final payouts.",
      "Large view volume can still turn lower unit economics into meaningful revenue."
    ],
    "lifetimeEstimate": "Lifetime earnings can become substantial for songs with hundreds of millions of views or repeated catalog discovery.",
    "whyItStillMakesMoney": [
      "Video search behavior creates ongoing discovery long after release.",
      "Official uploads, lyric videos, and fan usage extend a song's footprint.",
      "Catalog songs can keep generating views through mood and nostalgia listening."
    ],
    "insight": "YouTube pays less per stream but scales via volume."
  },
  "evergreen-songs-money": {
    "seoTitle": "Why do old songs still make money decades later?",
    "shortAnswer": "Because of streaming + licensing.",
    "breakdown": [
      "Playlists keep older songs in daily listening circulation.",
      "Nostalgia drives repeat plays across multiple generations.",
      "Sync usage in film, TV, trailers, and social media keeps catalog tracks commercially active."
    ],
    "lifetimeEstimate": "The strongest evergreen songs can earn for decades, making music one of the few creative assets with true long-tail revenue.",
    "whyItStillMakesMoney": [
      "Listeners revisit familiar songs more often than trend-driven tracks.",
      "Cultural memory keeps classic songs relevant in media and conversation.",
      "Catalog assets can outlast release cycles by many years."
    ],
    "insight": "Music is one of the few assets that generates income forever."
  },
  "all-i-want-for-christmas-is-you": {
    "seoTitle": "How much money does All I Want for Christmas Is You make per year?",
    "shortAnswer": "All I Want for Christmas Is You by Mariah Carey is modeled at $4.4M-$11M/year on the artist side, with a separate gross-track range of $9.1M-$23M/year.",
    "breakdown": [
      "The model treats this as a seasonal catalog asset, not a normal year-round streaming single.",
      "The song file separates gross track revenue from artist-side participation, publishing, and songwriter shares.",
      "Holiday replay is the main reason the annual estimate can sit above most non-seasonal catalog songs."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long All I Want for Christmas Is You keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "Holiday streaming creates a concentrated annual spike that few non-seasonal songs can match.",
      "Radio, retail, playlist, and social reuse keep the song visible every December.",
      "Mariah Carey writer participation makes publishing materially more important than on performer-only hits."
    ],
    "insight": "The important reading is not just that the song is popular each December. It is that the modeled artist-side range, publishing range, and seasonal replay pattern all point in the same direction: this is one of the rare holiday songs that behaves like a major annual catalog business.",
    "evidence": [
      "The available revenue fields list estimated gross track revenue at $9.1M-$23M/year and artist-side share at $4.4M-$11M/year.",
      "The ownership note says the publishing appears exceptionally valuable because of writer-side participation.",
      "The RIAA certification database link is included for public certification context; certification records do not disclose royalty income."
    ],
    "methodologyNotes": [
      "The estimate is directional and annualized; it is not a Mariah Carey royalty statement.",
      "Seasonal songs can swing materially from year to year, so the page uses a range rather than a single number.",
      "Platform links are used for public track identity and listening context, not as audited payout disclosures."
    ],
    "references": [
      {
        "label": "RIAA Gold & Platinum database lookup",
        "url": "https://www.riaa.com/gold-platinum/?ar=Mariah+Carey&ti=All+I+Want+for+Christmas+Is+You&tab_active=default-award",
        "note": "Official RIAA search page used for certification-scale context, not for royalty totals."
      }
    ]
  },
  "blinding-lights": {
    "seoTitle": "How much money does Blinding Lights make per year?",
    "shortAnswer": "Blinding Lights by The Weeknd is modeled at $1.1M-$3.3M/year on the artist side, with gross track revenue modeled at $3.9M-$9.1M/year.",
    "breakdown": [
      "The page separates the larger gross track estimate from the smaller artist-side range after rights splits.",
      "The song is treated as a modern superstar catalog track where streaming scale is the main recurring driver.",
      "Publishing and songwriter ranges are shown separately because the performer-side number is not the whole song economy."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long Blinding Lights keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "Streaming scale and playlist inclusion remain the largest recurring drivers.",
      "A durable hook and broad familiarity help the song keep earning across catalog listening.",
      "Sync, social reuse, and seasonal spikes can lift the baseline."
    ],
    "insight": "Blinding Lights is useful because it shows why a very large modern hit can have a wide gap between gross song revenue and artist-side take-home. The page keeps those figures separate instead of presenting one headline number as if every dollar reaches the performer.",
    "evidence": [
      "The available revenue fields list estimated gross track revenue at $3.9M-$9.1M/year and artist-side share at $1.1M-$3.3M/year.",
      "The ownership note describes a mix of label and artist-affiliated participation, which is why gross and take-home are separated.",
      "The RIAA certification database link is included for public certification context; certification records do not disclose royalty income."
    ],
    "methodologyNotes": [
      "The estimate is a modeled annual range, not a disclosed royalty statement from The Weeknd or a label.",
      "The model does not assume one universal per-stream rate because platform, territory, and contract terms vary.",
      "External platform links are identity and listening references, not proof of the modeled payout range."
    ],
    "references": [
      {
        "label": "RIAA Gold & Platinum database lookup",
        "url": "https://www.riaa.com/gold-platinum/?ar=The+Weeknd&ti=Blinding+Lights&tab_active=default-award",
        "note": "Official RIAA search page used for certification-scale context, not for royalty totals."
      }
    ]
  },
  "bohemian-rhapsody": {
    "seoTitle": "How much money does Bohemian Rhapsody make per year?",
    "shortAnswer": "Bohemian Rhapsody by Queen is modeled at $1.1M-$3.3M/year on the artist side, with gross track revenue modeled at $2.6M-$7.8M/year.",
    "breakdown": [
      "The page treats the song as a legacy catalog asset where long-tail recognition matters more than release-week performance.",
      "Gross track revenue, artist-side share, publishing, and songwriter ranges are shown separately to avoid collapsing the economics into one number.",
      "The ownership note flags Freddie Mercury writer-side participation as part of the publishing context."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long Bohemian Rhapsody keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "Classic-rock playlists and cultural familiarity keep the song in constant long-tail circulation.",
      "Film, television, and event use reinforce the song as a high-recognition catalog asset.",
      "Its unusual structure makes it memorable enough to keep outperforming ordinary legacy singles."
    ],
    "insight": "Bohemian Rhapsody is a strong example of why older catalog songs need a different revenue reading from current hits. The estimate depends on durable replay, rights participation, and publishing context, not only on current chart activity.",
    "evidence": [
      "The available revenue fields list estimated gross track revenue at $2.6M-$7.8M/year and artist-side share at $1.1M-$3.3M/year.",
      "The ownership note says the master is major-label controlled with band or estate royalty participation.",
      "The RIAA certification database link is included for public certification context; certification records do not disclose royalty income."
    ],
    "methodologyNotes": [
      "The estimate is a modeled annual range and not a disclosed Queen royalty statement.",
      "Legacy catalog value can come from streaming, licensing, and recurring public use, but the split between those channels is not publicly audited here.",
      "External links are used to document public song identity and context, not to calculate exact royalty checks."
    ],
    "references": [
      {
        "label": "RIAA Gold & Platinum database lookup",
        "url": "https://www.riaa.com/gold-platinum/?ar=Queen&ti=Bohemian+Rhapsody&tab_active=default-award",
        "note": "Official RIAA search page used for certification-scale context, not for royalty totals."
      }
    ]
  },
  "dancing-queen": {
    "seoTitle": "How much money does Dancing Queen make per year?",
    "shortAnswer": "Dancing Queen by ABBA is modeled at $1.1M-$3.3M/year on the artist side, with gross track revenue modeled at $2.6M-$7.8M/year.",
    "breakdown": [
      "The song is modeled as a global pop catalog track where repeat listening and licensing context matter.",
      "The estimate separates artist-side share from publishing and songwriter ranges because ABBA songwriting is central to the economics.",
      "The estimate does not assume a song-specific catalog sale adjustment."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long Dancing Queen keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "Global pop and disco nostalgia playlists keep the song active across generations.",
      "Film, party, wedding, and stage-musical associations reinforce recurring demand.",
      "Its melody and title recognition make it unusually sync-friendly for a 1970s pop single."
    ],
    "insight": "Dancing Queen reads less like a one-time 1970s hit and more like a durable catalog standard. The useful number is the range after separating gross revenue, artist-side participation, and writer-side value.",
    "evidence": [
      "The available revenue fields list estimated gross track revenue at $2.6M-$7.8M/year and artist-side share at $1.1M-$3.3M/year.",
      "The ownership note says publishing appears highly valuable because ABBA songwriting is central to catalog economics.",
      "The RIAA certification database link is included for public certification context; certification records do not disclose royalty income."
    ],
    "methodologyNotes": [
      "The estimate is a modeled annual range, not an ABBA royalty disclosure.",
      "The page does not convert certifications or public listening pages directly into earnings.",
      "The range should be read as directional catalog economics, not as a precise accounting statement."
    ],
    "references": [
      {
        "label": "RIAA Gold & Platinum database lookup",
        "url": "https://www.riaa.com/gold-platinum/?ar=ABBA&ti=Dancing+Queen&tab_active=default-award",
        "note": "Official RIAA search page used for certification-scale context, not for royalty totals."
      }
    ]
  },
  "sicko-mode": {
    "seoTitle": "How much money does SICKO MODE make per year?",
    "shortAnswer": "SICKO MODE by Travis Scott is modeled at $1.1M-$3.3M/year on the artist side, with gross track revenue modeled at $2.6M-$7.8M/year.",
    "breakdown": [
      "The page separates performer-side economics from publishing because the ownership notes describe multiple writer, producer, and publisher participants.",
      "Catalog streaming is treated as the main recurring driver, with sync and short-form rediscovery left as possible upside rather than guaranteed income.",
      "The estimate does not include a song-specific catalog sale adjustment."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long SICKO MODE keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "Catalog streaming remains the main long-tail driver for recognizable rap tracks.",
      "Playlist placement and cultural recall help the song stay active.",
      "Sampling, sync use, and short-form rediscovery can extend earnings."
    ],
    "insight": "SICKO MODE is a useful page because the headline artist-side number is only part of the economics. The gross-track range, label participation, and publishing split all matter before deciding what the song may actually deliver to any one participant.",
    "evidence": [
      "The available revenue fields list estimated gross track revenue at $2.6M-$7.8M/year and artist-side share at $1.1M-$3.3M/year.",
      "The ownership note says publishing appears split across multiple writers, producers, and publishers.",
      "The RIAA certification database link is included for public certification context; certification records do not disclose royalty income."
    ],
    "methodologyNotes": [
      "The estimate is a modeled annual range and not a Travis Scott royalty statement.",
      "The page does not assume public streams translate into one fixed per-stream payout.",
      "Certification and platform references provide public context, not audited income."
    ],
    "references": [
      {
        "label": "RIAA Gold & Platinum database lookup",
        "url": "https://www.riaa.com/gold-platinum/?ar=Travis+Scott&ti=SICKO+MODE&tab_active=default-award",
        "note": "Official RIAA search page used for certification-scale context, not for royalty totals."
      }
    ]
  },
  "shake-it-off": {
    "seoTitle": "How much money does Shake It Off make per year?",
    "shortAnswer": "Shake It Off by Taylor Swift is modeled at $940K-$2.8M/year on the artist side, with gross track revenue modeled at $2.2M-$6.5M/year.",
    "breakdown": [
      "The page separates gross track revenue from the artist-side range because label-controlled masters and royalty participation can produce different outcomes.",
      "Publishing and songwriter ranges are shown separately instead of being folded into the headline estimate.",
      "The model uses current catalog behavior and does not confirm a song-specific sale adjustment."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long Shake It Off keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "Streaming scale and playlist inclusion remain the largest recurring drivers.",
      "A durable hook and broad familiarity help the song keep earning across catalog listening.",
      "Sync, social reuse, and seasonal spikes can lift the baseline."
    ],
    "insight": "Shake It Off shows why a large pop hit should be read through rights splits, not just public familiarity. The page keeps the gross-track estimate, performer-side estimate, and publishing estimate visible as separate lanes.",
    "evidence": [
      "The available revenue fields list estimated gross track revenue at $2.2M-$6.5M/year and artist-side share at $940K-$2.8M/year.",
      "The ownership note describes a mix of label-controlled masters and meaningful artist-side royalty participation.",
      "The RIAA certification database link is included for public certification context; certification records do not disclose royalty income."
    ],
    "methodologyNotes": [
      "The estimate is an inferred annual range, not a public Taylor Swift royalty statement.",
      "The page does not claim a universal per-stream payout for the song.",
      "External references support public context and identity; they do not independently verify the modeled earnings range."
    ],
    "references": [
      {
        "label": "RIAA Gold & Platinum database lookup",
        "url": "https://www.riaa.com/gold-platinum/?ar=Taylor+Swift&ti=Shake+It+Off&tab_active=default-award",
        "note": "Official RIAA search page used for certification-scale context, not for royalty totals."
      }
    ]
  },
  "blank-space": {
    "seoTitle": "How much money does Blank Space make per year?",
    "shortAnswer": "Blank Space by Taylor Swift is modeled at $830K-$2.5M/year on the artist side, before reading the separate gross-track and publishing context.",
    "breakdown": [
      "Streaming and catalog replay form the baseline annual revenue lane.",
      "Publishing and songwriter shares can matter materially when the writer-side participation is strong.",
      "Sync, social rediscovery, and playlist reuse can create spikes above the modeled baseline."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long Blank Space keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "Streaming and catalog discovery keep the song generating recurring revenue.",
      "Playlist longevity supports steady repeat listening over time.",
      "Licensing and cultural familiarity can create additional earnings beyond baseline streams."
    ],
    "insight": "Blank Space works as a catalog asset because the revenue story depends on replay durability, rights splits, and ownership context, not only on the original release year."
  },
  "in-the-end": {
    "seoTitle": "How much money does In the End make per year?",
    "shortAnswer": "In the End by Linkin Park is modeled at $830K-$2.5M/year on the artist side, before reading the separate gross-track and publishing context.",
    "breakdown": [
      "Streaming and catalog replay form the baseline annual revenue lane.",
      "Publishing and songwriter shares can matter materially when the writer-side participation is strong.",
      "Sync, social rediscovery, and playlist reuse can create spikes above the modeled baseline."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long In the End keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "2000s rock nostalgia and alternative playlists keep the song in heavy catalog circulation.",
      "The chorus is immediately recognizable, which helps repeat listening and social reuse.",
      "Band-wide catalog demand keeps Hybrid Theory tracks linked together economically."
    ],
    "insight": "In the End works as a catalog asset because the revenue story depends on replay durability, rights splits, and ownership context, not only on the original release year."
  },
  "every-breath-you-take": {
    "seoTitle": "How much money does Every Breath You Take make per year?",
    "shortAnswer": "Every Breath You Take by The Police is modeled at $660K-$2.5M/year on the artist side, before reading the separate gross-track and publishing context.",
    "breakdown": [
      "Streaming and catalog replay form the baseline annual revenue lane.",
      "Publishing and songwriter shares can matter materially when the writer-side participation is strong.",
      "Sync, social rediscovery, and playlist reuse can create spikes above the modeled baseline."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long Every Breath You Take keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "Catalog streaming and radio familiarity sustain continuous replay.",
      "Sync, interpolation, and media reuse materially extend earnings.",
      "Strong global recognition keeps the song active across generations."
    ],
    "insight": "Every Breath You Take works as a catalog asset because the revenue story depends on replay durability, rights splits, and ownership context, not only on the original release year."
  },
  "gods-plan": {
    "seoTitle": "How much money does God's Plan make per year?",
    "shortAnswer": "God's Plan by Drake is modeled at $830K-$2.2M/year on the artist side, before reading the separate gross-track and publishing context.",
    "breakdown": [
      "Streaming and catalog replay form the baseline annual revenue lane.",
      "Publishing and songwriter shares can matter materially when the writer-side participation is strong.",
      "Sync, social rediscovery, and playlist reuse can create spikes above the modeled baseline."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long God's Plan keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "Streaming and catalog discovery keep the song generating recurring revenue.",
      "Playlist longevity supports steady repeat listening.",
      "Licensing and cultural familiarity can add earnings beyond baseline streams."
    ],
    "insight": "God's Plan works as a catalog asset because the revenue story depends on replay durability, rights splits, and ownership context, not only on the original release year."
  },
  "happy": {
    "seoTitle": "How much money does Happy make per year?",
    "shortAnswer": "Happy by Pharrell Williams is modeled at $830K-$2.2M/year on the artist side, before reading the separate gross-track and publishing context.",
    "breakdown": [
      "Streaming and catalog replay form the baseline annual revenue lane.",
      "Publishing and songwriter shares can matter materially when the writer-side participation is strong.",
      "Sync, social rediscovery, and playlist reuse can create spikes above the modeled baseline."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long Happy keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "Global pop familiarity keeps the song active in streaming and mood playlists.",
      "Family-friendly sync usefulness gives the recording value beyond normal catalog listening.",
      "Pharrell writer and performer participation strengthens the artist-side economics."
    ],
    "insight": "Happy works as a catalog asset because the revenue story depends on replay durability, rights splits, and ownership context, not only on the original release year."
  },
  "lose-yourself": {
    "seoTitle": "How much money does Lose Yourself make per year?",
    "shortAnswer": "Lose Yourself by Eminem is modeled at $720K-$2.2M/year on the artist side, before reading the separate gross-track and publishing context.",
    "breakdown": [
      "Streaming and catalog replay form the baseline annual revenue lane.",
      "Publishing and songwriter shares can matter materially when the writer-side participation is strong.",
      "Sync, social rediscovery, and playlist reuse can create spikes above the modeled baseline."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long Lose Yourself keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "Catalog streaming remains the main long-tail driver for recognizable rap tracks.",
      "Playlist placement and cultural recall help the song stay active.",
      "Sampling, sync use, and short-form rediscovery can extend earnings."
    ],
    "insight": "Lose Yourself works as a catalog asset because the revenue story depends on replay durability, rights splits, and ownership context, not only on the original release year."
  },
  "dreams": {
    "seoTitle": "How much money does Dreams make per year?",
    "shortAnswer": "Dreams by Fleetwood Mac is modeled at $720K-$2.1M/year on the artist side, before reading the separate gross-track and publishing context.",
    "breakdown": [
      "Streaming and catalog replay form the baseline annual revenue lane.",
      "Publishing and songwriter shares can matter materially when the writer-side participation is strong.",
      "Sync, social rediscovery, and playlist reuse can create spikes above the modeled baseline."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long Dreams keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "Classic-rock and soft-rock playlists keep the song in daily catalog circulation.",
      "Viral rediscovery has shown the song can restart attention decades after release.",
      "Fleetwood Mac catalog listening links Dreams to Rumours as a full-album asset."
    ],
    "insight": "Dreams works as a catalog asset because the revenue story depends on replay durability, rights splits, and ownership context, not only on the original release year."
  },
  "numb": {
    "seoTitle": "How much money does Numb make per year?",
    "shortAnswer": "Numb by Linkin Park is modeled at $660K-$2.1M/year on the artist side, before reading the separate gross-track and publishing context.",
    "breakdown": [
      "Streaming and catalog replay form the baseline annual revenue lane.",
      "Publishing and songwriter shares can matter materially when the writer-side participation is strong.",
      "Sync, social rediscovery, and playlist reuse can create spikes above the modeled baseline."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long Numb keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "Classic replay value and catalog streaming keep major rock songs relevant.",
      "Cultural familiarity supports long-tail listener demand.",
      "Sync placements and live-culture recognition help extend the song's revenue life."
    ],
    "insight": "Numb works as a catalog asset because the revenue story depends on replay durability, rights splits, and ownership context, not only on the original release year."
  },
  "starboy": {
    "seoTitle": "How much money does Starboy make per year?",
    "shortAnswer": "Starboy by The Weeknd is modeled at $660K-$2.1M/year on the artist side, before reading the separate gross-track and publishing context.",
    "breakdown": [
      "Streaming and catalog replay form the baseline annual revenue lane.",
      "Publishing and songwriter shares can matter materially when the writer-side participation is strong.",
      "Sync, social rediscovery, and playlist reuse can create spikes above the modeled baseline."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long Starboy keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "Streaming volume remains the largest recurring source of modeled revenue.",
      "The Weeknd and Daft Punk association keeps the song useful across pop, R&B, and electronic-adjacent playlists.",
      "Catalog replay and brand-like title recognition support long-tail listener demand."
    ],
    "insight": "Starboy works as a catalog asset because the revenue story depends on replay durability, rights splits, and ownership context, not only on the original release year."
  },
  "billie-jean": {
    "seoTitle": "How much money does Billie Jean make per year?",
    "shortAnswer": "Billie Jean by Michael Jackson is modeled at $550K-$2.2M/year on the artist side, before reading the separate gross-track and publishing context.",
    "breakdown": [
      "Streaming and catalog replay form the baseline annual revenue lane.",
      "Publishing and songwriter shares can matter materially when the writer-side participation is strong.",
      "Sync, social rediscovery, and playlist reuse can create spikes above the modeled baseline."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long Billie Jean keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "global streaming demand",
      "playlist permanence",
      "licensing and media reuse"
    ],
    "insight": "Billie Jean works as a catalog asset because the revenue story depends on replay durability, rights splits, and ownership context, not only on the original release year."
  },
  "shape-of-you": {
    "seoTitle": "How much money does Shape of You make per year?",
    "shortAnswer": "Shape of You by Ed Sheeran is modeled at $550K-$2.2M/year on the artist side, before reading the separate gross-track and publishing context.",
    "breakdown": [
      "Streaming and catalog replay form the baseline annual revenue lane.",
      "Publishing and songwriter shares can matter materially when the writer-side participation is strong.",
      "Sync, social rediscovery, and playlist reuse can create spikes above the modeled baseline."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long Shape of You keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "global streaming scale",
      "playlist ubiquity",
      "songwriter-side participation"
    ],
    "insight": "Shape of You works as a catalog asset because the revenue story depends on replay durability, rights splits, and ownership context, not only on the original release year."
  },
  "hotel-california": {
    "seoTitle": "How much money does Hotel California make per year?",
    "shortAnswer": "Hotel California by The Eagles is modeled at $660K-$1.9M/year on the artist side, before reading the separate gross-track and publishing context.",
    "breakdown": [
      "Streaming and catalog replay form the baseline annual revenue lane.",
      "Publishing and songwriter shares can matter materially when the writer-side participation is strong.",
      "Sync, social rediscovery, and playlist reuse can create spikes above the modeled baseline."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long Hotel California keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "Classic replay value and catalog streaming keep major rock songs relevant.",
      "Cultural familiarity supports long-tail listener demand.",
      "Sync placements and live-culture recognition help extend the song's revenue life."
    ],
    "insight": "Hotel California works as a catalog asset because the revenue story depends on replay durability, rights splits, and ownership context, not only on the original release year."
  },
  "one-dance": {
    "seoTitle": "How much money does One Dance make per year?",
    "shortAnswer": "One Dance by Drake is modeled at $660K-$1.9M/year on the artist side, before reading the separate gross-track and publishing context.",
    "breakdown": [
      "Streaming and catalog replay form the baseline annual revenue lane.",
      "Publishing and songwriter shares can matter materially when the writer-side participation is strong.",
      "Sync, social rediscovery, and playlist reuse can create spikes above the modeled baseline."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long One Dance keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "Global streaming scale keeps the song active across markets.",
      "Dancehall and Afrobeats crossover appeal gives it wider playlist reach than a typical rap single.",
      "Drake catalog listening keeps the track connected to a much larger streaming ecosystem."
    ],
    "insight": "One Dance works as a catalog asset because the revenue story depends on replay durability, rights splits, and ownership context, not only on the original release year."
  },
  "save-your-tears": {
    "seoTitle": "How much money does Save Your Tears make per year?",
    "shortAnswer": "Save Your Tears by The Weeknd is modeled at $610K-$1.9M/year on the artist side, before reading the separate gross-track and publishing context.",
    "breakdown": [
      "Streaming and catalog replay form the baseline annual revenue lane.",
      "Publishing and songwriter shares can matter materially when the writer-side participation is strong.",
      "Sync, social rediscovery, and playlist reuse can create spikes above the modeled baseline."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long Save Your Tears keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "Streaming and radio familiarity keep the song active after the original chart cycle.",
      "The After Hours album halo links it to Blinding Lights and Starboy-era catalog demand.",
      "Remix and social reuse helped the song stay visible across multiple listening contexts."
    ],
    "insight": "Save Your Tears works as a catalog asset because the revenue story depends on replay durability, rights splits, and ownership context, not only on the original release year."
  },
  "my-heart-will-go-on": {
    "seoTitle": "How much money does My Heart Will Go On make per year?",
    "shortAnswer": "My Heart Will Go On by Celine Dion is modeled at $550K-$1.9M/year on the artist side, before reading the separate gross-track and publishing context.",
    "breakdown": [
      "Streaming and catalog replay form the baseline annual revenue lane.",
      "Publishing and songwriter shares can matter materially when the writer-side participation is strong.",
      "Sync, social rediscovery, and playlist reuse can create spikes above the modeled baseline."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long My Heart Will Go On keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "The song remains globally tied to Titanic and soundtrack nostalgia.",
      "Weddings, events, and ballad playlists keep long-tail listening active.",
      "Its cultural familiarity supports unusual catalog durability."
    ],
    "insight": "My Heart Will Go On works as a catalog asset because the revenue story depends on replay durability, rights splits, and ownership context, not only on the original release year."
  },
  "anti-hero": {
    "seoTitle": "How much money does Anti-Hero make per year?",
    "shortAnswer": "Anti-Hero by Taylor Swift is modeled at $610K-$1.8M/year on the artist side, before reading the separate gross-track and publishing context.",
    "breakdown": [
      "Streaming and catalog replay form the baseline annual revenue lane.",
      "Publishing and songwriter shares can matter materially when the writer-side participation is strong.",
      "Sync, social rediscovery, and playlist reuse can create spikes above the modeled baseline."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long Anti-Hero keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "Streaming scale and playlist inclusion remain the largest recurring drivers.",
      "A durable hook and broad familiarity help the song keep earning across catalog listening.",
      "Sync, social reuse, and seasonal spikes can lift the baseline."
    ],
    "insight": "Anti-Hero works as a catalog asset because the revenue story depends on replay durability, rights splits, and ownership context, not only on the original release year."
  },
  "dont-stop-me-now": {
    "seoTitle": "How much money does Don't Stop Me Now make per year?",
    "shortAnswer": "Don't Stop Me Now by Queen is modeled at $610K-$1.8M/year on the artist side, before reading the separate gross-track and publishing context.",
    "breakdown": [
      "Streaming and catalog replay form the baseline annual revenue lane.",
      "Publishing and songwriter shares can matter materially when the writer-side participation is strong.",
      "Sync, social rediscovery, and playlist reuse can create spikes above the modeled baseline."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long Don't Stop Me Now keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "High-energy classic-rock playlists keep the song in daily circulation.",
      "Advertising, film, and event contexts make the track unusually reusable.",
      "Queen catalog demand links the song to a broader set of evergreen hits."
    ],
    "insight": "Don't Stop Me Now works as a catalog asset because the revenue story depends on replay durability, rights splits, and ownership context, not only on the original release year."
  },
  "hello": {
    "seoTitle": "How much money does Hello make per year?",
    "shortAnswer": "Hello by Adele is modeled at $610K-$1.8M/year on the artist side, before reading the separate gross-track and publishing context.",
    "breakdown": [
      "Streaming and catalog replay form the baseline annual revenue lane.",
      "Publishing and songwriter shares can matter materially when the writer-side participation is strong.",
      "Sync, social rediscovery, and playlist reuse can create spikes above the modeled baseline."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long Hello keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "Streaming scale and playlist inclusion remain the largest recurring drivers.",
      "A durable hook and broad familiarity help the song keep earning across catalog listening.",
      "Sync, social reuse, and seasonal spikes can lift the baseline."
    ],
    "insight": "Hello works as a catalog asset because the revenue story depends on replay durability, rights splits, and ownership context, not only on the original release year."
  },
  "smells-like-teen-spirit": {
    "seoTitle": "How much money does Smells Like Teen Spirit make per year?",
    "shortAnswer": "Smells Like Teen Spirit by Nirvana is modeled at $610K-$1.8M/year on the artist side, before reading the separate gross-track and publishing context.",
    "breakdown": [
      "Streaming and catalog replay form the baseline annual revenue lane.",
      "Publishing and songwriter shares can matter materially when the writer-side participation is strong.",
      "Sync, social rediscovery, and playlist reuse can create spikes above the modeled baseline."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long Smells Like Teen Spirit keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "Classic replay value and catalog streaming keep major rock songs relevant.",
      "Cultural familiarity supports long-tail listener demand.",
      "Sync placements and live-culture recognition help extend the song's revenue life."
    ],
    "insight": "Smells Like Teen Spirit works as a catalog asset because the revenue story depends on replay durability, rights splits, and ownership context, not only on the original release year."
  },
  "crazy-in-love": {
    "seoTitle": "How much money does Crazy in Love make per year?",
    "shortAnswer": "Crazy in Love by Beyonce is modeled at $550K-$1.7M/year on the artist side, before reading the separate gross-track and publishing context.",
    "breakdown": [
      "Streaming and catalog replay form the baseline annual revenue lane.",
      "Publishing and songwriter shares can matter materially when the writer-side participation is strong.",
      "Sync, social rediscovery, and playlist reuse can create spikes above the modeled baseline."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long Crazy in Love keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "Streaming scale and playlist inclusion remain the largest recurring drivers.",
      "A durable hook and broad familiarity help the song keep earning across catalog listening.",
      "Sync, social reuse, and seasonal spikes can lift the baseline."
    ],
    "insight": "Crazy in Love works as a catalog asset because the revenue story depends on replay durability, rights splits, and ownership context, not only on the original release year."
  },
  "feel-good-inc": {
    "seoTitle": "How much money does Feel Good Inc. make per year?",
    "shortAnswer": "Feel Good Inc. by Gorillaz is modeled at $550K-$1.7M/year on the artist side, before reading the separate gross-track and publishing context.",
    "breakdown": [
      "Streaming and catalog replay form the baseline annual revenue lane.",
      "Publishing and songwriter shares can matter materially when the writer-side participation is strong.",
      "Sync, social rediscovery, and playlist reuse can create spikes above the modeled baseline."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long Feel Good Inc. keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "Catalog streaming remains the main long-tail revenue source for recognizable rap tracks.",
      "Playlist placement and cultural recall help the song stay commercially active.",
      "Sampling, sync opportunities, and short-form rediscovery can extend earnings."
    ],
    "insight": "Feel Good Inc. works as a catalog asset because the revenue story depends on replay durability, rights splits, and ownership context, not only on the original release year."
  },
  "get-lucky": {
    "seoTitle": "How much money does Get Lucky make per year?",
    "shortAnswer": "Get Lucky by Daft Punk is modeled at $550K-$1.7M/year on the artist side, before reading the separate gross-track and publishing context.",
    "breakdown": [
      "Streaming and catalog replay form the baseline annual revenue lane.",
      "Publishing and songwriter shares can matter materially when the writer-side participation is strong.",
      "Sync, social rediscovery, and playlist reuse can create spikes above the modeled baseline."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long Get Lucky keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "Playlist and mood-based streaming support repeat listening over long periods.",
      "Steady niche demand and reissue interest can keep the track earning.",
      "Licensing and soundtrack-style use can materially improve the long tail."
    ],
    "insight": "Get Lucky works as a catalog asset because the revenue story depends on replay durability, rights splits, and ownership context, not only on the original release year."
  },
  "let-it-be": {
    "seoTitle": "How much money does Let It Be make per year?",
    "shortAnswer": "Let It Be by The Beatles is modeled at $550K-$1.7M/year on the artist side, before reading the separate gross-track and publishing context.",
    "breakdown": [
      "Streaming and catalog replay form the baseline annual revenue lane.",
      "Publishing and songwriter shares can matter materially when the writer-side participation is strong.",
      "Sync, social rediscovery, and playlist reuse can create spikes above the modeled baseline."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long Let It Be keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "Streaming scale and playlist inclusion remain the largest recurring drivers.",
      "A durable hook and broad familiarity help the song keep earning across catalog listening.",
      "Sync, social reuse, and seasonal spikes can lift the baseline."
    ],
    "insight": "Let It Be works as a catalog asset because the revenue story depends on replay durability, rights splits, and ownership context, not only on the original release year."
  },
  "stronger": {
    "seoTitle": "How much money does Stronger make per year?",
    "shortAnswer": "Stronger by Kanye West is modeled at $550K-$1.7M/year on the artist side, before reading the separate gross-track and publishing context.",
    "breakdown": [
      "Streaming and catalog replay form the baseline annual revenue lane.",
      "Publishing and songwriter shares can matter materially when the writer-side participation is strong.",
      "Sync, social rediscovery, and playlist reuse can create spikes above the modeled baseline."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long Stronger keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "Catalog streaming remains the main long-tail driver for recognizable rap tracks.",
      "Playlist placement and cultural recall help the song stay active.",
      "Sampling, sync use, and short-form rediscovery can extend earnings."
    ],
    "insight": "Stronger works as a catalog asset because the revenue story depends on replay durability, rights splits, and ownership context, not only on the original release year."
  },
  "umbrella": {
    "seoTitle": "How much money does Umbrella make per year?",
    "shortAnswer": "Umbrella by Rihanna is modeled at $550K-$1.7M/year on the artist side, before reading the separate gross-track and publishing context.",
    "breakdown": [
      "Streaming and catalog replay form the baseline annual revenue lane.",
      "Publishing and songwriter shares can matter materially when the writer-side participation is strong.",
      "Sync, social rediscovery, and playlist reuse can create spikes above the modeled baseline."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long Umbrella keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "Streaming scale and playlist inclusion remain the largest recurring drivers.",
      "A durable hook and broad familiarity help the song keep earning across catalog listening.",
      "Sync, social reuse, and seasonal spikes can lift the baseline."
    ],
    "insight": "Umbrella works as a catalog asset because the revenue story depends on replay durability, rights splits, and ownership context, not only on the original release year."
  },
  "i-will-always-love-you": {
    "seoTitle": "How much money does I Will Always Love You make per year?",
    "shortAnswer": "I Will Always Love You by Whitney Houston is modeled at $500K-$1.7M/year on the artist side, before reading the separate gross-track and publishing context.",
    "breakdown": [
      "Streaming and catalog replay form the baseline annual revenue lane.",
      "Publishing and songwriter shares can matter materially when the writer-side participation is strong.",
      "Sync, social rediscovery, and playlist reuse can create spikes above the modeled baseline."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long I Will Always Love You keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "The song remains a global streaming and catalog-ballad staple.",
      "Its Bodyguard association keeps soundtrack and film-linked discovery active.",
      "Weddings, tribute culture, and media reuse extend long-tail demand."
    ],
    "insight": "I Will Always Love You works as a catalog asset because the revenue story depends on replay durability, rights splits, and ownership context, not only on the original release year."
  },
  "thriller": {
    "seoTitle": "How much money does Thriller make per year?",
    "shortAnswer": "Thriller by Michael Jackson is modeled at $500K-$1.7M/year on the artist side, before reading the separate gross-track and publishing context.",
    "breakdown": [
      "Streaming and catalog replay form the baseline annual revenue lane.",
      "Publishing and songwriter shares can matter materially when the writer-side participation is strong.",
      "Sync, social rediscovery, and playlist reuse can create spikes above the modeled baseline."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long Thriller keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "seasonal replay spikes",
      "catalog streaming",
      "video-era cultural recognition"
    ],
    "insight": "Thriller works as a catalog asset because the revenue story depends on replay durability, rights splits, and ownership context, not only on the original release year."
  },
  "bad-guy": {
    "seoTitle": "How much money does Bad Guy make per year?",
    "shortAnswer": "Bad Guy by Billie Eilish is modeled at $500K-$1.5M/year on the artist side, before reading the separate gross-track and publishing context.",
    "breakdown": [
      "Streaming and catalog replay form the baseline annual revenue lane.",
      "Publishing and songwriter shares can matter materially when the writer-side participation is strong.",
      "Sync, social rediscovery, and playlist reuse can create spikes above the modeled baseline."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long Bad Guy keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "Streaming scale and playlist inclusion remain the largest recurring drivers.",
      "A durable hook and broad familiarity help the song keep earning across catalog listening.",
      "Sync, social reuse, and seasonal spikes can lift the baseline."
    ],
    "insight": "Bad Guy works as a catalog asset because the revenue story depends on replay durability, rights splits, and ownership context, not only on the original release year."
  },
  "california-love": {
    "seoTitle": "How much money does California Love make per year?",
    "shortAnswer": "California Love by 2Pac is modeled at $500K-$1.5M/year on the artist side, before reading the separate gross-track and publishing context.",
    "breakdown": [
      "Streaming and catalog replay form the baseline annual revenue lane.",
      "Publishing and songwriter shares can matter materially when the writer-side participation is strong.",
      "Sync, social rediscovery, and playlist reuse can create spikes above the modeled baseline."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long California Love keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "Streaming and catalog discovery keep the song generating recurring revenue.",
      "Playlist longevity supports steady repeat listening over time.",
      "Licensing and cultural familiarity can create additional earnings beyond baseline streams."
    ],
    "insight": "California Love works as a catalog asset because the revenue story depends on replay durability, rights splits, and ownership context, not only on the original release year."
  },
  "hey-jude": {
    "seoTitle": "How much money does Hey Jude make per year?",
    "shortAnswer": "Hey Jude by The Beatles is modeled at $500K-$1.5M/year on the artist side, before reading the separate gross-track and publishing context.",
    "breakdown": [
      "Streaming and catalog replay form the baseline annual revenue lane.",
      "Publishing and songwriter shares can matter materially when the writer-side participation is strong.",
      "Sync, social rediscovery, and playlist reuse can create spikes above the modeled baseline."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long Hey Jude keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "Streaming scale and playlist inclusion remain the largest recurring drivers.",
      "A durable hook and broad familiarity help the song keep earning across catalog listening.",
      "Sync, social reuse, and seasonal spikes can lift the baseline."
    ],
    "insight": "Hey Jude works as a catalog asset because the revenue story depends on replay durability, rights splits, and ownership context, not only on the original release year."
  },
  "livin-on-a-prayer": {
    "seoTitle": "How much money does Livin' on a Prayer make per year?",
    "shortAnswer": "Livin' on a Prayer by Bon Jovi is modeled at $500K-$1.5M/year on the artist side, before reading the separate gross-track and publishing context.",
    "breakdown": [
      "Streaming and catalog replay form the baseline annual revenue lane.",
      "Publishing and songwriter shares can matter materially when the writer-side participation is strong.",
      "Sync, social rediscovery, and playlist reuse can create spikes above the modeled baseline."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long Livin' on a Prayer keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "Classic replay value and catalog streaming keep major rock songs relevant.",
      "Cultural familiarity supports long-tail listener demand.",
      "Sync placements and live-culture recognition help extend the song's revenue life."
    ],
    "insight": "Livin' on a Prayer works as a catalog asset because the revenue story depends on replay durability, rights splits, and ownership context, not only on the original release year."
  },
  "someone-like-you": {
    "seoTitle": "How much money does Someone Like You make per year?",
    "shortAnswer": "Someone Like You by Adele is modeled at $500K-$1.5M/year on the artist side, before reading the separate gross-track and publishing context.",
    "breakdown": [
      "Streaming and catalog replay form the baseline annual revenue lane.",
      "Publishing and songwriter shares can matter materially when the writer-side participation is strong.",
      "Sync, social rediscovery, and playlist reuse can create spikes above the modeled baseline."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long Someone Like You keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "Streaming scale and playlist inclusion remain the largest recurring drivers.",
      "A durable hook and broad familiarity help the song keep earning across catalog listening.",
      "Sync, social reuse, and seasonal spikes can lift the baseline."
    ],
    "insight": "Someone Like You works as a catalog asset because the revenue story depends on replay durability, rights splits, and ownership context, not only on the original release year."
  },
  "sweet-child-o-mine": {
    "seoTitle": "How much money does Sweet Child O' Mine make per year?",
    "shortAnswer": "Sweet Child O' Mine by Guns N' Roses is modeled at $500K-$1.5M/year on the artist side, before reading the separate gross-track and publishing context.",
    "breakdown": [
      "Streaming and catalog replay form the baseline annual revenue lane.",
      "Publishing and songwriter shares can matter materially when the writer-side participation is strong.",
      "Sync, social rediscovery, and playlist reuse can create spikes above the modeled baseline."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long Sweet Child O' Mine keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "Classic replay value and catalog streaming keep major rock songs relevant.",
      "Cultural familiarity supports long-tail listener demand.",
      "Sync placements and live-culture recognition help extend the song's revenue life."
    ],
    "insight": "Sweet Child O' Mine works as a catalog asset because the revenue story depends on replay durability, rights splits, and ownership context, not only on the original release year."
  },
  "without-me": {
    "seoTitle": "How much money does Without Me make per year?",
    "shortAnswer": "Without Me by Eminem is modeled at $500K-$1.5M/year on the artist side, before reading the separate gross-track and publishing context.",
    "breakdown": [
      "Streaming and catalog replay form the baseline annual revenue lane.",
      "Publishing and songwriter shares can matter materially when the writer-side participation is strong.",
      "Sync, social rediscovery, and playlist reuse can create spikes above the modeled baseline."
    ],
    "lifetimeEstimate": "Lifetime value depends on how long Without Me keeps playlist, search, and catalog demand beyond the current annual modeled range.",
    "whyItStillMakesMoney": [
      "Catalog streaming remains the main long-tail driver for recognizable rap tracks.",
      "Playlist placement and cultural recall help the song stay active.",
      "Sampling, sync use, and short-form rediscovery can extend earnings."
    ],
    "insight": "Without Me works as a catalog asset because the revenue story depends on replay durability, rights splits, and ownership context, not only on the original release year."
  }
};
