import Link from "next/link";
import Logo from "./Logo";
import styles from "./Footer.module.css";

interface FooterColumn {
  title: string;
  links: readonly { label: string; href: string }[];
}

const COLUMNS: readonly FooterColumn[] = [
  {
    title: "Shop",
    links: [
      { label: "Men", href: "/#men" },
      { label: "Women", href: "/#women" },
      { label: "Premium", href: "/#premium" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Follow",
    links: [
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "WhatsApp", href: "#" },
    ],
  },
];
const YEAR = 2026;
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo />
            <p>Clothing with roots.</p>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title} className={styles.col}>
              <p className={styles.colTitle}>{col.title}</p>
              {col.links.map((l) => (
                <Link key={l.label} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </nav>
          ))}
        </div>
        <div className={styles.bottom}>
                   © {YEAR} SUMVERA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}