export type AlbumTrack = {
  discNumber?: number;
  number?: number;
  title: string;
  durationMs?: number;
};

export type AlbumMetadata = {
  releaseDate?: string;
  label?: string;
  trackCount?: number;
  editionNote?: string;
  fullTracklist?: AlbumTrack[];
  links?: {
    spotify?: string;
    appleMusic?: string;
    youtubeMusic?: string;
  };
};

export const albumMetadata: Record<string, AlbumMetadata> = {
  "2pac-all-eyez-on-me": {
    "releaseDate": "1996-02-13",
    "label": "Interscope Records",
    "trackCount": 27,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Ambitionz Az A Ridah",
        "durationMs": 278387
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "All About U (feat. Yani Hadati, Snoop Doggy Dogg, Nate Dogg & Fatal)",
        "durationMs": 276813
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Skandalouz (feat. Nate Dogg)",
        "durationMs": 248693
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Got My Mind Made Up (feat. Daz Dillinger, Method Man, Redman & Kurupt)",
        "durationMs": 312640
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "How Do U Want It (feat. K-Ci & JoJo)",
        "durationMs": 287547
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "2 Of Amerikaz Most Wanted (feat. Snoop Dogg)",
        "durationMs": 246533
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "No More Pain",
        "durationMs": 374800
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Heartz Of Men",
        "durationMs": 283373
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Life Goes On",
        "durationMs": 301600
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Only God Can Judge Me (feat. Rappin' 4-Tay)",
        "durationMs": 296907
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Tradin' War Stories (feat. Storm, C-Bo, Outlawz & CPO)",
        "durationMs": 329827
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "California Love (feat. Dr. Dre & Roger Troutman) [Remix]",
        "durationMs": 383573
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "I Ain't Mad At Cha (feat. Danny Boy)",
        "durationMs": 293667
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "What's Ya Phone # (feat. Danny Boy)",
        "durationMs": 309520
      },
      {
        "discNumber": 2,
        "number": 1,
        "title": "Can't C Me",
        "durationMs": 330827
      },
      {
        "discNumber": 2,
        "number": 2,
        "title": "Shorty Wanna Be A Thug",
        "durationMs": 231653
      },
      {
        "discNumber": 2,
        "number": 3,
        "title": "Holla At Me",
        "durationMs": 295400
      },
      {
        "discNumber": 2,
        "number": 4,
        "title": "Wonda Why They Call U Bytch",
        "durationMs": 258467
      },
      {
        "discNumber": 2,
        "number": 5,
        "title": "When We Ride (feat. Outlaw Immortals)",
        "durationMs": 309587
      },
      {
        "discNumber": 2,
        "number": 6,
        "title": "Thug Passion (feat. Jewell, Storm & Outlawz)",
        "durationMs": 307653
      },
      {
        "discNumber": 2,
        "number": 7,
        "title": "Picture Me Rollin' (feat. Big Syke, CPO & Danny Boy)",
        "durationMs": 314707
      },
      {
        "discNumber": 2,
        "number": 8,
        "title": "Check Out Time",
        "durationMs": 279067
      },
      {
        "discNumber": 2,
        "number": 9,
        "title": "Ratha Be Ya N***a (feat. Richie Rich)",
        "durationMs": 253973
      },
      {
        "discNumber": 2,
        "number": 10,
        "title": "All Eyez On Me (feat. Big Syke)",
        "durationMs": 307773
      },
      {
        "discNumber": 2,
        "number": 11,
        "title": "Run Tha Streetz (feat. Storm, Mutah & Michelle)",
        "durationMs": 316400
      },
      {
        "discNumber": 2,
        "number": 12,
        "title": "Ain't Hard 2 Find (feat. E-40, Richie Rich, B-Legit & C-Bo)",
        "durationMs": 268573
      },
      {
        "discNumber": 2,
        "number": 13,
        "title": "Heaven Ain't Hard 2 Find",
        "durationMs": 237960
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/2Pac%20All%20Eyez%20on%20Me",
      "appleMusic": "https://music.apple.com/us/album/all-eyez-on-me/1588492978?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=2Pac%20All%20Eyez%20on%20Me"
    }
  },
  "2pac-greatest-hits": {
    "releaseDate": "1998-01-01",
    "trackCount": 25,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Keep Ya Head Up",
        "durationMs": 263200
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "2 of Amerikaz Most Wanted (feat. Snoop Doggy Dogg)",
        "durationMs": 254467
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Temptations",
        "durationMs": 268347
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "God Bless the Dead (1998 Greatest Hits) [Edit]",
        "durationMs": 264160
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Hail Mary",
        "durationMs": 313560
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Me Against the World",
        "durationMs": 278347
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "How Do U Want It (feat. K-Ci & JoJo) [Edit]",
        "durationMs": 239160
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "So Many Tears",
        "durationMs": 237507
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Unconditional Love (1998 Greatest Hits)",
        "durationMs": 238320
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Trapped",
        "durationMs": 284720
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Life Goes On",
        "durationMs": 300667
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Hit 'Em Up",
        "durationMs": 303573
      },
      {
        "discNumber": 2,
        "number": 1,
        "title": "Troublesome '96 (1998 Greatest Hits) [Edit]",
        "durationMs": 276800
      },
      {
        "discNumber": 2,
        "number": 2,
        "title": "Brenda's Got a Baby",
        "durationMs": 233560
      },
      {
        "discNumber": 2,
        "number": 3,
        "title": "I Ain't Mad At Cha (feat. Danny Boy)",
        "durationMs": 295813
      },
      {
        "discNumber": 2,
        "number": 4,
        "title": "I Get Around",
        "durationMs": 257533
      },
      {
        "discNumber": 2,
        "number": 5,
        "title": "Changes (1998 Greatest Hits) [Edit] [feat. Talent]",
        "durationMs": 268773
      },
      {
        "discNumber": 2,
        "number": 6,
        "title": "California Love (feat. Roger Troutman & Dr. Dre)",
        "durationMs": 285027
      },
      {
        "discNumber": 2,
        "number": 7,
        "title": "Picture Me Rollin' (feat. Danny Boy, Syke & CPO)",
        "durationMs": 315040
      },
      {
        "discNumber": 2,
        "number": 8,
        "title": "How Long Will They Mourn Me? (feat. Nate Dogg)",
        "durationMs": 231467
      },
      {
        "discNumber": 2,
        "number": 9,
        "title": "Toss It Up",
        "durationMs": 282093
      },
      {
        "discNumber": 2,
        "number": 10,
        "title": "Dear Mama",
        "durationMs": 278427
      },
      {
        "discNumber": 2,
        "number": 11,
        "title": "All About U (feat. Dru Down, Top Dogg & Nate Dogg)",
        "durationMs": 273200
      },
      {
        "discNumber": 2,
        "number": 12,
        "title": "To Live and Die In L.A.",
        "durationMs": 272933
      },
      {
        "discNumber": 2,
        "number": 13,
        "title": "Heartz of Men",
        "durationMs": 281160
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/2Pac%20Greatest%20Hits",
      "appleMusic": "https://music.apple.com/us/album/greatest-hits/1440661662?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=2Pac%20Greatest%20Hits"
    }
  },
  "2pac-me-against-the-world": {
    "releaseDate": "1995",
    "links": {
      "spotify": "https://open.spotify.com/search/2Pac%20Me%20Against%20the%20World",
      "youtubeMusic": "https://music.youtube.com/search?q=2Pac%20Me%20Against%20the%20World"
    }
  },
  "50-cent-get-rich-or-die-tryin": {
    "releaseDate": "2003-02-06",
    "label": "Shady Records/Aftermath Records/Interscope Records",
    "trackCount": 18,
    "editionNote": "Get Rich or Die Tryin' (Bonus Track Version)",
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Intro",
        "durationMs": 6223
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "What Up Gangsta",
        "durationMs": 179493
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Patiently Waiting (feat. Eminem)",
        "durationMs": 288880
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Many Men (Wish Death)",
        "durationMs": 252253
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "In da Club",
        "durationMs": 193467
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "High All the Time",
        "durationMs": 269333
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "If I Can't",
        "durationMs": 196293
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Blood Hound (feat. Young Buck)",
        "durationMs": 240187
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Back Down",
        "durationMs": 243107
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "P.I.M.P.",
        "durationMs": 249400
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Like My Style (feat. Tony Yayo)",
        "durationMs": 193373
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Poor Lil Rich",
        "durationMs": 199093
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "21 Questions (feat. Nate Dogg)",
        "durationMs": 224400
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Don't Push Me (feat. Lloyd Banks & Eminem)",
        "durationMs": 248973
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "Gotta Make It to Heaven",
        "durationMs": 240560
      },
      {
        "discNumber": 1,
        "number": 16,
        "title": "Wanksta (Soundtrack Version)",
        "durationMs": 219533
      },
      {
        "discNumber": 1,
        "number": 17,
        "title": "U Not Like Me",
        "durationMs": 255707
      },
      {
        "discNumber": 1,
        "number": 18,
        "title": "Life's On the Line",
        "durationMs": 218493
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/50%20Cent%20Get%20Rich%20or%20Die%20Tryin'",
      "appleMusic": "https://music.apple.com/us/album/get-rich-or-die-tryin-bonus-track-version/1440907378?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=50%20Cent%20Get%20Rich%20or%20Die%20Tryin'"
    }
  },
  "adele-21": {
    "releaseDate": "2011-01-24",
    "label": "XL Recordings Ltd",
    "trackCount": 12,
    "contextNote": "21 is a useful album benchmark because its tracked songs connect modern streaming scale with old-fashioned album durability: a compact vocal record that still behaves like a catalog blockbuster.",
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Rolling in the Deep",
        "durationMs": 228093
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Rumour Has It",
        "durationMs": 223267
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Turning Tables",
        "durationMs": 250000
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Don't You Remember",
        "durationMs": 243200
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Set Fire to the Rain",
        "durationMs": 242974
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "He Won't Go",
        "durationMs": 278040
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Take It All",
        "durationMs": 228293
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "I'll Be Waiting",
        "durationMs": 241351
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "One and Only",
        "durationMs": 348227
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Lovesong",
        "durationMs": 316240
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Someone Like You",
        "durationMs": 285240
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "I Found a Boy",
        "durationMs": 217339
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Adele%2021",
      "appleMusic": "https://music.apple.com/us/album/21/1544491232?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Adele%2021"
    }
  },
  "alice-in-chains-dirt": {
    "releaseDate": "1992",
    "links": {
      "spotify": "https://open.spotify.com/search/Alice%20In%20Chains%20Dirt",
      "youtubeMusic": "https://music.youtube.com/search?q=Alice%20In%20Chains%20Dirt"
    }
  },
  "alice-in-chains-facelift": {
    "releaseDate": "1990",
    "links": {
      "spotify": "https://open.spotify.com/search/Alice%20In%20Chains%20Facelift",
      "youtubeMusic": "https://music.youtube.com/search?q=Alice%20In%20Chains%20Facelift"
    }
  },
  "aphex-twin-drukqs": {
    "releaseDate": "2001-10-22",
    "label": "Warp Records Limited",
    "trackCount": 30,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Jynweythek",
        "durationMs": 143880
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Vordhosbn",
        "durationMs": 291387
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Kladfvgbung Mischk",
        "durationMs": 126653
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Omgyjya-Switch7",
        "durationMs": 292480
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Strotha Tynhe",
        "durationMs": 132160
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Gwely Mernans",
        "durationMs": 308107
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Bbydhyonchord",
        "durationMs": 153320
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "C**k/ver10",
        "durationMs": 318333
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Avril 14th",
        "durationMs": 125520
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Mt Saint Michel + Saint Michaels Mount",
        "durationMs": 490413
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Gwarek2",
        "durationMs": 406853
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Orban Eq Trx 4",
        "durationMs": 95013
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Aussois",
        "durationMs": 13013
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Hy a Scullyas Lyf Adhagrow",
        "durationMs": 134707
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "Kesson Dalek",
        "durationMs": 81107
      },
      {
        "discNumber": 1,
        "number": 16,
        "title": "54 Cymru Beats",
        "durationMs": 366907
      },
      {
        "discNumber": 1,
        "number": 17,
        "title": "Btoum-Roumada",
        "durationMs": 118427
      },
      {
        "discNumber": 1,
        "number": 18,
        "title": "Lornaderek",
        "durationMs": 31093
      },
      {
        "discNumber": 1,
        "number": 19,
        "title": "QKThr",
        "durationMs": 87467
      },
      {
        "discNumber": 1,
        "number": 20,
        "title": "Meltphace 6",
        "durationMs": 384107
      },
      {
        "discNumber": 1,
        "number": 21,
        "title": "Bit 4",
        "durationMs": 25333
      },
      {
        "discNumber": 1,
        "number": 22,
        "title": "Prep Gwarek 36",
        "durationMs": 79333
      },
      {
        "discNumber": 1,
        "number": 23,
        "title": "Father",
        "durationMs": 57120
      },
      {
        "discNumber": 1,
        "number": 24,
        "title": "Taking Control",
        "durationMs": 434013
      },
      {
        "discNumber": 1,
        "number": 25,
        "title": "Petiatil Cx Htdui",
        "durationMs": 131347
      },
      {
        "discNumber": 1,
        "number": 26,
        "title": "Ruglen Holon",
        "durationMs": 109280
      },
      {
        "discNumber": 1,
        "number": 27,
        "title": "Afx237 v.7",
        "durationMs": 263080
      },
      {
        "discNumber": 1,
        "number": 28,
        "title": "Ziggomatic 17",
        "durationMs": 515347
      },
      {
        "discNumber": 1,
        "number": 29,
        "title": "Beskhu3epnm",
        "durationMs": 130267
      },
      {
        "discNumber": 1,
        "number": 30,
        "title": "Nanou2",
        "durationMs": 205187
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Aphex%20Twin%20Drukqs",
      "appleMusic": "https://music.apple.com/us/album/drukqs/282559693?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Aphex%20Twin%20Drukqs"
    }
  },
  "aphex-twin-selected-ambient-works-85-92": {
    "releaseDate": "1992-02-12",
    "label": "R&S Records",
    "trackCount": 13,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Xtal",
        "durationMs": 293752
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Tha",
        "durationMs": 547133
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Pulsewidth",
        "durationMs": 228053
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Ageispolis",
        "durationMs": 323187
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "I",
        "durationMs": 77347
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Green Calx",
        "durationMs": 365160
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Heliosphan",
        "durationMs": 293800
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "We Are the Music Makers",
        "durationMs": 463520
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Schottkey 7th Path",
        "durationMs": 308720
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Ptolemy",
        "durationMs": 434307
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Hedphelym",
        "durationMs": 363920
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Delphium",
        "durationMs": 329267
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Actium",
        "durationMs": 455000
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Aphex%20Twin%20Selected%20Ambient%20Works%2085-92",
      "appleMusic": "https://music.apple.com/us/album/selected-ambient-works-85-92/1668862636?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Aphex%20Twin%20Selected%20Ambient%20Works%2085-92"
    }
  },
  "aphex-twin-windowlicker": {
    "releaseDate": "1999-03-22",
    "label": "Warp Records",
    "trackCount": 3,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Windowlicker",
        "durationMs": 365640
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Formula",
        "durationMs": 347080
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Nannou",
        "durationMs": 255773
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Aphex%20Twin%20Windowlicker",
      "appleMusic": "https://music.apple.com/us/album/windowlicker-ep/281953326?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Aphex%20Twin%20Windowlicker"
    }
  },
  "arctic-monkeys-am": {
    "releaseDate": "2013-09-09",
    "label": "Domino Recording Co Ltd",
    "trackCount": 12,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Do I Wanna Know?",
        "durationMs": 272394
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "R U Mine?",
        "durationMs": 201726
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "One for the Road",
        "durationMs": 206052
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Arabella",
        "durationMs": 207357
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "I Want It All",
        "durationMs": 184350
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "No. 1 Party Anthem",
        "durationMs": 243060
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Mad Sounds",
        "durationMs": 215064
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Fireside",
        "durationMs": 181034
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Why'd You Only Call Me When You're High?",
        "durationMs": 161125
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Snap Out of It",
        "durationMs": 192889
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Knee Socks",
        "durationMs": 257563
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "I Wanna Be Yours",
        "durationMs": 184019
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Arctic%20Monkeys%20AM",
      "appleMusic": "https://music.apple.com/us/album/am/663097964?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Arctic%20Monkeys%20AM"
    }
  },
  "arctic-monkeys-favourite-worst-nightmare": {
    "releaseDate": "2007",
    "links": {
      "spotify": "https://open.spotify.com/search/Arctic%20Monkeys%20Favourite%20Worst%20Nightmare",
      "youtubeMusic": "https://music.youtube.com/search?q=Arctic%20Monkeys%20Favourite%20Worst%20Nightmare"
    }
  },
  "autechre-amber": {
    "releaseDate": "1994-11-07",
    "label": "Warp Records Limited",
    "trackCount": 11,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Foil",
        "durationMs": 364733
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Montreal",
        "durationMs": 435627
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Silverside",
        "durationMs": 331067
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Slip",
        "durationMs": 381107
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Glitch",
        "durationMs": 375800
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Piezo",
        "durationMs": 480533
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Nine",
        "durationMs": 220200
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Further",
        "durationMs": 607027
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Yulquen",
        "durationMs": 397000
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Nil",
        "durationMs": 468800
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Teartear",
        "durationMs": 405773
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Autechre%20Amber",
      "appleMusic": "https://music.apple.com/us/album/amber/281074742?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Autechre%20Amber"
    }
  },
  "autechre-gantz-graf": {
    "releaseDate": "2002-08-05",
    "label": "Warp Records Limited",
    "trackCount": 3,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Gantz Graf",
        "durationMs": 238400
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Dial.",
        "durationMs": 377133
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Cap.IV",
        "durationMs": 542200
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Autechre%20Gantz%20Graf",
      "appleMusic": "https://music.apple.com/us/album/gantz-graf-ep/305116799?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Autechre%20Gantz%20Graf"
    }
  },
  "beyonce-dangerously-in-love": {
    "releaseDate": "2003-06-23",
    "label": "J Records",
    "trackCount": 15,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Crazy in Love (feat. JAŸ-Z)",
        "durationMs": 236133
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Naughty Girl",
        "durationMs": 208573
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Baby Boy (feat. Sean Paul)",
        "durationMs": 244827
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Hip Hop Star (feat. Big Boi & Sleepy Brown)",
        "durationMs": 222600
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Be With You",
        "durationMs": 260200
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Me, Myself and I",
        "durationMs": 301133
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Yes",
        "durationMs": 259067
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Signs (feat. Missy Elliott)",
        "durationMs": 298200
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Speechless",
        "durationMs": 360493
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "That's How You Like It (feat. JAŸ-Z)",
        "durationMs": 219200
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "The Closer I Get to You (with Beyoncé)",
        "durationMs": 297733
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Dangerously in Love 2",
        "durationMs": 293045
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Beyoncé Interlude",
        "durationMs": 16373
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Gift from Virgo",
        "durationMs": 163933
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "Daddy",
        "durationMs": 298333
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Beyonce%20Dangerously%20in%20Love",
      "appleMusic": "https://music.apple.com/us/album/dangerously-in-love/201274359?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Beyonce%20Dangerously%20in%20Love"
    }
  },
  "beyonce-i-am-sasha-fierce": {
    "releaseDate": "2008-11-12",
    "label": "SONY BMG MUSIC ENTERTAINMENT",
    "trackCount": 12,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "If I Were a Boy",
        "durationMs": 249147
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Halo",
        "durationMs": 261640
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Disappear",
        "durationMs": 267453
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Broken-Hearted Girl",
        "durationMs": 277627
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Ave Maria",
        "durationMs": 222160
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Satellites",
        "durationMs": 186853
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Save The Hero",
        "durationMs": 273880
      },
      {
        "discNumber": 2,
        "number": 1,
        "title": "Single Ladies (Put a Ring on It)",
        "durationMs": 193213
      },
      {
        "discNumber": 2,
        "number": 2,
        "title": "Radio",
        "durationMs": 218787
      },
      {
        "discNumber": 2,
        "number": 3,
        "title": "Diva",
        "durationMs": 200613
      },
      {
        "discNumber": 2,
        "number": 4,
        "title": "Sweet Dreams",
        "durationMs": 208067
      },
      {
        "discNumber": 2,
        "number": 5,
        "title": "Video Phone",
        "durationMs": 215307
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Beyonce%20I%20Am...%20Sasha%20Fierce",
      "appleMusic": "https://music.apple.com/us/album/i-am-sasha-fierce/296016891?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Beyonce%20I%20Am...%20Sasha%20Fierce"
    }
  },
  "beyonce-renaissance": {
    "releaseDate": "2022-07-29",
    "label": "Columbia Records",
    "trackCount": 16,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "I'M THAT GIRL",
        "durationMs": 208014
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "COZY",
        "durationMs": 210372
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "ALIEN SUPERSTAR",
        "durationMs": 215460
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "CUFF IT",
        "durationMs": 225389
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "ENERGY (feat. BEAM)",
        "durationMs": 116727
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "BREAK MY SOUL",
        "durationMs": 278282
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "CHURCH GIRL",
        "durationMs": 224473
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "PLASTIC OFF THE SOFA",
        "durationMs": 254319
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "VIRGO'S GROOVE",
        "durationMs": 368758
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "MOVE (feat. Grace Jones & Tems)",
        "durationMs": 203383
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "HEATED",
        "durationMs": 260771
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "THIQUE",
        "durationMs": 244792
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "ALL UP IN YOUR MIND",
        "durationMs": 169820
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "AMERICA HAS A PROBLEM",
        "durationMs": 198898
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "PURE/HONEY",
        "durationMs": 288255
      },
      {
        "discNumber": 1,
        "number": 16,
        "title": "SUMMER RENAISSANCE",
        "durationMs": 273998
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Beyonce%20Renaissance",
      "appleMusic": "https://music.apple.com/us/album/renaissance/1636789969?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Beyonce%20Renaissance"
    }
  },
  "bee-gees-saturday-night-fever": {
    "releaseDate": "1977-11-15",
    "label": "RSO Records",
    "trackCount": 17,
    "editionNote": "Original motion picture soundtrack sequence",
    "contextNote": "Saturday Night Fever is a soundtrack-scale catalog page: Bee Gees songs drive the core economics, but the release also captures how film, disco culture, and compilation sequencing can extend revenue beyond one artist page.",
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Stayin' Alive"
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "How Deep Is Your Love"
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Night Fever"
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "More Than a Woman"
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "If I Can't Have You"
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "A Fifth of Beethoven"
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "More Than a Woman"
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Manhattan Skyline"
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Calypso Breakdown"
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Night on Disco Mountain"
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Open Sesame"
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Jive Talkin'"
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "You Should Be Dancing"
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Boogie Shoes"
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "Salsation"
      },
      {
        "discNumber": 1,
        "number": 16,
        "title": "K-Jee"
      },
      {
        "discNumber": 1,
        "number": 17,
        "title": "Disco Inferno"
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Bee%20Gees%20Saturday%20Night%20Fever",
      "appleMusic": "https://music.apple.com/us/search?term=Bee%20Gees%20Saturday%20Night%20Fever",
      "youtubeMusic": "https://music.youtube.com/search?q=Bee%20Gees%20Saturday%20Night%20Fever"
    }
  },
  "billie-eilish-everything-i-wanted": {
    "releaseDate": "2019-11-13",
    "label": "Darkroom/Interscope Records",
    "trackCount": 1,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "everything i wanted",
        "durationMs": 245426
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Billie%20Eilish%20Everything%20I%20Wanted",
      "appleMusic": "https://music.apple.com/us/album/everything-i-wanted-single/1487502456?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Billie%20Eilish%20Everything%20I%20Wanted"
    }
  },
  "billie-eilish-happier-than-ever": {
    "releaseDate": "2021-07-30",
    "label": "Darkroom/Interscope Records",
    "trackCount": 16,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Getting Older",
        "durationMs": 244221
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "I Didn't Change My Number",
        "durationMs": 158463
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Billie Bossa Nova",
        "durationMs": 196731
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "my future",
        "durationMs": 210005
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Oxytocin",
        "durationMs": 210233
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "GOLDWING",
        "durationMs": 151537
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Lost Cause",
        "durationMs": 212496
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Halley's Comet",
        "durationMs": 234761
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Not My Responsibility",
        "durationMs": 227680
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "OverHeated",
        "durationMs": 214059
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Everybody Dies",
        "durationMs": 206623
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Your Power",
        "durationMs": 245897
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "NDA",
        "durationMs": 195777
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Therefore I Am",
        "durationMs": 173539
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "Happier Than Ever",
        "durationMs": 298899
      },
      {
        "discNumber": 1,
        "number": 16,
        "title": "Male Fantasy",
        "durationMs": 194887
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Billie%20Eilish%20Happier%20Than%20Ever",
      "appleMusic": "https://music.apple.com/us/album/happier-than-ever/1564530526?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Billie%20Eilish%20Happier%20Than%20Ever"
    }
  },
  "billie-eilish-when-we-all-fall-asleep-where-do-we-go": {
    "releaseDate": "2019-03-29",
    "label": "Darkroom/Interscope Records",
    "trackCount": 14,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "!!!!!!!",
        "durationMs": 13578
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "bad guy",
        "durationMs": 194088
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "xanny",
        "durationMs": 243725
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "you should see me in a crown",
        "durationMs": 180953
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "all the good girls go to hell",
        "durationMs": 168840
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "wish you were gay",
        "durationMs": 221543
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "when the party's over",
        "durationMs": 196077
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "8",
        "durationMs": 173202
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "my strange addiction",
        "durationMs": 179884
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "bury a friend",
        "durationMs": 193149
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "ilomilo",
        "durationMs": 156371
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "listen before i go",
        "durationMs": 242652
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "i love you",
        "durationMs": 291796
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "goodbye",
        "durationMs": 119422
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Billie%20Eilish%20When%20We%20All%20Fall%20Asleep%2C%20Where%20Do%20We%20Go%3F",
      "appleMusic": "https://music.apple.com/us/album/when-we-all-fall-asleep-where-do-we-go/1450695723?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Billie%20Eilish%20When%20We%20All%20Fall%20Asleep%2C%20Where%20Do%20We%20Go%3F"
    }
  },
  "boards-of-canada-hi-scores": {
    "releaseDate": "1996-12-01",
    "label": "Warp Records",
    "trackCount": 6,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Hi Scores",
        "durationMs": 297320
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Turquoise Hexagon Sun",
        "durationMs": 309809
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Nlogax",
        "durationMs": 409605
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "June 9th",
        "durationMs": 318729
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Seeya Later",
        "durationMs": 252580
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Everything You Do Is a Balloon",
        "durationMs": 419565
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Boards%20of%20Canada%20Hi%20Scores",
      "appleMusic": "https://music.apple.com/us/album/hi-scores/1686583346?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Boards%20of%20Canada%20Hi%20Scores"
    }
  },
  "brian-eno-apollo-atmospheres-and-soundtracks": {
    "releaseDate": "1983-07-01",
    "label": "Virgin Records Limited",
    "trackCount": 12,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Under Stars",
        "durationMs": 270280
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "The Secret Place",
        "durationMs": 209680
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Matta",
        "durationMs": 259693
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Signals",
        "durationMs": 166560
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "An Ending (Ascent)",
        "durationMs": 266200
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Under Stars II",
        "durationMs": 202773
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Drift",
        "durationMs": 189467
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Silver Morning",
        "durationMs": 159480
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Deep Blue Day",
        "durationMs": 238773
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Weightless",
        "durationMs": 275187
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Always Returning",
        "durationMs": 244181
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Stars",
        "durationMs": 480280
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Brian%20Eno%20Apollo%3A%20Atmospheres%20and%20Soundtracks",
      "appleMusic": "https://music.apple.com/us/album/apollo-atmospheres-and-soundtracks/714861155?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Brian%20Eno%20Apollo%3A%20Atmospheres%20and%20Soundtracks"
    }
  },
  "brian-eno-here-come-the-warm-jets": {
    "releaseDate": "1974-01-01",
    "label": "Virgin Records Limited",
    "trackCount": 10,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Needles In the Camel's Eye (2004 Remaster)",
        "durationMs": 191053
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "The Paw Paw Negro Blowtorch (2004 Remaster)",
        "durationMs": 184987
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Baby's On Fire (2004 Remaster)",
        "durationMs": 319373
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Cindy Tells Me (2004 Remaster)",
        "durationMs": 205413
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Driving Me Backwards (2004 Remaster)",
        "durationMs": 312147
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "On Some Faraway Beach (2004 Remaster)",
        "durationMs": 276027
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Blank Frank (2004 Remaster)",
        "durationMs": 217227
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Dead Finks Don't Talk (2004 Remaster)",
        "durationMs": 259573
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Some of Them Are Old (2004 Remaster)",
        "durationMs": 311067
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Here Come the Warm Jets (2004 Remaster)",
        "durationMs": 244773
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Brian%20Eno%20Here%20Come%20the%20Warm%20Jets",
      "appleMusic": "https://music.apple.com/us/album/here-come-the-warm-jets/723783174?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Brian%20Eno%20Here%20Come%20the%20Warm%20Jets"
    }
  },
  "brian-eno-music-for-airports": {
    "releaseDate": "1978-03-01",
    "label": "Virgin Records Limited",
    "trackCount": 4,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "1/1",
        "durationMs": 1041520
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "2/1",
        "durationMs": 534213
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "1/2",
        "durationMs": 727080
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "2/2",
        "durationMs": 578467
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Brian%20Eno%20Music%20for%20Airports",
      "appleMusic": "https://music.apple.com/us/album/ambient-1-music-for-airports/724435863?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Brian%20Eno%20Music%20for%20Airports"
    }
  },
  "coolio-gangsta-s-paradise": {
    "releaseDate": "1995-10-02",
    "label": "Tommy Boy Music",
    "trackCount": 14,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Geto Highlites",
        "durationMs": 276467
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Gangsta's Paradise (feat. L.V.)",
        "durationMs": 240693
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Too Hot",
        "durationMs": 218933
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Cruisin'",
        "durationMs": 275947
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Exercise Yo' Game (feat. E-40, Kam & 40 Thevz)",
        "durationMs": 289893
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "1 - 2 - 3 - 4 (Sumpin' New)",
        "durationMs": 214307
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Smilin'",
        "durationMs": 250093
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Kinda High, Kinda Drunk",
        "durationMs": 226707
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "For My Sistas",
        "durationMs": 267827
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Is This Me?",
        "durationMs": 263840
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "A Thing Going On",
        "durationMs": 285360
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Bright as the Sun",
        "durationMs": 289000
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "The Revolution",
        "durationMs": 229667
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Get up Get Down",
        "durationMs": 331107
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Coolio%20Gangsta's%20Paradise",
      "appleMusic": "https://music.apple.com/us/album/gangstas-paradise/1604646668?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Coolio%20Gangsta's%20Paradise"
    }
  },
  "coolio-it-takes-a-thief": {
    "releaseDate": "1994",
    "links": {
      "spotify": "https://open.spotify.com/search/Coolio%20It%20Takes%20a%20Thief",
      "youtubeMusic": "https://music.youtube.com/search?q=Coolio%20It%20Takes%20a%20Thief"
    }
  },
  "daft-punk-discovery": {
    "releaseDate": "2001-03-12",
    "label": "Daft Life Limited",
    "trackCount": 14,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "One More Time",
        "durationMs": 320357
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Aerodynamic",
        "durationMs": 212547
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Digital Love",
        "durationMs": 301373
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Harder Better Faster Stronger",
        "durationMs": 224693
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Crescendolls",
        "durationMs": 211640
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Nightvision",
        "durationMs": 104467
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Superheroes",
        "durationMs": 237800
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "High Life",
        "durationMs": 201800
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Something About Us",
        "durationMs": 232667
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Voyager",
        "durationMs": 227867
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Veridis Quo",
        "durationMs": 345187
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Short Circuit",
        "durationMs": 206867
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Face to Face",
        "durationMs": 240173
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Too Long",
        "durationMs": 600293
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Daft%20Punk%20Discovery",
      "appleMusic": "https://music.apple.com/us/album/discovery/697194953?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Daft%20Punk%20Discovery"
    }
  },
  "daft-punk-random-access-memories": {
    "releaseDate": "2013-05-17",
    "label": "Columbia Records",
    "trackCount": 14,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Give Life Back to Music",
        "durationMs": 274403
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "The Game of Love",
        "durationMs": 322149
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Giorgio by Moroder",
        "durationMs": 544629
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Within",
        "durationMs": 228509
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Instant Crush",
        "durationMs": 337562
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Lose Yourself to Dance",
        "durationMs": 353896
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Touch",
        "durationMs": 498962
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Get Lucky",
        "durationMs": 369629
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Beyond",
        "durationMs": 290242
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Motherboard",
        "durationMs": 341656
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Fragments of Time",
        "durationMs": 279776
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Doin' it Right",
        "durationMs": 251302
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Contact",
        "durationMs": 381351
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Daft%20Punk%20Random%20Access%20Memories",
      "appleMusic": "https://music.apple.com/us/album/random-access-memories/617154241?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Daft%20Punk%20Random%20Access%20Memories"
    }
  },
  "depeche-mode-violator": {
    "releaseDate": "1990-03-19",
    "label": "Sony Music Entertainment International Ltd",
    "trackCount": 9,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "World In My Eyes",
        "durationMs": 266653
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Sweetest Perfection",
        "durationMs": 283960
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Personal Jesus",
        "durationMs": 295960
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Halo",
        "durationMs": 270187
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Waiting for the Night",
        "durationMs": 367373
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Enjoy the Silence",
        "durationMs": 372827
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Policy of Truth",
        "durationMs": 295280
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Blue Dress",
        "durationMs": 338200
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Clean",
        "durationMs": 333107
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Depeche%20Mode%20Violator",
      "appleMusic": "https://music.apple.com/us/album/violator/665404621?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Depeche%20Mode%20Violator"
    }
  },
  "drake-scorpion": {
    "releaseDate": "2018-06-29",
    "label": "Young Money/Cash Money Records",
    "trackCount": 25,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Survival",
        "durationMs": 136187
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Nonstop",
        "durationMs": 238614
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Elevate",
        "durationMs": 184960
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Emotionless",
        "durationMs": 302173
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "God's Plan",
        "durationMs": 198973
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "I'm Upset",
        "durationMs": 214467
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "8 Out Of 10",
        "durationMs": 195720
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Mob Ties",
        "durationMs": 205147
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Can't Take a Joke",
        "durationMs": 163974
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Sandra's Rose",
        "durationMs": 216333
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Talk Up (feat. JAŸ-Z)",
        "durationMs": 223240
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Is There More",
        "durationMs": 226907
      },
      {
        "discNumber": 2,
        "number": 1,
        "title": "Peak",
        "durationMs": 206027
      },
      {
        "discNumber": 2,
        "number": 2,
        "title": "Summer Games",
        "durationMs": 247893
      },
      {
        "discNumber": 2,
        "number": 3,
        "title": "Jaded",
        "durationMs": 262453
      },
      {
        "discNumber": 2,
        "number": 4,
        "title": "Nice For What",
        "durationMs": 210747
      },
      {
        "discNumber": 2,
        "number": 5,
        "title": "Finesse",
        "durationMs": 182080
      },
      {
        "discNumber": 2,
        "number": 6,
        "title": "Ratchet Happy Birthday",
        "durationMs": 207307
      },
      {
        "discNumber": 2,
        "number": 7,
        "title": "That's How You Feel",
        "durationMs": 157605
      },
      {
        "discNumber": 2,
        "number": 8,
        "title": "Blue Tint",
        "durationMs": 162800
      },
      {
        "discNumber": 2,
        "number": 9,
        "title": "In My Feelings",
        "durationMs": 217925
      },
      {
        "discNumber": 2,
        "number": 10,
        "title": "Don't Matter To Me",
        "durationMs": 245787
      },
      {
        "discNumber": 2,
        "number": 11,
        "title": "After Dark (feat. Static Major & Ty Dolla $ign)",
        "durationMs": 289560
      },
      {
        "discNumber": 2,
        "number": 12,
        "title": "Final Fantasy",
        "durationMs": 219960
      },
      {
        "discNumber": 2,
        "number": 13,
        "title": "March 14",
        "durationMs": 309560
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Drake%20Scorpion",
      "appleMusic": "https://music.apple.com/us/album/scorpion/1406109769?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Drake%20Scorpion"
    }
  },
  "drake-views": {
    "releaseDate": "2016-04-29",
    "label": "Young Money Entertainment/Cash Money Records",
    "trackCount": 21,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Keep the Family Close",
        "durationMs": 328910
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "9",
        "durationMs": 255794
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "U With Me?",
        "durationMs": 297371
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Feel No Ways",
        "durationMs": 240656
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Hype",
        "durationMs": 209408
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Weston Road Flows",
        "durationMs": 253520
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Redemption",
        "durationMs": 333950
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "With You (feat. PARTYNEXTDOOR)",
        "durationMs": 195058
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Faithful (feat. Pimp C & dvsn)",
        "durationMs": 290141
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Still Here",
        "durationMs": 189703
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Controlla",
        "durationMs": 245228
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "One Dance (feat. Wizkid & Kyla)",
        "durationMs": 173985
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Grammys (feat. Future)",
        "durationMs": 220435
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Childs Play",
        "durationMs": 241400
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "Pop Style",
        "durationMs": 212949
      },
      {
        "discNumber": 1,
        "number": 16,
        "title": "Too Good (feat. Rihanna)",
        "durationMs": 263371
      },
      {
        "discNumber": 1,
        "number": 17,
        "title": "Summers Over Interlude",
        "durationMs": 106325
      },
      {
        "discNumber": 1,
        "number": 18,
        "title": "Fire & Desire",
        "durationMs": 238144
      },
      {
        "discNumber": 1,
        "number": 19,
        "title": "Views",
        "durationMs": 311962
      },
      {
        "discNumber": 1,
        "number": 20,
        "title": "Hotline Bling",
        "durationMs": 267024
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Drake%20Views",
      "appleMusic": "https://music.apple.com/us/album/views/1440842556?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Drake%20Views"
    }
  },
  "eminem-8-mile": {
    "releaseDate": "2002-10-29",
    "trackCount": 16,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Lose Yourself",
        "durationMs": 321960
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Love Me",
        "durationMs": 270733
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "8 Mile",
        "durationMs": 359080
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Adrenaline Rush",
        "durationMs": 228827
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Places to Go",
        "durationMs": 255067
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Rap Game (feat. 50 Cent)",
        "durationMs": 353733
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "8 Miles and Runnin'",
        "durationMs": 248307
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Spit Shine",
        "durationMs": 219040
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Time of My Life",
        "durationMs": 261440
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "U Wanna Be Me",
        "durationMs": 230427
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Wanksta",
        "durationMs": 218920
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Wastin' My Time",
        "durationMs": 217667
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "R.A.K.I.M.",
        "durationMs": 263507
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "That's My N***a fo' Real",
        "durationMs": 285627
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "Battle",
        "durationMs": 175040
      },
      {
        "discNumber": 1,
        "number": 16,
        "title": "Rabbit Run",
        "durationMs": 190467
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Eminem%208%20Mile",
      "appleMusic": "https://music.apple.com/us/album/8-mile-music-from-and-inspired-by-the-motion-picture/1440903339?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Eminem%208%20Mile"
    }
  },
  "eminem-the-eminem-show": {
    "releaseDate": "2002-05-26",
    "label": "Aftermath Records",
    "trackCount": 19,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Curtains Up (Skit)",
        "durationMs": 29747
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "White America",
        "durationMs": 324467
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Business",
        "durationMs": 251827
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Cleanin' Out My Closet",
        "durationMs": 298187
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Square Dance",
        "durationMs": 323573
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "The Kiss (Skit)",
        "durationMs": 74747
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Soldier",
        "durationMs": 226440
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Say Goodbye Hollywood",
        "durationMs": 272733
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Without Me",
        "durationMs": 290120
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Paul Rosenberg (Skit)",
        "durationMs": 22853
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Sing For the Moment",
        "durationMs": 339573
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Superman (feat. Dina Rae)",
        "durationMs": 350067
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Hailie's Song",
        "durationMs": 320773
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Steve Berman (Skit)",
        "durationMs": 33187
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "When the Music Stops (feat. D12)",
        "durationMs": 269027
      },
      {
        "discNumber": 1,
        "number": 16,
        "title": "Say What You Say (feat. Dr. Dre)",
        "durationMs": 309787
      },
      {
        "discNumber": 1,
        "number": 17,
        "title": "'Till I Collapse (feat. Nate Dogg)",
        "durationMs": 297907
      },
      {
        "discNumber": 1,
        "number": 18,
        "title": "My Dad's Gone Crazy (feat. Hailie Jade)",
        "durationMs": 266973
      },
      {
        "discNumber": 1,
        "number": 19,
        "title": "Curtains Close",
        "durationMs": 62720
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Eminem%20The%20Eminem%20Show",
      "appleMusic": "https://music.apple.com/us/album/the-eminem-show/1440821542?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Eminem%20The%20Eminem%20Show"
    }
  },
  "eminem-the-marshall-mathers-lp": {
    "releaseDate": "2000-05-23",
    "label": "Aftermath Entertainment/Interscope Records",
    "trackCount": 18,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Public Service Announcement 2000",
        "durationMs": 2000
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Kill You",
        "durationMs": 264360
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Stan (feat. Dido)",
        "durationMs": 403360
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Paul (Skit)",
        "durationMs": 10667
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Who Knew",
        "durationMs": 227667
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Steve Berman",
        "durationMs": 54427
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "The Way I Am",
        "durationMs": 290907
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "The Real Slim Shady",
        "durationMs": 284480
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Remember Me? (feat. RBX & Sticky Fingaz)",
        "durationMs": 218640
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "I'm Back",
        "durationMs": 310053
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Marshall Mathers",
        "durationMs": 320280
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Ken Kaniff (Skit)",
        "durationMs": 61813
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Ballad",
        "durationMs": 302853
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Amityville (feat. Bizarre)",
        "durationMs": 241613
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "Bitch Please II (feat. Dr. Dre, Snoop Dogg, Nate Dogg & Alvin Joiner)",
        "durationMs": 290747
      },
      {
        "discNumber": 1,
        "number": 16,
        "title": "The Kids",
        "durationMs": 303187
      },
      {
        "discNumber": 1,
        "number": 17,
        "title": "Under the Influence (feat. D12)",
        "durationMs": 322267
      },
      {
        "discNumber": 1,
        "number": 18,
        "title": "Criminal",
        "durationMs": 320547
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Eminem%20The%20Marshall%20Mathers%20LP",
      "appleMusic": "https://music.apple.com/us/album/the-marshall-mathers-lp/1440906504?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Eminem%20The%20Marshall%20Mathers%20LP"
    }
  },
  "enigma-mcmxc-a-d": {
    "releaseDate": "1990-01-01",
    "label": "Polydor",
    "trackCount": 7,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "The Voice Of Enigma",
        "durationMs": 141456
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Principles Of Lust: Sadeness / Find Love / Sadeness (Reprise)",
        "durationMs": 703133
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Callas Went Away",
        "durationMs": 269373
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Mea Culpa",
        "durationMs": 301333
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "The Voice & The Snake",
        "durationMs": 101067
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Knocking On Forbidden Doors",
        "durationMs": 262667
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Back To The Rivers Of Belief: Way To Eternity / Hallelujah / The Rivers Of Belief",
        "durationMs": 636267
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Enigma%20MCMXC%20a.D.",
      "appleMusic": "https://music.apple.com/us/album/mcmxc-a-d/712727641?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Enigma%20MCMXC%20a.D."
    }
  },
  "enigma-the-cross-of-changes": {
    "releaseDate": "1993-01-01",
    "label": "Polydor",
    "trackCount": 9,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Second Chapter",
        "durationMs": 135293
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "The Eyes Of Truth",
        "durationMs": 434507
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Return To Innocence",
        "durationMs": 255467
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "I Love You... I'll Kill You",
        "durationMs": 532560
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Silent Warrior",
        "durationMs": 369773
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "The Dream Of The Dolphin",
        "durationMs": 167369
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Age Of Loneliness (Carly's Song)",
        "durationMs": 321493
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Out From The Deep",
        "durationMs": 293107
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "The Cross Of Changes",
        "durationMs": 144400
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Enigma%20The%20Cross%20of%20Changes",
      "appleMusic": "https://music.apple.com/us/album/the-cross-of-changes/723433202?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Enigma%20The%20Cross%20of%20Changes"
    }
  },
  "kendrick-lamar-black-panther-the-album": {
    "releaseDate": "2018-02-09",
    "trackCount": 15,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Black Panther",
        "durationMs": 130617
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "All The Stars",
        "durationMs": 232190
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "X",
        "durationMs": 267428
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "The Ways",
        "durationMs": 238893
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Opps",
        "durationMs": 180896
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "I Am",
        "durationMs": 208755
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Paramedic!",
        "durationMs": 219311
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Bloody Waters",
        "durationMs": 272301
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "King's Dead",
        "durationMs": 225274
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Redemption Interlude",
        "durationMs": 85263
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Redemption",
        "durationMs": 222085
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Seasons",
        "durationMs": 242294
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Big Shot",
        "durationMs": 221831
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Pray For Me",
        "durationMs": 211421
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Kendrick%20Lamar%20Black%20Panther%3A%20The%20Album",
      "appleMusic": "https://music.apple.com/us/album/black-panther-the-album/1440903005?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Kendrick%20Lamar%20Black%20Panther%3A%20The%20Album"
    }
  },
  "kendrick-lamar-damn": {
    "releaseDate": "2017-04-14",
    "label": "Aftermath/Interscope (Top Dawg Entertainment)",
    "trackCount": 15,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "BLOOD.",
        "durationMs": 118067
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "DNA.",
        "durationMs": 185947
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "YAH.",
        "durationMs": 160293
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "ELEMENT.",
        "durationMs": 208733
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "FEEL.",
        "durationMs": 214827
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "LOYALTY. (FEAT. RIHANNA.)",
        "durationMs": 227360
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "PRIDE.",
        "durationMs": 275253
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "HUMBLE.",
        "durationMs": 177000
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "LUST.",
        "durationMs": 307880
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "LOVE. (FEAT. ZACARI.)",
        "durationMs": 213400
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "XXX. (FEAT. U2.)",
        "durationMs": 254200
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "FEAR.",
        "durationMs": 460573
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "GOD.",
        "durationMs": 248827
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "DUCKWORTH.",
        "durationMs": 248613
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Kendrick%20Lamar%20DAMN.",
      "appleMusic": "https://music.apple.com/us/album/damn/1440881722?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Kendrick%20Lamar%20DAMN."
    }
  },
  "led-zeppelin-led-zeppelin-ii": {
    "releaseDate": "1969-10-22",
    "label": "Atlantic Recording Corporation",
    "trackCount": 9,
    "editionNote": "Led Zeppelin II (Remastered)",
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Whole Lotta Love",
        "durationMs": 334555
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "What Is and What Should Never Be",
        "durationMs": 286231
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "The Lemon Song",
        "durationMs": 379389
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Thank You",
        "durationMs": 289485
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Heartbreaker",
        "durationMs": 254068
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Living Loving Maid (She's Just a Woman)",
        "durationMs": 159301
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Ramble On",
        "durationMs": 274010
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Moby Dick",
        "durationMs": 260914
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Bring It On Home",
        "durationMs": 259741
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Led%20Zeppelin%20Led%20Zeppelin%20II",
      "appleMusic": "https://music.apple.com/us/album/led-zeppelin-ii-remastered/580708374?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Led%20Zeppelin%20Led%20Zeppelin%20II"
    }
  },
  "led-zeppelin-led-zeppelin-iv": {
    "releaseDate": "1971-11-08",
    "label": "Atlantic Recording Corporation",
    "trackCount": 8,
    "editionNote": "Led Zeppelin IV (Remastered)",
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Black Dog",
        "durationMs": 295387
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Rock and Roll",
        "durationMs": 220560
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "The Battle of Evermore",
        "durationMs": 351678
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Stairway to Heaven",
        "durationMs": 482830
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Misty Mountain Hop",
        "durationMs": 278907
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Four Sticks",
        "durationMs": 285227
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Going to California",
        "durationMs": 212160
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "When the Levee Breaks",
        "durationMs": 428851
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Led%20Zeppelin%20Led%20Zeppelin%20IV",
      "appleMusic": "https://music.apple.com/us/album/led-zeppelin-iv-remastered/580708175?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Led%20Zeppelin%20Led%20Zeppelin%20IV"
    }
  },
  "led-zeppelin-physical-graffiti": {
    "releaseDate": "1975-02-24",
    "label": "Atlantic Recording Corporation",
    "trackCount": 15,
    "editionNote": "Physical Graffiti (Remastered)",
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Custard Pie",
        "durationMs": 255702
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "The Rover",
        "durationMs": 339475
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "In My Time of Dying",
        "durationMs": 668440
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Houses of the Holy",
        "durationMs": 244686
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Trampled Under Foot",
        "durationMs": 336836
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Kashmir",
        "durationMs": 517125
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "In the Light",
        "durationMs": 527947
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Bron-Yr-Aur",
        "durationMs": 126560
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Down By the Seaside",
        "durationMs": 315507
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Ten Years Gone",
        "durationMs": 394920
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Night Flight",
        "durationMs": 218254
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "The Wanton Song",
        "durationMs": 248720
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Boogie With Stu",
        "durationMs": 232731
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Black Country Woman",
        "durationMs": 264630
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "Sick Again",
        "durationMs": 282320
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Led%20Zeppelin%20Physical%20Graffiti",
      "appleMusic": "https://music.apple.com/us/album/physical-graffiti-remastered/580707980?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Led%20Zeppelin%20Physical%20Graffiti"
    }
  },
  "massive-attack-blue-lines": {
    "releaseDate": "1991-04-08",
    "label": "Virgin Records Limited",
    "trackCount": 9,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Safe From Harm (2012 Mix/Master)",
        "durationMs": 319667
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "One Love (2012 Mix/Master)",
        "durationMs": 288440
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Blue Lines (2012 Mix/Master)",
        "durationMs": 261733
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Be Thankful For What You've Got (2012 Mix/Master)",
        "durationMs": 249533
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Five Man Army (2012 Mix/Master)",
        "durationMs": 364267
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Unfinished Sympathy (2012 Mix/Master)",
        "durationMs": 308413
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Daydreaming (2012 Mix/Master)",
        "durationMs": 254587
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Lately (2012 Mix/Master)",
        "durationMs": 266267
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Hymn Of The Big Wheel (2012 Mix/Master)",
        "durationMs": 382420
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Massive%20Attack%20Blue%20Lines",
      "appleMusic": "https://music.apple.com/us/album/blue-lines-2012-mix-master/715864097?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Massive%20Attack%20Blue%20Lines"
    }
  },
  "massive-attack-mezzanine": {
    "releaseDate": "1998-04-20",
    "label": "Virgin Records Limited",
    "trackCount": 11,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Angel",
        "durationMs": 379533
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Risingson",
        "durationMs": 298827
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Teardrop",
        "durationMs": 330773
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Inertia Creeps",
        "durationMs": 357133
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Exchange",
        "durationMs": 251200
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Dissolved Girl",
        "durationMs": 366893
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Man Next Door",
        "durationMs": 356267
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Black Milk",
        "durationMs": 381667
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Mezzanine",
        "durationMs": 356800
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Group Four",
        "durationMs": 492267
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "(Exchange)",
        "durationMs": 250867
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Massive%20Attack%20Mezzanine",
      "appleMusic": "https://music.apple.com/us/album/mezzanine/724466069?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Massive%20Attack%20Mezzanine"
    }
  },
  "moby-play": {
    "releaseDate": "2000-10-24",
    "label": "Little Idiot",
    "trackCount": 29,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Honey",
        "durationMs": 209493
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Find My Baby",
        "durationMs": 239400
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Porcelain",
        "durationMs": 241173
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Why Does My Heart Feel So Bad?",
        "durationMs": 264827
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "South Side",
        "durationMs": 229733
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Rushing",
        "durationMs": 180267
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Bodyrock",
        "durationMs": 216440
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Natural Blues",
        "durationMs": 253760
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Machete",
        "durationMs": 217733
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "7",
        "durationMs": 62040
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Run On",
        "durationMs": 225133
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Down Slow",
        "durationMs": 94867
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "If Things Were Perfect",
        "durationMs": 258627
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Everloving",
        "durationMs": 205573
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "Inside",
        "durationMs": 288600
      },
      {
        "discNumber": 1,
        "number": 16,
        "title": "Guitar Flute & String",
        "durationMs": 129200
      },
      {
        "discNumber": 1,
        "number": 17,
        "title": "The Sky Is Broken",
        "durationMs": 258560
      },
      {
        "discNumber": 1,
        "number": 18,
        "title": "My Weakness",
        "durationMs": 218573
      },
      {
        "discNumber": 1,
        "number": 19,
        "title": "Flower",
        "durationMs": 206293
      },
      {
        "discNumber": 1,
        "number": 20,
        "title": "Sunday",
        "durationMs": 303440
      },
      {
        "discNumber": 1,
        "number": 21,
        "title": "Memory Gospel",
        "durationMs": 402027
      },
      {
        "discNumber": 1,
        "number": 22,
        "title": "Whispering Wind",
        "durationMs": 362667
      },
      {
        "discNumber": 1,
        "number": 23,
        "title": "Summer",
        "durationMs": 358040
      },
      {
        "discNumber": 1,
        "number": 24,
        "title": "Spirit",
        "durationMs": 248733
      },
      {
        "discNumber": 1,
        "number": 25,
        "title": "Flying Foxes",
        "durationMs": 376400
      },
      {
        "discNumber": 1,
        "number": 26,
        "title": "Sunspot",
        "durationMs": 409400
      },
      {
        "discNumber": 1,
        "number": 27,
        "title": "Flying Over the Dateline",
        "durationMs": 287360
      },
      {
        "discNumber": 1,
        "number": 28,
        "title": "Running",
        "durationMs": 425733
      },
      {
        "discNumber": 1,
        "number": 29,
        "title": "The Sun Never Stops Setting",
        "durationMs": 260840
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Moby%20Play",
      "appleMusic": "https://music.apple.com/us/album/play-play-b-sides/281242279?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Moby%20Play"
    }
  },
  "nirvana-nevermind": {
    "releaseDate": "1991",
    "links": {
      "spotify": "https://open.spotify.com/search/Nirvana%20Nevermind",
      "youtubeMusic": "https://music.youtube.com/search?q=Nirvana%20Nevermind"
    }
  },
  "notorious-big-life-after-death": {
    "releaseDate": "2022-11-11",
    "label": "CMG",
    "trackCount": 18,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Help Is On The Way (Maybe Midnight)",
        "durationMs": 181520
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "The Goodness",
        "durationMs": 225240
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Deeper",
        "durationMs": 194947
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Show Up Choose Love",
        "durationMs": 200896
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Promised Land (Collab OG)",
        "durationMs": 210733
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Everything About You",
        "durationMs": 207627
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Life On It",
        "durationMs": 219373
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Faithfully",
        "durationMs": 166920
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Cornerstone (feat. Zach Williams)",
        "durationMs": 219267
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Found",
        "durationMs": 209973
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Fire's Burnin'",
        "durationMs": 184027
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Space",
        "durationMs": 184747
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "21 Years",
        "durationMs": 243000
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "I’m Sorry (a lament)",
        "durationMs": 263747
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "Rest",
        "durationMs": 139325
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/The%20Notorious%20B.I.G.%20Life%20After%20Death",
      "appleMusic": "https://music.apple.com/us/album/life-after-death/1652915746?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=The%20Notorious%20B.I.G.%20Life%20After%20Death"
    }
  },
  "notorious-big-ready-to-die": {
    "releaseDate": "1994-09-13",
    "label": "Bad Boy Records",
    "trackCount": 19,
    "editionNote": "Ready To Die the Remaster",
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Intro",
        "durationMs": 201507
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Things Done Changed",
        "durationMs": 238107
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Gimme the Loot",
        "durationMs": 304147
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Machine Gun Funk",
        "durationMs": 250467
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Warning",
        "durationMs": 176533
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Ready To Die",
        "durationMs": 267147
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "One More Chance",
        "durationMs": 258640
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "#!*@ Me",
        "durationMs": 91280
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "The What",
        "durationMs": 238267
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Juicy",
        "durationMs": 286000
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Everyday Struggle",
        "durationMs": 319533
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Me and My B*tch",
        "durationMs": 240720
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Big Poppa",
        "durationMs": 252507
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Respect",
        "durationMs": 273693
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "Friend of Mine",
        "durationMs": 208720
      },
      {
        "discNumber": 1,
        "number": 16,
        "title": "Unbelievable",
        "durationMs": 223693
      },
      {
        "discNumber": 1,
        "number": 17,
        "title": "Suicidal Thoughts",
        "durationMs": 170240
      },
      {
        "discNumber": 1,
        "number": 18,
        "title": "Who Shot Ya",
        "durationMs": 319360
      },
      {
        "discNumber": 1,
        "number": 19,
        "title": "Just Playing (Dreams)",
        "durationMs": 162587
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/The%20Notorious%20B.I.G.%20Ready%20to%20Die",
      "appleMusic": "https://music.apple.com/us/album/ready-to-die-the-remaster/204669415?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=The%20Notorious%20B.I.G.%20Ready%20to%20Die"
    }
  },
  "oasis-what-s-the-story-morning-glory": {
    "releaseDate": "1995-10-02",
    "label": "Big Brother Recordings Ltd",
    "trackCount": 12,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Hello",
        "durationMs": 203187
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Roll with It",
        "durationMs": 239827
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Wonderwall",
        "durationMs": 258907
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Don't Look Back in Anger",
        "durationMs": 287827
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Hey Now!",
        "durationMs": 341907
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "The Swamp Song (Version 1)",
        "durationMs": 44627
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Some Might Say",
        "durationMs": 327920
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Cast No Shadow",
        "durationMs": 294813
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "She's Electric",
        "durationMs": 220920
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Morning Glory",
        "durationMs": 303533
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "The Swamp Song (Version 2)",
        "durationMs": 39360
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Champagne Supernova",
        "durationMs": 450507
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Oasis%20(What's%20the%20Story)%20Morning%20Glory%3F",
      "appleMusic": "https://music.apple.com/us/album/whats-the-story-morning-glory/1517447039?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Oasis%20(What's%20the%20Story)%20Morning%20Glory%3F"
    }
  },
  "pearl-jam-ten": {
    "releaseDate": "2011-01-17",
    "label": "Monkeywrench Records",
    "trackCount": 18,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Arms Aloft (Live)",
        "durationMs": 207693
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "World Wide Suicide (Live)",
        "durationMs": 196173
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Animal (Live)",
        "durationMs": 161840
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Got Some (Live)",
        "durationMs": 177053
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "State of Love and Trust (Live)",
        "durationMs": 198067
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "I Am Mine (Live)",
        "durationMs": 203387
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Unthought Known (Live)",
        "durationMs": 235813
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Rearview Mirror (Live)",
        "durationMs": 420627
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "The Fixer (Live)",
        "durationMs": 207747
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Nothing As It Seems (Live)",
        "durationMs": 313547
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "In Hiding (Live)",
        "durationMs": 292773
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Just Breathe (Live)",
        "durationMs": 233360
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Jeremy (Live)",
        "durationMs": 319520
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Public Image (Live)",
        "durationMs": 172307
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "Spin the Black Circle (Live)",
        "durationMs": 185027
      },
      {
        "discNumber": 1,
        "number": 16,
        "title": "Porch (Live)",
        "durationMs": 420333
      },
      {
        "discNumber": 1,
        "number": 17,
        "title": "Alive (Live)",
        "durationMs": 381027
      },
      {
        "discNumber": 1,
        "number": 18,
        "title": "Yellow Ledbetter (Live)",
        "durationMs": 320027
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Pearl%20Jam%20Ten",
      "appleMusic": "https://music.apple.com/us/album/live-on-ten-legs/412991821?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Pearl%20Jam%20Ten"
    }
  },
  "pink-floyd-the-dark-side-of-the-moon": {
    "releaseDate": "1973-03-01",
    "label": "Harvest Records",
    "trackCount": 10,
    "editionNote": "Original studio album sequence",
    "contextNote": "The Dark Side of the Moon is essential album context because its economics are album-led: the tracked songs sit inside one of rock's most durable full-release listening cycles.",
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Speak to Me"
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Breathe (In the Air)"
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "On the Run"
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Time"
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "The Great Gig in the Sky"
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Money"
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Us and Them"
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Any Colour You Like"
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Brain Damage"
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Eclipse"
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Pink%20Floyd%20The%20Dark%20Side%20of%20the%20Moon",
      "appleMusic": "https://music.apple.com/us/search?term=Pink%20Floyd%20The%20Dark%20Side%20of%20the%20Moon",
      "youtubeMusic": "https://music.youtube.com/search?q=Pink%20Floyd%20The%20Dark%20Side%20of%20the%20Moon"
    }
  },
  "pink-floyd-the-wall": {
    "releaseDate": "1979-11-30",
    "label": "Sony Music Entertainment",
    "trackCount": 27,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "In the Flesh?",
        "durationMs": 198800
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "The Thin Ice",
        "durationMs": 146933
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Another Brick In the Wall, Pt. 1",
        "durationMs": 191293
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "The Happiest Days of Our Lives",
        "durationMs": 111107
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Another Brick In the Wall, Pt. 2",
        "durationMs": 238947
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Mother",
        "durationMs": 334880
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Goodbye Blue Sky",
        "durationMs": 167293
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Empty Spaces",
        "durationMs": 127787
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Young Lust",
        "durationMs": 209787
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "One of My Turns",
        "durationMs": 216947
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Don't Leave Me Now",
        "durationMs": 255813
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Another Brick In the Wall, Pt. 3",
        "durationMs": 74533
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Goodbye Cruel World",
        "durationMs": 74307
      },
      {
        "discNumber": 2,
        "number": 1,
        "title": "Hey You",
        "durationMs": 279640
      },
      {
        "discNumber": 2,
        "number": 2,
        "title": "Is There Anybody Out There?",
        "durationMs": 161787
      },
      {
        "discNumber": 2,
        "number": 3,
        "title": "Nobody Home",
        "durationMs": 202640
      },
      {
        "discNumber": 2,
        "number": 4,
        "title": "Vera",
        "durationMs": 93147
      },
      {
        "discNumber": 2,
        "number": 5,
        "title": "Bring the Boys Back Home",
        "durationMs": 87573
      },
      {
        "discNumber": 2,
        "number": 6,
        "title": "Comfortably Numb",
        "durationMs": 382280
      },
      {
        "discNumber": 2,
        "number": 7,
        "title": "The Show Must Go On",
        "durationMs": 96333
      },
      {
        "discNumber": 2,
        "number": 8,
        "title": "In the Flesh",
        "durationMs": 255907
      },
      {
        "discNumber": 2,
        "number": 9,
        "title": "Run Like Hell",
        "durationMs": 263387
      },
      {
        "discNumber": 2,
        "number": 10,
        "title": "Waiting for the Worms",
        "durationMs": 237133
      },
      {
        "discNumber": 2,
        "number": 11,
        "title": "Stop",
        "durationMs": 30733
      },
      {
        "discNumber": 2,
        "number": 12,
        "title": "The Trial",
        "durationMs": 318640
      },
      {
        "discNumber": 2,
        "number": 13,
        "title": "Outside the Wall",
        "durationMs": 103747
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Pink%20Floyd%20The%20Wall",
      "appleMusic": "https://music.apple.com/us/album/the-wall/1065975633?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Pink%20Floyd%20The%20Wall"
    }
  },
  "pink-floyd-wish-you-were-here": {
    "releaseDate": "1975-09-12",
    "label": "Sony Music Entertainment",
    "trackCount": 6,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Shine On You Crazy Diamond, Pts. 1-5",
        "durationMs": 814800
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Welcome to the Machine",
        "durationMs": 450707
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Have a Cigar",
        "durationMs": 307400
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Wish You Were Here",
        "durationMs": 338467
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Shine On You Crazy Diamond, Pts. 6-9",
        "durationMs": 745080
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Pink%20Floyd%20Wish%20You%20Were%20Here",
      "appleMusic": "https://music.apple.com/us/album/wish-you-were-here/1065973975?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Pink%20Floyd%20Wish%20You%20Were%20Here"
    }
  },
  "rem-automatic-for-the-people": {
    "releaseDate": "1992",
    "links": {
      "spotify": "https://open.spotify.com/search/R.E.M.%20Automatic%20for%20the%20People",
      "youtubeMusic": "https://music.youtube.com/search?q=R.E.M.%20Automatic%20for%20the%20People"
    }
  },
  "rem-out-of-time": {
    "releaseDate": "1991",
    "links": {
      "spotify": "https://open.spotify.com/search/R.E.M.%20Out%20of%20Time",
      "youtubeMusic": "https://music.youtube.com/search?q=R.E.M.%20Out%20of%20Time"
    }
  },
  "rihanna-anti": {
    "releaseDate": "2016-01-28",
    "label": "Roc Nation Records",
    "trackCount": 13,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Consideration (feat. SZA)",
        "durationMs": 161078
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "James Joint",
        "durationMs": 72074
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Kiss It Better",
        "durationMs": 253077
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Work (feat. Drake)",
        "durationMs": 219340
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Desperado",
        "durationMs": 186451
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Woo",
        "durationMs": 235583
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Needed Me",
        "durationMs": 191605
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Yeah, I Said It",
        "durationMs": 132998
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Same Ol’ Mistakes",
        "durationMs": 397177
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Never Ending",
        "durationMs": 202505
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Love on the Brain",
        "durationMs": 223996
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Higher",
        "durationMs": 120632
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Close to You",
        "durationMs": 237947
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Rihanna%20ANTI",
      "appleMusic": "https://music.apple.com/us/album/anti/1443230958?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Rihanna%20ANTI"
    }
  },
  "rihanna-good-girl-gone-bad": {
    "releaseDate": "2007-01-01",
    "label": "The Island Def Jam Music Group",
    "trackCount": 12,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Umbrella (feat. JAŸ-Z)",
        "durationMs": 275987
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Push Up On Me",
        "durationMs": 195040
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Don't Stop the Music",
        "durationMs": 267080
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Breakin' Dishes",
        "durationMs": 200573
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Shut Up and Drive",
        "durationMs": 212280
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Hate That I Love You (feat. Ne-Yo)",
        "durationMs": 219000
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Say It",
        "durationMs": 250613
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Sell Me Candy",
        "durationMs": 165133
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Lemme Get That",
        "durationMs": 221027
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Rehab",
        "durationMs": 294720
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Question Existing",
        "durationMs": 245493
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Good Girl Gone Bad",
        "durationMs": 215133
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Rihanna%20Good%20Girl%20Gone%20Bad",
      "appleMusic": "https://music.apple.com/us/album/good-girl-gone-bad/1472503760?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Rihanna%20Good%20Girl%20Gone%20Bad"
    }
  },
  "rihanna-unapologetic": {
    "releaseDate": "2012-11-19",
    "label": "The Island Def Jam Music Group",
    "trackCount": 15,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Phresh Out the Runway",
        "durationMs": 222413
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Diamonds",
        "durationMs": 225147
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Numb (feat. Eminem)",
        "durationMs": 205067
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Pour It Up",
        "durationMs": 161200
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Loveeeeeee Song (feat. Future)",
        "durationMs": 256320
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Jump",
        "durationMs": 264453
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Right Now (feat. David Guetta)",
        "durationMs": 181627
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "What Now",
        "durationMs": 243093
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Stay (feat. Mikky Ekko)",
        "durationMs": 240707
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Nobody's Business (feat. Chris Brown)",
        "durationMs": 216293
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Love Without Tragedy / Mother Mary",
        "durationMs": 418880
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Get It Over With",
        "durationMs": 211880
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "No Love Allowed",
        "durationMs": 249133
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Lost In Paradise",
        "durationMs": 215760
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Rihanna%20Unapologetic",
      "appleMusic": "https://music.apple.com/us/album/unapologetic/1444105795?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Rihanna%20Unapologetic"
    }
  },
  "snoop-dogg-doggystyle": {
    "releaseDate": "1993",
    "links": {
      "spotify": "https://open.spotify.com/search/Snoop%20Dogg%20Doggystyle",
      "youtubeMusic": "https://music.youtube.com/search?q=Snoop%20Dogg%20Doggystyle"
    }
  },
  "snoop-dogg-randg-rhythm-and-gangsta-the-masterpiece": {
    "releaseDate": "2004-01-01",
    "label": "Geffen Records",
    "trackCount": 20,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "I Love to Give You Light",
        "durationMs": 158347
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Bang Out",
        "durationMs": 185040
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Drop It Like It's Hot (feat. Pharrell Williams)",
        "durationMs": 266067
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Can I Get a Flicc Witchu (feat. Bootsy Collins) [feat. Bootsy Collins]",
        "durationMs": 324573
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Ups & Downs (feat. Bee Gees)",
        "durationMs": 244640
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "The Bidness",
        "durationMs": 208400
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Snoop D.O. Double G",
        "durationMs": 241200
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Let's Get Blown",
        "durationMs": 280653
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Step Yo Game Up (feat. Lil Jon & Trina)",
        "durationMs": 263747
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Perfect (feat. Charlie Wilson) [feat. Charlie Wilson]",
        "durationMs": 350533
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "WBallz Interlude",
        "durationMs": 21293
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Fresh Pair of Panties On",
        "durationMs": 158600
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Promise I",
        "durationMs": 197600
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Oh No (feat. 50 Cent)",
        "durationMs": 243467
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "Can You Control Yo Hoe (feat. Soopafly) [feat. Soopafly]",
        "durationMs": 188560
      },
      {
        "discNumber": 1,
        "number": 16,
        "title": "Signs (feat. Charlie Wilson & Justin Timberlake) [feat. Charlie Wilson & Justin Timberlake]",
        "durationMs": 236373
      },
      {
        "discNumber": 1,
        "number": 17,
        "title": "I'm Threw Witchu (feat. Soopafly)",
        "durationMs": 260960
      },
      {
        "discNumber": 1,
        "number": 18,
        "title": "Pass It Pass It",
        "durationMs": 262987
      },
      {
        "discNumber": 1,
        "number": 19,
        "title": "Girl Like U (feat. Nelly) [feat. Nelly]",
        "durationMs": 275880
      },
      {
        "discNumber": 1,
        "number": 20,
        "title": "No Thang On Me (feat. Bootsy Collins) [feat. Bootsy Collins]",
        "durationMs": 280867
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Snoop%20Dogg%20R%26G%20(Rhythm%20%26%20Gangsta)%3A%20The%20Masterpiece",
      "appleMusic": "https://music.apple.com/us/album/r-g-rhythm-gangsta-the-masterpiece/1443395920?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Snoop%20Dogg%20R%26G%20(Rhythm%20%26%20Gangsta)%3A%20The%20Masterpiece"
    }
  },
  "soundgarden-badmotorfinger": {
    "releaseDate": "1991-10-08",
    "label": "A&M Records",
    "trackCount": 12,
    "editionNote": "Badmotorfinger (25th Anniversary / Remastered 2016)",
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Rusty Cage (Remastered 2016)",
        "durationMs": 266206
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Outshined (Remastered 2016)",
        "durationMs": 310997
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Slaves & Bulldozers (Remastered 2016)",
        "durationMs": 416198
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Jesus Christ Pose (Remastered 2016)",
        "durationMs": 351365
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Face Pollution (Remastered 2016)",
        "durationMs": 143845
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Somewhere (Remastered 2016)",
        "durationMs": 261029
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Searching With My Good Eye Closed (Remastered 2016)",
        "durationMs": 391655
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Room A Thousand Years Wide (Remastered 2016)",
        "durationMs": 246263
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Mind Riot (Remastered 2016)",
        "durationMs": 289871
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Drawing Flies (Remastered 2016)",
        "durationMs": 146826
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Holy Water (Remastered 2016)",
        "durationMs": 307506
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "New Damage (Remastered 2016)",
        "durationMs": 340139
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Soundgarden%20Badmotorfinger",
      "appleMusic": "https://music.apple.com/us/album/badmotorfinger-25th-anniversary-remastered-2016/1440890539?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Soundgarden%20Badmotorfinger"
    }
  },
  "soundgarden-superunknown": {
    "releaseDate": "1994-03-08",
    "label": "A&M Records",
    "trackCount": 15,
    "editionNote": "Superunknown (20th Anniversary)",
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Let Me Drown",
        "durationMs": 232547
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "My Wave",
        "durationMs": 312613
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Fell On Black Days",
        "durationMs": 283027
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Mailman",
        "durationMs": 266360
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Superunknown",
        "durationMs": 306920
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Head Down",
        "durationMs": 369773
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Black Hole Sun",
        "durationMs": 318587
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Spoonman",
        "durationMs": 246920
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Limo Wreck",
        "durationMs": 347987
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "The Day I Tried to Live",
        "durationMs": 320107
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Kickstand",
        "durationMs": 94307
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Fresh Tendrils",
        "durationMs": 256507
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "4th of July",
        "durationMs": 308867
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Half",
        "durationMs": 134587
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "Like Suicide",
        "durationMs": 423973
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Soundgarden%20Superunknown",
      "appleMusic": "https://music.apple.com/us/album/superunknown-20th-anniversary/1440811129?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Soundgarden%20Superunknown"
    }
  },
  "taylor-swift-1989": {
    "releaseDate": "2014-10-27",
    "label": "Taylor Swift",
    "trackCount": 14,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Welcome To New York",
        "durationMs": 212600
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Blank Space",
        "durationMs": 231833
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Style",
        "durationMs": 231000
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Out of the Woods",
        "durationMs": 235800
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "All You Had To Do Was Stay",
        "durationMs": 193289
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Shake It Off",
        "durationMs": 219209
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "I Wish You Would",
        "durationMs": 207435
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Bad Blood",
        "durationMs": 211933
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Wildest Dreams",
        "durationMs": 220433
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "How You Get the Girl",
        "durationMs": 247533
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "This Love",
        "durationMs": 250100
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "I Know Places",
        "durationMs": 195700
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Clean",
        "durationMs": 271000
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Taylor%20Swift%201989",
      "appleMusic": "https://music.apple.com/us/album/1989/1440935467?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Taylor%20Swift%201989"
    }
  },
  "taylor-swift-midnights": {
    "releaseDate": "2022-10-21",
    "label": "Taylor Swift",
    "trackCount": 14,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Lavender Haze",
        "durationMs": 202396
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Maroon",
        "durationMs": 218271
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Anti-Hero",
        "durationMs": 200690
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Snow On The Beach (feat. Lana Del Rey)",
        "durationMs": 256124
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "You're On Your Own, Kid",
        "durationMs": 194207
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Midnight Rain",
        "durationMs": 174783
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Question...?",
        "durationMs": 210557
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Vigilante Shit",
        "durationMs": 164801
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Bejeweled",
        "durationMs": 194166
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Labyrinth",
        "durationMs": 247962
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Karma",
        "durationMs": 204852
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Sweet Nothing",
        "durationMs": 188497
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Mastermind",
        "durationMs": 191039
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Meet me at midnight",
        "durationMs": 8590
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Taylor%20Swift%20Midnights",
      "appleMusic": "https://music.apple.com/us/album/midnights/1649434996?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Taylor%20Swift%20Midnights"
    }
  },
  "tears-for-fears-songs-from-the-big-chair": {
    "releaseDate": "1985-02-25",
    "trackCount": 8,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Shout",
        "durationMs": 392667
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "The Working Hour",
        "durationMs": 391653
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Everybody Wants to Rule the World",
        "durationMs": 251480
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Mothers Talk",
        "durationMs": 306320
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "I Believe",
        "durationMs": 295093
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Broken",
        "durationMs": 158573
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Head Over Heels / Broken",
        "durationMs": 302120
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Listen",
        "durationMs": 413867
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Tears%20for%20Fears%20Songs%20from%20the%20Big%20Chair",
      "appleMusic": "https://music.apple.com/us/album/songs-from-the-big-chair/1440813508?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Tears%20for%20Fears%20Songs%20from%20the%20Big%20Chair"
    }
  },
  "the-beatles-abbey-road": {
    "releaseDate": "1969-09-26",
    "label": "Calderstone Productions Limited (a Division of Universal Music Group) / Apple Corps Limited",
    "trackCount": 17,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Come Together (2019 Mix)",
        "durationMs": 260200
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Something (2019 Mix)",
        "durationMs": 182227
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Maxwell's Silver Hammer (2019 Mix)",
        "durationMs": 207973
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Oh! Darling (2019 Mix)",
        "durationMs": 207147
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Octopus's Garden (2019 Mix)",
        "durationMs": 170800
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "I Want You (She's So Heavy) [2019 Mix]",
        "durationMs": 467360
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Here Comes the Sun (2019 Mix)",
        "durationMs": 185707
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Because (2019 Mix)",
        "durationMs": 165613
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "You Never Give Me Your Money (2019 Mix)",
        "durationMs": 242667
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Sun King (2019 Mix)",
        "durationMs": 146333
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Mean Mr. Mustard (2019 Mix)",
        "durationMs": 66467
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Polythene Pam (2019 Mix)",
        "durationMs": 72800
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "She Came In Through the Bathroom Window (2019 Mix)",
        "durationMs": 118813
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Golden Slumbers (2019 Mix)",
        "durationMs": 91440
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "Carry That Weight (2019 Mix)",
        "durationMs": 96440
      },
      {
        "discNumber": 1,
        "number": 16,
        "title": "The End (2019 Mix)",
        "durationMs": 141907
      },
      {
        "discNumber": 1,
        "number": 17,
        "title": "Her Majesty (2019 Mix)",
        "durationMs": 25120
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/The%20Beatles%20Abbey%20Road",
      "appleMusic": "https://music.apple.com/us/album/abbey-road-2019-mix/1474815798?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=The%20Beatles%20Abbey%20Road"
    }
  },
  "the-beatles-hey-jude": {
    "releaseDate": "1969-01-01",
    "label": "Atlantic Records Corporation",
    "trackCount": 11,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Save Me",
        "durationMs": 159227
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Hey Jude",
        "durationMs": 247733
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Back In Your Arms",
        "durationMs": 177067
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Toe Hold",
        "durationMs": 171733
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Night Owl",
        "durationMs": 143440
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "My Own Style of Loving",
        "durationMs": 162560
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "A Man and a Half",
        "durationMs": 172573
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Sit Down and Talk This Over",
        "durationMs": 142093
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Search Your Heart",
        "durationMs": 167973
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Born to Be Wild",
        "durationMs": 166867
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "People Make the World",
        "durationMs": 166067
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/The%20Beatles%20Hey%20Jude",
      "appleMusic": "https://music.apple.com/us/album/hey-jude/265615609?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=The%20Beatles%20Hey%20Jude"
    }
  },
  "the-beatles-let-it-be": {
    "releaseDate": "1970-05-08",
    "label": "Calderstone Productions Limited (a division of Universal Music Group) / Apple Corps Ltd.",
    "trackCount": 14,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Two of Us",
        "durationMs": 215813
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Dig a Pony",
        "durationMs": 235000
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Across the Universe",
        "durationMs": 228133
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "I Me Mine",
        "durationMs": 145587
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Dig It",
        "durationMs": 50467
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Let It Be",
        "durationMs": 243027
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Maggie Mae",
        "durationMs": 40040
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "I've Got a Feeling",
        "durationMs": 217560
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "One After 909",
        "durationMs": 173960
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "The Long and Winding Road",
        "durationMs": 218187
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "For You Blue",
        "durationMs": 152213
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Get Back",
        "durationMs": 187382
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/The%20Beatles%20Let%20It%20Be",
      "appleMusic": "https://music.apple.com/us/album/let-it-be/1441164495?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=The%20Beatles%20Let%20It%20Be"
    }
  },
  "the-cure-boys-don-t-cry": {
    "releaseDate": "2026-01-30",
    "label": "Elektra Entertainment Group",
    "trackCount": 5,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Boys Don't Cry (86 Mix) [2026 Remaster]",
        "durationMs": 158264
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Plastic Passion (79 Mix) [2026 Remaster]",
        "durationMs": 134422
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Pillbox Tales (86 Mix) [2026 Remaster]",
        "durationMs": 177109
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Do the Hansa (86 Mix) [2026 Remaster]",
        "durationMs": 159735
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Boys Don't Cry (86 12\" Mix) [2026 Remaster]",
        "durationMs": 331788
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/The%20Cure%20Boys%20Don't%20Cry",
      "appleMusic": "https://music.apple.com/us/album/boys-dont-cry-86-mix-ep/1872265019?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=The%20Cure%20Boys%20Don't%20Cry"
    }
  },
  "the-cure-kiss-me-kiss-me-kiss-me": {
    "releaseDate": "1987",
    "links": {
      "spotify": "https://open.spotify.com/search/The%20Cure%20Kiss%20Me%2C%20Kiss%20Me%2C%20Kiss%20Me",
      "youtubeMusic": "https://music.youtube.com/search?q=The%20Cure%20Kiss%20Me%2C%20Kiss%20Me%2C%20Kiss%20Me"
    }
  },
  "the-cure-wish": {
    "releaseDate": "1992",
    "links": {
      "spotify": "https://open.spotify.com/search/The%20Cure%20Wish",
      "youtubeMusic": "https://music.youtube.com/search?q=The%20Cure%20Wish"
    }
  },
  "the-irrepressibles-mirror-mirror": {
    "releaseDate": "2010",
    "links": {
      "spotify": "https://open.spotify.com/search/The%20Irrepressibles%20Mirror%20Mirror",
      "youtubeMusic": "https://music.youtube.com/search?q=The%20Irrepressibles%20Mirror%20Mirror"
    }
  },
  "the-irrepressibles-nude": {
    "releaseDate": "2012-10-21",
    "label": "Of Naked Design Recordings",
    "trackCount": 10,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Time Passing",
        "durationMs": 178012
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Pale Sweet Healing",
        "durationMs": 309589
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "New World",
        "durationMs": 324151
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Tears (Prelude)",
        "durationMs": 185685
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Two Men in Love",
        "durationMs": 386773
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "To Be",
        "durationMs": 322216
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Arrow",
        "durationMs": 286214
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Tears",
        "durationMs": 231348
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "The Opening",
        "durationMs": 115537
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Ship",
        "durationMs": 133747
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/The%20Irrepressibles%20Nude",
      "appleMusic": "https://music.apple.com/us/album/nude/1617776062?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=The%20Irrepressibles%20Nude"
    }
  },
  "the-weeknd-after-hours": {
    "releaseDate": "2020-03-20",
    "label": "The Weeknd XO",
    "trackCount": 14,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Alone Again",
        "durationMs": 250057
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Too Late",
        "durationMs": 239980
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Hardest To Love",
        "durationMs": 211402
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Scared To Live",
        "durationMs": 191299
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Snowchild",
        "durationMs": 247192
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Escape From LA",
        "durationMs": 355960
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Heartless",
        "durationMs": 198267
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Faith",
        "durationMs": 283217
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Blinding Lights",
        "durationMs": 200046
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "In Your Eyes",
        "durationMs": 237522
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Save Your Tears",
        "durationMs": 215627
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Repeat After Me (Interlude)",
        "durationMs": 195816
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "After Hours",
        "durationMs": 361025
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Until I Bleed Out",
        "durationMs": 190151
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/The%20Weeknd%20After%20Hours",
      "appleMusic": "https://music.apple.com/us/album/after-hours/1499385848?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=The%20Weeknd%20After%20Hours"
    }
  },
  "the-weeknd-starboy": {
    "releaseDate": "2016-11-25",
    "label": "The Weeknd XO",
    "trackCount": 18,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Starboy (feat. Daft Punk)",
        "durationMs": 230461
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Party Monster",
        "durationMs": 249208
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "False Alarm",
        "durationMs": 220309
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Reminder",
        "durationMs": 218879
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Rockin’",
        "durationMs": 232882
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Secrets",
        "durationMs": 265607
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "True Colors",
        "durationMs": 206035
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Stargirl Interlude (feat. Lana Del Rey)",
        "durationMs": 111611
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Sidewalks (feat. Kendrick Lamar)",
        "durationMs": 231358
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Six Feet Under",
        "durationMs": 237576
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Love To Lay",
        "durationMs": 223302
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "A Lonely Night",
        "durationMs": 220170
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Attention",
        "durationMs": 197650
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Ordinary Life",
        "durationMs": 221913
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "Nothing Without You",
        "durationMs": 198655
      },
      {
        "discNumber": 1,
        "number": 16,
        "title": "All I Know (feat. Future)",
        "durationMs": 321031
      },
      {
        "discNumber": 1,
        "number": 17,
        "title": "Die For You",
        "durationMs": 260256
      },
      {
        "discNumber": 1,
        "number": 18,
        "title": "I Feel It Coming (feat. Daft Punk)",
        "durationMs": 269177
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/The%20Weeknd%20Starboy",
      "appleMusic": "https://music.apple.com/us/album/starboy/1440870373?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=The%20Weeknd%20Starboy"
    }
  },
  "tim-hecker-harmony-in-ultraviolet": {
    "releaseDate": "2006-10-16",
    "label": "kranky",
    "trackCount": 15,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Rainbow Blood",
        "durationMs": 112560
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Stags, Aircraft, Kings and Secrataries",
        "durationMs": 270947
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Palimpsest (Pt. I)",
        "durationMs": 35507
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Chimeras",
        "durationMs": 193707
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Dungeoneering",
        "durationMs": 324653
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Palimpsest (Pt. 2)",
        "durationMs": 38533
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Spring Heeled Jack Flies Tonight",
        "durationMs": 191147
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Harmony In Blue (Pt. I)",
        "durationMs": 91827
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Harmony In Blue (Pt. 2)",
        "durationMs": 112693
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Harmony In Blue (Pt. 3)",
        "durationMs": 161027
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Harmony In Blue (Pt. 4)",
        "durationMs": 122653
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Radio Spiricom",
        "durationMs": 292360
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Whitecaps of White Noise (Pt. I)",
        "durationMs": 449760
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Whitecaps of White Noise (Pt. 2)",
        "durationMs": 357173
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "Blood Rainbow",
        "durationMs": 246453
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Tim%20Hecker%20Harmony%20in%20Ultraviolet",
      "appleMusic": "https://music.apple.com/us/album/harmony-in-ultraviolet/189047071?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Tim%20Hecker%20Harmony%20in%20Ultraviolet"
    }
  },
  "tim-hecker-virgins": {
    "releaseDate": "2013-10-14",
    "label": "warp music publishing",
    "trackCount": 12,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Prism",
        "durationMs": 173504
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Virginal I",
        "durationMs": 376796
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Radiance",
        "durationMs": 202982
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Live Room",
        "durationMs": 421968
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Live Room Out",
        "durationMs": 157369
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Virginal II",
        "durationMs": 323677
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Black Refraction",
        "durationMs": 213769
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Incense at Abu Ghraib",
        "durationMs": 113587
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Amps, Drugs, Harmonium",
        "durationMs": 183219
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Stigmata I",
        "durationMs": 138296
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Stigmata II",
        "durationMs": 236133
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Stab Variation",
        "durationMs": 390837
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Tim%20Hecker%20Virgins",
      "appleMusic": "https://music.apple.com/us/album/virgins/699511308?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Tim%20Hecker%20Virgins"
    }
  },
  "underworld-dubnobasswithmyheadman": {
    "releaseDate": "1994-01-24",
    "trackCount": 9,
    "editionNote": "Dubnobasswithmyheadman (20th Anniversary Remaster)",
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Dark & Long (Remastered)",
        "durationMs": 453456
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Mmm...Skyscraper I Love You (Remastered)",
        "durationMs": 790950
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Surfboy (Remastered)",
        "durationMs": 453980
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Spoonman (Remastered)",
        "durationMs": 461667
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Tongue (Remastered)",
        "durationMs": 290124
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Dirty Epic (Remastered)",
        "durationMs": 595670
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Cowgirl (Remastered)",
        "durationMs": 509203
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "River of Bass (Remastered)",
        "durationMs": 386230
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "M.E. (Remastered)",
        "durationMs": 429614
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Underworld%20Dubnobasswithmyheadman",
      "appleMusic": "https://music.apple.com/us/album/dubnobasswithmyheadman-20th-anniversary-remaster/1443808376?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Underworld%20Dubnobasswithmyheadman"
    }
  },
  "underworld-trainspotting": {
    "releaseDate": "1996",
    "links": {
      "spotify": "https://open.spotify.com/search/Underworld%20Trainspotting",
      "youtubeMusic": "https://music.youtube.com/search?q=Underworld%20Trainspotting"
    }
  },
  "4-non-blondes-bigger-better-faster-more": {
    "releaseDate": "1992-10-13",
    "label": "Interscope Records",
    "trackCount": 11,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Train",
        "durationMs": 223560
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Superfly",
        "durationMs": 277507
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "What's Up?",
        "durationMs": 295533
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Pleasantly Blue",
        "durationMs": 146960
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Morphine and Chocolate",
        "durationMs": 281733
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Spaceman",
        "durationMs": 220307
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Old Mr. Heffer",
        "durationMs": 136800
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Calling All the People",
        "durationMs": 197627
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Dear Mr. President",
        "durationMs": 283267
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Drifting",
        "durationMs": 210240
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "No Place Like Home",
        "durationMs": 188907
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/4%20Non%20Blondes%20Bigger%2C%20Better%2C%20Faster%2C%20More!",
      "appleMusic": "https://music.apple.com/us/album/bigger-better-faster-more/1440902342?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=4%20Non%20Blondes%20Bigger%2C%20Better%2C%20Faster%2C%20More!"
    }
  },
  "aerosmith-aerosmith": {
    "releaseDate": "1973-01-05",
    "label": "Aerodisc Partnership",
    "trackCount": 8,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Make It",
        "durationMs": 220545
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Somebody",
        "durationMs": 225734
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Dream On",
        "durationMs": 267597
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "One Way Street",
        "durationMs": 422607
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Mama Kin",
        "durationMs": 269191
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Write Me a Letter",
        "durationMs": 252508
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Movin' Out",
        "durationMs": 302717
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Walkin' the Dog",
        "durationMs": 193515
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Aerosmith%20Aerosmith",
      "appleMusic": "https://music.apple.com/us/album/aerosmith/1658644936?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Aerosmith%20Aerosmith"
    }
  },
  "air-moon-safari": {
    "releaseDate": "1998-01-16",
    "trackCount": 10,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "La Femme d'argent",
        "durationMs": 426614
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Sexy Boy",
        "durationMs": 298467
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "All I Need",
        "durationMs": 268307
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Kelly Watch the Stars",
        "durationMs": 226293
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Talisman",
        "durationMs": 256707
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Remember",
        "durationMs": 154293
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "You Make It Easy",
        "durationMs": 241533
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Ce Matin-Là",
        "durationMs": 219040
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "New Star In the Sky",
        "durationMs": 340600
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Le voyage de Pénélope",
        "durationMs": 190867
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Air%20Moon%20Safari",
      "appleMusic": "https://music.apple.com/us/album/moon-safari/693063670?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Air%20Moon%20Safari"
    }
  },
  "america-america": {
    "releaseDate": "1971-12-29",
    "label": "Warner Records Inc.",
    "trackCount": 12,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Riverside",
        "durationMs": 181093
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Sandman",
        "durationMs": 308600
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Three Roses",
        "durationMs": 233933
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Children",
        "durationMs": 188293
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "A Horse With No Name",
        "durationMs": 252240
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Here",
        "durationMs": 327933
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "I Need You",
        "durationMs": 183187
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Rainy Day",
        "durationMs": 174440
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Never Found the Time",
        "durationMs": 230733
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Clarice",
        "durationMs": 241293
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Donkey Jaw",
        "durationMs": 319600
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Pigeon Song",
        "durationMs": 138133
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/America%20America",
      "appleMusic": "https://music.apple.com/us/album/america/301027593?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=America%20America"
    }
  },
  "audioslave-out-of-exile": {
    "releaseDate": "2005-05-23",
    "label": "Interscope Records and Sony BMG Entertainment",
    "trackCount": 12,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Your Time Has Come",
        "durationMs": 255427
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Out of Exile",
        "durationMs": 288507
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Be Yourself",
        "durationMs": 278973
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Doesn't Remind Me",
        "durationMs": 255000
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Drown Me Slowly",
        "durationMs": 233600
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Heavens Dead",
        "durationMs": 276160
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "The Worm",
        "durationMs": 236667
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Man or Animal",
        "durationMs": 232440
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Yesterday to Tomorrow",
        "durationMs": 273680
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Dandelion",
        "durationMs": 278027
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "#1 Zero",
        "durationMs": 299000
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "The Curse",
        "durationMs": 309707
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Audioslave%20Out%20of%20Exile",
      "appleMusic": "https://music.apple.com/us/album/out-of-exile/1440715095?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Audioslave%20Out%20of%20Exile"
    }
  },
  "black-sabbath-paranoid": {
    "releaseDate": "1970-09-18",
    "label": "Warner Records Inc. Marketed by Rhino Entertainment",
    "trackCount": 8,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "War Pigs / Luke's Wall",
        "durationMs": 474360
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Paranoid",
        "durationMs": 168406
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Planet Caravan",
        "durationMs": 269027
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Iron Man",
        "durationMs": 355304
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Electric Funeral",
        "durationMs": 289803
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Hand of Doom",
        "durationMs": 428291
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Rat Salad",
        "durationMs": 150802
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Jack the Stripper / Fairies Wear Boots",
        "durationMs": 372145
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Black%20Sabbath%20Paranoid",
      "appleMusic": "https://music.apple.com/us/album/paranoid/785232473?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Black%20Sabbath%20Paranoid"
    }
  },
  "blur-parklife": {
    "releaseDate": "1994-04-25",
    "label": "Parlophone Records Ltd",
    "trackCount": 16,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Girls and Boys",
        "durationMs": 291200
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Tracy Jacks",
        "durationMs": 259627
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "End of a Century",
        "durationMs": 165840
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Parklife",
        "durationMs": 185093
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Bank Holiday",
        "durationMs": 102307
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Badhead",
        "durationMs": 205773
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "The Debt Collector",
        "durationMs": 130720
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Far Out",
        "durationMs": 97547
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "To the End",
        "durationMs": 244600
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "London Loves",
        "durationMs": 255453
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Trouble in the Message Centre",
        "durationMs": 249040
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Clover Over Dover",
        "durationMs": 202253
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Magic America",
        "durationMs": 217907
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Jubilee",
        "durationMs": 167800
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "This Is a Low",
        "durationMs": 316747
      },
      {
        "discNumber": 1,
        "number": 16,
        "title": "Lot 105",
        "durationMs": 79000
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Blur%20Parklife",
      "appleMusic": "https://music.apple.com/us/album/parklife/699665183?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Blur%20Parklife"
    }
  },
  "boards-of-canada-the-campfire-headphase": {
    "releaseDate": "2005-10-17",
    "label": "Warp Records Limited",
    "trackCount": 15,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Into the Rainbow Vein",
        "durationMs": 44280
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Chromakey Dreamcoat",
        "durationMs": 347467
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Satellite Anthem Icarus",
        "durationMs": 364533
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Peacock Tail",
        "durationMs": 324907
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Dayvan Cowboy",
        "durationMs": 300187
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "A Moment of Clarity",
        "durationMs": 51720
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "84 Pontiac Dream",
        "durationMs": 229813
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Sherbet Head",
        "durationMs": 161853
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Oscar See Through Red Eye",
        "durationMs": 308760
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Ataronchronon",
        "durationMs": 74133
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Hey Saturday Sun",
        "durationMs": 296480
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Constants Are Changing",
        "durationMs": 102053
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Slow This Bird Down",
        "durationMs": 369147
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Tears from the Compound Eye",
        "durationMs": 243547
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "Farewell Fire",
        "durationMs": 506267
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Boards%20of%20Canada%20The%20Campfire%20Headphase",
      "appleMusic": "https://music.apple.com/us/album/the-campfire-headphase/81696254?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Boards%20of%20Canada%20The%20Campfire%20Headphase"
    }
  },
  "boston-boston": {
    "releaseDate": "1976-08-25",
    "trackCount": 8,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "More Than a Feeling",
        "durationMs": 285133
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Peace of Mind",
        "durationMs": 303587
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Foreplay / Long Time",
        "durationMs": 467640
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Rock & Roll Band",
        "durationMs": 180347
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Smokin'",
        "durationMs": 261387
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Hitch a Ride",
        "durationMs": 251733
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Something About You",
        "durationMs": 227907
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Let Me Take You Home Tonight",
        "durationMs": 286680
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Boston%20Boston",
      "appleMusic": "https://music.apple.com/us/album/boston/913902091?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Boston%20Boston"
    }
  },
  "busta-rhymes-when-disaster-strikes": {
    "releaseDate": "1997-09-16",
    "label": "Elektra Entertainment Company. Marketed by Rhino Entertainment Company",
    "trackCount": 18,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Intro",
        "durationMs": 283067
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "The Whole World Lookin' At Me",
        "durationMs": 209200
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Survival Hungry",
        "durationMs": 206227
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "When Disaster Strikes",
        "durationMs": 204920
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "So Hardcore",
        "durationMs": 215587
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Get High Tonight",
        "durationMs": 231187
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Turn It Up",
        "durationMs": 251893
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Put Your Hands Where My Eyes Could See",
        "durationMs": 194560
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "There's Not a Problem My Squad Can't Fix (feat. Jamal)",
        "durationMs": 200253
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "We Could Take It Outside (feat. The Flipmode Squad)",
        "durationMs": 286760
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Rhymes Galore",
        "durationMs": 153467
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Things We Be Doin' for Money, Pt. 1",
        "durationMs": 156027
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Things We Be Doin' for Money, Pt. 2 (feat. Rampage, Anthony Hamilton & Chosen Generation)",
        "durationMs": 230787
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "One (feat. Erykah Badu)",
        "durationMs": 270160
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "Dangerous (feat. Erykah Badu)",
        "durationMs": 217533
      },
      {
        "discNumber": 1,
        "number": 16,
        "title": "The Body Rock (feat. Rampage, Sean \"Puffy\" Combs & Mace)",
        "durationMs": 246000
      },
      {
        "discNumber": 1,
        "number": 17,
        "title": "Get Off My Block (feat. Lord Have Mercy)",
        "durationMs": 239160
      },
      {
        "discNumber": 1,
        "number": 18,
        "title": "Outro (Preparation for the Final World Front)",
        "durationMs": 150800
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Busta%20Rhymes%20When%20Disaster%20Strikes...",
      "appleMusic": "https://music.apple.com/us/album/when-disaster-strikes/321975625?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Busta%20Rhymes%20When%20Disaster%20Strikes..."
    }
  },
  "coldplay-parachutes": {
    "releaseDate": "2000-07-10",
    "label": "Parlophone Records Ltd",
    "trackCount": 10,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Don't Panic",
        "durationMs": 137225
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Shiver",
        "durationMs": 299265
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Spies",
        "durationMs": 318268
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Sparks",
        "durationMs": 227094
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Yellow",
        "durationMs": 269208
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Trouble",
        "durationMs": 270731
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Parachutes",
        "durationMs": 46228
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "High Speed",
        "durationMs": 254049
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "We Never Change",
        "durationMs": 249327
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Everything's Not Lost",
        "durationMs": 435248
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Coldplay%20Parachutes",
      "appleMusic": "https://music.apple.com/us/album/parachutes/1122782080?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Coldplay%20Parachutes"
    }
  },
  "busta-rhymes-the-big-bang": {
    "releaseDate": "2006-01-01",
    "label": "Aftermath Records",
    "trackCount": 16,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Get You Some (feat. Q-Tip)",
        "durationMs": 225893
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Touch It",
        "durationMs": 214960
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "How We Do It Over Here (feat. Missy Elliott)",
        "durationMs": 216027
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "New York Shit (feat. Swizz Beatz)",
        "durationMs": 181667
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Been Through the Storm (feat. Stevie Wonder)",
        "durationMs": 246933
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "In the Ghetto (feat. Rick James)",
        "durationMs": 233440
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Cocaina (feat. Marsha of Floetry)",
        "durationMs": 212307
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "You Can't Hold the Torch (feat. Q-Tip)",
        "durationMs": 219453
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Goldmine (feat. Raekwon)",
        "durationMs": 225120
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "I Love My Bitch (feat. will.i.am & Kelis)",
        "durationMs": 227667
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Don't Get Carried Away (feat. Nas)",
        "durationMs": 210587
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "They're Out to Get Me (feat. Mr. Porter)",
        "durationMs": 302480
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Get Down (feat. Timbaland)",
        "durationMs": 220600
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "I'll Do It All (feat. Latoiya Williams)",
        "durationMs": 302027
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "Legend of the Fall Offs",
        "durationMs": 280307
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Busta%20Rhymes%20The%20Big%20Bang",
      "appleMusic": "https://music.apple.com/us/album/the-big-bang/1445847151?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Busta%20Rhymes%20The%20Big%20Bang"
    }
  },
  "coldplay-xandy": {
    "releaseDate": "2005-06-06",
    "label": "Parlophone Records Ltd",
    "trackCount": 14,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Square One",
        "durationMs": 287336
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "What If",
        "durationMs": 297252
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "White Shadows",
        "durationMs": 328269
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Fix You",
        "durationMs": 294992
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Talk",
        "durationMs": 311060
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "X&Y",
        "durationMs": 274353
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Speed of Sound",
        "durationMs": 288393
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "A Message",
        "durationMs": 285482
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Low",
        "durationMs": 332095
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "The Hardest Part",
        "durationMs": 265109
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Swallowed in the Sea",
        "durationMs": 238823
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Twisted Logic",
        "durationMs": 272162
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Til Kingdom Come",
        "durationMs": 251055
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Coldplay%20X%26Y",
      "appleMusic": "https://music.apple.com/us/album/x-y/1123076757?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Coldplay%20X%26Y"
    }
  },
  "creedence-clearwater-revival-pendulum": {
    "releaseDate": "1970-12-15",
    "label": "Concord Music Group",
    "trackCount": 11,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Pagan Baby",
        "durationMs": 385047
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Sailor's Lament",
        "durationMs": 231355
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Chameleon",
        "durationMs": 199635
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Have You Ever Seen the Rain?",
        "durationMs": 162098
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "(Wish I Could) Hideaway",
        "durationMs": 228973
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Born To Move",
        "durationMs": 340404
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Hey Tonight",
        "durationMs": 165321
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "It's Just a Thought",
        "durationMs": 235219
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Molina",
        "durationMs": 164941
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Rude Awakening #2",
        "durationMs": 380888
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Creedence%20Clearwater%20Revival%20Pendulum",
      "appleMusic": "https://music.apple.com/us/album/pendulum/1440948020?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Creedence%20Clearwater%20Revival%20Pendulum"
    }
  },
  "dire-straits-brothers-in-arms": {
    "releaseDate": "1985-05-17",
    "label": "Mercury Records Ltd. (London)",
    "trackCount": 9,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "So Far Away",
        "durationMs": 312133
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Money for Nothing",
        "durationMs": 506400
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Walk of Life",
        "durationMs": 252507
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Your Latest Trick",
        "durationMs": 393867
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Why Worry",
        "durationMs": 511293
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Ride Across the River",
        "durationMs": 417907
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "The Man's Too Strong",
        "durationMs": 280427
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "One World",
        "durationMs": 220773
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Brothers In Arms",
        "durationMs": 419400
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Dire%20Straits%20Brothers%20in%20Arms",
      "appleMusic": "https://music.apple.com/us/album/brothers-in-arms/299545299?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Dire%20Straits%20Brothers%20in%20Arms"
    }
  },
  "dmx-and-then-there-was-x": {
    "releaseDate": "1999-12-21",
    "label": "The Island Def Jam Music Group",
    "trackCount": 15,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "One More Road to Cross",
        "durationMs": 260760
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "The Professional",
        "durationMs": 208800
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Fame",
        "durationMs": 223097
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Here We Go Again",
        "durationMs": 233240
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Party Up (Up in Here)",
        "durationMs": 268867
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Make a Move",
        "durationMs": 213693
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "What These Bitches Want (feat. Sisqó)",
        "durationMs": 252733
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "What's My Name?",
        "durationMs": 229067
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "More 2 a Song",
        "durationMs": 223000
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Don't You Ever",
        "durationMs": 233240
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "D-X-L (Hard White) [feat. The Lox & Drag-On]",
        "durationMs": 258493
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Comin' for Ya",
        "durationMs": 242040
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Prayer 3",
        "durationMs": 120067
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Angel (feat. Regina Bell)",
        "durationMs": 308200
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "Good Girls, Bad Guys (feat. Dyme)",
        "durationMs": 236133
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/DMX%20...And%20Then%20There%20Was%20X",
      "appleMusic": "https://music.apple.com/us/album/and-then-there-was-x/1444117538?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=DMX%20...And%20Then%20There%20Was%20X"
    }
  },
  "dr-dre-2001": {
    "releaseDate": "1999-11-16",
    "label": "Aftermath Entertainment/Interscope Records",
    "trackCount": 23,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Lolo (Intro)",
        "durationMs": 40987
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "The Watcher",
        "durationMs": 206573
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "F*** You (feat. Devin a/k/a The Dude & Snoop Dogg)",
        "durationMs": 205413
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Still D.R.E. (feat. Snoop Dogg)",
        "durationMs": 270560
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Big Ego's (feat. Hittman)",
        "durationMs": 237667
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Xxplosive (feat. Hittman, Six-Two, Nate Dogg & Kurupt)",
        "durationMs": 169973
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "What's the Difference (feat. Eminem & Alvin Joiner)",
        "durationMs": 244240
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Bar One",
        "durationMs": 50520
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Light Speed (feat. Hittman)",
        "durationMs": 161000
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Forgot About Dre (feat. Eminem)",
        "durationMs": 222253
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "The Next Episode (feat. Snoop Dogg)",
        "durationMs": 161547
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Let's Get High (feat. Hittman, Ms. Roq & Kurupt)",
        "durationMs": 147413
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Bi*** Ni**az (feat. Hittman, Six-Two & Snoop Dogg)",
        "durationMs": 253533
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "The Car Bomb",
        "durationMs": 60893
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "Murder Ink (feat. Hittman & Ms. Roq)",
        "durationMs": 148347
      },
      {
        "discNumber": 1,
        "number": 16,
        "title": "Ed-Ucation (feat. Hittman & Ms. Roq)",
        "durationMs": 92093
      },
      {
        "discNumber": 1,
        "number": 17,
        "title": "Some L.A. N****z (feat. Hittman, Ms. Roq, Knoc-Turn'al, Time Bomb, Koka Kambon, Defari, MC Ren & Alvin Joiner)",
        "durationMs": 269800
      },
      {
        "discNumber": 1,
        "number": 18,
        "title": "Pause 4 Porno",
        "durationMs": 83453
      },
      {
        "discNumber": 1,
        "number": 19,
        "title": "Housewife (feat. Hittman & Kurupt)",
        "durationMs": 242667
      },
      {
        "discNumber": 1,
        "number": 20,
        "title": "Ackrite (feat. Hittman)",
        "durationMs": 219960
      },
      {
        "discNumber": 1,
        "number": 21,
        "title": "Bang Bang (feat. Hittman & Knoc-Turn'al)",
        "durationMs": 222333
      },
      {
        "discNumber": 1,
        "number": 22,
        "title": "The Message (feat. Mary J. Blige & Rell) [Non]",
        "durationMs": 303973
      },
      {
        "discNumber": 1,
        "number": 23,
        "title": "Outro (Non)",
        "durationMs": 25507
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Dr.%20Dre%202001",
      "appleMusic": "https://music.apple.com/us/album/2001/1444156266?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Dr.%20Dre%202001"
    }
  },
  "elvis-presley-blue-hawaii": {
    "releaseDate": "1961-10-01",
    "label": "Sony Music Entertainment",
    "trackCount": 14,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Blue Hawaii",
        "durationMs": 157026
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Almost Always True",
        "durationMs": 144182
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Aloha Oe",
        "durationMs": 115017
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "No More",
        "durationMs": 144184
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Can't Help Falling In Love",
        "durationMs": 185878
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Rock-A-Hula Baby",
        "durationMs": 123863
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Moonlight Swim",
        "durationMs": 141146
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Ku-U-I-Po",
        "durationMs": 143168
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Ito Eats",
        "durationMs": 84914
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Slicin' Sand",
        "durationMs": 97266
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Hawaiian Sunset",
        "durationMs": 154652
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Beach Boy Blues",
        "durationMs": 124748
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Island of Love",
        "durationMs": 161112
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Hawaiian Wedding Song",
        "durationMs": 169164
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Elvis%20Presley%20Blue%20Hawaii",
      "appleMusic": "https://music.apple.com/us/album/blue-hawaii-original-soundtrack/949550016?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Elvis%20Presley%20Blue%20Hawaii"
    }
  },
  "fatboy-slim-you-ve-come-a-long-way-baby": {
    "releaseDate": "1998-01-01",
    "label": "Skint Records",
    "trackCount": 11,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Right Here, Right Now",
        "durationMs": 387707
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "The Rockafeller Skank",
        "durationMs": 413880
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Ill'n In Heaven",
        "durationMs": 227880
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Gangster Trippin'",
        "durationMs": 320053
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Build It Up - Tear It Down",
        "durationMs": 305440
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Kalifornia",
        "durationMs": 353400
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Soul Surfing",
        "durationMs": 296453
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "You're Not from Brighton",
        "durationMs": 320693
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Praise You",
        "durationMs": 323240
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Love Island",
        "durationMs": 318307
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Acid 8000",
        "durationMs": 448147
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Fatboy%20Slim%20You've%20Come%20a%20Long%20Way%2C%20Baby",
      "appleMusic": "https://music.apple.com/us/album/youve-come-a-long-way-baby/714927896?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Fatboy%20Slim%20You've%20Come%20a%20Long%20Way%2C%20Baby"
    }
  },
  "foreigner-agent-provocateur": {
    "releaseDate": "1984-12-07",
    "label": "Atlantic Recording Corporation for the United States and WEA International Inc. for the world outside of the United States.",
    "trackCount": 10,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Tooth and Nail",
        "durationMs": 235200
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "That Was Yesterday",
        "durationMs": 229053
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "I Want to Know What Love Is",
        "durationMs": 304787
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Growing Up the Hard Way",
        "durationMs": 253867
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Reaction to Action",
        "durationMs": 212000
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Stranger In My Own House",
        "durationMs": 304973
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "A Love In Vain",
        "durationMs": 271027
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Down On Love",
        "durationMs": 249933
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Two Different Worlds",
        "durationMs": 271827
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "She's Too Tough",
        "durationMs": 190640
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Foreigner%20Agent%20Provocateur",
      "appleMusic": "https://music.apple.com/us/album/agent-provocateur/216663946?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Foreigner%20Agent%20Provocateur"
    }
  },
  "gorillaz-demon-days": {
    "releaseDate": "2005-05-11",
    "label": "Parlophone Records Limited",
    "trackCount": 15,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Intro",
        "durationMs": 63160
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Last Living Souls",
        "durationMs": 190400
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Kids with Guns",
        "durationMs": 225840
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "O Green World",
        "durationMs": 271960
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Dirty Harry (feat. Bootie Brown)",
        "durationMs": 223800
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Feel Good Inc. (feat. David Jolicoeur, Kelvin Mercer & Vincent Mason)",
        "durationMs": 221173
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "El Mañana",
        "durationMs": 230027
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Every Planet We Reach Is Dead",
        "durationMs": 293267
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "November Has Come",
        "durationMs": 161107
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "All Alone (feat. Martina Topley-Bird & Roots Manuva)",
        "durationMs": 210067
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "White Light",
        "durationMs": 128427
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "DARE (feat. Shaun Ryder & Roses Gabor)",
        "durationMs": 244307
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Fire Coming out of the Monkey's Head",
        "durationMs": 196427
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Don't Get Lost in Heaven",
        "durationMs": 120373
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "Demon Days",
        "durationMs": 268893
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Gorillaz%20Demon%20Days",
      "appleMusic": "https://music.apple.com/us/album/demon-days/850571319?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Gorillaz%20Demon%20Days"
    }
  },
  "heart-bad-animals": {
    "releaseDate": "1987-01-01",
    "label": "Capitol Records Inc.",
    "trackCount": 10,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Who Will You Run To",
        "durationMs": 246400
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Alone",
        "durationMs": 218733
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "There's the Girl",
        "durationMs": 230067
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "I Want You So Bad",
        "durationMs": 261640
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Wait for an Answer",
        "durationMs": 271493
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Bad Animals",
        "durationMs": 294133
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "You Ain't So Tough",
        "durationMs": 245600
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Strangers of the Heart",
        "durationMs": 221200
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Easy Target",
        "durationMs": 238467
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "RSVP",
        "durationMs": 219173
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Heart%20Bad%20Animals",
      "appleMusic": "https://music.apple.com/us/album/bad-animals/724077331?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Heart%20Bad%20Animals"
    }
  },
  "ice-cube-the-predator": {
    "releaseDate": "1992-11-17",
    "label": "UMG Recordings",
    "trackCount": 16,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "The First Day of School",
        "durationMs": 79960
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "When Will They Shoot?",
        "durationMs": 276364
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "I'm Scared",
        "durationMs": 92200
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Wicked",
        "durationMs": 234400
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Now I Gotta Wet 'Cha",
        "durationMs": 224960
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "The Predator",
        "durationMs": 243573
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "It Was a Good Day",
        "durationMs": 261596
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "We Had to Tear This Mothaf***a Up",
        "durationMs": 262803
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "F**k 'Em",
        "durationMs": 122093
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Dirty Mack",
        "durationMs": 273600
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Don't Trust 'Em",
        "durationMs": 228995
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Gangsta's Fairytale 2",
        "durationMs": 199000
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Check Yo Self (feat. Das EFX)",
        "durationMs": 221600
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Who Got the Camera?",
        "durationMs": 276867
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "Integration",
        "durationMs": 151760
      },
      {
        "discNumber": 1,
        "number": 16,
        "title": "Say Hi to the Bad Guy",
        "durationMs": 189933
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Ice%20Cube%20The%20Predator",
      "appleMusic": "https://music.apple.com/us/album/the-predator/1444057366?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Ice%20Cube%20The%20Predator"
    }
  },
  "jeff-buckley-grace": {
    "releaseDate": "1994-08-23",
    "label": "Columbia Records",
    "trackCount": 11,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Mojo Pin",
        "durationMs": 342813
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Grace",
        "durationMs": 322040
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Last Goodbye",
        "durationMs": 275720
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Lilac Wine",
        "durationMs": 272907
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "So Real",
        "durationMs": 283520
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Hallelujah",
        "durationMs": 413827
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Lover, You Should've Come Over",
        "durationMs": 404213
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Corpus Christi Carol",
        "durationMs": 176760
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Eternal Life",
        "durationMs": 292347
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Dream Brother",
        "durationMs": 331787
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Forget Her",
        "durationMs": 314440
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Jeff%20Buckley%20Grace",
      "appleMusic": "https://music.apple.com/us/album/grace/1046187510?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Jeff%20Buckley%20Grace"
    }
  },
  "jimi-hendrix-electric-ladyland": {
    "releaseDate": "1968-10-16",
    "label": "Sony Music Entertainment",
    "trackCount": 17,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "...And the Gods Made Love",
        "durationMs": 82627
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Have You Ever Been (To Electric Ladyland)",
        "durationMs": 130040
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Crosstown Traffic",
        "durationMs": 146573
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Voodoo Chile",
        "durationMs": 899933
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Little Miss Strange",
        "durationMs": 172200
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Long Hot Summer Night",
        "durationMs": 207760
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Come On (Let the Good Times Roll)",
        "durationMs": 249373
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Gypsy Eyes",
        "durationMs": 223680
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Burning of the Midnight Lamp",
        "durationMs": 219613
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Rainy Day, Dream Away",
        "durationMs": 222067
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "1983... (A Merman I Should Turn to Be)",
        "durationMs": 819627
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Moon, Turn the Tides... Gently Gently Away",
        "durationMs": 61773
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Still Raining, Still Dreaming",
        "durationMs": 265587
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "House Burning Down",
        "durationMs": 272840
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "All Along the Watchtower",
        "durationMs": 240800
      },
      {
        "discNumber": 1,
        "number": 16,
        "title": "Voodoo Child (Slight Return)",
        "durationMs": 313373
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Jimi%20Hendrix%20Electric%20Ladyland",
      "appleMusic": "https://music.apple.com/us/album/electric-ladyland/357652252?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Jimi%20Hendrix%20Electric%20Ladyland"
    }
  },
  "john-lennon-imagine": {
    "releaseDate": "1971-09-09",
    "label": "Calderstone Productions Limited (a division of Universal Music Group)",
    "trackCount": 11,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Imagine",
        "durationMs": 186853
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Crippled Inside",
        "durationMs": 232627
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Jealous Guy",
        "durationMs": 257733
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "It's So Hard",
        "durationMs": 149053
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "I Don't Wanna Be a Soldier Mama",
        "durationMs": 368653
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Gimme Some Truth",
        "durationMs": 198160
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Oh My Love",
        "durationMs": 167773
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "How Do You Sleep?",
        "durationMs": 339027
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "How?",
        "durationMs": 226333
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Oh Yoko!",
        "durationMs": 257124
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/John%20Lennon%20Imagine",
      "appleMusic": "https://music.apple.com/us/album/imagine/1440853752?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=John%20Lennon%20Imagine"
    }
  },
  "justin-timberlake-justified": {
    "releaseDate": "2002-11-05",
    "label": "Zomba Recording LLC",
    "trackCount": 13,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Señorita",
        "durationMs": 294867
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Like I Love You",
        "durationMs": 283627
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "(Oh No) What You Got",
        "durationMs": 271333
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Take It from Here",
        "durationMs": 374333
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Cry Me a River",
        "durationMs": 288333
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Rock Your Body",
        "durationMs": 267267
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Nothin' Else",
        "durationMs": 298840
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Last Night",
        "durationMs": 287267
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Still On My Brain",
        "durationMs": 275667
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "(And She Said) Take Me Now",
        "durationMs": 331160
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Right for Me",
        "durationMs": 269640
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Let's Take a Ride",
        "durationMs": 284067
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Never Again",
        "durationMs": 274733
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Justin%20Timberlake%20Justified",
      "appleMusic": "https://music.apple.com/us/album/justified/252606580?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Justin%20Timberlake%20Justified"
    }
  },
  "kanye-west-graduation": {
    "releaseDate": "2007-01-01",
    "label": "UMG Recordings",
    "trackCount": 14,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Good Morning",
        "durationMs": 195093
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Champion",
        "durationMs": 167533
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Stronger",
        "durationMs": 312027
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "I Wonder",
        "durationMs": 243440
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Good Life (feat. T-Pain)",
        "durationMs": 206867
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Can't Tell Me Nothing",
        "durationMs": 271760
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Barry Bonds (feat. Lil Wayne)",
        "durationMs": 204333
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Drunk and Hot Girls (feat. Mos Def)",
        "durationMs": 313267
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Flashing Lights",
        "durationMs": 237440
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Everything I Am (feat. DJ Premier)",
        "durationMs": 227400
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "The Glory",
        "durationMs": 212667
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Homecoming (feat. Chris Martin)",
        "durationMs": 204027
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Big Brother",
        "durationMs": 288067
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Good Night",
        "durationMs": 186360
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Kanye%20West%20Graduation",
      "appleMusic": "https://music.apple.com/us/album/graduation/1442845779?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Kanye%20West%20Graduation"
    }
  },
  "linkin-park-hybrid-theory": {
    "releaseDate": "2000-10-24",
    "label": "Warner Records Inc.",
    "trackCount": 12,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Papercut",
        "durationMs": 184469
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "One Step Closer",
        "durationMs": 155647
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "With You",
        "durationMs": 203286
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Points of Authority",
        "durationMs": 200309
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Crawling",
        "durationMs": 209034
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Runaway",
        "durationMs": 183946
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "By Myself",
        "durationMs": 189771
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "In the End",
        "durationMs": 216294
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "A Place for My Head",
        "durationMs": 184683
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Forgotten",
        "durationMs": 194446
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Cure for the Itch",
        "durationMs": 157080
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Pushing Me Away",
        "durationMs": 191899
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Linkin%20Park%20Hybrid%20Theory",
      "appleMusic": "https://music.apple.com/us/album/hybrid-theory/528436018?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Linkin%20Park%20Hybrid%20Theory"
    }
  },
  "ludacris-chicken-n-beer": {
    "releaseDate": "2003-01-01",
    "label": "The Island Def Jam Music Group",
    "trackCount": 13,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Southern Fried Intro",
        "durationMs": 235840
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Blow It Out",
        "durationMs": 245093
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Stand Up (feat. Shawnna)",
        "durationMs": 213960
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Splash Waterfalls",
        "durationMs": 290867
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Hard Times (feat. 8Ball & MJG, MJG & Carl Thomas)",
        "durationMs": 315920
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Diamond In the Back",
        "durationMs": 252627
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Screwed Up (feat. Lil' Flip)",
        "durationMs": 292867
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "P-Poppin' (feat. Shawnna & Lil' Fate)",
        "durationMs": 289267
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Hip Hop Quotables",
        "durationMs": 189533
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Hoe's in My Room (feat. Snoop Dogg)",
        "durationMs": 280107
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Teamwork",
        "durationMs": 226320
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "We Got (feat. Chingy, I-20 & Tity Boi)",
        "durationMs": 261253
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Eyebrows Down (feat. Tity Boi & Dolla Boy)",
        "durationMs": 320587
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Ludacris%20Chicken-n-Beer",
      "appleMusic": "https://music.apple.com/us/album/chicken-n-beer/1442839424?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Ludacris%20Chicken-n-Beer"
    }
  },
  "madonna-like-a-prayer": {
    "releaseDate": "1989-03-21",
    "label": "Sire Records Company",
    "trackCount": 11,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Like a Prayer",
        "durationMs": 340867
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Express Yourself",
        "durationMs": 279133
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Love Song",
        "durationMs": 292800
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Till Death Do Us Part",
        "durationMs": 318467
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Promise to Try",
        "durationMs": 218067
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Cherish",
        "durationMs": 303493
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Dear Jessie",
        "durationMs": 261507
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Oh Father",
        "durationMs": 298760
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Keep It Together",
        "durationMs": 303200
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Pray for Spanish Eyes",
        "durationMs": 317707
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Act of Contrition",
        "durationMs": 139200
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Madonna%20Like%20a%20Prayer",
      "appleMusic": "https://music.apple.com/us/album/like-a-prayer/83448003?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Madonna%20Like%20a%20Prayer"
    }
  },
  "mariah-carey-the-emancipation-of-mimi": {
    "releaseDate": "2005-04-12",
    "trackCount": 14,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "It's Like That (feat. Jermaine Dupri & Fatman Scoop)",
        "durationMs": 203124
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "We Belong Together",
        "durationMs": 201400
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Shake It Off",
        "durationMs": 232840
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Mine Again",
        "durationMs": 241693
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Say Somethin' (feat. Snoop Dogg)",
        "durationMs": 224440
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Stay The Night",
        "durationMs": 237267
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Get Your Number (feat. Jermaine Dupri)",
        "durationMs": 195560
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "One And Only (feat. Twista)",
        "durationMs": 194707
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Circles",
        "durationMs": 210760
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Your Girl",
        "durationMs": 166333
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "I Wish You Knew",
        "durationMs": 214907
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "To The Floor (feat. Nelly)",
        "durationMs": 207627
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Joy Ride",
        "durationMs": 243800
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Fly Like A Bird",
        "durationMs": 233040
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Mariah%20Carey%20The%20Emancipation%20of%20Mimi",
      "appleMusic": "https://music.apple.com/us/album/the-emancipation-of-mimi/1476731879?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Mariah%20Carey%20The%20Emancipation%20of%20Mimi"
    }
  },
  "michael-jackson-bad": {
    "releaseDate": "1987-08-31",
    "label": "MJJ Productions Inc.",
    "trackCount": 11,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Bad",
        "durationMs": 247369
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "The Way You Make Me Feel",
        "durationMs": 298122
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Speed Demon",
        "durationMs": 242022
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Liberian Girl",
        "durationMs": 232802
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Just Good Friends",
        "durationMs": 247334
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Another Part of Me",
        "durationMs": 234715
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Man In the Mirror",
        "durationMs": 318688
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "I Just Can't Stop Loving You",
        "durationMs": 253785
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Dirty Diana",
        "durationMs": 280753
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Smooth Criminal",
        "durationMs": 257766
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Leave Me Alone",
        "durationMs": 280359
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Michael%20Jackson%20Bad",
      "appleMusic": "https://music.apple.com/us/album/bad/559334659?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Michael%20Jackson%20Bad"
    }
  },
  "ludacris-word-of-mouf": {
    "releaseDate": "2001-11-27",
    "trackCount": 16,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Coming 2 America",
        "durationMs": 262227
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Rollout (My Business)",
        "durationMs": 240013
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Go 2 Sleep (feat. Infamous 2-0, Lil' Fate & Three 6 Mafia)",
        "durationMs": 242509
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Cry Babies (Oh No)",
        "durationMs": 289228
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "She Said (feat. Fate Wilson)",
        "durationMs": 278547
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Area Codes (feat. Nate Dogg)",
        "durationMs": 249533
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Growing Pains (feat. Fate Wilson & Keon Bryce)",
        "durationMs": 288147
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Move B***h (feat. Ludacris, Mystikal & I-20)",
        "durationMs": 271627
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Saturday (Oooh! Ooooh!) [feat. Sleepy Brown]",
        "durationMs": 228893
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Keep It On the Hush (feat. Jazze Pha)",
        "durationMs": 286720
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Word of Mouf (Freestyle) [feat. 4 Ize]",
        "durationMs": 131760
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Get the F*** Back (feat. Shawnna, I-20 & Fate Wilson)",
        "durationMs": 321547
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Freaky Thangs (feat. Twista & Jagged Edge)",
        "durationMs": 331800
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Cold Outside (feat. Chimere)",
        "durationMs": 403653
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "Block Lockdown (feat. Infamous 2-0)",
        "durationMs": 295080
      },
      {
        "discNumber": 1,
        "number": 16,
        "title": "Welcome to Atlanta (feat. Ludacris)",
        "durationMs": 203667
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Ludacris%20Word%20of%20Mouf",
      "appleMusic": "https://music.apple.com/us/album/word-of-mouf/1456413816?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Ludacris%20Word%20of%20Mouf"
    }
  },
  "mariah-carey-merry-christmas": {
    "releaseDate": "1994-10-28",
    "label": "Sony Music Entertainment",
    "trackCount": 10,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Silent Night",
        "durationMs": 221927
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "All I Want for Christmas Is You",
        "durationMs": 241562
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "O Holy Night",
        "durationMs": 267464
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Christmas (Baby Please Come Home)",
        "durationMs": 155493
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Miss You Most (At Christmas Time)",
        "durationMs": 273513
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Joy to the World",
        "durationMs": 260168
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Jesus Born on This Day",
        "durationMs": 222651
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Santa Claus Is Comin' to Town",
        "durationMs": 204554
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Hark! The Herald Angels Sing / Gloria (In Excelsis Deo)",
        "durationMs": 180864
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Jesus Oh What a Wonderful Child",
        "durationMs": 266627
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Mariah%20Carey%20Merry%20Christmas",
      "appleMusic": "https://music.apple.com/us/album/merry-christmas/585972750?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Mariah%20Carey%20Merry%20Christmas"
    }
  },
  "michael-jackson-thriller": {
    "releaseDate": "1982-11-29",
    "label": "MJJ Productions Inc.",
    "trackCount": 9,
    "contextNote": "Thriller is the clearest album-scale test case on the site: a short tracklist where multiple singles, video-era replay, sync demand, and estate-controlled catalog value all reinforce one another.",
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Wanna Be Startin' Somethin'",
        "durationMs": 363400
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Baby Be Mine",
        "durationMs": 260368
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "The Girl Is Mine",
        "durationMs": 222153
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Thriller",
        "durationMs": 358807
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Beat It",
        "durationMs": 258297
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Billie Jean",
        "durationMs": 293802
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Human Nature",
        "durationMs": 245838
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "P.Y.T. (Pretty Young Thing)",
        "durationMs": 238334
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "The Lady in My Life",
        "durationMs": 298251
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Michael%20Jackson%20Thriller",
      "appleMusic": "https://music.apple.com/us/album/thriller/269572838?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Michael%20Jackson%20Thriller"
    }
  },
  "montell-jordan-get-it-on-tonite": {
    "releaseDate": "1999-01-01",
    "label": "The Island Def Jam Music Group",
    "trackCount": 18,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Sidney Jordan (Intro)",
        "durationMs": 12667
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Get It On Tonite",
        "durationMs": 276267
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Come Home",
        "durationMs": 218333
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Funk Flex (Interlude)",
        "durationMs": 12227
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "What's It Feel Like? (Is It Good?)",
        "durationMs": 244200
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Everybody (Get Down)",
        "durationMs": 270533
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Can't Get Enough (feat. Ja Rule)",
        "durationMs": 230040
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Why You Wanna Do That? (Ooh Girl)",
        "durationMs": 244827
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Maybe She Will",
        "durationMs": 216573
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Kevin Nash Interview",
        "durationMs": 57600
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Time to Say Goodbye",
        "durationMs": 316400
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Let's Cuddle Up (feat. 187 Lockdown)",
        "durationMs": 279800
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Do You",
        "durationMs": 277800
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "One Last Time (Break Up Sex)",
        "durationMs": 267800
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "Last Night (Can We Move On?)",
        "durationMs": 311227
      },
      {
        "discNumber": 1,
        "number": 16,
        "title": "The Interview",
        "durationMs": 66400
      },
      {
        "discNumber": 1,
        "number": 17,
        "title": "Once Upon a Time",
        "durationMs": 276467
      },
      {
        "discNumber": 1,
        "number": 18,
        "title": "Against All Odds",
        "durationMs": 531507
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Montell%20Jordan%20Get%20It%20on...%20Tonite",
      "appleMusic": "https://music.apple.com/us/album/get-it-on-tonite/1442966746?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Montell%20Jordan%20Get%20It%20on...%20Tonite"
    }
  },
  "n-w-a-straight-outta-compton": {
    "releaseDate": "1988-08-09",
    "trackCount": 13,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Straight Outta Compton",
        "durationMs": 243333
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "F***k Tha Police",
        "durationMs": 314584
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Gangsta Gangsta",
        "durationMs": 246307
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "If It Ain't Ruff",
        "durationMs": 213733
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Parental Discretion Iz Advised",
        "durationMs": 312493
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "8 Ball (Remix / Remastered/2000)",
        "durationMs": 272733
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Something Like That",
        "durationMs": 213773
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Express Yourself",
        "durationMs": 262867
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Compton's N the House (Remix)",
        "durationMs": 316467
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "I Ain't Tha 1",
        "durationMs": 294427
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Dopeman",
        "durationMs": 349973
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Quiet On Tha Set",
        "durationMs": 238160
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Something 2 Dance 2",
        "durationMs": 204040
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/N.W.A%20Straight%20Outta%20Compton",
      "appleMusic": "https://music.apple.com/us/album/straight-outta-compton/1478946356?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=N.W.A%20Straight%20Outta%20Compton"
    }
  },
  "nelly-furtado-loose": {
    "releaseDate": "2006-06-07",
    "label": "Geffen Records",
    "trackCount": 17,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Afraid (feat. Attitude)",
        "durationMs": 215347
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Maneater",
        "durationMs": 258893
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Promiscuous Interlude (feat. Timbaland)",
        "durationMs": 6413
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Promiscuous (feat. Timbaland)",
        "durationMs": 242293
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Glow",
        "durationMs": 242493
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Showtime",
        "durationMs": 244493
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "No Hay Igual Interlude (feat. Timbaland)",
        "durationMs": 11453
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "No Hay Igual",
        "durationMs": 215587
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Te Busque (feat. Juanes)",
        "durationMs": 218227
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Say It Right",
        "durationMs": 223080
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Do It",
        "durationMs": 221507
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "In God's Hands",
        "durationMs": 252333
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Wait for You Interlude (feat. Timbaland)",
        "durationMs": 41920
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Wait for You",
        "durationMs": 311120
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "All Good Things (Come to an End)",
        "durationMs": 311187
      },
      {
        "discNumber": 1,
        "number": 16,
        "title": "Let My Hair Down",
        "durationMs": 218360
      },
      {
        "discNumber": 1,
        "number": 17,
        "title": "Somebody to Love",
        "durationMs": 296547
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Nelly%20Furtado%20Loose",
      "appleMusic": "https://music.apple.com/us/album/loose/1442463545?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Nelly%20Furtado%20Loose"
    }
  },
  "new-order-power-corruption-and-lies": {
    "releaseDate": "1983-05-02",
    "label": "Warner Records 90 Ltd",
    "trackCount": 8,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Age of Consent",
        "durationMs": 315347
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "We All Stand",
        "durationMs": 313827
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "The Village",
        "durationMs": 277067
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "5-8-6",
        "durationMs": 449747
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Your Silent Face",
        "durationMs": 359573
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Ultraviolence",
        "durationMs": 291013
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Ecstasy",
        "durationMs": 265773
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Leave Me Alone",
        "durationMs": 281773
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/New%20Order%20Power%2C%20Corruption%20%26%20Lies",
      "appleMusic": "https://music.apple.com/us/album/power-corruption-lies/1040981945?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=New%20Order%20Power%2C%20Corruption%20%26%20Lies"
    }
  },
  "oneohtrix-point-never-again": {
    "releaseDate": "2023-09-29",
    "label": "Ridge Valley Digital under exclusive licence to Warp Records Limited",
    "trackCount": 13,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Elseware",
        "durationMs": 115574
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Again",
        "durationMs": 284598
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "World Outside",
        "durationMs": 228136
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Krumville",
        "durationMs": 283240
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Locrian Midwest",
        "durationMs": 268911
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Plastic Antique",
        "durationMs": 270240
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Gray Subviolet",
        "durationMs": 165923
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "The Body Trail",
        "durationMs": 272831
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Nightmare Paint",
        "durationMs": 258998
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Memories of Music",
        "durationMs": 364069
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "On an Axis",
        "durationMs": 226683
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Ubiquity Road",
        "durationMs": 298539
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "A Barely Lit Path",
        "durationMs": 375111
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Oneohtrix%20Point%20Never%20Again",
      "appleMusic": "https://music.apple.com/us/album/again/1701849976?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Oneohtrix%20Point%20Never%20Again"
    }
  },
  "portishead-dummy": {
    "releaseDate": "1994-01-01",
    "trackCount": 11,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Mysterons",
        "durationMs": 305240
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Sour Times",
        "durationMs": 252267
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Strangers",
        "durationMs": 237600
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "It Could Be Sweet",
        "durationMs": 257160
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Wandering Star",
        "durationMs": 293200
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "It's a Fire",
        "durationMs": 226200
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Numb",
        "durationMs": 235800
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Roads",
        "durationMs": 303973
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Pedestal",
        "durationMs": 220400
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Biscuit",
        "durationMs": 302600
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Glory Box",
        "durationMs": 308627
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Portishead%20Dummy",
      "appleMusic": "https://music.apple.com/us/album/dummy/1440653096?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Portishead%20Dummy"
    }
  },
  "queen-a-night-at-the-opera": {
    "releaseDate": "1975-11-21",
    "label": "Hollywood Records",
    "trackCount": 12,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Death On Two Legs (Dedicated To...)",
        "durationMs": 223094
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Lazing On a Sunday Afternoon",
        "durationMs": 67226
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "I'm In Love With My Car",
        "durationMs": 185067
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "You're My Best Friend",
        "durationMs": 172424
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "'39",
        "durationMs": 210643
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Sweet Lady",
        "durationMs": 243867
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Seaside Rendezvous",
        "durationMs": 139879
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "The Prophet's Song",
        "durationMs": 500786
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Love of My Life",
        "durationMs": 219055
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Good Company",
        "durationMs": 203440
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Bohemian Rhapsody",
        "durationMs": 354320
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "God Save the Queen",
        "durationMs": 75131
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Queen%20A%20Night%20at%20the%20Opera",
      "appleMusic": "https://music.apple.com/us/album/a-night-at-the-opera/1440806041?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Queen%20A%20Night%20at%20the%20Opera"
    }
  },
  "radiohead-ok-computer": {
    "releaseDate": "1997-05-21",
    "label": "XL Recordings Ltd",
    "trackCount": 12,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Airbag",
        "durationMs": 287880
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Paranoid Android",
        "durationMs": 387213
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Subterranean Homesick Alien",
        "durationMs": 267693
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Exit Music (For a Film)",
        "durationMs": 267187
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Let Down",
        "durationMs": 299560
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Karma Police",
        "durationMs": 264067
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Fitter Happier",
        "durationMs": 117333
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Electioneering",
        "durationMs": 230627
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Climbing Up the Walls",
        "durationMs": 285200
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "No Surprises",
        "durationMs": 229120
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Lucky",
        "durationMs": 258813
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "The Tourist",
        "durationMs": 326533
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Radiohead%20OK%20Computer",
      "appleMusic": "https://music.apple.com/us/album/ok-computer/1097861387?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Radiohead%20OK%20Computer"
    }
  },
  "rakim-paid-in-full": {
    "releaseDate": "1987-07-07",
    "label": "The Island Def Jam Music Group",
    "trackCount": 12,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "I Ain't No Joke",
        "durationMs": 232934
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Eric B. Is On the Cut",
        "durationMs": 229733
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "My Melody",
        "durationMs": 407133
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "I Know You Got Soul",
        "durationMs": 284467
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Move the Crowd",
        "durationMs": 227333
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Paid In Full",
        "durationMs": 228667
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "As the Rhyme Goes On",
        "durationMs": 240667
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Chinese Arithmetic",
        "durationMs": 246800
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Eric B. Is President",
        "durationMs": 378533
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Extended Beat",
        "durationMs": 229333
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "As the Rhyme Goes On (Radio Mix)",
        "durationMs": 233253
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Paid In Full (Mini Madness) [The Coldcut Remix]",
        "durationMs": 217998
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Rakim%20Paid%20in%20Full",
      "appleMusic": "https://music.apple.com/us/album/paid-in-full/1440841577?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Rakim%20Paid%20in%20Full"
    }
  },
  "rem-document": {
    "releaseDate": "1987-09-01",
    "label": "Capitol Records",
    "trackCount": 11,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Finest Worksong",
        "durationMs": 227640
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Welcome To the Occupation",
        "durationMs": 166267
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Exhuming McCarthy",
        "durationMs": 198573
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Disturbance At the Heron House",
        "durationMs": 211853
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Strange",
        "durationMs": 152000
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "It's the End of the World As We Know It (And I Feel Fine)",
        "durationMs": 246760
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "The One I Love",
        "durationMs": 197200
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Fireplace",
        "durationMs": 203867
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Lightnin' Hopkins",
        "durationMs": 200320
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "King of Birds",
        "durationMs": 248027
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Oddfellows Local 151",
        "durationMs": 322773
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/R.E.M.%20Document",
      "appleMusic": "https://music.apple.com/us/album/document/1440850529?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=R.E.M.%20Document"
    }
  },
  "reo-speedwagon-wheels-are-turnin": {
    "releaseDate": "1984-11-05",
    "label": "Sony Music Entertainment",
    "trackCount": 9,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "I Do' Wanna Know",
        "durationMs": 253027
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "One Lonely Night",
        "durationMs": 201467
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Thru the Window",
        "durationMs": 302000
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Rock 'N Roll Star",
        "durationMs": 221173
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Live Every Moment",
        "durationMs": 299960
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Can't Fight This Feeling",
        "durationMs": 294773
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Gotta Feel More",
        "durationMs": 267293
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Break His Spell",
        "durationMs": 178533
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Wheels Are Turnin'",
        "durationMs": 350400
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/REO%20Speedwagon%20Wheels%20Are%20Turnin'",
      "appleMusic": "https://music.apple.com/us/album/wheels-are-turnin/200298768?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=REO%20Speedwagon%20Wheels%20Are%20Turnin'"
    }
  },
  "shania-twain-come-on-over": {
    "releaseDate": "1997-11-04",
    "label": "Mercury Records",
    "trackCount": 16,
    "contextNote": "Come On Over is important because it bridges country, pop radio, and adult-contemporary replay, giving the album more catalog surfaces than a single-format country blockbuster.",
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Man! I Feel Like a Woman!",
        "durationMs": 233631
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "I'm Holdin' On to Love (To Save My Life)",
        "durationMs": 208892
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Love Gets Me Every Time",
        "durationMs": 211720
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Don't Be Stupid (You Know I Love You)",
        "durationMs": 214642
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "From This Moment On (feat. Bryan White)",
        "durationMs": 281014
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Come On Over",
        "durationMs": 174410
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "When",
        "durationMs": 218934
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Whatever You Do! Don't!",
        "durationMs": 228839
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "If You Wanna Touch Her, Ask!",
        "durationMs": 244013
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "You're Still the One",
        "durationMs": 212120
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Honey, I'm Home",
        "durationMs": 215278
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "That Don't Impress Me Much",
        "durationMs": 218801
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Black Eyes, Blue Tears",
        "durationMs": 219800
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "I Won't Leave You Lonely",
        "durationMs": 252265
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "Rock This Country!",
        "durationMs": 262362
      },
      {
        "discNumber": 1,
        "number": 16,
        "title": "You've Got a Way",
        "durationMs": 205883
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Shania%20Twain%20Come%20On%20Over",
      "appleMusic": "https://music.apple.com/us/album/come-on-over/1445668706?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Shania%20Twain%20Come%20On%20Over"
    }
  },
  "simon-and-garfunkel-sounds-of-silence": {
    "releaseDate": "1966-01-17",
    "trackCount": 11,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "The Sound of Silence",
        "durationMs": 190102
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Leaves That Are Green",
        "durationMs": 145081
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Blessed",
        "durationMs": 198281
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Kathy's Song",
        "durationMs": 201104
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Somewhere They Can't Find Me",
        "durationMs": 159099
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Anji",
        "durationMs": 137009
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Richard Cory",
        "durationMs": 179129
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "A Most Peculiar Man",
        "durationMs": 155478
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "April Come She Will",
        "durationMs": 112816
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "We've Got a Groovy Thing Goin'",
        "durationMs": 121390
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "I Am a Rock",
        "durationMs": 169271
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Simon%20%26%20Garfunkel%20Sounds%20of%20Silence",
      "appleMusic": "https://music.apple.com/us/album/sounds-of-silence/192480256?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Simon%20%26%20Garfunkel%20Sounds%20of%20Silence"
    }
  },
  "squarepusher-big-loada": {
    "releaseDate": "1997-07-21",
    "label": "Warp Records Limited",
    "trackCount": 7,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "A Journey to Reedham (7am Mix)",
        "durationMs": 395800
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Full Rinse",
        "durationMs": 146867
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Massif (Stay Strong)",
        "durationMs": 387427
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Come On My Selector",
        "durationMs": 204800
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "The Body Builder (Dressing Gown Mix)",
        "durationMs": 181440
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Tequila Fish",
        "durationMs": 368933
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Jacques Mal Chance (Il N'a Pas de Chance)",
        "durationMs": 48267
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Squarepusher%20Big%20Loada",
      "appleMusic": "https://music.apple.com/us/album/big-loada/200940766?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Squarepusher%20Big%20Loada"
    }
  },
  "steve-hauschildt-s-h": {
    "releaseDate": "2013-09-13",
    "label": "Editions Mego",
    "trackCount": 37,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Poinsettia",
        "durationMs": 61641
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Galloping",
        "durationMs": 153716
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Thumbprints",
        "durationMs": 330072
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Uncanny Valley",
        "durationMs": 219909
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Dimmer",
        "durationMs": 169383
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Enter Return",
        "durationMs": 317990
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Familiar Scene",
        "durationMs": 229741
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Dream in Dial-Up",
        "durationMs": 142791
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Flatbed Scanner",
        "durationMs": 380731
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Ampersands",
        "durationMs": 238694
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Auto Mile",
        "durationMs": 106968
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Liberty I",
        "durationMs": 213965
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Liberty II",
        "durationMs": 109940
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Liberty III",
        "durationMs": 255575
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "Intimate Yell",
        "durationMs": 187500
      },
      {
        "discNumber": 1,
        "number": 16,
        "title": "Seabreezes",
        "durationMs": 160466
      },
      {
        "discNumber": 1,
        "number": 17,
        "title": "Flyswatter",
        "durationMs": 309074
      },
      {
        "discNumber": 1,
        "number": 18,
        "title": "Screenburn",
        "durationMs": 129000
      },
      {
        "discNumber": 1,
        "number": 19,
        "title": "By Buildings",
        "durationMs": 276941
      },
      {
        "discNumber": 1,
        "number": 20,
        "title": "Vox Ulterior",
        "durationMs": 77478
      },
      {
        "discNumber": 1,
        "number": 21,
        "title": "Still Cloudy",
        "durationMs": 289500
      },
      {
        "discNumber": 1,
        "number": 22,
        "title": "In the Waves",
        "durationMs": 62385
      },
      {
        "discNumber": 1,
        "number": 23,
        "title": "Coming Into View",
        "durationMs": 610028
      },
      {
        "discNumber": 1,
        "number": 24,
        "title": "Jovian",
        "durationMs": 169383
      },
      {
        "discNumber": 1,
        "number": 25,
        "title": "Venn",
        "durationMs": 223500
      },
      {
        "discNumber": 1,
        "number": 26,
        "title": "Star Map",
        "durationMs": 74274
      },
      {
        "discNumber": 1,
        "number": 27,
        "title": "Backwards Glance",
        "durationMs": 211000
      },
      {
        "discNumber": 1,
        "number": 28,
        "title": "OCR",
        "durationMs": 133717
      },
      {
        "discNumber": 1,
        "number": 29,
        "title": "Rapt for Liquid Minister",
        "durationMs": 285297
      },
      {
        "discNumber": 1,
        "number": 30,
        "title": "Portal",
        "durationMs": 205049
      },
      {
        "discNumber": 1,
        "number": 31,
        "title": "Critique of the Beautiful",
        "durationMs": 967366
      },
      {
        "discNumber": 1,
        "number": 32,
        "title": "Hemero",
        "durationMs": 221325
      },
      {
        "discNumber": 1,
        "number": 33,
        "title": "Hiccup",
        "durationMs": 98428
      },
      {
        "discNumber": 1,
        "number": 34,
        "title": "Verbatim",
        "durationMs": 161153
      },
      {
        "discNumber": 1,
        "number": 35,
        "title": "Red Corridor",
        "durationMs": 134084
      },
      {
        "discNumber": 1,
        "number": 36,
        "title": "Passing Cars",
        "durationMs": 420203
      },
      {
        "discNumber": 1,
        "number": 37,
        "title": "Different Directions",
        "durationMs": 583731
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Steve%20Hauschildt%20S%2FH",
      "appleMusic": "https://music.apple.com/us/album/s-h/1799297581?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Steve%20Hauschildt%20S%2FH"
    }
  },
  "the-beatles-1": {
    "releaseDate": "2000-11-13",
    "trackCount": 27,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Love Me Do",
        "durationMs": 140173
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "From Me to You",
        "durationMs": 116160
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "She Loves You",
        "durationMs": 140920
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "I Want to Hold Your Hand",
        "durationMs": 145747
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Can't Buy Me Love",
        "durationMs": 131213
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "A Hard Day's Night",
        "durationMs": 152920
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "I Feel Fine",
        "durationMs": 139347
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Eight Days a Week",
        "durationMs": 163320
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Ticket to Ride",
        "durationMs": 190120
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Help!",
        "durationMs": 139240
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Yesterday",
        "durationMs": 125320
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Day Tripper",
        "durationMs": 169000
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "We Can Work It Out",
        "durationMs": 135693
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Paperback Writer",
        "durationMs": 138200
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "Yellow Submarine",
        "durationMs": 158800
      },
      {
        "discNumber": 1,
        "number": 16,
        "title": "Eleanor Rigby",
        "durationMs": 125867
      },
      {
        "discNumber": 1,
        "number": 17,
        "title": "Penny Lane",
        "durationMs": 180520
      },
      {
        "discNumber": 1,
        "number": 18,
        "title": "All You Need Is Love",
        "durationMs": 227760
      },
      {
        "discNumber": 1,
        "number": 19,
        "title": "Hello, Goodbye",
        "durationMs": 207787
      },
      {
        "discNumber": 1,
        "number": 20,
        "title": "Lady Madonna",
        "durationMs": 136827
      },
      {
        "discNumber": 1,
        "number": 21,
        "title": "Hey Jude",
        "durationMs": 425653
      },
      {
        "discNumber": 1,
        "number": 22,
        "title": "Get Back",
        "durationMs": 191773
      },
      {
        "discNumber": 1,
        "number": 23,
        "title": "The Ballad of John and Yoko",
        "durationMs": 179480
      },
      {
        "discNumber": 1,
        "number": 24,
        "title": "Something",
        "durationMs": 181413
      },
      {
        "discNumber": 1,
        "number": 25,
        "title": "Come Together",
        "durationMs": 258693
      },
      {
        "discNumber": 1,
        "number": 26,
        "title": "Let It Be",
        "durationMs": 230440
      },
      {
        "discNumber": 1,
        "number": 27,
        "title": "The Long and Winding Road",
        "durationMs": 219427
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/The%20Beatles%201",
      "appleMusic": "https://music.apple.com/us/album/1/1440833098?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=The%20Beatles%201"
    }
  },
  "the-cardigans-gran-turismo": {
    "releaseDate": "1998-01-01",
    "label": "Universal Music AB",
    "trackCount": 11,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Paralyzed",
        "durationMs": 294800
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Erase/Rewind",
        "durationMs": 215760
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Explode",
        "durationMs": 244840
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Starter",
        "durationMs": 230200
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Hanging Around",
        "durationMs": 221200
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Higher",
        "durationMs": 272173
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Marvel Hill",
        "durationMs": 254800
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "My Favourite Game",
        "durationMs": 217133
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Do You Believe",
        "durationMs": 199240
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Junk of the Hearts",
        "durationMs": 248067
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Nil",
        "durationMs": 137133
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/The%20Cardigans%20Gran%20Turismo",
      "appleMusic": "https://music.apple.com/us/album/gran-turismo/1440917748?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=The%20Cardigans%20Gran%20Turismo"
    }
  },
  "the-chemical-brothers-surrender": {
    "releaseDate": "1999-01-01",
    "label": "Virgin Records Limited",
    "trackCount": 11,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Music: Response",
        "durationMs": 319960
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Under the Influence",
        "durationMs": 256040
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Out of Control",
        "durationMs": 439760
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Orange Wedge",
        "durationMs": 186640
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Let Forever Be",
        "durationMs": 236360
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "The Sunshine Underground",
        "durationMs": 518907
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Asleep from Day",
        "durationMs": 287227
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Got Glint?",
        "durationMs": 326440
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Hey Boy Hey Girl",
        "durationMs": 290493
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Surrender",
        "durationMs": 270002
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Dream On",
        "durationMs": 406533
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/The%20Chemical%20Brothers%20Surrender",
      "appleMusic": "https://music.apple.com/us/album/surrender/714172597?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=The%20Chemical%20Brothers%20Surrender"
    }
  },
  "the-crystal-method-vegas": {
    "releaseDate": "1997-01-01",
    "label": "Outpost Recordings",
    "trackCount": 10,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Trip Like I Do",
        "durationMs": 454227
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Busy Child",
        "durationMs": 445000
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Cherry Twist",
        "durationMs": 265600
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "High Roller",
        "durationMs": 329733
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Comin' Back",
        "durationMs": 339067
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Keep Hope Alive",
        "durationMs": 372667
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Vapor Trail",
        "durationMs": 391507
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "She's My Pusher",
        "durationMs": 341493
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Jaded",
        "durationMs": 425733
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Bad Stone",
        "durationMs": 309800
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/The%20Crystal%20Method%20Vegas",
      "appleMusic": "https://music.apple.com/us/album/vegas/1440899631?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=The%20Crystal%20Method%20Vegas"
    }
  },
  "the-doors-l-a-woman": {
    "releaseDate": "1971-04-19",
    "label": "Rhino Entertainment Company",
    "trackCount": 10,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "The Changeling",
        "durationMs": 289593
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Love Her Madly",
        "durationMs": 211009
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Been Down So Long",
        "durationMs": 277760
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Cars Hiss By My Window",
        "durationMs": 299477
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "L.A. Woman",
        "durationMs": 482220
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "L'America",
        "durationMs": 273643
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Hyacinth House",
        "durationMs": 192178
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Crawling King Snake",
        "durationMs": 298598
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "The WASP (Texas Radio And The Big Beat)",
        "durationMs": 259307
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Riders On The Storm",
        "durationMs": 462926
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/The%20Doors%20L.A.%20Woman",
      "appleMusic": "https://music.apple.com/us/album/l-a-woman/1622471682?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=The%20Doors%20L.A.%20Woman"
    }
  },
  "the-eagles-eagles": {
    "releaseDate": "1972-06-01",
    "label": "Asylum Records. Marketed by Rhino Entertainment Company",
    "trackCount": 10,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Take It Easy",
        "durationMs": 211579
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Witchy Woman",
        "durationMs": 250889
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Chug All Night",
        "durationMs": 195657
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Most of Us Are Sad",
        "durationMs": 215422
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Nightingale",
        "durationMs": 245594
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Train Leaves Here This Morning",
        "durationMs": 250457
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Take the Devil",
        "durationMs": 240829
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Earlybird",
        "durationMs": 179946
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Peaceful Easy Feeling",
        "durationMs": 257957
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Tryin'",
        "durationMs": 173240
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/The%20Eagles%20Eagles",
      "appleMusic": "https://music.apple.com/us/album/eagles/635791801?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=The%20Eagles%20Eagles"
    }
  },
  "the-eagles-their-greatest-hits-1971-1975": {
    "releaseDate": "1976-02-17",
    "label": "Elektra Records",
    "trackCount": 10,
    "contextNote": "Their Greatest Hits 1971-1975 works differently from a studio album: the page represents a concentrated catalog bundle where multiple already-evergreen songs compound the album's long-tail value.",
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Take It Easy",
        "durationMs": 211579
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Witchy Woman",
        "durationMs": 250889
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Lyin' Eyes",
        "durationMs": 381897
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Already Gone",
        "durationMs": 255106
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Desperado",
        "durationMs": 213713
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "One of These Nights",
        "durationMs": 291409
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Tequila Sunrise",
        "durationMs": 173057
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Take It to the Limit",
        "durationMs": 287082
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Peaceful Easy Feeling",
        "durationMs": 257957
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "The Best of My Love",
        "durationMs": 274905
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/The%20Eagles%20Their%20Greatest%20Hits%201971-1975",
      "appleMusic": "https://music.apple.com/us/album/their-greatest-hits-1971-1975/635829435?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=The%20Eagles%20Their%20Greatest%20Hits%201971-1975"
    }
  },
  "the-stone-roses-turns-into-stone": {
    "releaseDate": "1992-10-27",
    "label": "Silvertone Records Ltd.",
    "trackCount": 11,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Elephant Stone",
        "durationMs": 289867
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "The Hardest Thing In the World",
        "durationMs": 161760
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Going Down",
        "durationMs": 167227
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Mersey Paradise",
        "durationMs": 162600
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Standing Here",
        "durationMs": 307440
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Where Angels Play",
        "durationMs": 252373
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Simone",
        "durationMs": 264467
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Fools Gold",
        "durationMs": 594000
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "What the World Is Waiting For",
        "durationMs": 229973
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "One Love",
        "durationMs": 463560
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Something's Burning",
        "durationMs": 471533
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/The%20Stone%20Roses%20Turns%20Into%20Stone",
      "appleMusic": "https://music.apple.com/us/album/turns-into-stone/268236389?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=The%20Stone%20Roses%20Turns%20Into%20Stone"
    }
  },
  "timbaland-shock-value": {
    "releaseDate": "2007-01-01",
    "label": "Blackground Records/Interscope Records",
    "trackCount": 17,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Oh Timbaland",
        "durationMs": 211373
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Give It to Me (feat. Justin Timberlake & Nelly Furtado)",
        "durationMs": 212013
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Release (feat. Justin Timberlake)",
        "durationMs": 205507
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "The Way I Are (feat. Keri Hilson & D.O.E.)",
        "durationMs": 179120
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Bounce (feat. Missy Elliot, Justin Timberlake & Dr. Dre)",
        "durationMs": 244293
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Come and Get Me (feat. 50 Cent & Tony Yayo)",
        "durationMs": 210600
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Kill Yourself (feat. Sebastian & Attitude)",
        "durationMs": 246520
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Boardmeeting (feat. Magoo)",
        "durationMs": 149107
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Fantasy (feat. Money)",
        "durationMs": 251067
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Scream (feat. Keri Hilson & Nicole Scherzinger)",
        "durationMs": 341160
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Miscommunication (feat. Keri Hilson & Sebastian)",
        "durationMs": 198973
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Bombay (feat. Amar & Jim Beanz)",
        "durationMs": 174520
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Throw It On Me (feat. The Hives)",
        "durationMs": 130867
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Time (feat. She Wants Revenge)",
        "durationMs": 237587
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "One and Only (feat. Fall Out Boy)",
        "durationMs": 256733
      },
      {
        "discNumber": 1,
        "number": 16,
        "title": "Apologize (feat. OneRepublic)",
        "durationMs": 184400
      },
      {
        "discNumber": 1,
        "number": 17,
        "title": "2 Man Show (feat. Elton John)",
        "durationMs": 265613
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Timbaland%20Shock%20Value",
      "appleMusic": "https://music.apple.com/us/album/shock-value/1443720487?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Timbaland%20Shock%20Value"
    }
  },
  "travis-scott-astroworld": {
    "releaseDate": "2018-08-03",
    "label": "Cactus Jack Records",
    "trackCount": 17,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "STARGAZING",
        "durationMs": 270715
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "CAROUSEL",
        "durationMs": 180183
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "SICKO MODE",
        "durationMs": 312820
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "R.I.P. SCREW",
        "durationMs": 185610
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "STOP TRYING TO BE GOD",
        "durationMs": 338438
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "NO BYSTANDERS",
        "durationMs": 218283
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "SKELETONS",
        "durationMs": 145588
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "WAKE UP",
        "durationMs": 231964
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "5% TINT",
        "durationMs": 196138
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "NC-17",
        "durationMs": 156886
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "ASTROTHUNDER",
        "durationMs": 142969
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "YOSEMITE",
        "durationMs": 150043
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "CAN'T SAY",
        "durationMs": 198408
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "WHO? WHAT!",
        "durationMs": 176720
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "BUTTERFLY EFFECT",
        "durationMs": 190557
      },
      {
        "discNumber": 1,
        "number": 16,
        "title": "HOUSTONFORNICATION",
        "durationMs": 217828
      },
      {
        "discNumber": 1,
        "number": 17,
        "title": "COFFEE BEAN",
        "durationMs": 209116
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Travis%20Scott%20ASTROWORLD",
      "appleMusic": "https://music.apple.com/us/album/astroworld/1421658111?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Travis%20Scott%20ASTROWORLD"
    }
  },
  "whitney-houston-the-bodyguard-original-soundtrack-album": {
    "releaseDate": "1992-11-17",
    "label": "Arista Records LLC",
    "trackCount": 12,
    "contextNote": "The Bodyguard soundtrack is a useful hybrid page because its value is tied to both Whitney Houston's recorded catalog and the film soundtrack cycle that kept its lead songs culturally visible.",
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "I Will Always Love You",
        "durationMs": 271093
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "I Have Nothing",
        "durationMs": 289160
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "I'm Every Woman",
        "durationMs": 285107
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Run to You",
        "durationMs": 264333
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Queen of the Night (Radio Edit)",
        "durationMs": 188600
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Jesus Loves Me",
        "durationMs": 312507
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Even If My Heart Would Break",
        "durationMs": 297733
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Someday (I'm Coming Back)",
        "durationMs": 297493
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "It's Gonna Be A Lovely Day",
        "durationMs": 290333
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "What's So Funny 'Bout Peace, Love And Understanding",
        "durationMs": 245173
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Theme From The Bodyguard",
        "durationMs": 163360
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Trust In Me (feat. Sass Jordan)",
        "durationMs": 253640
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Whitney%20Houston%20The%20Bodyguard%3A%20Original%20Soundtrack%20Album",
      "appleMusic": "https://music.apple.com/us/album/the-bodyguard-original-soundtrack-album/388151892?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Whitney%20Houston%20The%20Bodyguard%3A%20Original%20Soundtrack%20Album"
    }
  },
  "wu-tang-clan-enter-the-wu-tang-36-chambers": {
    "releaseDate": "1993-11-09",
    "label": "RCA Records",
    "trackCount": 9,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Shame On a Nuh (feat. Raekwon, Ol' Dirty Bastard & Method Man)",
        "durationMs": 176693
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Clan In Da Front (feat. RZA & GZA)",
        "durationMs": 175800
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Can It Be All So Simple (Radio Edit)",
        "durationMs": 260600
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Method Man (feat. Method Man, Raekwon, GZA, RZA & Ghostface Killah)",
        "durationMs": 251440
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Da Mystery of Chessboxin' (feat. Method Man, U-God, Inspectah Deck, Raekwon, Ol' Dirty Bastard, Ghostface Killah & Masta Killa) [Radio Edit]",
        "durationMs": 279227
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Wu-Tang Clan Ain't Nuthing Ta F' Wit (feat. RZA, Inspectah Deck & Method Man)",
        "durationMs": 214373
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "C.R.E.A.M. (feat. Method Man, Raekwon, Inspectah Deck & Buddha Monk)",
        "durationMs": 246627
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Protect Ya Neck (feat. RZA, Method Man, Inspectah Deck, Raekwon, U-God, Ol' Dirty Bastard, Ghostface Killah & GZA)",
        "durationMs": 277067
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Tearz (feat. RZA & Ghostface Killah)",
        "durationMs": 290973
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Wu-Tang%20Clan%20Enter%20the%20Wu-Tang%20(36%20Chambers)",
      "appleMusic": "https://music.apple.com/us/album/enter-the-wu-tang-36-chambers/1746566237?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Wu-Tang%20Clan%20Enter%20the%20Wu-Tang%20(36%20Chambers)"
    }
  },
  "xzibit-restless": {
    "releaseDate": "2000-12-12",
    "label": "Loud Records",
    "trackCount": 16,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Restless (Intro)",
        "durationMs": 75000
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Front 2 Back",
        "durationMs": 182467
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Been a Long Time (feat. Nate Dogg)",
        "durationMs": 237733
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "U Know (feat. Dr. Dre)",
        "durationMs": 206400
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "X",
        "durationMs": 255600
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Alkaholik (feat. Erick Sermon, J-Ro & Tash of Tha Liks)",
        "durationMs": 219133
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Kenny Parker Show 2001 (feat. KRS One)",
        "durationMs": 285867
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "D.N.A (Drugs-n-Alkahol) [feat. Snoop Dogg]",
        "durationMs": 277467
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Double Time",
        "durationMs": 170600
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Don't Approach Me (feat. Eminem)",
        "durationMs": 276467
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Rimz & Tirez (feat. Defari, Goldie Loc & Kokane)",
        "durationMs": 292400
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "F*cking You Right",
        "durationMs": 222733
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Best of Things",
        "durationMs": 200707
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Get Your Walk On",
        "durationMs": 219867
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "Sorry I'm Away so Much (feat. Suga Free)",
        "durationMs": 239160
      },
      {
        "discNumber": 1,
        "number": 16,
        "title": "Loud & Clear (feat. Defari, King T & Butch Cassidy)",
        "durationMs": 213600
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Xzibit%20Restless",
      "appleMusic": "https://music.apple.com/us/album/restless/267921139?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Xzibit%20Restless"
    }
  },
  "ac-dc-back-in-black": {
    "releaseDate": "1980-07-25",
    "label": "Leidseplein Presse B.V.",
    "trackCount": 10,
    "contextNote": "Back in Black matters as a catalog page because the album is built around durable hard-rock standards rather than one isolated hit, so the tracked-song view captures only part of the release's long-run value.",
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Hells Bells",
        "durationMs": 312815
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Shoot to Thrill",
        "durationMs": 318231
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "What Do You Do for Money Honey",
        "durationMs": 215676
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Givin the Dog a Bone",
        "durationMs": 212401
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Let Me Put My Love Into You",
        "durationMs": 256058
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Back In Black",
        "durationMs": 256000
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "You Shook Me All Night Long",
        "durationMs": 210329
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Have a Drink On Me",
        "durationMs": 239105
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Shake a Leg",
        "durationMs": 246060
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Rock and Roll Ain't Noise Pollution",
        "durationMs": 255648
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/AC%2FDC%20Back%20in%20Black",
      "appleMusic": "https://music.apple.com/us/album/back-in-black/574050396?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=AC%2FDC%20Back%20in%20Black"
    }
  },
  "abba-arrival": {
    "releaseDate": "1976-10-11",
    "label": "Polar Music International AB",
    "trackCount": 12,
    "editionNote": "Arrival (Bonus Track Version)",
    "links": {
      "spotify": "https://open.spotify.com/search/ABBA%20Arrival",
      "appleMusic": "https://music.apple.com/us/album/arrival-bonus-track-version/1440820126?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=ABBA%20Arrival"
    },
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "When I Kissed the Teacher"
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Dancing Queen"
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "My Love, My Life"
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Dum Dum Diddle"
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Knowing Me, Knowing You"
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Money, Money, Money"
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "That’s Me"
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Why Did It Have to Be Me?"
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Tiger"
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Arrival"
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Fernando"
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Happy Hawaii"
      }
    ]
  },
  "bon-jovi-slippery-when-wet": {
    "releaseDate": "1986-08-18",
    "label": "The Island Def Jam Music Group",
    "trackCount": 10,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Let It Rock",
        "durationMs": 325267
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "You Give Love a Bad Name",
        "durationMs": 222644
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Livin' On a Prayer",
        "durationMs": 249581
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Social Disease",
        "durationMs": 258313
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Wanted Dead or Alive",
        "durationMs": 308344
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Raise Your Hands",
        "durationMs": 256706
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Without Love",
        "durationMs": 210849
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "I'd Die for You",
        "durationMs": 270539
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Never Say Goodbye",
        "durationMs": 288901
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Wild In the Streets",
        "durationMs": 234856
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Bon%20Jovi%20Slippery%20When%20Wet",
      "appleMusic": "https://music.apple.com/us/album/slippery-when-wet/1422954626?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Bon%20Jovi%20Slippery%20When%20Wet"
    }
  },
  "fleetwood-mac-rumours": {
    "releaseDate": "1977-02-04",
    "label": "Warner Records Inc.",
    "trackCount": 11,
    "contextNote": "Rumours is one of the strongest catalog albums to model because its revenue is distributed across several durable songs, recurring sync interest, and decades of full-album replay.",
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Second Hand News",
        "durationMs": 176307
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Dreams",
        "durationMs": 257800
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Never Going Back Again",
        "durationMs": 134400
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Don't Stop",
        "durationMs": 193347
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Go Your Own Way",
        "durationMs": 223613
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Songbird",
        "durationMs": 200813
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "The Chain",
        "durationMs": 268200
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "You Make Loving Fun",
        "durationMs": 213693
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "I Don't Want to Know",
        "durationMs": 196853
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Oh Daddy",
        "durationMs": 236240
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Gold Dust Woman",
        "durationMs": 295627
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Fleetwood%20Mac%20Rumours",
      "appleMusic": "https://music.apple.com/us/album/rumours/594061854?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Fleetwood%20Mac%20Rumours"
    }
  },
  "linkin-park-meteora": {
    "releaseDate": "2003-03-25",
    "label": "Warner Records Inc.",
    "trackCount": 13,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Foreword",
        "durationMs": 13387
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Don't Stay",
        "durationMs": 188113
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Somewhere I Belong",
        "durationMs": 214074
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Lying from You",
        "durationMs": 175195
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Hit the Floor",
        "durationMs": 164310
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Easier to Run",
        "durationMs": 204184
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Faint",
        "durationMs": 162206
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Figure.09",
        "durationMs": 197627
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Breaking the Habit",
        "durationMs": 196302
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "From the Inside",
        "durationMs": 175647
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Nobody's Listening",
        "durationMs": 179041
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Session",
        "durationMs": 144829
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Numb",
        "durationMs": 187508
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Linkin%20Park%20Meteora",
      "appleMusic": "https://music.apple.com/us/album/meteora/528435845?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Linkin%20Park%20Meteora"
    }
  },
  "bad-bunny-un-verano-sin-ti": {
    "releaseDate": "2022-05-06",
    "label": "Rimas Entertainment",
    "trackCount": 23,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Moscow Mule"
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Después de la Playa"
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Me Porto Bonito"
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Tití Me Preguntó"
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Un Ratito"
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Yo No Soy Celoso"
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Tarot"
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Neverita"
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "La Corriente"
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Efecto"
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Party"
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Aguacero"
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Enséñame a Bailar"
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Ojitos Lindos"
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "Dos Mil 16"
      },
      {
        "discNumber": 1,
        "number": 16,
        "title": "El Apagón"
      },
      {
        "discNumber": 1,
        "number": 17,
        "title": "Otro Atardecer"
      },
      {
        "discNumber": 1,
        "number": 18,
        "title": "Un Coco"
      },
      {
        "discNumber": 1,
        "number": 19,
        "title": "Andrea"
      },
      {
        "discNumber": 1,
        "number": 20,
        "title": "Me Fui de Vacaciones"
      },
      {
        "discNumber": 1,
        "number": 21,
        "title": "Un Verano Sin Ti"
      },
      {
        "discNumber": 1,
        "number": 22,
        "title": "Agosto"
      },
      {
        "discNumber": 1,
        "number": 23,
        "title": "Callaíta"
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Bad%20Bunny%20Un%20Verano%20Sin%20Ti",
      "appleMusic": "https://music.apple.com/us/search?term=Bad%20Bunny%20Un%20Verano%20Sin%20Ti",
      "youtubeMusic": "https://music.youtube.com/search?q=Bad%20Bunny%20Un%20Verano%20Sin%20Ti"
    }
  },
  "ed-sheeran-divide": {
    "releaseDate": "2017-03-03",
    "label": "Asylum Records UK / Atlantic Records UK",
    "trackCount": 12,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Eraser"
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Castle on the Hill"
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Dive"
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Shape of You"
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Perfect"
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Galway Girl"
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Happier"
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "New Man"
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Hearts Don’t Break Around Here"
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "What Do I Know?"
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "How Would You Feel (Paean)"
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Supermarket Flowers"
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Ed%20Sheeran%20%C3%B7",
      "appleMusic": "https://music.apple.com/us/album/1193700601",
      "youtubeMusic": "https://music.youtube.com/search?q=Ed%20Sheeran%20%C3%B7"
    }
  },
  "pharrell-williams-g-i-r-l": {
    "releaseDate": "2014-03-03",
    "label": "Columbia Records",
    "trackCount": 10,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Marilyn Monroe"
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Brand New"
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Hunter"
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Gush"
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Happy"
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Come Get It Bae"
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Gust of Wind"
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Lost Queen"
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Know Who You Are"
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "It Girl"
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Pharrell%20Williams%20G%20I%20R%20L",
      "appleMusic": "https://music.apple.com/us/search?term=Pharrell%20Williams%20G%20I%20R%20L",
      "youtubeMusic": "https://music.youtube.com/search?q=Pharrell%20Williams%20G%20I%20R%20L"
    }
  },
  "the-eagles-hotel-california": {
    "releaseDate": "1976-12-08",
    "label": "Asylum Records. Marketed by Rhino Entertainment Company",
    "trackCount": 9,
    "contextNote": "Hotel California is a compact album page where the title track anchors the economics, but the surrounding singles and classic-rock album identity keep the release valuable beyond one song.",
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Hotel California",
        "durationMs": 391357
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "New Kid In Town",
        "durationMs": 304933
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Life In the Fast Lane",
        "durationMs": 286218
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Wasted Time",
        "durationMs": 296165
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Wasted Time (Reprise)",
        "durationMs": 83386
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Victim of Love",
        "durationMs": 250071
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Pretty Maids All In a Row",
        "durationMs": 239328
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Try and Love Again",
        "durationMs": 311058
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "The Last Resort",
        "durationMs": 444366
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/The%20Eagles%20Hotel%20California",
      "appleMusic": "https://music.apple.com/us/album/hotel-california/635770200?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=The%20Eagles%20Hotel%20California"
    }
  },
  "america-hearts": {
    "releaseDate": "1975-03-19",
    "label": "Warner Records Inc. Manufactured and Marketed by Warner Strategic Marketing",
    "trackCount": 12,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Daisy Jane",
        "durationMs": 186467
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Half a Man",
        "durationMs": 217360
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Midnight",
        "durationMs": 163400
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Bell Tree",
        "durationMs": 153773
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Old Virginia",
        "durationMs": 211627
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "People In the Valley",
        "durationMs": 162800
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Company",
        "durationMs": 206373
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Woman Tonight",
        "durationMs": 142360
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "The Story of a Teenager",
        "durationMs": 200000
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Sister Golden Hair",
        "durationMs": 199573
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Tomorrow",
        "durationMs": 170067
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Seasons",
        "durationMs": 181027
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/America%20Hearts",
      "appleMusic": "https://music.apple.com/us/album/hearts/150058873?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=America%20Hearts"
    }
  },
  "boards-of-canada-music-has-the-right-to-children": {
    "releaseDate": "1998-04-20",
    "label": "Warp Records Limited",
    "trackCount": 18,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Wildlife Analysis",
        "durationMs": 75627
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "An Eagle In Your Mind",
        "durationMs": 385520
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "The Color of the Fire",
        "durationMs": 105627
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Telephasic Workshop",
        "durationMs": 395480
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Triangles & Rhombuses",
        "durationMs": 110413
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Sixtyten",
        "durationMs": 348347
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Turquoise Hexagon Sun",
        "durationMs": 307880
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Kaini Industries",
        "durationMs": 59293
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Bocuma",
        "durationMs": 95973
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Roygbiv",
        "durationMs": 151520
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Rue the Whirl",
        "durationMs": 399493
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Aquarius",
        "durationMs": 358080
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Olson",
        "durationMs": 91707
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Pete Standing Alone",
        "durationMs": 367720
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "Smokes Quantity",
        "durationMs": 187320
      },
      {
        "discNumber": 1,
        "number": 16,
        "title": "Open the Light",
        "durationMs": 265027
      },
      {
        "discNumber": 1,
        "number": 17,
        "title": "One Very Important Thought",
        "durationMs": 85053
      },
      {
        "discNumber": 1,
        "number": 18,
        "title": "Happy Cycling",
        "durationMs": 472520
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Boards%20of%20Canada%20Music%20Has%20the%20Right%20to%20Children",
      "appleMusic": "https://music.apple.com/us/album/music-has-the-right-to-children/281116024?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Boards%20of%20Canada%20Music%20Has%20the%20Right%20to%20Children"
    }
  },
  "burial-untrue": {
    "releaseDate": "2007-11-05",
    "label": "Hyperdub",
    "trackCount": 13,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Untitled",
        "durationMs": 46213
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Archangel",
        "durationMs": 238427
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Near Dark",
        "durationMs": 234507
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Ghost Hardware",
        "durationMs": 293093
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Endorphin",
        "durationMs": 177333
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Etched Headplate",
        "durationMs": 359760
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "In McDonalds",
        "durationMs": 126091
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Untrue",
        "durationMs": 376693
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Shell of Light",
        "durationMs": 280533
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Dog Shelter",
        "durationMs": 179213
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Homeless",
        "durationMs": 320547
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Uk",
        "durationMs": 100227
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Raver",
        "durationMs": 299827
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Burial%20Untrue",
      "appleMusic": "https://music.apple.com/us/album/untrue/893175779?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Burial%20Untrue"
    }
  },
  "cher-believe": {
    "releaseDate": "1998-10-22",
    "label": "All tracks 1998 Warner Music UK Ltd except track 10 1987 The David Geffen Company.",
    "trackCount": 10,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Believe",
        "durationMs": 239027
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "The Power",
        "durationMs": 236360
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Runaway",
        "durationMs": 286600
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "All or Nothing",
        "durationMs": 238160
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Strong Enough",
        "durationMs": 224000
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Dov'è L'amore",
        "durationMs": 258307
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Takin' Back My Heart",
        "durationMs": 272893
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Taxi Taxi",
        "durationMs": 304040
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Love Is the Groove",
        "durationMs": 271133
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "We All Sleep Alone",
        "durationMs": 310667
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Cher%20Believe",
      "appleMusic": "https://music.apple.com/us/album/believe/73273758?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Cher%20Believe"
    }
  },
  "creedence-clearwater-revival-willy-and-the-poor-boys": {
    "releaseDate": "1969-11-03",
    "label": "Concord Music Group",
    "trackCount": 11,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Down On the Corner",
        "durationMs": 166899
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "It Came Out of the Sky",
        "durationMs": 177132
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Cotton Fields",
        "durationMs": 174513
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Poorboy Shuffle",
        "durationMs": 144594
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Feelin' Blue",
        "durationMs": 307702
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Fortunate Son",
        "durationMs": 141772
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Don't Look Now",
        "durationMs": 131792
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Midnight Special",
        "durationMs": 253749
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Side o' the Road",
        "durationMs": 204674
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Effigy",
        "durationMs": 389328
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Creedence%20Clearwater%20Revival%20Willy%20and%20the%20Poor%20Boys",
      "appleMusic": "https://music.apple.com/us/album/willy-and-the-poor-boys/1440950503?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Creedence%20Clearwater%20Revival%20Willy%20and%20the%20Poor%20Boys"
    }
  },
  "dire-straits-dire-straits": {
    "releaseDate": "1978-06-09",
    "label": "Warner Records Inc.",
    "trackCount": 9,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Down to the Waterline",
        "durationMs": 242600
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Water of Love",
        "durationMs": 326640
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Setting Me Up",
        "durationMs": 199600
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Six Blade Knife",
        "durationMs": 253427
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Southbound Again",
        "durationMs": 179507
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Sultans of Swing",
        "durationMs": 348760
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "In the Gallery",
        "durationMs": 376707
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Wild West End",
        "durationMs": 281600
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Lions",
        "durationMs": 303827
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Dire%20Straits%20Dire%20Straits",
      "appleMusic": "https://music.apple.com/us/album/dire-straits/307029087?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Dire%20Straits%20Dire%20Straits"
    }
  },
  "elton-john-madman-across-the-water": {
    "releaseDate": "1971-11-05",
    "label": "This Record Company Ltd.",
    "trackCount": 9,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Tiny Dancer",
        "durationMs": 377200
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Levon",
        "durationMs": 322653
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Razor Face",
        "durationMs": 284800
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Madman Across the Water",
        "durationMs": 358013
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Indian Sunset",
        "durationMs": 407587
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Holiday Inn",
        "durationMs": 257507
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Rotten Peaches",
        "durationMs": 299160
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "All the Nasties",
        "durationMs": 309973
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Goodbye",
        "durationMs": 107690
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Elton%20John%20Madman%20Across%20the%20Water",
      "appleMusic": "https://music.apple.com/us/album/madman-across-the-water/1440643462?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Elton%20John%20Madman%20Across%20the%20Water"
    }
  },
  "eurythmics-sweet-dreams-are-made-of-this": {
    "releaseDate": "1983-01-04",
    "label": "SONY BMG MUSIC ENTERTAINMENT (UK) Limited",
    "trackCount": 10,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Love Is a Stranger",
        "durationMs": 223467
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "I've Got an Angel",
        "durationMs": 165400
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Wrap It Up",
        "durationMs": 213933
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "I Could Give You (A Mirror)",
        "durationMs": 230600
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "The Walk",
        "durationMs": 282067
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Sweet Dreams (Are Made of This)",
        "durationMs": 217093
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Jennifer",
        "durationMs": 308333
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "This Is the House",
        "durationMs": 300800
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Somebody Told Me",
        "durationMs": 209627
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "This City Never Sleeps",
        "durationMs": 400173
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Eurythmics%20Sweet%20Dreams%20(Are%20Made%20of%20This)",
      "appleMusic": "https://music.apple.com/us/album/sweet-dreams-are-made-of-this/255965840?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Eurythmics%20Sweet%20Dreams%20(Are%20Made%20of%20This)"
    }
  },
  "genesis-invisible-touch": {
    "releaseDate": "1986-01-01",
    "label": "Rhino Entertainment Company",
    "trackCount": 2,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Invisible Touch",
        "durationMs": 207521
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "The Last Domino",
        "durationMs": 377377
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Genesis%20Invisible%20Touch",
      "appleMusic": "https://music.apple.com/us/album/invisible-touch-the-last-domino-digital-45/326623340?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Genesis%20Invisible%20Touch"
    }
  },
  "heart-little-queen": {
    "releaseDate": "1977-05-14",
    "label": "Sony Music Entertainment Inc.",
    "trackCount": 10,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Barracuda",
        "durationMs": 261496
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Love Alive",
        "durationMs": 261755
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Sylvan Song",
        "durationMs": 132052
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Dream of the Archer",
        "durationMs": 270108
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Kick It Out",
        "durationMs": 159117
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Little Queen",
        "durationMs": 311610
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Treat Me Well",
        "durationMs": 205096
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Say Hello",
        "durationMs": 216259
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Cry to Me",
        "durationMs": 169570
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Go On Cry",
        "durationMs": 353385
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Heart%20Little%20Queen",
      "appleMusic": "https://music.apple.com/us/album/little-queen/193520066?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Heart%20Little%20Queen"
    }
  },
  "john-lennon-double-fantasy": {
    "releaseDate": "1980-11-17",
    "trackCount": 14,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "(Just Like) Starting Over",
        "durationMs": 236688
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Kiss Kiss Kiss",
        "durationMs": 161843
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Cleanup Time",
        "durationMs": 178627
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Give Me Something",
        "durationMs": 94891
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "I'm Losing You",
        "durationMs": 237540
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "I'm Moving On",
        "durationMs": 141440
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Beautiful Boy (Darling Boy)",
        "durationMs": 245782
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Watching The Wheels",
        "durationMs": 239646
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Yes, I'm Your Angel",
        "durationMs": 189940
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Woman (Remastered 2010)",
        "durationMs": 212780
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Beautiful Boys",
        "durationMs": 175419
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Dear Yoko",
        "durationMs": 154703
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Every Man Has A Woman Who Loves Him",
        "durationMs": 241960
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "Hard Times Are Over",
        "durationMs": 199968
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/John%20Lennon%20Double%20Fantasy",
      "appleMusic": "https://music.apple.com/us/album/double-fantasy/1440847446?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=John%20Lennon%20Double%20Fantasy"
    }
  },
  "k-ci-and-jojo-love-always": {
    "releaseDate": "1997-01-01",
    "label": "Geffen Records",
    "trackCount": 12,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Hbi",
        "durationMs": 112067
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Last Night's Letter",
        "durationMs": 278307
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Baby Come Back",
        "durationMs": 256000
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Just for Your Love",
        "durationMs": 308933
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Now and Forever",
        "durationMs": 278800
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Don't Rush (Take Love Slowly)",
        "durationMs": 193467
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "You Bring Me Up",
        "durationMs": 263693
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Still Waiting",
        "durationMs": 294707
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Love Ballad",
        "durationMs": 234067
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "How Many Times (Will You Let Him Break Your Heart)",
        "durationMs": 281227
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "All My Life",
        "durationMs": 331240
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "How Could You",
        "durationMs": 297827
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/K-Ci%20%26%20JoJo%20Love%20Always",
      "appleMusic": "https://music.apple.com/us/album/love-always/1440488994?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=K-Ci%20%26%20JoJo%20Love%20Always"
    }
  },
  "kanye-west-my-beautiful-dark-twisted-fantasy": {
    "releaseDate": "2010-01-01",
    "label": "UMG Recordings",
    "trackCount": 15,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Dark Fantasy",
        "durationMs": 280760
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Gorgeous (feat. Kid Cudi & Raekwon)",
        "durationMs": 357653
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Power",
        "durationMs": 292093
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "All of the Lights (Interlude)",
        "durationMs": 62267
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "All of the Lights",
        "durationMs": 299600
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Monster (feat. JAŸ-Z, Rick Ross, Nicki Minaj & Bon Iver)",
        "durationMs": 378853
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "So Appalled (feat. JAŸ-Z, Pusha T, Prynce Cy Hi, Swizz Beatz & RZA)",
        "durationMs": 397787
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Devil In a New Dress (feat. Rick Ross)",
        "durationMs": 352547
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Runaway (feat. Pusha T)",
        "durationMs": 547667
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Hell of a Life",
        "durationMs": 327827
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Blame Game (feat. John Legend)",
        "durationMs": 469853
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Lost In the World (feat. Bon Iver)",
        "durationMs": 256587
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Who Will Survive In America",
        "durationMs": 98213
      },
      {
        "discNumber": 2,
        "number": 1,
        "title": "See Me Now (feat. Beyoncé, Charlie Wilson & Big Sean) [Bonus Track]",
        "durationMs": 363773
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Kanye%20West%20My%20Beautiful%20Dark%20Twisted%20Fantasy",
      "appleMusic": "https://music.apple.com/us/album/my-beautiful-dark-twisted-fantasy/1443160553?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Kanye%20West%20My%20Beautiful%20Dark%20Twisted%20Fantasy"
    }
  },
  "mark-morrison-return-of-the-mack": {
    "releaseDate": "1996-04-22",
    "label": "Warner Music UK Ltd",
    "trackCount": 13,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Home, Pt. 1 (Interlude)",
        "durationMs": 69427
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Crazy",
        "durationMs": 221733
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Let's Get Down",
        "durationMs": 233733
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Get High With Me",
        "durationMs": 238760
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Moan and Groan",
        "durationMs": 327573
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Return of the Mack",
        "durationMs": 213093
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "I Like",
        "durationMs": 230293
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Trippin",
        "durationMs": 285800
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Tears For You (feat. Mica Paris)",
        "durationMs": 283933
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Horny (Radio Edit)",
        "durationMs": 180200
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "I Really Love You",
        "durationMs": 247107
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Crazy (D-Influence Mix)",
        "durationMs": 262200
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "Home, Pt. 2 (Interlude)",
        "durationMs": 76027
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Mark%20Morrison%20Return%20of%20the%20Mack",
      "appleMusic": "https://music.apple.com/us/album/return-of-the-mack/81902658?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Mark%20Morrison%20Return%20of%20the%20Mack"
    }
  },
  "the-police-synchronicity": {
    "releaseDate": "1983-06-17",
    "label": "A&M Records",
    "trackCount": 10,
    "editionNote": "Original studio album sequence.",
    "contextNote": "Synchronicity is the Police album where one massive evergreen song and several durable album cuts combine into a strong catalog-replay page.",
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Synchronicity I"
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Walking in Your Footsteps"
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "O My God"
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Mother"
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Miss Gradenko"
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Synchronicity II"
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Every Breath You Take"
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "King of Pain"
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Wrapped Around Your Finger"
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Tea in the Sahara"
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/The%20Police%20Synchronicity",
      "appleMusic": "https://music.apple.com/us/search?term=The%20Police%20Synchronicity",
      "youtubeMusic": "https://music.youtube.com/search?q=The%20Police%20Synchronicity",
      "amazonMusic": "https://music.amazon.com/search/The%20Police%20Synchronicity?tag=kreativauto-20"
    }
  },
  "the-police-outlandos-d-amour": {
    "releaseDate": "1978-11-02",
    "label": "A&M Records",
    "trackCount": 10,
    "editionNote": "Original studio album sequence.",
    "contextNote": "Outlandos d'Amour is useful catalog context because it captures the Police's early punk-reggae identity before the band became a full crossover arena act.",
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Next to You"
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "So Lonely"
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Roxanne"
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Hole in My Life"
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Peanuts"
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Can't Stand Losing You"
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Truth Hits Everybody"
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Born in the 50's"
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Be My Girl - Sally"
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Masoko Tanga"
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/The%20Police%20Outlandos%20d'Amour",
      "appleMusic": "https://music.apple.com/us/search?term=The%20Police%20Outlandos%20d%27Amour",
      "youtubeMusic": "https://music.youtube.com/search?q=The%20Police%20Outlandos%20d'Amour",
      "amazonMusic": "https://music.amazon.com/search/The%20Police%20Outlandos%20d%27Amour?tag=kreativauto-20"
    }
  },
  "montell-jordan-this-is-how-we-do-it": {
    "releaseDate": "1995-05-15",
    "label": "Island Def Jam",
    "trackCount": 5,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "This Is How We Do It (Tee's Club Mix)",
        "durationMs": 315725
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "This Is How We Do It (Tee's Dub Mix)",
        "durationMs": 288167
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "This Is How We Do It (Tee's Radio Mix)",
        "durationMs": 219598
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "This Is How We Do It (Tee's Freeze)",
        "durationMs": 316003
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "This Is How We Do It (Tee's Bonus Mix)",
        "durationMs": 155481
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Montell%20Jordan%20This%20Is%20How%20We%20Do%20It",
      "appleMusic": "https://music.apple.com/us/album/this-is-how-we-do-it-todd-terry-mixes-ep/1445278684?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Montell%20Jordan%20This%20Is%20How%20We%20Do%20It"
    }
  },
  "new-order-brotherhood": {
    "releaseDate": "1986-01-01",
    "label": "Warner Records 90 Ltd",
    "trackCount": 9,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Paradise",
        "durationMs": 231840
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Weirdo",
        "durationMs": 233133
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "As It Is When it Was",
        "durationMs": 226787
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Broken Promise",
        "durationMs": 227400
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Way of Life",
        "durationMs": 246800
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Bizarre Love Triangle",
        "durationMs": 261987
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "All Day Long",
        "durationMs": 313333
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Angel Dust",
        "durationMs": 223320
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Every Little Counts",
        "durationMs": 268493
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/New%20Order%20Brotherhood",
      "appleMusic": "https://music.apple.com/us/album/brotherhood/1040972118?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=New%20Order%20Brotherhood"
    }
  },
  "olaru-ambitones-darker-trashed-mix": {
    "releaseDate": "2024-09-12",
    "label": "Kreativ Sound",
    "trackCount": 11,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Intro (Darker Trashed Mix)",
        "durationMs": 101051
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Dystopian (Darker Trashed Mix)",
        "durationMs": 151308
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Utopian (Darker Trashed Mix)",
        "durationMs": 188006
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Flowers (Darker Trashed Mix)",
        "durationMs": 196908
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Glitches (Darker Trashed Mix)",
        "durationMs": 354797
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Nostalgia (Darker Trashed Mix)",
        "durationMs": 248050
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Past (Darker Trashed Mix)",
        "durationMs": 198182
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Sampling (Darker Trashed Mix)",
        "durationMs": 152050
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Daci (Darker Trashed Mix)",
        "durationMs": 124351
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Outro (Darker Trashed Mix)",
        "durationMs": 134485
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Dolphins (Darker Trashed Mix)",
        "durationMs": 317963
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Olaru%20Ambitones%20(Darker%20Trashed%20Mix)",
      "appleMusic": "https://music.apple.com/us/album/ambitones-darker-trashed-mix/1769006937?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Olaru%20Ambitones%20(Darker%20Trashed%20Mix)"
    }
  },
  "prince-purple-rain": {
    "releaseDate": "1984-06-25",
    "label": "Warner Records Inc.",
    "trackCount": 9,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Let's Go Crazy",
        "durationMs": 279240
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Take Me with U",
        "durationMs": 234133
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "The Beautiful Ones",
        "durationMs": 313960
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Computer Blue",
        "durationMs": 239507
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Darling Nikki",
        "durationMs": 254493
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "When Doves Cry",
        "durationMs": 354133
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "I Would Die 4 U",
        "durationMs": 169667
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Baby I'm a Star",
        "durationMs": 264400
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Purple Rain",
        "durationMs": 521867
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Prince%20Purple%20Rain",
      "appleMusic": "https://music.apple.com/us/album/purple-rain/1746833068?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Prince%20Purple%20Rain"
    }
  },
  "queen-jazz": {
    "releaseDate": "1978-11-10",
    "label": "Hollywood Records",
    "trackCount": 13,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Mustapha",
        "durationMs": 181134
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Fat Bottomed Girls",
        "durationMs": 257120
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Jealousy",
        "durationMs": 193720
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Bicycle Race",
        "durationMs": 183427
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "If You Can't Beat Them",
        "durationMs": 255137
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Let Me Entertain You",
        "durationMs": 186503
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Dead On Time",
        "durationMs": 203199
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "In Only Seven Days",
        "durationMs": 150135
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Dreamer's Ball",
        "durationMs": 210653
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Fun It",
        "durationMs": 209613
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Leaving Home Ain't Easy",
        "durationMs": 195040
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Don't Stop Me Now",
        "durationMs": 209391
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "More of That Jazz",
        "durationMs": 254500
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Queen%20Jazz",
      "appleMusic": "https://music.apple.com/us/album/jazz/1440770171?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Queen%20Jazz"
    }
  },
  "rakim-the-18th-letter": {
    "releaseDate": "1997-01-01",
    "label": "Universal Records",
    "trackCount": 17,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Intro",
        "durationMs": 12667
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "The 18th Letter (Always and Forever)",
        "durationMs": 180933
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Skit 1",
        "durationMs": 23573
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "It's Been a Long Time",
        "durationMs": 236533
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Remember That",
        "durationMs": 280093
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "The Saga Begins",
        "durationMs": 262133
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Skit",
        "durationMs": 19067
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Guess Who's Back",
        "durationMs": 250907
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Stay a While",
        "durationMs": 264933
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "New York (Ya Out There)",
        "durationMs": 244133
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Show Me Love",
        "durationMs": 258800
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "Skit",
        "durationMs": 18933
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "The Mystery (Who Is God?)",
        "durationMs": 320560
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "When I'm Flowin'",
        "durationMs": 304240
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "It's Been a Long Time (Suave House Mix)",
        "durationMs": 238867
      },
      {
        "discNumber": 1,
        "number": 16,
        "title": "Guess Who's Back (Alternative Mix)",
        "durationMs": 250600
      },
      {
        "discNumber": 1,
        "number": 17,
        "title": "Outro",
        "durationMs": 79867
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Rakim%20The%2018th%20Letter",
      "appleMusic": "https://music.apple.com/us/album/the-18th-letter/1440801719?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Rakim%20The%2018th%20Letter"
    }
  },
  "dua-lipa-future-nostalgia": {
    "releaseDate": "2020-03-27",
    "label": "Warner Records",
    "trackCount": 11,
    "editionNote": "Original studio album sequence.",
    "contextNote": "Future Nostalgia is a streaming-era pop album where several singles, not just one flagship track, support the long-tail catalog value.",
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Future Nostalgia"
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Don't Start Now"
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Cool"
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Physical"
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Levitating"
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Pretty Please"
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Hallucinate"
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Love Again"
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Break My Heart"
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Good in Bed"
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Boys Will Be Boys"
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Dua%20Lipa%20Future%20Nostalgia",
      "appleMusic": "https://music.apple.com/us/search?term=Dua%20Lipa%20Future%20Nostalgia",
      "youtubeMusic": "https://music.youtube.com/search?q=Dua%20Lipa%20Future%20Nostalgia",
      "amazonMusic": "https://music.amazon.com/search/Dua%20Lipa%20Future%20Nostalgia?tag=kreativauto-20"
    }
  },
  "celine-dion-let-s-talk-about-love": {
    "releaseDate": "1997-11-14",
    "label": "Columbia / Epic",
    "trackCount": 16,
    "editionNote": "International studio album sequence.",
    "contextNote": "Let's Talk About Love is anchored by My Heart Will Go On, but the album also benefits from adult-pop ballad demand and Celine Dion's broader 1990s catalog strength.",
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "The Reason"
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Immortality"
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "Treat Her Like a Lady"
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Why Oh Why"
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Love Is on the Way"
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Tell Him"
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Where Is the Love"
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "When I Need You"
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Miles to Go (Before I Sleep)"
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Us"
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "Just a Little Bit of Love"
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "My Heart Will Go On"
      },
      {
        "discNumber": 1,
        "number": 13,
        "title": "I Hate You Then I Love You"
      },
      {
        "discNumber": 1,
        "number": 14,
        "title": "To Love You More"
      },
      {
        "discNumber": 1,
        "number": 15,
        "title": "Let's Talk About Love"
      },
      {
        "discNumber": 1,
        "number": 16,
        "title": "Amar Haciendo el Amor"
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Celine%20Dion%20Let%27s%20Talk%20About%20Love",
      "appleMusic": "https://music.apple.com/us/search?term=Celine%20Dion%20Let%27s%20Talk%20About%20Love",
      "youtubeMusic": "https://music.youtube.com/search?q=Celine%20Dion%20Let%27s%20Talk%20About%20Love",
      "amazonMusic": "https://music.amazon.com/search/Celine%20Dion%20Let%27s%20Talk%20About%20Love?tag=kreativauto-20"
    }
  },
  "simon-and-garfunkel-bookends": {
    "releaseDate": "1968-04-03",
    "trackCount": 12,
    "fullTracklist": [
      {
        "discNumber": 1,
        "number": 1,
        "title": "Bookends Theme",
        "durationMs": 32551
      },
      {
        "discNumber": 1,
        "number": 2,
        "title": "Save the Life of My Child",
        "durationMs": 168607
      },
      {
        "discNumber": 1,
        "number": 3,
        "title": "America",
        "durationMs": 215285
      },
      {
        "discNumber": 1,
        "number": 4,
        "title": "Overs",
        "durationMs": 139885
      },
      {
        "discNumber": 1,
        "number": 5,
        "title": "Voices of Old People",
        "durationMs": 127128
      },
      {
        "discNumber": 1,
        "number": 6,
        "title": "Old Friends",
        "durationMs": 155370
      },
      {
        "discNumber": 1,
        "number": 7,
        "title": "Bookends Theme",
        "durationMs": 83038
      },
      {
        "discNumber": 1,
        "number": 8,
        "title": "Fakin' It",
        "durationMs": 201330
      },
      {
        "discNumber": 1,
        "number": 9,
        "title": "Punky's Dilemma",
        "durationMs": 136809
      },
      {
        "discNumber": 1,
        "number": 10,
        "title": "Mrs. Robinson",
        "durationMs": 247420
      },
      {
        "discNumber": 1,
        "number": 11,
        "title": "A Hazy Shade of Winter",
        "durationMs": 137389
      },
      {
        "discNumber": 1,
        "number": 12,
        "title": "At the Zoo",
        "durationMs": 142154
      }
    ],
    "links": {
      "spotify": "https://open.spotify.com/search/Simon%20%26%20Garfunkel%20Bookends",
      "appleMusic": "https://music.apple.com/us/album/bookends/203303421?uo=4",
      "youtubeMusic": "https://music.youtube.com/search?q=Simon%20%26%20Garfunkel%20Bookends"
    }
  }
} as const;
