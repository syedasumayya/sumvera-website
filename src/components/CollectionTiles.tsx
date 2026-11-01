import Link from "next/link";
import ProductArt from "./ProductArt";
import type { Garment } from "@/types/product";
import styles from "./CollectionTiles.module.css";

interface Tile {
  label: string;
  href: string;
  count: number;
  garment: Garment;
  art: string;
  bg: string;
  dark?: boolean;
}

const TILES: readonly Tile[] = [
  { label: "Men", href: "/#men", count: 5, garment: "tee", art: "#1B3A2A", bg: "#dde4d6" },
  { label: "Women", href: "/#women", count: 5, garment: "dress", art: "#35553F", bg: "#ece4ce" },
  { label: "Premium", href: "/#premium", count: 2, garment: "overcoat", art: "#C9A96B", bg: "#0d2b1d", dark: true },
];

export default function CollectionTiles() {
  return (
    <section aria-label="Shop by collection" className={styles.wrap}>
      {TILES.map((t) => (
        <Link
          key={t.label}
          href={t.href}
          className={`${styles.tile} ${t.dark ? styles.dark : ""}`}
          style={{ background: t.bg }}
        >
          <ProductArt garment={t.garment} color={t.art} className={styles.art} />
          <span className={styles.label}>{t.label}</span>
          <span className={styles.sub}>
            {t.count} designs <span className={styles.arrow} aria-hidden="true">→</span>
          </span>
        </Link>
      ))}
    </section>
  );
}