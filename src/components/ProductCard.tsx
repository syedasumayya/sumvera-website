"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/types/product";
import { formatPrice } from "@/data/products";
import AddToCart from "./AddToCart";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }: { product: Product }) {
  const [index, setIndex] = useState(0);
  const variant = product.variants[index];
  const isFlat = variant.fit === "flat";
  const multi = product.variants.length > 1;

  return (
    <article className={styles.card}>
      <div className={`${styles.media} ${isFlat ? styles.flat : ""}`}>
        {product.isNew && <span className={styles.badge}>New</span>}
        <Image
          key={variant.image}
          src={variant.image}
          alt={`${product.name} in ${variant.name}`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1100px) 33vw, 240px"
          className={isFlat ? styles.imgFlat : styles.imgModel}
        />
      </div>

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
