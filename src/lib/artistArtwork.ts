const palettes = [
  ["#dfe7f2", "#8ea4bf", "#f8fbff"],
  ["#ece4e8", "#b88ba1", "#fffafb"],
  ["#e5ece4", "#8aa485", "#fbfdf9"],
  ["#f1e6da", "#c79d72", "#fffaf4"],
  ["#e8e6f4", "#8d88bb", "#fbfaff"],
  ["#e7eaee", "#9aa7b4", "#fbfcfd"]
];

type ArtistPhoto = {
  alt: string;
  src: string;
  sourceUrl: string;
  credit: string;
  license: string;
  licenseUrl: string;
};

export type { ArtistPhoto };

function hashValue(input: string) {
  return [...input].reduce((total, char) => total + char.charCodeAt(0), 0);
}

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function createArtistArtwork(name: string, slug: string) {
  const hash = hashValue(slug);
  const [dark, mid, light] = palettes[hash % palettes.length];
  const rotation = 8 + (hash % 18);
  const orbit = 26 + (hash % 30);
  const initials = getInitials(name);
  const label = name.toUpperCase();

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" role="img" aria-label="${name}">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${dark}" />
          <stop offset="55%" stop-color="${mid}" />
          <stop offset="100%" stop-color="${light}" />
        </linearGradient>
      </defs>
      <rect width="1200" height="900" fill="url(#bg)" rx="54" />
      <circle cx="250" cy="220" r="${orbit}" fill="white" opacity="0.34" />
      <circle cx="920" cy="180" r="${orbit + 26}" fill="${mid}" opacity="0.18" />
      <circle cx="860" cy="680" r="${orbit + 12}" fill="white" opacity="0.18" />
      <g transform="translate(600 450) rotate(${rotation})">
        <rect x="-280" y="-280" width="560" height="560" rx="68" fill="none" stroke="rgba(255,255,255,0.28)" stroke-width="8" />
        <rect x="-220" y="-220" width="440" height="440" rx="54" fill="rgba(255,255,255,0.18)" />
      </g>
      <text x="88" y="136" fill="rgba(27,41,58,0.46)" font-family="Georgia, serif" font-size="28" letter-spacing="6">${label}</text>
      <text x="88" y="750" fill="rgba(20,31,45,0.82)" font-family="Georgia, serif" font-size="232" font-weight="700">${initials}</text>
      <path d="M88 784 H430" stroke="rgba(20,31,45,0.44)" stroke-width="8" stroke-linecap="round" />
    </svg>
  `;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

const commonsRedirect = (fileName: string) =>
  `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(fileName)}`;

const artistPhotos: Record<string, ArtistPhoto> = {
  oasis: {
    alt: "Oasis performing in Cardiff in 2025",
    src: commonsRedirect("OasisCardiff040725-26 - 54640463214 (cropped).jpg"),
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:OasisCardiff040725-26_-_54640463214_(cropped).jpg",
    credit: "Photo by Raph_PH via Wikimedia Commons",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/"
  },
  "led-zeppelin": {
    alt: "Led Zeppelin on stage in Chicago in 1975",
    src: commonsRedirect("Led zeppelin (1264206320).jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Led_zeppelin_(1264206320).jpg",
    credit: "Photo by Tony Morelli via Wikimedia Commons",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/"
  },
  "pink-floyd": {
    alt: "Pink Floyd promotional group photo from 1971",
    src: commonsRedirect("Pink Floyd, 1971 (cropped).jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pink_Floyd,_1971_(cropped).jpg",
    credit: "Capitol Records promotional image via Wikimedia Commons",
    license: "Public domain in the U.S.",
    licenseUrl:
      "https://commons.wikimedia.org/wiki/File:Pink_Floyd,_1971_(cropped).jpg"
  },
  "the-beatles": {
    alt: "The Beatles in Treslong in 1964",
    src: commonsRedirect("The Beatles in Treslong.JPG"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Beatles_in_Treslong.JPG",
    credit: "Noord-Hollands Archief / Fotoburo de Boer via Wikimedia Commons",
    license: "CC0 1.0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/"
  },
  nirvana: {
    alt: "Nirvana in a 1989 publicity photo",
    src: commonsRedirect("Nirvana in 1989 (cropped).jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Nirvana_in_1989_(cropped).jpg",
    credit: "Publicity photo via Wikimedia Commons",
    license: "Public domain in the U.S. (no notice)",
    licenseUrl:
      "https://commons.wikimedia.org/wiki/File:Nirvana_in_1989_(cropped).jpg"
  },
  "2pac": {
    alt: "Tupac Shakur passport photo from 1995",
    src: commonsRedirect("Tupac Shakur.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tupac_Shakur.jpg",
    credit: "Public domain U.S. passport image via Wikimedia Commons",
    license: "Public domain",
    licenseUrl: "https://commons.wikimedia.org/wiki/File:Tupac_Shakur.jpg"
  },
  "the-cure": {
    alt: "The Cure performing in Santiago in 2013",
    src: commonsRedirect("The Cure 2013.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Cure_2013.jpg",
    credit: "Photo by Christian Cordova via Wikimedia Commons",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/"
  },
  "aphex-twin": {
    alt: "Aphex Twin performing in Turin in 2007",
    src: commonsRedirect("Aphex Twin 2.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Aphex_Twin_2.jpg",
    credit: "Photo by clattimo via Wikimedia Commons",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/"
  },
  "alice-in-chains": {
    alt: "Alice In Chains performing at Rock am Ring in 2019",
    src: commonsRedirect("Alice in Chains 2019.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Alice_in_Chains_2019.jpg",
    credit: "Photo by Sven Mandel via Wikimedia Commons",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/"
  },
  beyonce: {
    alt: "Beyonce performing in Munich in 2007",
    src: commonsRedirect("Beyonce.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Beyonce.jpg",
    credit: "Photo by Jen Keys via Wikimedia Commons",
    license: "Public domain",
    licenseUrl: "https://commons.wikimedia.org/wiki/File:Beyonce.jpg"
  },
  "brian-eno": {
    alt: "Brian Eno in Naples in 2008",
    src: commonsRedirect("Brian Eno 2008.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Brian_Eno_2008.jpg",
    credit: "Photo by cosciansky via Wikimedia Commons",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/"
  },
  eminem: {
    alt: "Eminem backstage in Munich in 1999",
    src: commonsRedirect("Eminem (cropped).jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Eminem_(cropped).jpg",
    credit: "Photo by Mika-photography via Wikimedia Commons",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/"
  },
  "dr-dre": {
    alt: "Dr. Dre backstage in Los Angeles",
    src: commonsRedirect("Dr. Dre.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Dr._Dre.jpg",
    credit: "Photo by Ed Kavishe via Wikimedia Commons",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/"
  },
  adele: {
    alt: "Adele performing in London in 2007",
    src: commonsRedirect("Adele.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Adele.jpg",
    credit: "Photo by Mpawsey via Wikimedia Commons",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/"
  },
  coldplay: {
    alt: "Coldplay at BBC Broadcasting House in 2021",
    src: commonsRedirect("ColdplayBBC071221 (cropped).jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:ColdplayBBC071221_(cropped).jpg",
    credit: "Photo by Raph_PH via Wikimedia Commons",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/"
  },
  "kanye-west": {
    alt: "Kanye West performing at Glastonbury in 2015",
    src: commonsRedirect("Kanye West (18653258244).jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Kanye_West_(18653258244).jpg",
    credit: "Photo by Simon Godley via Wikimedia Commons",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/"
  },
  "kendrick-lamar": {
    alt: "Kendrick Lamar at the 2018 Pulitzer Prize ceremony",
    src: commonsRedirect("Pulitzer2018-portraits-kendrick-lamar.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pulitzer2018-portraits-kendrick-lamar.jpg",
    credit: "Photo by Fuzheado via Wikimedia Commons",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/"
  },
  "snoop-dogg": {
    alt: "Snoop Dogg at Coachella in 2012",
    src: commonsRedirect("Snoop Dogg Coachella-07.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Snoop_Dogg_Coachella-07.jpg",
    credit: "Photo by Jason Persse via Wikimedia Commons",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/"
  },
  "pearl-jam": {
    alt: "Pearl Jam performing in Providence in 1991",
    src: commonsRedirect("Pearl Jam 1991.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pearl_Jam_1991.jpg",
    credit: "Photo by perfectrx via Wikimedia Commons",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/"
  },
  radiohead: {
    alt: "Thom Yorke and Ed O'Brien of Radiohead in concert in 2006",
    src: commonsRedirect("Thomed.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Thomed.jpg",
    credit: "Photo by ErleGrey via Wikimedia Commons",
    license: "Public domain",
    licenseUrl: "https://commons.wikimedia.org/wiki/File:Thomed.jpg"
  },
  rem: {
    alt: "R.E.M. performing in Padova in 2003",
    src: commonsRedirect("Padova REM concert July 22 2003 blue.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Padova_REM_concert_July_22_2003_blue.jpg",
    credit: "Photo by Stark (Stefano Andreoli) via Wikimedia Commons",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/"
  },
  rihanna: {
    alt: "Rihanna performing in Sydney in 2011",
    src: commonsRedirect("Rihanna (6777063482).jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Rihanna_(6777063482).jpg",
    credit: "Photo by Eva Rinaldi via Wikimedia Commons",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/"
  },
  "taylor-swift": {
    alt: "Taylor Swift performing in Santa Maria in 2006",
    src: commonsRedirect("Taylor Swift.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Taylor_Swift.jpg",
    credit: "Photo by Dwight McCann via Wikimedia Commons",
    license: "CC BY-SA 2.5",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.5/"
  }
};

export function getArtistPhoto(slug: string) {
  return artistPhotos[slug];
}

export function getArtistPhotos() {
  return artistPhotos;
}
