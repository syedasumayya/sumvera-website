"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import styles from "./CartDrawer.module.css";

export default function CartDrawer() {
  const { items, count, subtotal, isOpen, closeCart, setQty, removeItem } = useCart();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Focus handling, Escape to close, and no page scroll behind the drawer.
  useEffect(() => {
    if (!isOpen) return;
    const opener = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeCart();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        "button:not([disabled]), a[href], [tabindex]:not([tabindex='-1'])",
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      opener?.focus();
    };
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  return (
    <div className={styles.root}>
      <div className={styles.overlay} onClick={closeCart} aria-hidden="true" />

      <div
        ref={panelRef}
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className={styles.head}>
          <h2>
            Your cart <span>({count})</span>
          </h2>
          <button ref={closeRef} type="button" className={styles.close} onClick={closeCart} aria-label="Close cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className={styles.empty}>
            <p>Your cart is empty.</p>
            <button type="button" className={styles.continue} onClick={closeCart}>
              Continue shopping
            </button>
          </div>
        ) : (
          <>
            <ul className={styles.list}>
              {items.map((item) => (
                <li key={item.key} className={styles.item}>
                  <div className={`${styles.thumb} ${item.fit === "flat" ? styles.thumbFlat : ""}`}>
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="88px"
                      className={item.fit === "flat" ? styles.imgFlat : styles.imgModel}
                    />
                  </div>

                  <div className={styles.details}>
                    <p className={styles.name}>{item.name}</p>
                    <p className={styles.meta}>
                      {item.variantName} · Size {item.size}
                    </p>

                    <div className={styles.row}>
                      <div className={styles.qty} role="group" aria-label={`Quantity for ${item.name}`}>
                        <button type="button" onClick={() => setQty(item.key, item.qty - 1)} aria-label="Decrease quantity">
                          −
                        </button>
                        <span aria-live="polite">{item.qty}</span>
                        <button type="button" onClick={() => setQty(item.key, item.qty + 1)} aria-label="Increase quantity">
                          +
                        </button>
                      </div>
                      <span className={styles.price}>
                        {item.price === null ? "—" : formatPrice(item.price * item.qty)}
                      </span>
                    </div>

                    <button type="button" className={styles.remove} onClick={() => removeItem(item.key)}>
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className={styles.foot}>
              <div className={styles.total}>
                <span>Subtotal</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>
              <p className={styles.note}>Delivery is calculated at checkout.</p>
              <button type="button" className={styles.checkout} aria-disabled="true" disabled>
                Checkout — coming soon
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
