/** Brand details used in the footer and the About page. Edit here once. */
export const site = {
  name: "SUMVERA",
  tagline: "Comfort meets confidence.",
  whatsapp: {
    /** Shown to visitors. */
    display: "0317 1957455",
    /** International format without + or spaces, for wa.me. */
    international: "923171957455",
    href: "https://wa.me/923171957455",
  },
  community: {
    /** Paste your WhatsApp Community invite link here, e.g. https://chat.whatsapp.com/XXXX. Until then, the join buttons open a normal WhatsApp chat. */
    invite: "" as string,
  },
  instagram: {
    handle: "@sumvera_",
    href: "https://www.instagram.com/sumvera_/",
  },
  tiktok: {
    handle: "@sumvera_",
    href: "https://www.tiktok.com/@sumvera_",
  },
} as const;

/** Where the "Join the community" buttons go. */
export const communityHref: string = site.community.invite || site.whatsapp.href;

/** Opens WhatsApp with a ready-made message, so customers can send a review. */
export const reviewHref = `${site.whatsapp.href}?text=${encodeURIComponent(
  "Hi SUMVERA! I'd like to share a review of my order.",
)}`;
