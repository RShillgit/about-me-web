import { useState } from 'react';
import { Check, Copy, Mail } from 'lucide-react';
import { profile } from '../data/profile';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="font-mono text-xs tracking-widest text-up uppercase">
          06 <span className="text-faint">//</span> contact
        </p>
        <h2 id="contact-title" className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
          Say hello.
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
          Whether it&apos;s about software, a race, or the markets, email is the best way to reach me.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex max-w-full items-center gap-2 rounded-md bg-up px-5 py-3 font-mono text-sm font-medium text-bg transition hover:opacity-90"
          >
            <Mail className="size-4 shrink-0" aria-hidden="true" />
            <span className="truncate">{profile.email}</span>
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-4 py-3 text-sm transition hover:border-up/60"
          >
            {copied ? <Check className="size-4 text-up" /> : <Copy className="size-4" />}
            <span aria-live="polite">{copied ? 'Copied' : 'Copy email'}</span>
          </button>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-4 py-3 text-sm transition hover:border-up/60"
          >
            <LinkedinIcon className="size-4" /> LinkedIn
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-4 py-3 text-sm transition hover:border-up/60"
          >
            <GithubIcon className="size-4" /> GitHub
          </a>
        </div>
      </div>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 font-mono text-xs text-faint sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </p>
          <p>
            Built with React, TypeScript &amp; Tailwind ·{' '}
            <a href={profile.links.source} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:text-text hover:underline">
              source
            </a>
          </p>
        </div>
      </footer>
    </section>
  );
}
