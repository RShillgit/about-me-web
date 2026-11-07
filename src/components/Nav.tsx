import { useEffect, useState } from 'react';
import { FileText, Menu, Moon, Sun, X } from 'lucide-react';
import { profile } from '../data/profile';

const links = ['about', 'experience', 'skills', 'endurance', 'markets', 'contact'] as const;

function useTheme() {
  const [light, setLight] = useState(() => document.documentElement.classList.contains('light'));

  useEffect(() => {
    document.documentElement.classList.toggle('light', light);
    try {
      localStorage.setItem('theme', light ? 'light' : 'dark');
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
  }, [light]);

  return [light, () => setLight((v) => !v)] as const;
}

/** Tracks which section is currently in view so the matching nav link can be highlighted. */
function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    links.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return active;
}

export function Nav() {
  const [light, toggleTheme] = useTheme();
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="group flex items-center gap-2.5 font-mono text-sm">
          <span className="grid size-8 place-items-center rounded-md border border-up/60 font-bold text-up transition group-hover:bg-up/10">
            RS
          </span>
          <span className="hidden text-muted transition group-hover:text-text sm:inline">robert.siciliano</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? 'true' : undefined}
                className={`rounded-md px-3 py-2 text-sm capitalize transition hover:text-text ${
                  active === id ? 'text-text' : 'text-muted'
                }`}
              >
                {id}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-md border border-line px-3 py-1.5 text-sm text-muted transition hover:border-up/60 hover:text-text sm:inline-flex"
          >
            <FileText className="size-4" aria-hidden="true" /> Resume
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={light ? 'Switch to dark mode' : 'Switch to light mode'}
            className="grid size-9 place-items-center rounded-md border border-line text-muted transition hover:text-text"
          >
            {light ? <Moon className="size-4" /> : <Sun className="size-4" />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid size-9 place-items-center rounded-md border border-line text-muted transition hover:text-text lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-bg lg:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
            {links.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-mono text-sm text-muted capitalize hover:text-text"
                >
                  <span className="text-up">›</span> {id}
                </a>
              </li>
            ))}
            <li className="sm:hidden">
              <a
                href={profile.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-3 font-mono text-sm text-muted hover:text-text"
              >
                <span className="text-up">›</span> Resume ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
