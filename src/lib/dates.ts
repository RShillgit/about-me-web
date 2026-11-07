/** Whole years elapsed since the given year and month (1-12), based on today's date. */
export function yearsSince(year: number, month = 1): number {
  const now = new Date();
  const months = (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month);
  return Math.max(0, Math.floor(months / 12));
}

/** Parses 'YYYY-MM' or 'YYYY-MM-DD' as a local date (no timezone shift). */
export function parseDate(value: string): Date {
  const [y, m = 1, d = 1] = value.split('-').map(Number);
  return new Date(y ?? 1970, m - 1, d);
}

/** 'Oct 2026' style label. */
export function monthYear(value: string): string {
  return parseDate(value).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}
