import type { ReactNode } from 'react';
import { ArrowDown, FileText, Mail } from 'lucide-react';
import { profile, yearsProfessional, yearsTrading } from '../data/profile';
import { marathonPR } from '../data/races';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { Photo } from './Photo';

export function Hero() {
  const pr = marathonPR();
  const rows: [string, string, boolean?][] = [
    ['ROLE', 'Full-stack engineer'],
    ['FOCUS', 'Fintech · Insurance'],
    ['STACK', 'TS · React · NestJS · AWS'],
    ['SHIPPING', `${yearsProfessional()}+ yrs in production`],
    ...(pr ? [['MARATHON', `${pr.result} ▲`, true] as [string, string, boolean]] : []),
    ['MARKETS', `${yearsTrading()} yrs · index futures`],
  ];

  return (
    <div id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pt-16 pb-20 sm:px-6 sm:pt-24 lg:grid-cols-[1.35fr_1fr] lg:pb-28">
        <div>
          <p className="flex items-center gap-2 font-mono text-xs tracking-widest text-muted uppercase">
            <span className="size-2 rounded-full bg-up animate-pulse-dot" aria-hidden="true" />
            Based in {profile.location}
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">{profile.name}</h1>
          <p className="mt-4 font-mono text-base text-up sm:text-lg">
            <span className="text-faint">&gt;</span> full-stack software engineer
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I build production web applications end to end, most recently in lending and insurance, with React,
            TypeScript, NestJS, and AWS. Outside of code I run long distances and study the markets every day. All three
            reward the same things: preparation, discipline, and showing up.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-md bg-up px-4 py-2.5 text-sm font-medium text-bg transition hover:opacity-90"
            >
              View experience <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-4 py-2.5 text-sm transition hover:border-up/60"
            >
              <FileText className="size-4" aria-hidden="true" /> Resume
            </a>
            <div className="flex items-center gap-1">
              <IconLink href={profile.links.github} label="GitHub">
                <GithubIcon className="size-5" />
              </IconLink>
              <IconLink href={profile.links.linkedin} label="LinkedIn">
                <LinkedinIcon className="size-5" />
              </IconLink>
              <IconLink href={`mailto:${profile.email}`} label="Email">
                <Mail className="size-5" aria-hidden="true" />
              </IconLink>
            </div>
          </div>
        </div>

        <figure className="overflow-hidden rounded-xl border border-line bg-surface shadow-2xl shadow-black/20">
          <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
            <span className="size-2.5 rounded-full bg-down/70" />
            <span className="size-2.5 rounded-full bg-warn/70" />
            <span className="size-2.5 rounded-full bg-up/70" />
            <span className="ml-3 font-mono text-xs text-faint">rs@austin: ~/profile</span>
          </div>
          <div className="aspect-[4/3] border-b border-line">
            <Photo src={profile.headshot} alt={`Portrait of ${profile.name}`} label="Headshot" />
          </div>
          <dl className="divide-y divide-line font-mono text-xs sm:text-sm">
            {rows.map(([key, value, up]) => (
              <div key={key} className="flex items-center justify-between gap-4 px-4 py-2.5">
                <dt className="text-faint">{key}</dt>
                <dd className={`tabular text-right ${up ? 'text-up' : 'text-text'}`}>{value}</dd>
              </div>
            ))}
          </dl>
        </figure>
      </div>
    </div>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  const external = href.startsWith('http');
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="grid size-10 place-items-center rounded-md text-muted transition hover:bg-surface hover:text-text"
    >
      {children}
    </a>
  );
}
