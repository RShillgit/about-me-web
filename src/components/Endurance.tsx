import { marathonCount, marathonPR, visibleRaces, type Race, type RaceStatus } from '../data/races';
import { monthYear } from '../lib/dates';
import { Photo } from './Photo';
import { Section } from './Section';

const statusStyle: Record<RaceStatus, { label: string; className: string }> = {
  pr: { label: 'PR', className: 'text-up border-up/40 bg-up/10' },
  finish: { label: 'FINISH', className: 'text-up border-up/40 bg-up/10' },
  dnf: { label: 'DNF', className: 'text-down border-down/40 bg-down/10' },
  upcoming: { label: 'NEXT UP', className: 'text-warn border-warn/40 bg-warn/10' },
};

export function Endurance() {
  const pr = marathonPR();
  const stats = [
    { value: `${marathonCount}+`, label: 'Marathons finished' },
    ...(pr ? [{ value: pr.result, label: 'Marathon PR' }] : []),
    { value: '70.3', label: 'IRONMAN finish' },
    { value: '70 mi', label: 'Longest single effort' },
  ];

  return (
    <Section
      id="endurance"
      index="04"
      title="Endurance"
      lead="Running long is where I test the things I value at work: patience, preparation, and what's left when it stops being fun. A few of the races that mattered most:"
    >
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-surface p-5 sm:p-6">
            <dd className="tabular font-mono text-2xl font-semibold text-text sm:text-3xl">{s.value}</dd>
            <dt className="mt-1 text-sm text-muted">{s.label}</dt>
          </div>
        ))}
      </dl>

      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {visibleRaces().map((race) => (
          <li key={`${race.name}-${race.date}`}>
            <RaceCard race={race} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

function RaceCard({ race }: { race: Race }) {
  const upcoming = race.status === 'upcoming';
  const status = statusStyle[race.status];
  const resultColor = race.status === 'dnf' ? 'text-down' : upcoming ? 'text-warn' : 'text-up';

  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-xl border bg-surface ${
        upcoming ? 'border-dashed border-warn/40' : 'border-line'
      }`}
    >
      <div className="relative aspect-[4/3] border-b border-line">
        <Photo src={race.photo} alt={`${race.name}, ${monthYear(race.date)}`} label={upcoming ? 'Coming soon' : 'Race photo'} />
        <span
          className={`absolute top-3 left-3 rounded border px-2 py-0.5 font-mono text-[11px] font-medium tracking-wider backdrop-blur ${status.className}`}
        >
          {status.label}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-xs text-faint">
          {monthYear(race.date)}
          {race.tag && <> · {race.tag}</>}
        </p>
        <h3 className="mt-1.5 font-medium leading-snug">{race.name}</h3>
        <p className="mt-0.5 text-xs text-faint">{race.distance}</p>
        <p className={`tabular mt-4 font-mono text-2xl font-semibold ${resultColor}`}>{race.result}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{race.note}</p>
      </div>
    </article>
  );
}
