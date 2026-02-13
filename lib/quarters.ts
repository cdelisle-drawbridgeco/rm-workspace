/**
 * Quarter calculation utilities.
 * All quarter keys follow the pattern FYxx-Qn (e.g. FY26-Q1).
 */

export function getCurrentQuarter(): string {
  const now = new Date();
  const year = now.getUTCFullYear();
  const q = Math.floor(now.getUTCMonth() / 3) + 1;
  return `FY${String(year).slice(-2)}-Q${q}`;
}

export function getNextQuarter(): string {
  const now = new Date();
  const year = now.getUTCFullYear();
  const q = Math.floor(now.getUTCMonth() / 3) + 1;
  const nextQ = q === 4 ? 1 : q + 1;
  const nextYear = q === 4 ? year + 1 : year;
  return `FY${String(nextYear).slice(-2)}-Q${nextQ}`;
}

export function getFollowingQuarter(): string {
  const now = new Date();
  const year = now.getUTCFullYear();
  const q = Math.floor(now.getUTCMonth() / 3) + 1;
  const followingQ = q === 4 ? 2 : q === 3 ? 1 : q + 2;
  const followingYear = q >= 3 ? year + 1 : year;
  return `FY${String(followingYear).slice(-2)}-Q${followingQ}`;
}

/** Returns the 3-quarter rolling window: current, next, following. */
export function getRollingQuarters() {
  return {
    cq: getCurrentQuarter(),
    nq: getNextQuarter(),
    fq: getFollowingQuarter(),
  };
}

/** Convert a Date to its quarter key (e.g. FY26-Q1). */
export function toQuarterKey(d: Date): string {
  const year = d.getUTCFullYear();
  const q = Math.floor(d.getUTCMonth() / 3) + 1;
  return `FY${String(year).slice(-2)}-Q${q}`;
}

/** Returns the fourth quarter from now. */
export function getFourthQuarter(): string {
  const now = new Date();
  const year = now.getUTCFullYear();
  const q = Math.floor(now.getUTCMonth() / 3) + 1;
  const offset = 3; // 3 quarters ahead
  const targetQ = ((q - 1 + offset) % 4) + 1;
  const yearsAhead = Math.floor((q - 1 + offset) / 4);
  const targetYear = year + yearsAhead;
  return `FY${String(targetYear).slice(-2)}-Q${targetQ}`;
}

/** Returns 4-quarter rolling window: current, next, following, and fourth. */
export function getRollingQuarters4() {
  return {
    cq: getCurrentQuarter(),
    nq: getNextQuarter(),
    fq: getFollowingQuarter(),
    q4: getFourthQuarter(),
  };
}

/** ISO-ish week key for a Date (e.g. 2026-05). */
export function periodKeyWeek(d: Date): string {
  const date = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const firstThursday = new Date(Date.UTC(date.getUTCFullYear(), 0, 4));
  const week1 = new Date(firstThursday);
  week1.setUTCDate(firstThursday.getUTCDate() - ((firstThursday.getUTCDay() + 6) % 7));
  const diff = (date.getTime() - week1.getTime()) / (1000 * 60 * 60 * 24);
  const week = Math.floor(diff / 7) + 1;
  return `${date.getUTCFullYear()}-${String(week).padStart(2, '0')}`;
}
