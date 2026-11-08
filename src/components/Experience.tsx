import { experience } from '../data/experience';
import { monthYear, parseDate } from '../lib/dates';
import { Section, Tag } from './Section';

function duration(start: string, end: string | null): string {
  const a = parseDate(start);
  const b = end ? parseDate(end) : new Date();
  const months = Math.max(1, (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth()));
  const y = Math.floor(months / 12);
  const m = months % 12;
  return [y && `${y} yr`, m && `${m} mo`].filter(Boolean).join(' ');
}

export function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      title="Professional experience"
      lead="Production software for lending, insurance, and enterprise clients, from data model and API to UI and deployment."
    >
      <ol className="relative space-y-10 border-l border-line pl-6 sm:pl-0 sm:border-l-0">
        {experience.map((role, i) => (
          <li key={role.company} className="relative grid gap-4 sm:grid-cols-[180px_1fr] sm:gap-10">
            <span
              aria-hidden="true"
              className={`absolute top-1.5 -left-[29px] size-2.5 rounded-full border-2 border-bg sm:hidden ${
                i === 0 ? 'bg-up' : 'bg-faint'
              }`}
            />
            <div className="font-mono text-xs leading-6 text-muted sm:pt-6 sm:text-right">
              <p className="tabular text-text">
                {monthYear(role.start)} – {role.end ? monthYear(role.end) : 'Present'}
              </p>
              <p className="text-faint">{duration(role.start, role.end)}</p>
              {role.domain && <p className="mt-1 text-up">{role.domain}</p>}
            </div>

            <article className="rounded-xl border border-line bg-surface p-6 sm:p-7">
              <h3 className="text-xl font-semibold tracking-tight">
                {role.title} <span className="text-muted">·</span> <span className="text-up">{role.company}</span>
              </h3>
              <p className="mt-2 text-muted">{role.summary}</p>
              <ul className="mt-5 space-y-2.5">
                {role.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm leading-relaxed">
                    <span className="mt-0.5 font-mono text-up" aria-hidden="true">
                      ›
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              {role.stack && (
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
                  {role.stack.map((t) => (
                    <li key={t}>
                      <Tag>{t}</Tag>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
