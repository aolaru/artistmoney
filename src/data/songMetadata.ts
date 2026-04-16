export type SongMetadata = {
  album: string;
  year: number;
  meaningSummary?: string;
  revenueDrivers?: string[];
  relatedSongs?: string[];
};

export const songMetadata: Record<string, SongMetadata> = {
  "21-questions": { album: "Get Rich or Die Tryin'", year: 2003 },
  "505": { album: "Favourite Worst Nightmare", year: 2007 },
  alive: {
    album: "Ten",
    year: 1991,
    meaningSummary: "Alive turns family trauma into a huge rock chorus, which helps it survive as both a cathartic anthem and a catalog staple.",
    revenueDrivers: [
      "Classic-rock and grunge playlists keep the song in constant circulation.",
      "Pearl Jam's fan base still drives deep album and catalog listening.",
      "The song remains one of the band's signature live-era recordings."
    ],
    relatedSongs: ["even-flow", "black"]
  },
  "all-the-stars": { album: "Black Panther: The Album", year: 2018 },
  "an-ending-ascent": {
    album: "Apollo: Atmospheres and Soundtracks",
    year: 1983,
    meaningSummary: "An Ending (Ascent) has become a default shorthand for reflection, stillness, and cinematic distance.",
    revenueDrivers: [
      "Ambient playlists and focus listening create steady long-tail streams.",
      "The track's cinematic feel keeps it relevant for documentary and visual-media association."
    ],
    relatedSongs: ["music-for-airports-1-1", "baby-s-on-fire"]
  },
  "another-brick-in-the-wall": { album: "The Wall", year: 1979 },
  "anti-hero": { album: "Midnights", year: 2022 },
  "avril-14th": { album: "Drukqs", year: 2001 },
  "baby-s-on-fire": {
    album: "Here Come the Warm Jets",
    year: 1974,
    meaningSummary: "Baby's on Fire blends glam tension and art-rock absurdity, which keeps it culturally sticky for deep catalog listeners.",
    relatedSongs: ["an-ending-ascent", "music-for-airports-1-1"]
  },
  "bad-guy": { album: "When We All Fall Asleep, Where Do We Go?", year: 2019 },
  "big-poppa": { album: "Ready to Die", year: 1994 },
  "black-hole-sun": {
    album: "Superunknown",
    year: 1994,
    meaningSummary: "Black Hole Sun survives because its surreal writing and huge chorus still feel distinctive inside rock catalog listening.",
    revenueDrivers: [
      "It remains Soundgarden's most recognizable crossover hit.",
      "Grunge nostalgia and rock editorial playlists keep streams active.",
      "The song's iconic video and chorus support long-term cultural recall."
    ],
    relatedSongs: ["fell-on-black-days", "outshined"]
  },
  black: {
    album: "Ten",
    year: 1991,
    meaningSummary: "Black turns emotional collapse into a lasting singalong, which gives it unusually strong replay value for a non-single."
  },
  "blank-space": { album: "1989", year: 2014 },
  "blinding-lights": { album: "After Hours", year: 2019 },
  "boys-dont-cry": { album: "Boys Don't Cry", year: 1979 },
  "break-my-soul": { album: "Renaissance", year: 2022 },
  "california-love": { album: "All Eyez on Me", year: 1995 },
  "champagne-supernova": { album: "(What's the Story) Morning Glory?", year: 1995 },
  changes: { album: "Greatest Hits", year: 1998 },
  "come-as-you-are": { album: "Nevermind", year: 1991 },
  "come-together": { album: "Abbey Road", year: 1969 },
  "comfortably-numb": { album: "The Wall", year: 1979 },
  "crazy-in-love": { album: "Dangerously in Love", year: 2003 },
  "dear-mama": { album: "Me Against the World", year: 1995 },
  diamonds: { album: "Unapologetic", year: 2012 },
  dna: { album: "DAMN.", year: 2017 },
  "do-i-wanna-know": { album: "AM", year: 2013 },
  "dont-look-back-in-anger": { album: "(What's the Story) Morning Glory?", year: 1995 },
  "drop-it-like-its-hot": { album: "R&G (Rhythm & Gangsta): The Masterpiece", year: 2004 },
  "even-flow": {
    album: "Ten",
    year: 1991,
    meaningSummary: "Even Flow holds value because its riff, groove, and familiarity make it a permanent fixture in rock playlist culture.",
    relatedSongs: ["alive", "black"]
  },
  "everybody-hurts": {
    album: "Automatic for the People",
    year: 1992,
    meaningSummary: "Everybody Hurts remains commercially useful because it is immediately legible as a song about endurance and emotional relief.",
    relatedSongs: ["losing-my-religion", "the-one-i-love"]
  },
  "everything-i-wanted": { album: "Everything I Wanted", year: 2019 },
  "everything-you-do-is-a-balloon": {
    album: "Hi Scores",
    year: 1996,
    meaningSummary: "Everything You Do Is a Balloon keeps circulating because it fits nostalgic, dreamy, and downtempo listening habits.",
    relatedSongs: ["dayvan-cowboy", "roygbiv"]
  },
  "fell-on-black-days": {
    album: "Superunknown",
    year: 1994,
    meaningSummary: "Fell on Black Days still resonates because it translates depression into a rock song people keep returning to.",
    relatedSongs: ["black-hole-sun", "outshined"]
  },
  "friday-im-in-love": { album: "Wish", year: 1992 },
  "gangstas-paradise": { album: "Gangsta's Paradise", year: 1995 },
  "gantz-graf": {
    album: "Gantz Graf",
    year: 2002,
    meaningSummary: "Gantz Graf remains a reference point for experimental electronic production and visual-era digital aesthetics.",
    relatedSongs: ["rae", "vl-al-5"]
  },
  "gin-and-juice": { album: "Doggystyle", year: 1993 },
  "gods-plan": { album: "Scorpion", year: 2018 },
  "get-lucky": {
    album: "Random Access Memories",
    year: 2013,
    meaningSummary: "Get Lucky still earns because it works as both a retro-pop anthem and a modern streaming evergreen.",
    revenueDrivers: [
      "Global playlist familiarity keeps the song near mainstream catalog scale.",
      "Its crossover appeal supports repeat use in pop, dance, and nostalgia contexts.",
      "Strong writer and performer recognition make the song commercially durable."
    ],
    relatedSongs: ["one-more-time", "harder-better-faster-stronger"]
  },
  halo: { album: "I Am... Sasha Fierce", year: 2008 },
  "happier-than-ever": { album: "Happier Than Ever", year: 2021 },
  "hey-jude": { album: "Hey Jude", year: 1968 },
  "hotline-bling": { album: "Views", year: 2015 },
  humble: { album: "DAMN.", year: 2017 },
  hypnotize: { album: "Life After Death", year: 1997 },
  "in-da-club": { album: "Get Rich or Die Tryin'", year: 2003 },
  "in-this-shirt": {
    album: "Mirror Mirror",
    year: 2010,
    meaningSummary: "In This Shirt keeps traveling because it compresses grief, intimacy, and cinematic melancholy into a track that works well in short-form edits.",
    revenueDrivers: [
      "TikTok-driven rediscovery pushed the song into new streaming cycles.",
      "Its emotional tone fits melancholy, cinematic, and reflective playlists.",
      "The song's dramatic build gives it strong sync-style appeal."
    ],
    relatedSongs: ["gangstas-paradise"]
  },
  juicy: { album: "Ready to Die", year: 1994 },
  "just-like-heaven": { album: "Kiss Me, Kiss Me, Kiss Me", year: 1987 },
  kashmir: { album: "Physical Graffiti", year: 1975 },
  "let-it-be": { album: "Let It Be", year: 1970 },
  lithium: { album: "Nevermind", year: 1991 },
  "lose-yourself": {
    album: "8 Mile",
    year: 2002,
    meaningSummary: "Lose Yourself still dominates because it is both a motivational anthem and a film-linked rap classic.",
    revenueDrivers: [
      "The 8 Mile connection keeps sync and soundtrack value unusually high.",
      "Playlist utility extends from workout playlists to nostalgia rap sets.",
      "The song remains one of Eminem's most replayed global hits."
    ],
    relatedSongs: ["stan", "without-me"]
  },
  "losing-my-religion": {
    album: "Out of Time",
    year: 1991,
    meaningSummary: "Losing My Religion still earns because its mandolin hook and emotional ambiguity remain instantly recognizable.",
    relatedSongs: ["everybody-hurts", "the-one-i-love"]
  },
  "man-in-the-box": {
    album: "Facelift",
    year: 1990,
    meaningSummary: "Man in the Box holds value because it sounds definitive for Alice In Chains and for early grunge radio.",
    relatedSongs: ["would", "rooster"]
  },
  "music-for-airports-1-1": {
    album: "Music for Airports",
    year: 1978,
    meaningSummary: "Music for Airports 1/1 keeps earning because it fits focus, ambient, and wellness-style listening environments.",
    relatedSongs: ["an-ending-ascent", "baby-s-on-fire"]
  },
  "one-dance": { album: "Views", year: 2016 },
  "one-more-time": {
    album: "Discovery",
    year: 2000,
    meaningSummary: "One More Time keeps earning because it still works as a universal celebration song across generations.",
    relatedSongs: ["get-lucky", "harder-better-faster-stronger"]
  },
  outshined: {
    album: "Badmotorfinger",
    year: 1991,
    meaningSummary: "Outshined continues to matter because it captures Soundgarden's heavier side without losing hook value.",
    relatedSongs: ["black-hole-sun", "fell-on-black-days"]
  },
  "p-i-m-p": { album: "Get Rich or Die Tryin'", year: 2003 },
  "save-your-tears": { album: "After Hours", year: 2020 },
  "shake-it-off": { album: "1989", year: 2014 },
  "someone-like-you": {
    album: "21",
    year: 2011,
    meaningSummary: "Someone Like You remains a durable earner because heartbreak ballads with clear emotional framing have unusually long shelf lives.",
    relatedSongs: ["hello"]
  },
  "smells-like-teen-spirit": { album: "Nevermind", year: 1991 },
  "stairway-to-heaven": { album: "Led Zeppelin IV", year: 1971 },
  stan: { album: "The Marshall Mathers LP", year: 2000 },
  starboy: {
    album: "Starboy",
    year: 2016,
    meaningSummary: "Starboy keeps generating streams because it bridges pop, R&B, and playlist-friendly sleekness at global scale.",
    relatedSongs: ["blinding-lights", "save-your-tears"]
  },
  umbrella: { album: "Good Girl Gone Bad", year: 2007 },
  "vl-al-5": {
    album: "Amber",
    year: 1994,
    meaningSummary: "VL AL 5 continues to move through specialist listening because it fits long-form electronic catalog sessions.",
    relatedSongs: ["rae", "gantz-graf"]
  },
  "who-am-i-whats-my-name": { album: "Doggystyle", year: 1993 },
  "whole-lotta-love": { album: "Led Zeppelin II", year: 1969 },
  "why-d-you-only-call-me-when-youre-high": { album: "AM", year: 2013 },
  windowlicker: { album: "Windowlicker", year: 1999 },
  "wish-you-were-here": { album: "Wish You Were Here", year: 1975 },
  "without-me": { album: "The Eminem Show", year: 2002 },
  wonderwall: {
    album: "(What's the Story) Morning Glory?",
    year: 1995,
    meaningSummary: "Wonderwall still earns because it sits at the intersection of nostalgia, singalong familiarity, and perpetual playlist utility.",
    relatedSongs: ["dont-look-back-in-anger", "champagne-supernova"]
  },
  work: { album: "ANTI", year: 2016 },
  would: {
    album: "Dirt",
    year: 1992,
    meaningSummary: "Would? stays active because it remains one of Alice In Chains' most emotionally sharp and recognizable songs.",
    relatedSongs: ["man-in-the-box", "rooster"]
  },
  creep: { album: "Pablo Honey", year: 1992 },
  "dayvan-cowboy": { album: "The Campfire Headphase", year: 2005 },
  "fix-you": { album: "X&Y", year: 2005 },
  "harder-better-faster-stronger": { album: "Discovery", year: 2001 },
  hello: { album: "25", year: 2015 },
  "karma-police": { album: "OK Computer", year: 1997 },
  power: { album: "My Beautiful Dark Twisted Fantasy", year: 2010 },
  rae: { album: "Amber", year: 1994 },
  rooster: { album: "Dirt", year: 1992 },
  roygbiv: { album: "Music Has the Right to Children", year: 1998 },
  "shook-ones-pt-ii": { album: "The Infamous", year: 1995 },
  "still-dre": { album: "2001", year: 1999 },
  stronger: { album: "Graduation", year: 2007 },
  "survival-of-the-fittest": { album: "The Infamous", year: 1995 },
  "the-next-episode": { album: "2001", year: 1999 },
  "the-one-i-love": { album: "Document", year: 1987 },
  xtal: { album: "Selected Ambient Works 85-92", year: 1992 }
  ,
  yellow: { album: "Parachutes", year: 2000 }
};
