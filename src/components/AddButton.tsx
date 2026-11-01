"use client";

import { useCart } from "@/context/CartContext";
import styles from "./AddButton.module.css";

interface Props {
  productName: string;
  variant?: "light" | "gold";
}

export default function AddButton({ productName, variant = "light" }: Props) {
  const { addItem } = useCart();

  return (
    <button
      type="button"
      className={`${styles.btn} ${variant === "gold" ? styles.gold : styles.light}`}
      onClick={addItem}
      aria-label={`Add ${productName} to bag`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
        <path d="M12 5v14M5 12h14" />
      </svg>
    </button>
  );
}