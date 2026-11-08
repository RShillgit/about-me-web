import { GraduationCap } from 'lucide-react';
import { education } from '../data/education';
import { skills } from '../data/skills';
import { Section, Tag } from './Section';

export function Skills() {
  return (
    <Section id="skills" index="03" title="Skills & education">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
          {skills.map(({ group, items }) => (
            <div key={group} className="bg-surface p-6">
              <h3 className="font-mono text-xs tracking-widest text-faint uppercase">{group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {items.map((s) => (
                  <li key={s}>
                    <Tag>{s}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <ul className="space-y-4">
          {education.map((e) => (
            <li key={e.school} className="flex gap-4 rounded-xl border border-line bg-surface p-5">
              <GraduationCap className="mt-0.5 size-5 shrink-0 text-up" aria-hidden="true" />
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <h3 className="font-medium">{e.credential}</h3>
                  <span className="tabular font-mono text-xs text-faint">{e.period}</span>
                </div>
                <p className="text-sm text-muted">{e.school}</p>
                <p className="mt-1 text-sm text-faint">{e.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
