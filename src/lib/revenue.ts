export type RevenueRange = {
  min: number;
  max: number;
};

export type NormalizedRevenue = {
  display: string;
  min: number;
  max: number;
  midpoint: number;
  currency: "USD";
  period: "year";
};

function parseRevenueValue(token: string) {
  const match = token.trim().match(/^\$?([\d.]+)\s*([KMB])?\+?$/i);

  if (!match) return null;

  const value = Number(match[1]);
  const unit = match[2]?.toUpperCase();
  const multiplier =
    unit === "B" ? 1_000_000_000 :
    unit === "M" ? 1_000_000 :
    unit === "K" ? 1_000 :
    1;

  return value * multiplier;
}

export function parseRevenueRange(input?: string | null): RevenueRange | null {
  if (!input) return null;

  const normalized = input
    .replace(/\/year/i, "")
    .replace(/per year/i, "")
    .replace(/[–—]/g, "-")
    .replace(/\s+to\s+/gi, "-")
    .trim();

  const parts = normalized.split("-").map((part) => parseRevenueValue(part));

  if (parts.length === 1 && parts[0] != null) {
    return { min: parts[0], max: parts[0] };
  }

  if (parts.length !== 2 || parts[0] == null || parts[1] == null) return null;

  return { min: parts[0], max: parts[1] };
}

export function revenueMidpoint(range: RevenueRange | null) {
  return range ? (range.min + range.max) / 2 : null;
}

export function normalizeRevenue(input?: string | null): NormalizedRevenue | null {
  const range = parseRevenueRange(input);

  if (!range) return null;

  return {
    display: formatRevenueRange(range) ?? input ?? "",
    min: range.min,
    max: range.max,
    midpoint: revenueMidpoint(range) ?? range.min,
    currency: "USD",
    period: "year"
  };
}

export function formatRevenueValue(value: number) {
  if (value >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(1).replace(/\.0$/, "")}B`;
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  return `$${Math.round(value)}`;
}

export function formatRevenueRange(range: RevenueRange | null) {
  if (!range) return undefined;
  return `${formatRevenueValue(range.min)}-${formatRevenueValue(range.max)}/year`;
}

export function formatRevenueMidpoint(value?: number | null) {
  if (value == null) return undefined;

  return Math.round(value).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  });
}
