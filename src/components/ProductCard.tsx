"use client";

import { useState } from "react";
import type { Product } from "@/types/product";
import { formatPrice } from "@/data/products";
import AddToCart from "./AddToCart";
import ProductGallery from "./ProductGallery";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }: { product: Product }) {
  const [index, setIndex] = useState(0);
  const variant = product.variants[index];
  const photo = variant.image;
  const isFlat = variant.fit === "flat";
  const multi = product.variants.length > 1;

  return (
    <article className={styles.card}>
      <ProductGallery
        key={photo}
        front={photo}
        back={variant.back}
        alt={`${product.name} in ${variant.name}`}
        sizes="(max-width: 640px) 50vw, (max-width: 1100px) 33vw, 280px"
        frameClassName={`${styles.media} ${isFlat ? styles.flat : ""}`}
        imgClassName={isFlat ? styles.imgFlat : styles.imgModel}
      >
        {product.isNew && <span className={styles.badge}>New</span>}
      </ProductGallery>

      <div className={styles.info}>
        <h3>{product.name}</h3>
        <span>{formatPrice(product.price)}</span>
      </div>

      <div className={styles.colors}>
        <ul className={styles.swatches} aria-label="Colours">
          {product.variants.map((v, i) => (
            <li key={v.name}>
              <button
                type="button"
                className={`${styles.swatch} ${i === index ? styles.active : ""}`}
                style={{ background: v.hex }}
                onClick={() => setIndex(i)}
                aria-label={v.name}
                aria-pressed={i === index}
              />
            </li>
          ))}
        </ul>
        <span className={styles.colorName}>
          {variant.name}
          {multi ? ` · ${product.variants.length} colours` : ""}
        </span>
      </div>

      <div className={styles.buy}>
        <AddToCart product={product} variant={variant} />
      </div>
    </article>
  );
}
