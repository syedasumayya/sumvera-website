import type { Product } from "@/types/product";
import { formatPrice } from "@/data/products";
import AddToCart from "./AddToCart";
import ProductGallery from "./ProductGallery";
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
              <ProductGallery
                front={p.variants[0].image}
                back={p.variants[0].back}
                alt={`${p.name} in ${p.variants[0].name}`}
                sizes="(max-width: 900px) 100vw, 520px"
                frameClassName={styles.media}
                imgClassName={styles.photo}
              >
                <span className={styles.tag}>Premium</span>
              </ProductGallery>
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
