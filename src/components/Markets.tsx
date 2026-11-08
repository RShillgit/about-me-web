import { ClipboardList, Database, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { yearsTrading } from '../data/profile';
import { Section } from './Section';

const principles: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: ClipboardList,
    title: 'Plan before the open',
    body: 'Every session starts with a written plan: directional bias, key levels, and the specific setups I am allowed to take. No plan, no trade.',
  },
  {
    icon: ShieldCheck,
    title: 'Risk first',
    body: 'Size and max loss are defined before entry. The job is staying in the game long enough for an edge to play out.',
  },
  {
    icon: Database,
    title: 'Let the data decide',
    body: 'I journal every trade and analyze the dataset by time of day, setup, and rule adherence to find where the edge actually is, then cut what the numbers say does not work.',
  },
];

export function Markets() {
  return (
    <Section
      id="markets"
      index="05"
      title="Markets"
      lead={
        <>
          I&apos;ve traded index futures every day for {yearsTrading()} years. It&apos;s the most honest feedback loop
          I know.
        </>
      }
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <p className="leading-relaxed text-muted">
            Futures trade nearly around the clock, so trading happens on my own time, outside the workday. Most of the
            work isn&apos;t clicking buttons. It&apos;s preparation, review, and data. And the overlap with engineering
            is bigger than it looks: form a hypothesis, test it, measure the result, and keep only what the evidence
            supports.
          </p>
          <ul className="mt-8 space-y-4">
            {principles.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex gap-4">
                <span className="grid size-9 shrink-0 place-items-center rounded-md border border-line bg-surface">
                  <Icon className="size-4 text-up" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-medium">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <CandleChart />
      </div>
    </Section>
  );
}

type Candle = { o: number; h: number; l: number; c: number };

/** Deterministic pseudo-random series so the decorative chart looks the same on every load. */
function makeCandles(count: number): Candle[] {
  let seed = 7;
  const rand = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
  const candles: Candle[] = [];
  let price = 100;
  for (let i = 0; i < count; i++) {
    // Gentle uptrend with a pullback in the middle third.
    const drift = i > count * 0.35 && i < count * 0.55 ? -0.9 : 0.75;
    const o = price;
    const c = o + drift + (rand() - 0.5) * 4;
    const h = Math.max(o, c) + rand() * 1.8;
    const l = Math.min(o, c) - rand() * 1.8;
    candles.push({ o, h, l, c });
    price = c;
  }
  return candles;
}

const candles = makeCandles(42);

function CandleChart() {
  const W = 560;
  const H = 300;
  const pad = 16;
  const lo = Math.min(...candles.map((c) => c.l));
  const hi = Math.max(...candles.map((c) => c.h));
  const y = (v: number) => pad + ((hi - v) / (hi - lo)) * (H - pad * 2);
  const step = (W - pad * 2) / candles.length;
  const levelPrice = lo + (hi - lo) * 0.42;
  const last = candles[candles.length - 1];

  return (
    <figure className="overflow-hidden rounded-xl border border-line bg-surface">
      <div className="flex items-center justify-between border-b border-line px-4 py-3 font-mono text-xs">
        <span className="text-faint">SESSION REVIEW</span>
        <span className="flex items-center gap-2 text-up">
          <span className="size-1.5 rounded-full bg-up animate-pulse-dot" aria-hidden="true" />
          PLAN · EXECUTE · REVIEW
        </span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="block w-full bg-grid" role="img" aria-label="Decorative candlestick chart">
        <line
          x1={pad}
          x2={W - pad}
          y1={y(levelPrice)}
          y2={y(levelPrice)}
          className="stroke-warn"
          strokeDasharray="4 6"
          strokeWidth={1}
        />
        <text x={W - pad} y={y(levelPrice) - 6} textAnchor="end" className="fill-warn font-mono" fontSize={10}>
          KEY LEVEL
        </text>
        {candles.map((c, i) => {
          const x = pad + i * step + step / 2;
          const up = c.c >= c.o;
          const tone = up ? 'up' : 'down';
          return (
            <g key={i} className={tone === 'up' ? 'fill-up stroke-up' : 'fill-down stroke-down'}>
              <line x1={x} x2={x} y1={y(c.h)} y2={y(c.l)} strokeWidth={1} />
              <rect
                x={x - step * 0.32}
                width={step * 0.64}
                y={y(Math.max(c.o, c.c))}
                height={Math.max(1, Math.abs(y(c.o) - y(c.c)))}
                rx={1}
              />
            </g>
          );
        })}
        {last && (
          <line
            x1={pad}
            x2={W - pad}
            y1={y(last.c)}
            y2={y(last.c)}
            className="stroke-up"
            strokeOpacity={0.35}
            strokeWidth={1}
          />
        )}
      </svg>
      <figcaption className="border-t border-line px-4 py-2.5 font-mono text-[11px] text-faint">
        Illustration only. No P&amp;L here, just process.
      </figcaption>
    </figure>
  );
}
