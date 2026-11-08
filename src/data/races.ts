import { parseDate } from "../lib/dates";
import suffolkCountyMarathonPhoto from "../assets/suffolkCounty2026.jpg";
import halfIronmanPhoto from "../assets/halfIronman2025.jpg";
import rockyRacoonPhoto from "../assets/rockyRacoon2024.jpg";

/*
 * Endurance highlights. Add or edit entries here; the page updates on its own.
 *
 * - status 'upcoming' entries show as "Next up" and hide automatically a few days after their date.
 * - photo: import an image from src/assets and set it here; leave undefined for a placeholder.
 *   Every card shows its photo in the same 4:5 portrait frame at all screen sizes. Any shape works
 *   (it's cropped to fit), but a photo already cropped to 4:5 shows exactly as-is. Aim for at least
 *   800x1000px. Note: file names are case-sensitive on the deploy server.
 * - photoPosition: optional focal point that stays in frame when cropping (CSS object-position),
 *   e.g. 'top' to keep a face, 'center 30%', or '50% 20%'.
 */
export type RaceStatus = "pr" | "finish" | "dnf" | "upcoming";

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
    name: "Suffolk County Marathon",
    date: "2026-10-18",
    distance: "26.2 mi",
    result: "2:58:27",
    status: "pr",
    tag: "Sub-3",
    note: "First marathon was a 3:25. This was the sub-3 I spent years building toward.",
    photo: suffolkCountyMarathonPhoto as string | undefined,
  },
  {
    name: "IRONMAN 70.3 New York · Jones Beach",
    date: "2025-09-20",
    distance: "1.2 swim · 56 bike · 13.1 run",
    result: "6:31:44",
    status: "finish",
    tag: "Half Ironman",
    note: "70.3 miles across three sports in a single day.",
    photo: halfIronmanPhoto as string | undefined,
    photoPosition: "50% 15%", // keep face and medal; the tall shot loses the bottom banner
  },
  {
    name: "Rocky Raccoon 100",
    date: "2024-02-03",
    distance: "100 mi",
    result: "DNF · Mile 70",
    status: "dnf",
    tag: "Ultramarathon",
    note: "Made it 70 miles before the day ended it. Unfinished business.",
    photo: rockyRacoonPhoto as string | undefined,
    photoPosition: "20% center", // runner is on the left third of the frame
  },
  {
    name: "Rocky Raccoon 100",
    date: "2027-02-06",
    distance: "100 mi",
    result: "Training",
    status: "upcoming",
    tag: "Redemption",
    note: "Same race, same 100 miles. Going back to finish it.",
  },
];

/** Lifetime marathon count. Shown as "8+" so it never goes stale. */
export const marathonCount = 8;

const UPCOMING_GRACE_DAYS = 3;

export function visibleRaces(now = new Date()): Race[] {
  return races.filter((race) => {
    if (race.status !== "upcoming") return true;
    const cutoff = parseDate(race.date);
    cutoff.setDate(cutoff.getDate() + UPCOMING_GRACE_DAYS);
    return now < cutoff;
  });
}

export function marathonPR(): Race | undefined {
  return races.find(
    (race) => race.status === "pr" && race.distance.startsWith("26.2"),
  );
}
