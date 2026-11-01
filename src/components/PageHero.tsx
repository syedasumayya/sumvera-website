import type { ReactNode } from "react";
import styles from "./PageHero.module.css";

interface Props {
  eyebrow: string;
  /** Main heading. Wrap a word in <em> for the gold italic accent. */
  title: ReactNode;
  lead?: string;
}

export default function PageHero({ eyebrow, title, lead }: Props) {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.title}>{title}</h1>
        {lead && <p className={styles.lead}>{lead}</p>}
      </div>
    </section>
  );
}
