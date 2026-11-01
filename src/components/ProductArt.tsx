import type { Garment } from "@/types/product";

interface Props {
  garment: Garment;
  color: string;
  className?: string;
}

const isDark = (hex: string): boolean => {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return 0.299 * r + 0.587 * g + 0.114 * b < 140;
};

const TEE = "M72 30 L36 46 L10 88 L38 106 L56 90 L56 210 L144 210 L144 90 L162 106 L190 88 L164 46 L128 30 Q100 54 72 30 Z";

/** Simple flat garment drawings, used until real product photos are added. */
export default function ProductArt({ garment, color, className }: Props) {
  const line = isDark(color) ? "#F9F6ED" : "#0D2B1D";
  const detail = { fill: "none", stroke: line, strokeOpacity: 0.4, strokeWidth: 2 } as const;
  const outline = isDark(color) ? {} : { stroke: "#0D2B1D", strokeOpacity: 0.4, strokeWidth: 1.5 };

  return (
    <svg className={className} viewBox="0 0 200 240" aria-hidden="true">
      {garment === "tee" && (
        <>
          <path d={TEE} fill={color} {...outline} />
          <path d="M72 30 Q100 54 128 30" {...detail} />
        </>
      )}
      {garment === "polo" && (
        <>
          <path d={TEE} fill={color} {...outline} />
          <path d="M72 30 L88 56 L100 46 L112 56 L128 30 M100 46 L100 90" {...detail} />
        </>
      )}
      {garment === "shirt" && (
        <>
          <path d="M72 28 L38 44 L14 168 L38 174 L56 96 L56 212 L144 212 L144 96 L162 174 L186 168 L162 44 L128 28 Q100 46 72 28 Z" fill={color} {...outline} />
          <path d="M72 28 L86 54 L100 44 L114 54 L128 28 M100 44 L100 212" {...detail} />
        </>
      )}
      {garment === "hoodie" && (
        <>
          <path d="M72 38 Q66 4 100 4 Q134 4 128 38 Q100 66 72 38 Z" fill={color} {...outline} />
          <path d="M74 34 L38 50 L16 176 L42 182 L58 104 L58 214 L142 214 L142 104 L158 182 L184 176 L162 50 L126 34 Q100 58 74 34 Z" fill={color} {...outline} />
          <path d="M76 150 L124 150 L132 190 L68 190 Z M92 62 L92 94 M108 62 L108 94" {...detail} />
        </>
      )}
      {garment === "trousers" && (
        <>
          <path d="M64 20 L136 20 L150 226 L108 226 L100 92 L92 226 L50 226 Z" fill={color} {...outline} />
          <path d="M64 36 L136 36 M100 36 L100 92" {...detail} />
        </>
      )}
      {garment === "dress" && (
        <>
          <path d="M78 22 Q100 52 122 22 L136 28 L132 92 L166 220 L34 220 L68 92 L64 28 Z" fill={color} {...outline} />
          <path d="M68 92 L132 92" {...detail} />
        </>
      )}
      {garment === "kurta" && (
        <>
          <path d="M72 26 L40 42 L14 124 L40 132 L56 86 L52 226 L148 226 L144 86 L160 132 L186 124 L160 42 L128 26 Q100 52 72 26 Z" fill={color} {...outline} />
          <path d="M84 40 Q100 56 116 40 M100 52 L100 112" {...detail} />
        </>
      )}
      {garment === "overcoat" && (
        <>
          <path d="M72 24 L38 42 L14 190 L40 198 L56 104 L52 228 L148 228 L144 104 L160 198 L186 190 L162 42 L128 24 L100 120 Z" fill={color} {...outline} />
          <path d="M72 24 L100 120 L128 24 M100 120 L100 228" {...detail} />
          <circle cx="100" cy="150" r="3.5" fill="#C9A96B" />
          <circle cx="100" cy="180" r="3.5" fill="#C9A96B" />
        </>
      )}
    </svg>
  );
}