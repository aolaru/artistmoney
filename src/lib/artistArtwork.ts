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

export function createSongArtwork(
  title: string,
  artistName: string,
  slug: string,
  metadata?: { year?: number; album?: string }
) {
  const hash = hashValue(slug);
  const [dark, mid, light] = palettes[(hash + 1) % palettes.length];
  const accent = palettes[(hash + 3) % palettes.length][1];
  const displayTitle = title.toUpperCase();
  const displayArtist = artistName.toUpperCase();
  const angle = -10 + (hash % 20);
  const year = metadata?.year ? `${metadata.year}` : "";
  const album = metadata?.album?.toUpperCase() ?? "";

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" role="img" aria-label="${title} by ${artistName}">
      <defs>
        <linearGradient id="song-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${dark}" />
          <stop offset="52%" stop-color="${mid}" />
          <stop offset="100%" stop-color="${light}" />
        </linearGradient>
      </defs>
      <rect width="1200" height="675" fill="url(#song-bg)" rx="42" />
      <circle cx="1024" cy="148" r="118" fill="white" opacity="0.14" />
      <circle cx="175" cy="514" r="96" fill="${accent}" opacity="0.18" />
      <g transform="translate(824 332) rotate(${angle})">
        <rect x="-168" y="-168" width="336" height="336" rx="34" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.26)" stroke-width="7" />
        <circle cx="0" cy="0" r="108" fill="rgba(21,31,43,0.22)" />
        <circle cx="0" cy="0" r="28" fill="${accent}" opacity="0.88" />
      </g>
      <text x="78" y="96" fill="rgba(20,31,45,0.56)" font-family="Inter, SF Pro Text, Segoe UI, Helvetica Neue, Arial, sans-serif" font-size="26" letter-spacing="6">${displayArtist}</text>
      ${year ? `<text x="1120" y="96" text-anchor="end" fill="rgba(20,31,45,0.5)" font-family="Inter, SF Pro Text, Segoe UI, Helvetica Neue, Arial, sans-serif" font-size="26" font-weight="700" letter-spacing="4">${year}</text>` : ""}
      <foreignObject x="72" y="180" width="650" height="240">
        <div xmlns="http://www.w3.org/1999/xhtml" style="font-family: Inter, SF Pro Text, Segoe UI, Helvetica Neue, Arial, sans-serif; font-size: 86px; font-weight: 750; line-height: 0.98; color: rgba(20,31,45,0.92); letter-spacing: -0.05em;">
          ${displayTitle}
        </div>
      </foreignObject>
      <path d="M78 474 H548" stroke="rgba(20,31,45,0.34)" stroke-width="8" stroke-linecap="round" />
      ${album ? `<text x="78" y="528" fill="rgba(20,31,45,0.6)" font-family="Inter, SF Pro Text, Segoe UI, Helvetica Neue, Arial, sans-serif" font-size="24" letter-spacing="4">${album}</text>` : ""}
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
  },
  "depeche-mode": {
    alt: "Depeche Mode group photo from 2006",
    src: localPhoto("depeche-mode.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Depeche_Mode_in_2006.jpg",
    credit: "Photo by Ro hie via Wikimedia Commons",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    localPath: "/images/artists/depeche-mode.jpg",
    personalityRightsWarning: "Living artists depicted. Editorial use is generally safer than endorsement or advertising use."
  },
  "tears-for-fears": {
    alt: "Tears for Fears performing in Hanover in 2008",
    src: localPhoto("tears-for-fears.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tears_for_Fears_2008.jpg",
    credit: "Photo by KWa via Wikimedia Commons",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    localPath: "/images/artists/tears-for-fears.jpg",
    personalityRightsWarning: "Living artists depicted. Editorial use is generally safer than endorsement or advertising use."
  },
  "pearl-jam": {
    alt: "Pearl Jam performing with Chris Cornell in 2011",
    src: localPhoto("pearl-jam.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pearl_Jam_%26_Chris_Cornell.jpg",
    credit: "Photo by David Silverman via Wikimedia Commons",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    localPath: "/images/artists/pearl-jam.jpg",
    personalityRightsWarning: "Living artists depicted. Editorial use is generally safer than endorsement or advertising use."
  },
  "snoop-dogg": {
    alt: "Snoop Dogg at Ottawa Bluesfest in 2008",
    src: localPhoto("snoop-dogg.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Snoop_Dogg_2008.jpg",
    credit: "Photo by Ceedub13 via Wikimedia Commons",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    localPath: "/images/artists/snoop-dogg.jpg",
    personalityRightsWarning: "Living artist depicted. Editorial use is generally safer than endorsement or advertising use."
  },
  rem: {
    alt: "R.E.M. 1985 press photo",
    src: localPhoto("rem.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:R.E.M._1985_press_photo.jpg",
    credit: "I.R.S. Records press photo via Wikimedia Commons",
    license: "Public domain in the U.S.",
    licenseUrl: "https://commons.wikimedia.org/wiki/File:R.E.M._1985_press_photo.jpg",
    localPath: "/images/artists/rem.jpg",
    personalityRightsWarning: "Living band members are identifiable. Public-domain status does not remove publicity or personality-rights considerations."
  },
  soundgarden: {
    alt: "Soundgarden Sub Pop promotional photo from 1987",
    src: localPhoto("soundgarden.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Soundgarden_(1987_Sub_Pop_promo_photo).jpg",
    credit: "Sub Pop promotional image via Wikimedia Commons",
    license: "Public domain in the U.S.",
    licenseUrl: "https://commons.wikimedia.org/wiki/File:Soundgarden_(1987_Sub_Pop_promo_photo).jpg",
    localPath: "/images/artists/soundgarden.jpg",
    personalityRightsWarning: "Living band members are identifiable. Public-domain status does not remove publicity or personality-rights considerations."
  },
  "the-cure": {
    alt: "The Cure performing in Santiago in 2013",
    src: localPhoto("the-cure.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Cure_2013.jpg",
    credit: "Photo by Christian Cordova via Wikimedia Commons",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    localPath: "/images/artists/the-cure.jpg",
    personalityRightsWarning: "Living artists depicted. Editorial use is generally safer than endorsement or advertising use."
  },
  "50-cent": {
    alt: "50 Cent visiting Barksdale Air Force Base",
    src: localPhoto("50-cent.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Curtis_%2250_Cent%22_Jackson_visits_Barksdale_AFB_(5)_(cropped).jpg",
    credit: "Photo by Senior Airman Nia Jacobs via Wikimedia Commons",
    license: "Public domain",
    licenseUrl: "https://commons.wikimedia.org/wiki/File:Curtis_%2250_Cent%22_Jackson_visits_Barksdale_AFB_(5)_(cropped).jpg",
    localPath: "/images/artists/50-cent.jpg",
    personalityRightsWarning: "Living artist depicted. Public-domain status does not remove publicity or personality-rights considerations."
  },
  "arctic-monkeys": {
    alt: "Arctic Monkeys performing at Roskilde Festival in 2014",
    src: localPhoto("arctic-monkeys.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Arctic_Monkeys_-_Orange_Stage_-_Roskilde_Festival_2014.jpg",
    credit: "Photo by Bill Ebbesen via Wikimedia Commons",
    license: "CC BY 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
    localPath: "/images/artists/arctic-monkeys.jpg",
    personalityRightsWarning: "Living artists depicted. Editorial use is generally safer than endorsement or advertising use."
  },
  autechre: {
    alt: "Autechre performing live",
    src: localPhoto("autechre.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Autechre_(cropped).jpg",
    credit: "Photo by Pablo Sanz Almoguera via Wikimedia Commons",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    localPath: "/images/artists/autechre.jpg",
    personalityRightsWarning: "Living artists depicted. Editorial use is generally safer than endorsement or advertising use."
  },
  "billie-eilish": {
    alt: "Billie Eilish performing in 2025",
    src: localPhoto("billie-eilish.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:BillieEilishO2140725-39_-_54665577407_(cropped).jpg",
    credit: "Photo by Raph_PH via Wikimedia Commons",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    localPath: "/images/artists/billie-eilish.jpg",
    personalityRightsWarning: "Living artist depicted. Editorial use is generally safer than endorsement or advertising use."
  },
  "boards-of-canada": {
    alt: "Boards of Canada at the Warp Lighthouse Party in 1999",
    src: localPhoto("boards-of-canada.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Boards_of_Canada_Warp_Lighthouse_Party_1999_(cropped).jpg",
    credit: "Photo via Wikimedia Commons",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    localPath: "/images/artists/boards-of-canada.jpg",
    personalityRightsWarning: "Living artists depicted. Editorial use is generally safer than endorsement or advertising use."
  },
  coolio: {
    alt: "Coolio portrait",
    src: localPhoto("coolio.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Coolio.jpg",
    credit: "Public-domain image via Wikimedia Commons",
    license: "Public domain",
    licenseUrl: "https://commons.wikimedia.org/wiki/File:Coolio.jpg",
    localPath: "/images/artists/coolio.jpg"
  },
  "daft-punk": {
    alt: "Daft Punk in 2013",
    src: localPhoto("daft-punk.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Daft_Punk_in_2013_2-_centered.jpg",
    credit: "Sony Music Entertainment, additional editing by W.carter via Wikimedia Commons",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    localPath: "/images/artists/daft-punk.jpg",
    personalityRightsWarning: "Living artists depicted. Editorial use is generally safer than endorsement or advertising use."
  },
  drake: {
    alt: "Drake at The Carter Effect premiere in 2017",
    src: localPhoto("drake.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Drake_at_The_Carter_Effect_2017_(36818935200)_(cropped).jpg",
    credit: "Photo by GabboT via Wikimedia Commons",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    localPath: "/images/artists/drake.jpg",
    personalityRightsWarning: "Living artist depicted. Editorial use is generally safer than endorsement or advertising use."
  },
  eminem: {
    alt: "Eminem in 2021",
    src: localPhoto("eminem.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Eminem_2021_Color_Corrected.jpg",
    credit: "Photo by Brendan_linden via Wikimedia Commons",
    license: "CC0 1.0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    localPath: "/images/artists/eminem.jpg",
    personalityRightsWarning: "Living artist depicted. CC0 status does not remove publicity or personality-rights considerations."
  },
  "kendrick-lamar": {
    alt: "Kendrick Lamar performing in 2025",
    src: localPhoto("kendrick-lamar.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:KendrickSZASPurs230725-144_(cropped)_desaturated.jpg",
    credit: "Photo by Raph_PH via Wikimedia Commons",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    localPath: "/images/artists/kendrick-lamar.jpg",
    personalityRightsWarning: "Living artist depicted. Editorial use is generally safer than endorsement or advertising use."
  },
  "massive-attack": {
    alt: "Massive Attack performing in Saint Petersburg in 2010",
    src: localPhoto("massive-attack.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Massive_Attack,_Saint-Petersburg,_2010-09-26_(cropped).jpg",
    credit: "Photo by Platonova Alina via Wikimedia Commons",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    localPath: "/images/artists/massive-attack.jpg",
    personalityRightsWarning: "Living artists depicted. Editorial use is generally safer than endorsement or advertising use."
  },
  "mobb-deep": {
    alt: "Mobb Deep performing at Out4Fame Festival in 2015",
    src: localPhoto("mobb-deep.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Out4Fame-Festival_2015_-_Mobb_Deep_(cropped).JPG",
    credit: "Photo by Lipstar & Fred Production via Wikimedia Commons",
    license: "CC BY-SA 2.5",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.5/",
    localPath: "/images/artists/mobb-deep.jpg",
    personalityRightsWarning: "Identifiable performers are depicted. Editorial use is generally safer than endorsement or advertising use."
  },
  moby: {
    alt: "Moby in 2018",
    src: localPhoto("moby.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Moby_12_17_2018_-16_(31743191557).jpg",
    credit: "Photo by Justin Higuchi via Wikimedia Commons",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    localPath: "/images/artists/moby.jpg",
    personalityRightsWarning: "Living artist depicted. Editorial use is generally safer than endorsement or advertising use."
  },
  radiohead: {
    alt: "Radiohead composite performance photo",
    src: localPhoto("radiohead.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:RadioheadO2211125_composite.jpg",
    credit: "Photo by Raph_PH via Wikimedia Commons",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    localPath: "/images/artists/radiohead.jpg",
    personalityRightsWarning: "Living band members are identifiable. Editorial use is generally safer than endorsement or advertising use."
  },
  rihanna: {
    alt: "Rihanna in 2018",
    src: localPhoto("rihanna.png"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Rihanna_Fenty_2018.png",
    credit: "Photo by SIGMA via Wikimedia Commons",
    license: "CC BY 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
    localPath: "/images/artists/rihanna.png",
    personalityRightsWarning: "Living artist depicted. Editorial use is generally safer than endorsement or advertising use."
  },
  "taylor-swift": {
    alt: "Taylor Swift at the 2023 MTV Video Music Awards",
    src: localPhoto("taylor-swift.png"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_(3).png",
    credit: "Photo by iHeartRadioCA via Wikimedia Commons",
    license: "CC BY 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
    localPath: "/images/artists/taylor-swift.png",
    personalityRightsWarning: "Living artist depicted. Editorial use is generally safer than endorsement or advertising use."
  },
  "the-weeknd": {
    alt: "The Weeknd portrait",
    src: localPhoto("the-weeknd.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Weeknd_Portrait_by_Brian_Ziff.jpg",
    credit: "Photo by Brian Ziff via Wikimedia Commons",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    localPath: "/images/artists/the-weeknd.jpg",
    personalityRightsWarning: "Living artist depicted. Editorial use is generally safer than endorsement or advertising use."
  },
  "tim-hecker": {
    alt: "Tim Hecker live at A-Visions",
    src: localPhoto("tim-hecker.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tim_Hecker_-_A-Visions_4_(4690826583).jpg",
    credit: "Photo by basic_sounds via Wikimedia Commons",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    localPath: "/images/artists/tim-hecker.jpg",
    personalityRightsWarning: "Living artist depicted. Editorial use is generally safer than endorsement or advertising use."
  },
  underworld: {
    alt: "Underworld performing in 2017",
    src: localPhoto("underworld.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:UW_AllyPally_2017_(cropped).jpg",
    credit: "Photo by Torrensmike via Wikimedia Commons",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    localPath: "/images/artists/underworld.jpg",
    personalityRightsWarning: "Living artists depicted. Editorial use is generally safer than endorsement or advertising use."
  },
  nirvana: {
    alt: "Nirvana around 1992",
    src: localPhoto("nirvana.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Nirvana_around_1992_(high_quality)_(cropped).jpg",
    credit: "Photo by P.B. Rage via Wikimedia Commons",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    localPath: "/images/artists/nirvana.jpg",
    personalityRightsWarning: "Living band members are identifiable. Editorial use is generally safer than endorsement or advertising use."
  },
  "kanye-west": {
    alt: "Kanye West at the 2009 Tribeca Film Festival",
    src: localPhoto("kanye-west.jpg"),
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Kanye_West_at_the_2009_Tribeca_Film_Festival_(crop_2).jpg",
    credit: "Photo by David Shankbone via Wikimedia Commons",
    license: "Public domain",
    licenseUrl: "https://commons.wikimedia.org/wiki/File:Kanye_West_at_the_2009_Tribeca_Film_Festival_(crop_2).jpg",
    localPath: "/images/artists/kanye-west.jpg",
    personalityRightsWarning: "Living artist depicted. Public-domain status does not remove publicity or personality-rights considerations."
  }
};

export function getArtistPhoto(slug: string) {
  return artistPhotos[slug];
}

export function getArtistPhotos() {
  return artistPhotos;
}
