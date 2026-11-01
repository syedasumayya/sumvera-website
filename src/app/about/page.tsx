import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { InstagramIcon, TikTokIcon, WhatsAppIcon } from "@/components/Icons";
import { site } from "@/data/site";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About — SUMVERA",
  description: "SUMVERA makes tracksuits for men and women. Comfort meets confidence.",
};

const VALUES = [
  { title: "Comfort", text: "Soft, easy fits that you forget you’re wearing." },
  { title: "Confidence", text: "Clean designs and colours you can wear anywhere." },
  { title: "Roots", text: "Simple, natural and considered, like the leaf in our mark." },
] as const;

const CHANNELS = [
  {
    label: "WhatsApp",
    handle: site.whatsapp.display,
    text: "Message us about sizes, colours or your order.",
    href: site.whatsapp.href,
    Icon: WhatsAppIcon,
  },
  {
    label: "Instagram",
    handle: site.instagram.handle,
    text: "See new colours and styles first.",
    href: site.instagram.href,
    Icon: InstagramIcon,
  },
  {
    label: "TikTok",
    handle: site.tiktok.handle,
    text: "Watch our pieces in motion.",
    href: site.tiktok.href,
    Icon: TikTokIcon,
  },
] as const;

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About SUMVERA"
        title={<>Clothing with <em>roots.</em></>}
        lead="Tracksuits for men and women, made around one idea: comfort that gives you confidence."
      />

      <section className={styles.story}>
        <div className={styles.storyInner}>
          <div className={styles.photo}>
            <Image
               src="/products/aboutmodel.png"
              alt="A woman wearing a sand SUMVERA hoodie and jogger set"
              fill
              sizes="(max-width: 900px) 100vw, 480px"
              className={styles.photoImg}
            />
          </div>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>Our story</p>
            <h2 className={styles.h2}>
              Comfort meets <em>confidence.</em>
            </h2>
            <p>
              SUMVERA makes tracksuits for men and women: hoodies and joggers cut to be worn
              all day, in colours that feel calm and look sharp.
            </p>
            <p>
              Our name and our mark come from the same place: an S and a V grown from a single
              leaf. It’s a reminder to keep things simple, natural and considered.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.values} aria-label="What we care about">
        <div className={styles.valuesInner}>
          {VALUES.map((v) => (
            <div key={v.title} className={styles.value}>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.shop}>
        <div className={styles.shopInner}>
          <div>
            <p className={styles.eyebrow}>What we make</p>
            <h2 className={styles.h2}>Five for him, five for her, two premium.</h2>
          </div>
          <div className={styles.shopLinks}>
            <Link href="/#men" className={styles.pill}>Shop Men</Link>
            <Link href="/#women" className={styles.pill}>Shop Women</Link>
            <Link href="/#premium" className={styles.pill}>Premium</Link>
          </div>
        </div>
      </section>

      <section className={styles.connect}>
        <div className={styles.connectInner}>
          <p className={styles.eyebrow}>Say hello</p>
          <h2 className={styles.h2}>Follow us and get in touch</h2>
          <ul className={styles.cards}>
            {CHANNELS.map(({ label, handle, text, href, Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className={styles.card}>
                  <span className={styles.icon}><Icon size={24} /></span>
                  <span className={styles.cardLabel}>{label}</span>
                  <span className={styles.cardHandle}>{handle}</span>
                  <span className={styles.cardText}>{text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
