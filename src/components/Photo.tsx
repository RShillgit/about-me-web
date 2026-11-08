import { ImageIcon } from 'lucide-react';

interface PhotoProps {
  src?: string;
  alt: string;
  /** Text shown inside the placeholder when no image is set. */
  label: string;
  /**
   * Which part of the image stays in frame when it's cropped (CSS object-position),
   * e.g. 'top', 'center 30%', '50% 20%'. Defaults to center.
   */
  position?: string;
  className?: string;
}

/**
 * Fills its parent completely. The parent sets the size (usually with an aspect ratio) and the
 * image is cropped to fit, so photos of any shape line up. Shows a labeled placeholder when no
 * image is set.
 */
export function Photo({ src, alt, label, position, className = '' }: PhotoProps) {
  if (src) {
    return (
      <div className={`relative h-full w-full overflow-hidden ${className}`}>
        {/* Absolutely positioned so the image's own size can never stretch the frame. */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
          style={position ? { objectPosition: position } : undefined}
        />
      </div>
    );
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
