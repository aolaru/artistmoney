const palettes = [
  ["#0f1b2e", "#2c5f8a", "#9ed8ff"],
  ["#1f0f27", "#8a355c", "#f8b4d9"],
  ["#17231b", "#3d7a4c", "#d6f0a2"],
  ["#2a160f", "#b6582f", "#ffd394"],
  ["#1a1531", "#5461c8", "#c7c5ff"],
  ["#1d2026", "#6d7586", "#f2e6c9"]
];

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
  const rotation = 18 + (hash % 40);
  const orbit = 40 + (hash % 70);
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
        <filter id="blur">
          <feGaussianBlur stdDeviation="40" />
        </filter>
      </defs>
      <rect width="1200" height="900" fill="url(#bg)" rx="54" />
      <circle cx="250" cy="220" r="${orbit}" fill="${light}" opacity="0.35" filter="url(#blur)" />
      <circle cx="920" cy="180" r="${orbit + 40}" fill="${mid}" opacity="0.28" filter="url(#blur)" />
      <circle cx="860" cy="680" r="${orbit + 10}" fill="${light}" opacity="0.25" filter="url(#blur)" />
      <g transform="translate(600 450) rotate(${rotation})">
        <rect x="-280" y="-280" width="560" height="560" rx="68" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="10" />
        <rect x="-220" y="-220" width="440" height="440" rx="54" fill="rgba(255,255,255,0.08)" />
      </g>
      <text x="88" y="136" fill="rgba(255,255,255,0.76)" font-family="Georgia, serif" font-size="34" letter-spacing="8">${label}</text>
      <text x="88" y="760" fill="white" font-family="Georgia, serif" font-size="260" font-weight="700">${initials}</text>
      <path d="M88 792 H540" stroke="rgba(255,255,255,0.72)" stroke-width="10" stroke-linecap="round" />
    </svg>
  `;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}
