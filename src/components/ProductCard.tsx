"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/types/product";
import { formatPrice } from "@/data/products";
import AddToCart from "./AddToCart";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }: { product: Product }) {
  const [index, setIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);
  const variant = product.variants[index];
  const hasBack = Boolean(variant.back);
  const photo = showBack && variant.back ? variant.back : variant.image;
  const view = showBack && variant.back ? "back" : "front";
  const isFlat = variant.fit === "flat";
  const multi = product.variants.length > 1;

  return (
    <article className={styles.card}>
      <div className={`${styles.media} ${isFlat ? styles.flat : ""}`}>
        {product.isNew && <span className={styles.badge}>New</span>}
        <Image
          key={photo}
          src={photo}
          alt={`${product.name} in ${variant.name}, ${view} view`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1100px) 33vw, 240px"
          className={isFlat ? styles.imgFlat : styles.imgModel}
        />
        {hasBack && (
          <div className={styles.views} role="group" aria-label="Photo view">
            <button
              type="button"
              className={`${styles.view} ${!showBack ? styles.viewOn : ""}`}
              onClick={() => setShowBack(false)}
              aria-pressed={!showBack}
            >
              Front
            </button>
            <button
              type="button"
              className={`${styles.view} ${showBack ? styles.viewOn : ""}`}
              onClick={() => setShowBack(true)}
              aria-pressed={showBack}
            >
              Back
            </button>
          </div>
        )}
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
                onClick={() => {
                  setIndex(i);
                  setShowBack(false);
                }}
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
