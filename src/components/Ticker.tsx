import { yearsProfessional, yearsTrading } from '../data/profile';
import { marathonCount, marathonPR, visibleRaces } from '../data/races';
import { monthYear } from '../lib/dates';

type Item = { label: string; value: string; tone?: 'up' | 'down' | 'warn' };

function buildItems(): Item[] {
  const pr = marathonPR();
  const next = visibleRaces().find((r) => r.status === 'upcoming');
  const items: Item[] = [
    ...(pr ? [{ label: 'MARATHON PR', value: `${pr.result} ▲`, tone: 'up' as const }] : []),
    { label: 'MARATHONS', value: `${marathonCount}+` },
    { label: 'IRONMAN 70.3', value: 'FINISHED', tone: 'up' },
    { label: 'LONGEST RUN', value: '70 MI' },
    { label: 'YRS SHIPPING', value: `${yearsProfessional()}+` },
    { label: 'YRS TRADING', value: `${yearsTrading()}` },
    { label: 'STACK', value: 'TS / REACT / NESTJS / AWS' },
    { label: 'BASE', value: 'AUSTIN, TX' },
  ];
  if (next) items.push({ label: 'NEXT', value: `${next.name.toUpperCase()} · ${monthYear(next.date).toUpperCase()}`, tone: 'warn' });
  return items;
}

const toneClass = { up: 'text-up', down: 'text-down', warn: 'text-warn' } as const;

/** Scrolling quote-board strip. Static (and scrollable) for reduced-motion users. */
export function Ticker() {
  const items = buildItems();
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((item) => (
        <li key={item.label} className="flex items-center gap-2 px-6 font-mono text-xs whitespace-nowrap">
          <span className="text-faint">{item.label}</span>
          <span className={`tabular ${item.tone ? toneClass[item.tone] : 'text-text'}`}>{item.value}</span>
          <span className="ml-6 text-line" aria-hidden="true">
            |
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="overflow-x-auto border-y border-line bg-surface py-3 [scrollbar-width:none] motion-safe:overflow-hidden">
      <div className="flex w-max animate-ticker hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
