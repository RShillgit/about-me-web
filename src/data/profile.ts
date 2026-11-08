import { yearsSince } from "../lib/dates";
import headshot from "../assets/headshot.jpg";

export const profile = {
  name: "Robert Siciliano",
  role: "Full-Stack Software Engineer",
  location: "Austin, TX",
  email: "Robert.Siciliano22@gmail.com",
  links: {
    github: "https://github.com/RShillgit",
    linkedin: "https://www.linkedin.com/in/robert-siciliano-120379240/",
    resume:
      "https://docs.google.com/document/d/1RMrnSnbCPPyWBn5JXO77D-GIKd9VCConEX6lKxJIlzQ/edit?usp=sharing",
    source: "https://github.com/RShillgit/about-me-web",
  },

  /**
   * Headshot for the hero card. Leave undefined to show a placeholder.
   * To add one: drop the file in src/assets/, then
   *   import headshot from '../assets/headshot.jpg';
   * and set `headshot: headshot`.
   */
  headshot: headshot as string | undefined,
  /** Optional focal point for cropping the headshot, e.g. 'top' or 'center 30%'. */
  headshotPosition: undefined as string | undefined,
} as const;

/*
 * Start dates used to compute "N years" figures, so the site ages on its own.
 */
export const since = {
  professional: { year: 2023, month: 11 }, // first engineering role
  trading: { year: 2022, month: 11 }, // daily futures trading
};

export const yearsProfessional = () =>
  yearsSince(since.professional.year, since.professional.month);
export const yearsTrading = () =>
  yearsSince(since.trading.year, since.trading.month);
