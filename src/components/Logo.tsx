import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <Link href="/" className={styles.logo} aria-label="SUMVERA home">
      <Image src="/sumvera-mark.png" alt="" width={43} height={44} priority />
      <span className={styles.word}>SUMVERA</span>
    </Link>
  );
}