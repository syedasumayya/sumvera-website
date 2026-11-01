export type Category = "men" | "women" | "premium";

export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL";

/** Kept for the old drawn garment art (ProductArt). Safe to remove together with that file. */
export type Garment =
  | "tee"
  | "shirt"
  | "polo"
  | "hoodie"
  | "trousers"
  | "dress"
  | "kurta"
  | "overcoat";

/** One colour of a product, with its own photo. */
export interface Variant {
  name: string;
  /** Swatch colour. */
  hex: string;
  /** Path under /public. */
  image: string;
  /** "model" = full-bleed photo of a person; "flat" = product-only cut-out shown on a tint. */
  fit?: "model" | "flat";
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: Category;
  /** Price in PKR. */
  price: number;
  sizes: readonly Size[];
  /** At least one colour; the first is shown by default. */
  variants: readonly [Variant, ...Variant[]];
  isNew?: boolean;
  description?: string;
}
