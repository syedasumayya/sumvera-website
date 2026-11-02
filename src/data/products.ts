import type { Category, Product, Size, Variant } from "@/types/product";

/* ------------------------------------------------------------------
   PLACEHOLDER CATALOGUE — replace names, prices and photos with the
   real ones. Model photos live in /public/products.
------------------------------------------------------------------- */

const SIZES: readonly Size[] = ["S", "M", "L", "XL"];

const pink: Variant = { name: "Rose Pink", hex: "#E58BAA", image: "/products/pink-set.webp" };
const blue: Variant = { name: "Sky Blue", hex: "#6E9BDA", image: "/products/blue-set.webp" };
const sand: Variant = { name: "Sand", hex: "#D9C7A8", image: "/products/beige-set.webp" };
const sandFlat: Variant = { name: "Sand", hex: "#D9C7A8", image: "/products/sand-set-flat.webp", fit: "flat" };

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

export const products: readonly Product[] = [
  // Men
  { id: "m1", slug: "bear-tracksuit-men", name: "Bear Tracksuit", category: "men", price: 7500, sizes: SIZES, variants: [menBearBlue], isNew: true },
  { id: "m2", slug: "summit-tracksuit-men", name: "Summit Tracksuit", category: "men", price: 6900, sizes: SIZES, variants: [menSummitNavy], isNew: true },
  { id: "m3", slug: "heavy-fleece-tracksuit-men", name: "Heavy Fleece Tracksuit", category: "men", price: 8900, sizes: SIZES, variants: [blue] },
  { id: "m4", slug: "classic-tracksuit-men", name: "Classic Tracksuit", category: "men", price: 7200, sizes: SIZES, variants: [sandFlat] },
  { id: "m5", slug: "everyday-tracksuit-men", name: "Everyday Tracksuit", category: "men", price: 6500, sizes: SIZES, variants: [blue], isNew: true },
  // Women
  { id: "w1", slug: "bear-tracksuit-women", name: "Bear Tracksuit", category: "women", price: 7500, sizes: SIZES, variants: [pink, sand], isNew: true },
  { id: "w2", slug: "essential-tracksuit-women", name: "Essential Tracksuit", category: "women", price: 6900, sizes: SIZES, variants: [sand, pink] },
  { id: "w3", slug: "soft-fleece-tracksuit-women", name: "Soft Fleece Tracksuit", category: "women", price: 7800, sizes: SIZES, variants: [sandFlat] },
  { id: "w4", slug: "classic-tracksuit-women", name: "Classic Tracksuit", category: "women", price: 7200, sizes: SIZES, variants: [pink] },
  { id: "w5", slug: "everyday-tracksuit-women", name: "Everyday Tracksuit", category: "women", price: 6500, sizes: SIZES, variants: [pink], isNew: true },
  // Premium
  { id: "p1", slug: "signature-tracksuit", name: "Signature Tracksuit", category: "premium", price: 14500, sizes: SIZES, variants: [sand], description: "From our premium line." },
  { id: "p2", slug: "signature-bear-tracksuit", name: "Signature Bear Tracksuit", category: "premium", price: 16500, sizes: SIZES, variants: [pink], description: "From our premium line." },
];

export const getByCategory = (category: Category): Product[] =>
  products.filter((p) => p.category === category);

export const formatPrice = (price: number): string =>
  `Rs. ${price.toLocaleString("en-PK")}`;
