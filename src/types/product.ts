export type Category = "men" | "women" | "premium";

export type Garment =
  | "tee"
  | "shirt"
  | "polo"
  | "hoodie"
  | "trousers"
  | "dress"
  | "kurta"
  | "overcoat";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: Category;
  garment: Garment;
  /** Price in PKR. `null` until real pricing is set. */
  price: number | null;
  /** Hex colours shown as swatches; the first is the main colour. */
  colors: readonly string[];
  isNew?: boolean;
  description?: string;
}
