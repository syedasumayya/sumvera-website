import Link from "next/link";
import { site } from "@/data/site";
import Logo from "./Logo";
import { InstagramIcon, TikTokIcon, WhatsAppIcon } from "./Icons";
import styles from "./Footer.module.css";

const YEAR = 2026;

const SHOP = [
  { label: "Men", href: "/#men" },
  { label: "Women", href: "/#women" },
  { label: "Premium", href: "/#premium" },
] as const;

const COMPANY = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo />
            <p className={styles.tagline}>{site.tagline}</p>
            <p className={styles.about}>
              Tracksuits for men and women, plus a small premium line.
            </p>
          </div>

          <nav aria-label="Shop" className={styles.col}>
            <p className={styles.colTitle}>Shop</p>
            {SHOP.map((l) => (
              <Link key={l.label} href={l.href}>{l.label}</Link>
            ))}
          </nav>

          <nav aria-label="Company" className={styles.col}>
            <p className={styles.colTitle}>Company</p>
            {COMPANY.map((l) => (
              <Link key={l.label} href={l.href}>{l.label}</Link>
            ))}
          </nav>

          <div className={styles.col}>
            <p className={styles.colTitle}>Get in touch</p>
            <a href={site.whatsapp.href} target="_blank" rel="noopener noreferrer" className={styles.social}>
              <WhatsAppIcon size={20} />
              <span>
                WhatsApp
                <small>{site.whatsapp.display}</small>
              </span>
            </a>
            <a href={site.instagram.href} target="_blank" rel="noopener noreferrer" className={styles.social}>
              <InstagramIcon size={20} />
              <span>
                Instagram
                <small>{site.instagram.handle}</small>
              </span>
            </a>
            <a href={site.tiktok.href} target="_blank" rel="noopener noreferrer" className={styles.social}>
              <TikTokIcon size={20} />
              <span>
                TikTok
                <small>{site.tiktok.handle}</small>
              </span>
            </a>
          </div>
        </div>

        <div className={styles.bottom}>© {YEAR} {site.name}. All rights reserved.</div>
      </div>
    </footer>
  );
}
