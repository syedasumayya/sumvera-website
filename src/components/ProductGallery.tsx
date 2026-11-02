"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import styles from "./ProductGallery.module.css";

interface Props {
  front: string;
  back?: string;
  alt: string;
  sizes: string;
  /** Class for the framed box (aspect ratio, border, background). */
  frameClassName: string;
  /** Class applied to both photos (object-fit etc.). */
  imgClassName: string;
  /** Badges that sit on top of the photo. */
  children?: ReactNode;
}

/**
 * Shows the front photo; if a back photo exists, clicking / tapping the photo
 * flips between front and back (works on phone, mouse and keyboard).
 */
export default function ProductGallery({
  front,
  back,
  alt,
  sizes,
  frameClassName,
  imgClassName,
  children,
}: Props) {
  const [showBack, setShowBack] = useState(false);

  if (!back) {
    return (
      <div className={frameClassName}>
        {children}
        <Image src={front} alt={alt} fill sizes={sizes} className={imgClassName} />
      </div>
    );
  }

  return (
    <div className={frameClassName}>
      {children}
      <Image
        src={front}
        alt={`${alt}, front`}
        fill
        sizes={sizes}
        className={`${imgClassName} ${styles.layer} ${showBack ? styles.hidden : ""}`}
      />
      <Image
        src={back}
        alt={`${alt}, back`}
        fill
        sizes={sizes}
        className={`${imgClassName} ${styles.layer} ${showBack ? "" : styles.hidden}`}
      />
      <button
        type="button"
        className={styles.flip}
        aria-pressed={showBack}
        aria-label={showBack ? "Showing back view. Show front view" : "Showing front view. Show back view"}
        onClick={() => setShowBack((v) => !v)}
      />
      <span className={styles.dots} aria-hidden="true">
        <i className={showBack ? "" : styles.on} />
        <i className={showBack ? styles.on : ""} />
      </span>
    </div>
  );
}
