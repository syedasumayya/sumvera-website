"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import Logo from "./Logo";
import styles from "./Header.module.css";

interface NavItem {
  label: string;
  href: string;
}

const NAV: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { count, openCart } = useCart();

  return (
    <>
      <div className={styles.announce}>New season · Autumn–Winter 2026</div>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Logo />

          <nav aria-label="Main" className={styles.nav}>
            {NAV.map((item) => {
              const active = item.href === pathname;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.link} ${active ? styles.active : ""}`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className={styles.actions}>
        
            <button
              type="button"
              className={styles.iconBtn}
              aria-label={`Open cart, ${count} ${count === 1 ? "item" : "items"}`}
              aria-haspopup="dialog"
              onClick={openCart}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 8h14l-1 12H6L5 8z" />
                <path d="M9 8V6.5a3 3 0 016 0V8" />
              </svg>
              {count > 0 && <span className={styles.badge}>{count}</span>}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
