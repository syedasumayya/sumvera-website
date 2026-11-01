import type { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import styles from "./ProductSection.module.css";

interface Props {
  id: string;
  eyebrow: string;
  title: string;
  products: readonly Product[];
  /** Tinted section background (alternates between sections). */
  shaded?: boolean;
}

export default function ProductSection({ id, eyebrow, title, products, shaded }: Props) {
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
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
