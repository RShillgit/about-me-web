import { parseDate } from '../lib/dates';

/*
 * Endurance highlights. Add or edit entries here; the page updates on its own.
 *
 * - status 'upcoming' entries show as "Next up" and hide automatically a few days after their date.
 * - photo: import an image from src/assets and set it here; leave undefined for a placeholder.
 *   Any shape works: every card crops its photo to the same frame (4:3 on narrow screens, 4:5 in
 *   the 4-column desktop row), so keep the subject near the middle of the shot.
 * - photoPosition: optional focal point that stays in frame when cropping (CSS object-position),
 *   e.g. 'top' to keep a face, 'center 30%', or '50% 20%'.
 */
export type RaceStatus = 'pr' | 'finish' | 'dnf' | 'upcoming';

export interface Race {
  name: string;
  date: string; // YYYY-MM-DD
  distance: string;
  result: string;
  status: RaceStatus;
  tag?: string;
  note: string;
  photo?: string;
  photoPosition?: string;
}

export const races: Race[] = [
  {
    name: 'Suffolk County Marathon',
    date: '2026-10-18',
    distance: '26.2 mi',
    result: '2:58:27',
    status: 'pr',
    tag: 'Sub-3',
    note: 'First marathon was a 3:25. This was the sub-3 I spent years building toward.',
  },
  {
    name: 'IRONMAN 70.3 New York · Jones Beach',
    date: '2025-09-20',
    distance: '1.2 swim · 56 bike · 13.1 run',
    result: 'Finisher',
    status: 'finish',
    tag: 'Half Ironman',
    note: '70.3 miles across three sports in a single day.',
  },
  {
    name: 'Rocky Raccoon 100',
    date: '2024-02-03',
    distance: '100 mi',
    result: 'DNF · Mile 70',
    status: 'dnf',
    tag: 'Ultramarathon',
    note: 'Made it 70 miles before the day ended it. Unfinished business.',
  },
  {
    name: 'Rocky Raccoon 100',
    date: '2027-02-06',
    distance: '100 mi',
    result: 'Training',
    status: 'upcoming',
    tag: 'Redemption',
    note: 'Same race, same 100 miles. Going back to finish it.',
  },
];

/** Lifetime marathon count. Shown as "8+" so it never goes stale. */
export const marathonCount = 8;

const UPCOMING_GRACE_DAYS = 3;

export function visibleRaces(now = new Date()): Race[] {
  return races.filter((race) => {
    if (race.status !== 'upcoming') return true;
    const cutoff = parseDate(race.date);
    cutoff.setDate(cutoff.getDate() + UPCOMING_GRACE_DAYS);
    return now < cutoff;
  });
}

export function marathonPR(): Race | undefined {
  return races.find((race) => race.status === 'pr' && race.distance.startsWith('26.2'));
}
