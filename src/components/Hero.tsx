import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

/** A round display stand drawn in SVG. `id` keeps gradient ids unique per stand. */
function Podium({ id, className }: { id: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 140" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-body`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#0a2418" />
          <stop offset="0.45" stopColor="#14402d" />
          <stop offset="1" stopColor="#081d13" />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#7fd1a0" stopOpacity="0.45" />
          <stop offset="1" stopColor="#7fd1a0" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path d="M10 44 L10 104 A190 34 0 0 0 390 104 L390 44 Z" fill={`url(#${id}-body)`} />
      <ellipse cx="200" cy="44" rx="190" ry="34" fill="#1d4a33" stroke="#c9a96b" strokeOpacity="0.35" />
      <ellipse cx="200" cy="44" rx="150" ry="24" fill="#15402e" />
      <ellipse cx="200" cy="40" rx="130" ry="20" fill={`url(#${id}-glow)`} />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/sumvera-mark.png"
        alt=""
        width={310}
        height={315}
        className={styles.watermark}
        aria-hidden="true"
      />

      <div className={styles.inner}>
        <div className={styles.text}>
          <p className={styles.eyebrow}>Autumn–Winter 2026</p>
          <h1 className={styles.title}>
            Comfort meets <em>confidence.</em>
          </h1>
          <p className={styles.lead}>
            Simple, considered pieces for men and women — plus a small premium line.
          </p>
          <div className={styles.ctas}>
            <Link href="/#men" className={styles.primary}>Shop Men</Link>
            <Link href="/#women" className={styles.outline}>Shop Women</Link>
          </div>
          <p className={styles.meta}>5 men’s designs · 5 women’s designs · 2 premium</p>
        </div>

        <div className={styles.visual}>
          <div className={styles.glow} aria-hidden="true" />
          <div className={styles.ring} aria-hidden="true" />

          <div className={styles.stageA}>
            <Image
              src="/hero-hoodie.webp"
              alt="Cream SUMVERA hoodie with a green logo"
              width={606}
              height={760}
              priority
              sizes="(max-width: 900px) 55vw, 300px"
              className={styles.hoodie}
            />
            <Podium id="pa" className={styles.podiumA} />
          </div>

          <div className={styles.stageB}>
            <Image
              src="/hero-joggers.webp"
              alt="Cream SUMVERA joggers with a green logo"
              width={364}
              height={845}
              priority
              sizes="(max-width: 900px) 30vw, 160px"
              className={styles.joggers}
            />
            <Podium id="pb" className={styles.podiumB} />
          </div>
        </div>
      </div>
    </section>
  );
}
