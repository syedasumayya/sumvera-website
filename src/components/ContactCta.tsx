import Link from "next/link";
import styles from "./ContactCta.module.css";

export default function ContactCta() {
  return (
    <section className={styles.band}>
      <div className={styles.inner}>
        <div>
          <h2>Questions about a design or an order?</h2>
          <p>Send us a message and we’ll help.</p>
        </div>
        <Link href="/contact" className={styles.btn}>
          Contact us <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}