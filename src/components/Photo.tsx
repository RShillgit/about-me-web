import { ImageIcon } from 'lucide-react';

interface PhotoProps {
  src?: string;
  alt: string;
  /** Text shown inside the placeholder when no image is set. */
  label: string;
  className?: string;
}

/** Shows the image if one is provided, otherwise a labeled placeholder of the same size. */
export function Photo({ src, alt, label, className = '' }: PhotoProps) {
  if (src) {
    return <img src={src} alt={alt} loading="lazy" className={`h-full w-full object-cover ${className}`} />;
  }
  return (
    <div
      role="img"
      aria-label={`${label} (placeholder)`}
      className={`flex h-full w-full flex-col items-center justify-center gap-2 bg-surface-2 bg-grid text-faint ${className}`}
    >
      <ImageIcon className="size-6" strokeWidth={1.5} aria-hidden="true" />
      <span className="font-mono text-[11px] tracking-wider uppercase">{label}</span>
    </div>
  );
}
