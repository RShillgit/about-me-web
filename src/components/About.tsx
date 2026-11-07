import { Code2, Footprints, LineChart, Medal } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Section } from './Section';

const pillars: { icon: LucideIcon; title: string; body: string; href: string }[] = [
  {
    icon: Code2,
    title: 'Engineering',
    body: 'Production web apps across lending, insurance, and enterprise .NET. Full stack, end to end.',
    href: '#experience',
  },
  {
    icon: Footprints,
    title: 'Endurance',
    body: 'Sub-3 marathoner, IRONMAN 70.3 finisher, and a 100-mile ultra I am going back to finish.',
    href: '#endurance',
  },
  {
    icon: LineChart,
    title: 'Markets',
    body: 'Index futures, every day. Plan the trade, manage the risk, journal everything, review the data.',
    href: '#markets',
  },
];

export function About() {
  return (
    <Section id="about" index="01" title="The short version">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          <p>
            I didn&apos;t take the traditional route into software. I earned a{' '}
            <span className="text-text">B.S. in Exercise Science</span> from SUNY Cortland, then taught myself to code
            through The Odin Project. Within about a year I was writing production code, and I&apos;ve been shipping
            ever since: enterprise .NET applications, automobile insurance pricing systems, and most recently a{' '}
            <span className="text-text">customer-facing loan application portal</span> that I architected and built
            end to end.
          </p>
          <p>
            I like owning the whole problem: the data model, the API, the UI, the deploy, and the error logs when
            something goes wrong at 2 a.m. Small teams with real ownership are where I do my best work.
          </p>
          <p>
            Away from the keyboard I&apos;m usually training for something long or reviewing the day&apos;s market.
            They look like unrelated hobbies, but they run on the same habits I bring to engineering: preparation,
            consistency, and an honest look at the results.
          </p>
        </div>

        <div className="space-y-4">
          {pillars.map(({ icon: Icon, title, body, href }) => (
            <a
              key={title}
              href={href}
              className="group flex gap-4 rounded-xl border border-line bg-surface p-5 transition hover:border-up/50"
            >
              <Icon className="mt-0.5 size-5 shrink-0 text-up" aria-hidden="true" />
              <div>
                <h3 className="font-medium">
                  {title} <span className="text-faint transition group-hover:text-up">→</span>
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
              </div>
            </a>
          ))}

          <div className="flex gap-4 rounded-xl border border-dashed border-line p-5">
            <Medal className="mt-0.5 size-5 shrink-0 text-warn" aria-hidden="true" />
            <div>
              <h3 className="font-medium">Where it started: wrestling</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                High school team captain, then a year back in the room as a coach while I was teaching myself to code.
                Wrestling is where I learned that results come from unglamorous, repeated work, and that lesson runs
                through everything else on this page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
