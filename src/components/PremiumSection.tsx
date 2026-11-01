import Image from "next/image";
import type { Product } from "@/types/product";
import { formatPrice } from "@/data/products";
import AddToCart from "./AddToCart";
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
                <Image
                  src={p.variants[0].image}
                  alt={`${p.name} in ${p.variants[0].name}`}
                  fill
                  sizes="(max-width: 900px) 100vw, 560px"
                  className={styles.photo}
                />
              </div>
              <div className={styles.info}>
                <h3>{p.name}</h3>
                <span>{formatPrice(p.price)}</span>
              </div>
              {p.description && <p className={styles.desc}>{p.description}</p>}
              <AddToCart product={p} variant={p.variants[0]} tone="gold" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
