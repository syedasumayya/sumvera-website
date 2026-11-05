import type { Category, Product, Size, Variant } from "@/types/product";

/* ------------------------------------------------------------------
   PLACEHOLDER CATALOGUE — replace names, prices and photos with the
   real ones. Model photos live in /public/products.
------------------------------------------------------------------- */

const SIZES: readonly Size[] = ["S", "M", "L", "XL"];

const pink: Variant = { name: "Rose Pink", hex: "#E58BAA", image: "/products/pink-set.webp" };

/* Real men's photos (front + back) */
const menBearBlue: Variant = {
  name: "Sky Blue",
  hex: "#6F98D0",
  image: "/products/bear-blue-front.webp",
  back: "/products/bear-blue-back.webp",
};
const menSummitNavy: Variant = {
  name: "Navy",
  hex: "#1B2A4E",
  image: "/products/summit-navy-front.webp",
  back: "/products/summit-navy-back.webp",
};

const menMochaTaupe: Variant = {
  name: "Taupe",
  hex: "#A68D7C",
  image: "/products/mocha-taupe-front.webp",
  back: "/products/mocha-taupe-back.webp",
};
const menLatteBeige: Variant = {
  name: "Beige",
  hex: "#DCC2A5",
  image: "/products/latte-beige-front.webp",
  back: "/products/latte-beige-back.webp",
};
const menAlpineNavy: Variant = {
  name: "Navy & White",
  hex: "#1C2B50",
  image: "/products/alpine-navy-front.webp",
  back: "/products/alpine-navy-back.webp",
};

/* Real women's photos (front + back) */
const womenNoirBlack: Variant = {
  name: "Black",
  hex: "#151515",
  image: "/products/noir-black-front.webp",
  back: "/products/noir-black-back.webp",
};
const womenMerlotMaroon: Variant = {
  name: "Maroon",
  hex: "#6E1226",
  image: "/products/merlot-maroon-front.webp",
  back: "/products/merlot-maroon-back.webp",
};
const womenBearPink: Variant = {
  name: "Rose Pink",
  hex: "#E98AA8",
  image: "/products/bear-pink-front.webp",
  back: "/products/bear-pink-back.webp",
};
const womenEssentialBeige: Variant = {
  name: "Sand",
  hex: "#D8C5AB",
  image: "/products/essential-beige-front.webp",
  back: "/products/essential-beige-back.webp",
};
const womenMauvePink: Variant = {
  name: "Mauve Pink",
  hex: "#BF6F86",
  image: "/products/mauve-pink-front.webp",
  back: "/products/mauve-pink-back.webp",
};

const premiumBlack: Variant = {
  name: "Black",
  hex: "#15171A",
  image: "/products/cargo-black-front.webp",
  back: "/products/cargo-black-back.webp",
};

export const products: readonly Product[] = [
  // Men
  { id: "m1", slug: "bear-tracksuit-men", name: "Bear Tracksuit", category: "men", price: 7500, sizes: SIZES, variants: [menBearBlue], isNew: true },
  { id: "m4", slug: "latte-tracksuit-men", name: "Latte Tracksuit", category: "men", price: 7200, sizes: SIZES, variants: [menLatteBeige] },
  { id: "m2", slug: "summit-tracksuit-men", name: "Summit Tracksuit", category: "men", price: 6900, sizes: SIZES, variants: [menSummitNavy], isNew: true },
  { id: "m3", slug: "mocha-tracksuit-men", name: "Mocha Tracksuit", category: "men", price: 8900, sizes: SIZES, variants: [menMochaTaupe], isNew: true },
  { id: "m5", slug: "alpine-tracksuit-men", name: "Alpine Tracksuit", category: "men", price: 7800, sizes: SIZES, variants: [menAlpineNavy], isNew: true },
  // Women
  { id: "w3", slug: "noir-tracksuit-women", name: "Noir Tracksuit", category: "women", price: 7800, sizes: SIZES, variants: [womenNoirBlack], isNew: true },
  { id: "w1", slug: "bear-tracksuit-women", name: "Bear Tracksuit", category: "women", price: 7500, sizes: SIZES, variants: [womenBearPink], isNew: true },
  { id: "w4", slug: "merlot-tracksuit-women", name: "Merlot Tracksuit", category: "women", price: 8200, sizes: SIZES, variants: [womenMerlotMaroon], isNew: true },
  { id: "w2", slug: "essential-tracksuit-women", name: "Essential Tracksuit", category: "women", price: 6900, sizes: SIZES, variants: [womenEssentialBeige] },
  { id: "w5", slug: "mauve-tracksuit-women", name: "Mauve Tracksuit", category: "women", price: 7200, sizes: SIZES, variants: [womenMauvePink], isNew: true },
  // Premium
  { id: "p1", slug: "midnight-cargo-tracksuit", name: "Midnight Cargo Tracksuit", category: "premium", price: 14500, sizes: SIZES, variants: [premiumBlack], description: "From our premium line." },
  { id: "p2", slug: "signature-bear-tracksuit", name: "Signature Bear Tracksuit", category: "premium", price: 16500, sizes: SIZES, variants: [pink], description: "From our premium line." },
];

export const getByCategory = (category: Category): Product[] =>
  products.filter((p) => p.category === category);

export const formatPrice = (price: number): string =>
  `Rs. ${price.toLocaleString("en-PK")}`;
