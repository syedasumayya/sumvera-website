interface IconProps {
  size?: number;
  className?: string;
}

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export function WhatsAppIcon({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 20l1.2-4.1A8 8 0 1 1 8.2 19L4 20z" />
      <path d="M9.2 8.6c.2-.4.5-.4.8-.4.2 0 .4.1.5.4l.7 1.6c.1.3 0 .5-.2.7l-.5.6c.8 1.4 1.9 2.4 3.3 3l.6-.7c.2-.2.4-.3.7-.2l1.6.8c.3.1.4.3.4.6 0 .8-.7 1.6-1.6 1.7-3 .2-6.8-3.3-6.6-6.2.1-.7.4-1.4.8-1.9z" />
    </svg>
  );
}

export function InstagramIcon({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function TikTokIcon({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base}>
      <path d="M14 4v10.2a3.7 3.7 0 1 1-3.7-3.7" />
      <path d="M14 4c.3 2.4 1.9 4 4.5 4.2" />
    </svg>
  );
}
