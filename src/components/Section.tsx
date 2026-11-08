import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  index: string;
  title: string;
  lead?: ReactNode;
  children: ReactNode;
}

/** Page section with a terminal-style label, e.g. "02 // experience". */
export function Section({ id, index, title, lead, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-mono text-xs tracking-widest text-up uppercase">
          {index} <span className="text-faint">//</span> {id}
        </p>
        <h2 id={`${id}-title`} className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {lead && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{lead}</p>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-line bg-surface-2 px-2 py-0.5 font-mono text-xs text-muted">
      {children}
    </span>
  );
}
