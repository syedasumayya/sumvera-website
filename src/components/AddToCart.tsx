"use client";

import { useState } from "react";
import type { Product, Variant } from "@/types/product";
import { useCart } from "@/context/CartContext";
import styles from "./AddToCart.module.css";

interface Props {
  product: Product;
  variant: Variant;
  /** "gold" is used on the dark premium section. */
  tone?: "light" | "gold";
}

export default function AddToCart({ product, variant, tone = "light" }: Props) {
  const { addItem, openCart } = useCart();
  const [size, setSize] = useState<string | null>(null);
  const [missing, setMissing] = useState(false);

  const handleAdd = () => {
    if (!size) {
      setMissing(true);
      return;
    }
    addItem({
      productId: product.id,
      name: product.name,
      variantName: variant.name,
      image: variant.image,
      fit: variant.fit ?? "model",
      size,
      price: product.price,
    });
    setMissing(false);
    openCart();
  };

  return (
    <div className={`${styles.wrap} ${tone === "gold" ? styles.gold : ""}`}>
      <div role="group" aria-label={`Size for ${product.name}`} className={styles.sizes}>
        {product.sizes.map((s) => (
          <button
            key={s}
            type="button"
            className={`${styles.size} ${size === s ? styles.selected : ""} ${missing && !size ? styles.warn : ""}`}
            aria-pressed={size === s}
            onClick={() => {
              setSize(s);
              setMissing(false);
            }}
          >
            {s}
          </button>
        ))}
      </div>

      <p className={styles.error} role="alert">
        {missing && !size ? "Please choose a size" : ""}
      </p>

      <button type="button" className={styles.cta} onClick={handleAdd}>
        Add to cart
      </button>
    </div>
  );
}
