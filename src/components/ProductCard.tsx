import type { Product } from "@/types/product";
import { formatPrice } from "@/data/products";
import ProductArt from "./ProductArt";
import AddButton from "./AddButton";
import styles from "./ProductCard.module.css";

interface Props {
  product: Product;
  /** Background tint behind the garment drawing. */
  tint: string;
}

export default function ProductCard({ product, tint }: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.media} style={{ background: tint }}>
        {product.isNew && <span className={styles.badge}>New</span>}
        <ProductArt
          garment={product.garment}
          color={product.colors[0]}
          className={styles.art}
        />
        <div className={styles.add}>
          <AddButton productName={product.name} />
        </div>
      </div>
      <div className={styles.info}>
        <h3>{product.name}</h3>
        <span>{formatPrice(product.price)}</span>
      </div>
      <ul className={styles.swatches} aria-label="Available colours">
        {product.colors.map((c) => (
          <li key={c} style={{ background: c }} />
        ))}
      </ul>
    </article>
  );
}