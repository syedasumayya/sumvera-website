import Link from "next/link";
import type { Product } from "@/types/product";
import { formatPrice } from "@/data/products";
import ProductArt from "./ProductArt";
import AddButton from "./AddButton";
import styles from "./PremiumSection.module.css";

export default function PremiumSection({ products }: { products: readonly Product[] }) {
  return (
    <section id="premium" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div>
            <p className={styles.eyebrow}>The premium line</p>
            <h2 className={styles.title}>Premium</h2>
          </div>
          <p className={styles.count}>{products.length} designs</p>
        </div>

        <div className={styles.row}>
          {products.map((p) => (
            <article key={p.id} className={styles.card}>
              <div className={styles.media}>
                <span className={styles.tag}>Premium</span>
                <ProductArt garment={p.garment} color={p.colors[0]} className={styles.art} />
              </div>
              <div className={styles.info}>
                <h3>{p.name}</h3>
                <span>{formatPrice(p.price)}</span>
              </div>
              {p.description && <p className={styles.desc}>{p.description}</p>}
              <div className={styles.actions}>
                <Link href="#premium" className={styles.view}>View piece</Link>
                <AddButton productName={p.name} variant="gold" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}