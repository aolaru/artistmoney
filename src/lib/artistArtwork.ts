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
  localPath: string;
  personalityRightsWarning?: string;
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

export function createAlbumArtwork(
  title: string,
  artistName: string,
  slug: string,
  metadata?: { releaseDate?: string; label?: string; trackCount?: number }
) {
  const hash = hashValue(slug);
  const [dark, mid, light] = palettes[(hash + 2) % palettes.length];
  const accent = palettes[(hash + 4) % palettes.length][1];
  const displayTitle = title.toUpperCase();
  const displayArtist = artistName.toUpperCase();
  const angle = -16 + (hash % 32);
  const year = metadata?.releaseDate?.slice(0, 4) ?? "";
  const footer = [metadata?.label, metadata?.trackCount ? `${metadata.trackCount} tracks` : ""]
    .filter(Boolean)
    .join(" · ")
    .toUpperCase();

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" role="img" aria-label="${title} by ${artistName}">
      <defs>
        <linearGradient id="album-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${dark}" />
          <stop offset="100%" stop-color="${light}" />
        </linearGradient>
      </defs>
      <rect width="1200" height="1200" fill="url(#album-bg)" rx="64" />
      <circle cx="972" cy="238" r="168" fill="${mid}" opacity="0.22" />
      <circle cx="254" cy="922" r="122" fill="white" opacity="0.12" />
      <rect x="84" y="84" width="1032" height="1032" rx="52" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="6" />
      <g transform="translate(600 612) rotate(${angle})">
        <rect x="-318" y="-318" width="636" height="636" rx="48" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.32)" stroke-width="8" />
        <circle cx="0" cy="0" r="176" fill="rgba(19,29,39,0.18)" />
        <circle cx="0" cy="0" r="56" fill="${accent}" opacity="0.8" />
        <circle cx="0" cy="0" r="18" fill="white" opacity="0.85" />
      </g>
      ${year ? `<text x="1020" y="122" text-anchor="end" fill="rgba(20,31,45,0.58)" font-family="Inter, SF Pro Text, Segoe UI, Helvetica Neue, Arial, sans-serif" font-size="34" font-weight="700" letter-spacing="4">${year}</text>` : ""}
      <text x="86" y="122" fill="rgba(20,31,45,0.58)" font-family="Inter, SF Pro Text, Segoe UI, Helvetica Neue, Arial, sans-serif" font-size="30" letter-spacing="6">${displayArtist}</text>
      <foreignObject x="84" y="846" width="860" height="190">
        <div xmlns="http://www.w3.org/1999/xhtml" style="font-family: Inter, SF Pro Text, Segoe UI, Helvetica Neue, Arial, sans-serif; font-size: 90px; font-weight: 700; line-height: 1.02; color: rgba(20,31,45,0.92); letter-spacing: -0.04em;">
          ${displayTitle}
        </div>
      </foreignObject>
      <path d="M88 1044 H870" stroke="rgba(20,31,45,0.36)" stroke-width="8" stroke-linecap="round" />
      ${footer ? `<text x="88" y="1088" fill="rgba(20,31,45,0.56)" font-family="Inter, SF Pro Text, Segoe UI, Helvetica Neue, Arial, sans-serif" font-size="26" letter-spacing="3">${footer}</text>` : ""}
    </svg>
  `;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

const baseUrl = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

const localPhoto = (fileName: string) => `${baseUrl}images/artists/${fileName}`;

const artistPhotos: Record<string, ArtistPhoto> = {
  oasis: {
    alt: "Oasis performing in Cardiff in 2025",
    src: localPhoto("oasis.jpg"),
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:OasisCardiff040725-26_-_54640463214_(cropped).jpg",
    credit: "Photo by Raph_PH via Wikimedia Commons",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    localPath: "/images/artists/oasis.jpg",
    personalityRightsWarning: "Living artists depicted. Editorial use is generally safer than endorsement or advertising use."
  },
  "led-zeppelin": {
    alt: "Led Zeppelin on stage in Chicago in 1975",
    src: localPhoto("led-zeppelin.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Led_zeppelin_(1264206320).jpg",
    credit: "Photo by Tony Morelli via Wikimedia Commons",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    localPath: "/images/artists/led-zeppelin.jpg",
    personalityRightsWarning: "Living band members are identifiable. Editorial use is generally safer than endorsement or advertising use."
  },
  "pink-floyd": {
    alt: "Pink Floyd promotional group photo from 1971",
    src: localPhoto("pink-floyd.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pink_Floyd,_1971_(cropped).jpg",
    credit: "Capitol Records promotional image via Wikimedia Commons",
    license: "Public domain in the U.S.",
    licenseUrl:
      "https://commons.wikimedia.org/wiki/File:Pink_Floyd,_1971_(cropped).jpg",
    localPath: "/images/artists/pink-floyd.jpg",
    personalityRightsWarning: "Living band members are identifiable. Public-domain status does not remove publicity or personality-rights considerations."
  },
  "the-beatles": {
    alt: "The Beatles in Treslong in 1964",
    src: localPhoto("the-beatles.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Beatles_in_Treslong.JPG",
    credit: "Noord-Hollands Archief / Fotoburo de Boer via Wikimedia Commons",
    license: "CC0 1.0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    localPath: "/images/artists/the-beatles.jpg",
    personalityRightsWarning: "Living band members are identifiable. CC0 status does not remove publicity or personality-rights considerations."
  },
  "2pac": {
    alt: "Tupac Shakur passport photo from 1995",
    src: localPhoto("2pac.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tupac_Shakur.jpg",
    credit: "Public domain U.S. passport image via Wikimedia Commons",
    license: "Public domain",
    licenseUrl: "https://commons.wikimedia.org/wiki/File:Tupac_Shakur.jpg",
    localPath: "/images/artists/2pac.jpg"
  },
  "aphex-twin": {
    alt: "Aphex Twin performing in Turin in 2007",
    src: localPhoto("aphex-twin.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Aphex_Twin_2.jpg",
    credit: "Photo by clattimo via Wikimedia Commons",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    localPath: "/images/artists/aphex-twin.jpg",
    personalityRightsWarning: "Living artist depicted. Editorial use is generally safer than endorsement or advertising use."
  },
  "alice-in-chains": {
    alt: "Alice In Chains performing at Rock am Ring in 2019",
    src: localPhoto("alice-in-chains.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Alice_in_Chains_2019.jpg",
    credit: "Photo by Sven Mandel via Wikimedia Commons",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    localPath: "/images/artists/alice-in-chains.jpg",
    personalityRightsWarning: "Living artists depicted. Editorial use is generally safer than endorsement or advertising use."
  },
  beyonce: {
    alt: "Beyonce performing in Munich in 2007",
    src: localPhoto("beyonce.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Beyonce.jpg",
    credit: "Photo by Jen Keys via Wikimedia Commons",
    license: "Public domain",
    licenseUrl: "https://commons.wikimedia.org/wiki/File:Beyonce.jpg",
    localPath: "/images/artists/beyonce.jpg",
    personalityRightsWarning: "Living artist depicted. Public-domain status does not remove publicity or personality-rights considerations."
  },
  "brian-eno": {
    alt: "Brian Eno in Naples in 2008",
    src: localPhoto("brian-eno.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Brian_Eno_2008.jpg",
    credit: "Photo by cosciansky via Wikimedia Commons",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    localPath: "/images/artists/brian-eno.jpg",
    personalityRightsWarning: "Living artist depicted. Editorial use is generally safer than endorsement or advertising use."
  },
  "dr-dre": {
    alt: "Dr. Dre backstage in Los Angeles",
    src: localPhoto("dr-dre.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Dr._Dre.jpg",
    credit: "Photo by Ed Kavishe via Wikimedia Commons",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    localPath: "/images/artists/dr-dre.jpg",
    personalityRightsWarning: "Living artist depicted. Editorial use is generally safer than endorsement or advertising use."
  },
  adele: {
    alt: "Adele performing in London in 2007",
    src: localPhoto("adele.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Adele.jpg",
    credit: "Photo by Mpawsey via Wikimedia Commons",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    localPath: "/images/artists/adele.jpg",
    personalityRightsWarning: "Living artist depicted. Editorial use is generally safer than endorsement or advertising use."
  },
  coldplay: {
    alt: "Coldplay at BBC Broadcasting House in 2021",
    src: localPhoto("coldplay.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:ColdplayBBC071221_(cropped).jpg",
    credit: "Photo by Raph_PH via Wikimedia Commons",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    localPath: "/images/artists/coldplay.jpg",
    personalityRightsWarning: "Living artists depicted. Editorial use is generally safer than endorsement or advertising use."
  }
};

export function getArtistPhoto(slug: string) {
  return artistPhotos[slug];
}

export function getArtistPhotos() {
  return artistPhotos;
}
