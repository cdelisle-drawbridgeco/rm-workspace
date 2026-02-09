/**
 * Currency formatting and parsing utilities.
 * Amounts from the DB are stored in cents; display values are in USD.
 */

/** Format cents to USD string (e.g. 150000 → "$1,500"). */
export function formatUsd(cents: number): string {
  return `$${(cents / 100).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
}

/** Format a dollar amount to USD string (e.g. 1500 → "$1,500"). */
export function formatUsdFromDollars(dollars: number): string {
  return `$${dollars.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
}

/** Format a raw string value as USD currency (e.g. "1500" → "$1,500.00"). Returns '' for zero/NaN. */
export function formatCurrency(val: string): string {
  const cleaned = val.replace(/[$,]/g, '');
  const num = Number(cleaned);
  if (isNaN(num) || num === 0) return '';
  return num.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

/** Parse a currency string to a number (e.g. "$1,500.00" → 1500). Returns 0 for invalid. */
export function parseCurrency(val: string): number {
  const cleaned = val.replace(/[$,]/g, '');
  return Number(cleaned) || 0;
}
