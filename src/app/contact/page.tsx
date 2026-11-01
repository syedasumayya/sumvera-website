import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Stars from "@/components/Stars";
import { InstagramIcon, TikTokIcon, WhatsAppIcon } from "@/components/Icons";
import { communityHref, reviewHref, site } from "@/data/site";
import { faqs } from "@/data/faq";
import { reviews } from "@/data/reviews";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact — SUMVERA",
  description: "Message SUMVERA on WhatsApp, join our WhatsApp community, read the FAQ and see customer reviews.",
};

const CHANNELS = [
  { label: "WhatsApp", handle: site.whatsapp.display, text: "Sizes, colours and orders.", href: site.whatsapp.href, Icon: WhatsAppIcon },
  { label: "Instagram", handle: site.instagram.handle, text: "New colours and styles.", href: site.instagram.href, Icon: InstagramIcon },
  { label: "TikTok", handle: site.tiktok.handle, text: "Our pieces in motion.", href: site.tiktok.href, Icon: TikTokIcon },
] as const;

export default function ContactPage() {
  const count = reviews.length;
  // Stars and the average only count reviews where the customer gave a rating.
  const rated = reviews.filter((r) => r.rating !== undefined);
  const average = rated.length ? rated.reduce((sum, r) => sum + (r.rating ?? 0), 0) / rated.length : 0;

  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title={<>Let’s <em>talk.</em></>}
        lead="Questions about sizes, colours or your order? Message us on WhatsApp and we’ll help."
      />

      {/* WhatsApp community */}
      <section className={styles.community} aria-labelledby="community-title">
        <div className={styles.communityInner}>
          <span className={styles.communityIcon}><WhatsAppIcon size={34} /></span>
          <div className={styles.communityText}>
            <p className={styles.eyebrowGold}>WhatsApp community</p>
            <h2 id="community-title" className={styles.communityTitle}>
              Join the SUMVERA <em>community.</em>
            </h2>
            <p>Join our WhatsApp community to get new designs, colours and updates first.</p>
          </div>
          <a href={communityHref} target="_blank" rel="noopener noreferrer" className={styles.joinBtn}>
            Join on WhatsApp
          </a>
        </div>
      </section>

      {/* Channels */}
      <section className={styles.channels} aria-label="Contact channels">
        <ul className={styles.channelList}>
          {CHANNELS.map(({ label, handle, text, href, Icon }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer" className={styles.channel}>
                <span className={styles.channelIcon}><Icon size={22} /></span>
                <span className={styles.channelBody}>
                  <span className={styles.channelLabel}>{label}</span>
                  <span className={styles.channelHandle}>{handle}</span>
                  <span className={styles.channelText}>{text}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className={styles.faq} aria-labelledby="faq-title">
        <div className={styles.faqInner}>
          <div className={styles.faqHead}>
            <p className={styles.eyebrow}>FAQ</p>
            <h2 id="faq-title" className={styles.h2}>Good to know</h2>
            <p className={styles.faqNote}>
              Can’t find your answer? <a href={site.whatsapp.href} target="_blank" rel="noopener noreferrer">Ask us on WhatsApp</a>.
            </p>
          </div>
          <div className={styles.faqList}>
            {faqs.map((f) => (
              <details key={f.q} className={styles.item}>
                <summary>
                  <span>{f.q}</span>
                  <svg className={styles.chev} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className={styles.reviews} aria-labelledby="reviews-title">
        <div className={styles.reviewsInner}>
          <div className={styles.reviewsHead}>
            <div>
              <p className={styles.eyebrowGold}>Reviews</p>
              <h2 id="reviews-title" className={styles.reviewsTitle}>What customers say</h2>
            </div>
            {count > 0 && (
              <div className={styles.summary}>
                {rated.length > 0 && <Stars rating={average} size={22} />}
                <p>
                  {rated.length > 0 && <strong>{average.toFixed(1)} · </strong>}
                  {count} {count === 1 ? "review" : "reviews"}
                </p>
              </div>
            )}
          </div>

          {count > 0 ? (
            <ul className={styles.reviewGrid}>
              {reviews.map((r) => (
                <li key={r.id} className={styles.review}>
                  {r.rating !== undefined && <Stars rating={r.rating} />}
                  <p className={styles.reviewText}>“{r.text}”</p>
                  <p className={styles.reviewMeta}>
                    <span className={styles.reviewName}>
                      <strong>{r.name}</strong>
                      {r.city ? `, ${r.city}` : ""}
                    </span>
                    {(r.product || r.date) && <span>{[r.product, r.date].filter(Boolean).join(" · ")}</span>}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.empty}>
              <p className={styles.emptyTitle}>Be the first to review.</p>
              <p>Wore your SUMVERA tracksuit? Tell us what you think and we’ll share it here.</p>
            </div>
          )}

          <a href={reviewHref} target="_blank" rel="noopener noreferrer" className={styles.reviewBtn}>
            Share your review on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
