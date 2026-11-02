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
            <p className={styles.colTitle}>Follow us</p>
            <div className={styles.icons}>
              <a href={site.whatsapp.href} target="_blank" rel="noopener noreferrer" aria-label="SUMVERA on WhatsApp" className={styles.iconLink}>
                <WhatsAppIcon size={22} />
              </a>
              <a href={site.instagram.href} target="_blank" rel="noopener noreferrer" aria-label="SUMVERA on Instagram" className={styles.iconLink}>
                <InstagramIcon size={22} />
              </a>
              <a href={site.tiktok.href} target="_blank" rel="noopener noreferrer" aria-label="SUMVERA on TikTok" className={styles.iconLink}>
                <TikTokIcon size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {YEAR} {site.name}. All rights reserved.</span>
          <span>Made in Islamabad, Pakistan</span>
        </div>
      </div>
    </footer>
  );
}
