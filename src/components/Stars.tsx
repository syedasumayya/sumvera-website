interface Props {
  /** 0–5, can be fractional for averages. */
  rating: number;
  size?: number;
}

const STAR = "M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 16.9 6.8 19.7l1-5.9L3.5 9.7l5.9-.8L12 3.5z";

export default function Stars({ rating, size = 18 }: Props) {
  const label = `${rating.toFixed(rating % 1 ? 1 : 0)} out of 5 stars`;
  return (
    <span role="img" aria-label={label} style={{ display: "inline-flex", gap: 2, color: "#c9a96b" }}>
      {[1, 2, 3, 4, 5].map((n) => {
        const fill = Math.max(0, Math.min(1, rating - (n - 1)));
        const id = `star-${n}-${Math.round(fill * 100)}`;
        return (
          <svg key={n} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
            <defs>
              <linearGradient id={id}>
                <stop offset={`${fill * 100}%`} stopColor="currentColor" />
                <stop offset={`${fill * 100}%`} stopColor="transparent" />
              </linearGradient>
            </defs>
            <path d={STAR} fill={`url(#${id})`} stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          </svg>
        );
      })}
    </span>
  );
}
