import type { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import styles from "./ProductSection.module.css";

interface Props {
  id: string;
  eyebrow: string;
  title: string;
  products: readonly Product[];
  /** Cycle of background tints for the cards. */
  tints: readonly string[];
  /** Tinted section background (alternates between sections). */
  shaded?: boolean;
}

export default function ProductSection({ id, eyebrow, title, products, tints, shaded }: Props) {
  return (
    <section id={id} className={`${styles.section} ${shaded ? styles.shaded : ""}`}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h2 className={styles.title}>{title}</h2>
          </div>
          <p className={styles.count}>{products.length} designs</p>
        </div>
        <div className={styles.grid}>
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} tint={tints[i % tints.length]} />
          ))}
        </div>
      </div>
    </section>
  );
}