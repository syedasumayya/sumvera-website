"use client";

import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { buildOrderMessage, orderUrl, validateOrder, type OrderDetails, type OrderErrors } from "@/lib/order";
import styles from "./CartDrawer.module.css";

export default function CartDrawer() {
  const { items, count, subtotal, isOpen, closeCart, setQty, removeItem, clearCart } = useCart();
  const [step, setStep] = useState<"cart" | "details" | "done">("cart");
  const [details, setDetails] = useState<OrderDetails>({ name: "", phone: "", city: "", address: "" });
  const [errors, setErrors] = useState<OrderErrors>({});
  const [link, setLink] = useState("");

  const close = useCallback(() => {
    closeCart();
    setStep("cart");
  }, [closeCart]);

  const submitOrder = (e: FormEvent) => {
    e.preventDefault();
    const found = validateOrder(details);
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    const url = orderUrl(buildOrderMessage(items, subtotal, details));
    setLink(url);
    window.open(url, "_blank", "noopener,noreferrer");
    setStep("done");
  };

  const field = (key: keyof OrderDetails) => ({
    value: details[key],
    onChange: (e: { target: { value: string } }) => setDetails((d) => ({ ...d, [key]: e.target.value })),
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `err-${key}` : undefined,
  });
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
        close();
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
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div className={styles.root}>
      <div className={styles.overlay} onClick={close} aria-hidden="true" />

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
          <button ref={closeRef} type="button" className={styles.close} onClick={close} aria-label="Close cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {step === "done" ? (
          <div className={styles.done}>
            <h3>Almost done</h3>
            <p>
              WhatsApp should have opened with your order ready. Press <strong>Send</strong> there to confirm it.
              We’ll confirm your delivery charges and delivery on WhatsApp.
            </p>
            <p className={styles.codNote}>Payment: Cash on Delivery</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className={styles.checkout}>
              Open WhatsApp again
            </a>
            <button
              type="button"
              className={styles.continue}
              onClick={() => {
                clearCart();
                close();
              }}
            >
              I sent it, clear my cart
            </button>
          </div>
        ) : step === "details" && items.length > 0 ? (
          <form className={styles.form} onSubmit={submitOrder} noValidate>
            <button type="button" className={styles.back} onClick={() => setStep("cart")}>
              ← Back to cart
            </button>
            <h3 className={styles.formTitle}>Your details</h3>
            <p className={styles.codBadge}>Payment: Cash on Delivery</p>

            <label className={styles.label}>
              Full name
              <input type="text" autoComplete="name" className={styles.input} {...field("name")} />
              {errors.name && <span id="err-name" className={styles.error} role="alert">{errors.name}</span>}
            </label>
            <label className={styles.label}>
              Phone number
              <input type="tel" autoComplete="tel" inputMode="tel" className={styles.input} {...field("phone")} />
              {errors.phone && <span id="err-phone" className={styles.error} role="alert">{errors.phone}</span>}
            </label>
            <label className={styles.label}>
              City
              <input type="text" autoComplete="address-level2" className={styles.input} {...field("city")} />
              {errors.city && <span id="err-city" className={styles.error} role="alert">{errors.city}</span>}
            </label>
            <label className={styles.label}>
              Full address
              <textarea rows={3} autoComplete="street-address" className={styles.input} {...field("address")} />
              {errors.address && <span id="err-address" className={styles.error} role="alert">{errors.address}</span>}
            </label>

            <div className={styles.formFoot}>
              <div className={styles.total}>
                <span>Total ({count} {count === 1 ? "item" : "items"})</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>
              <p className={styles.note}>Delivery charges are confirmed on WhatsApp.</p>
              <button type="submit" className={styles.checkout}>
                Send order on WhatsApp
              </button>
            </div>
          </form>
        ) : items.length === 0 ? (
          <div className={styles.empty}>
            <p>Your cart is empty.</p>
            <button type="button" className={styles.continue} onClick={close}>
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
              <p className={styles.note}>Cash on Delivery. Delivery charges are confirmed on WhatsApp.</p>
              <button type="button" className={styles.checkout} onClick={() => setStep("details")}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
