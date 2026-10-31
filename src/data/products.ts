import type { Category, Product } from "@/types/product";

export const products: readonly Product[] = [
  // Men
  { id: "m1", slug: "everyday-tee", name: "Everyday Tee", category: "men", garment: "tee", price: null, colors: ["#1B3A2A", "#E8DFC6", "#8FA48A"], isNew: true },
  { id: "m2", slug: "linen-shirt", name: "Linen Shirt", category: "men", garment: "shirt", price: null, colors: ["#F1EAD6", "#8FA48A", "#C9B98E"] },
  { id: "m3", slug: "classic-polo", name: "Classic Polo", category: "men", garment: "polo", price: null, colors: ["#6B7A55", "#1B3A2A", "#CBBF9F"] },
  { id: "m4", slug: "heavy-hoodie", name: "Heavy Hoodie", category: "men", garment: "hoodie", price: null, colors: ["#2E3A33", "#6B7A55", "#D5C9A8"], isNew: true },
  { id: "m5", slug: "relaxed-trousers", name: "Relaxed Trousers", category: "men", garment: "trousers", price: null, colors: ["#B9AC88", "#1B3A2A", "#2E3A33"] },
  // Women
  { id: "w1", slug: "midi-dress", name: "Midi Dress", category: "women", garment: "dress", price: null, colors: ["#35553F", "#E8DFC6", "#0D2B1D"], isNew: true },
  { id: "w2", slug: "long-kurta", name: "Long Kurta", category: "women", garment: "kurta", price: null, colors: ["#E8DFC6", "#8FA48A", "#1B3A2A"] },
  { id: "w3", slug: "relaxed-tee", name: "Relaxed Tee", category: "women", garment: "tee", price: null, colors: ["#8FA48A", "#F1EAD6", "#1B3A2A"] },
  { id: "w4", slug: "wide-leg-trousers", name: "Wide-Leg Trousers", category: "women", garment: "trousers", price: null, colors: ["#1F3B2B", "#B9AC88", "#E8DFC6"] },
  { id: "w5", slug: "soft-hoodie", name: "Soft Hoodie", category: "women", garment: "hoodie", price: null, colors: ["#D5C9A8", "#8FA48A", "#35553F"], isNew: true },
  // Premium
  { id: "p1", slug: "atelier-overcoat", name: "Atelier Overcoat", category: "premium", garment: "overcoat", price: null, colors: ["#E9DFC3"], description: "Statement outerwear from the premium line." },
  { id: "p2", slug: "atelier-evening-dress", name: "Atelier Evening Dress", category: "premium", garment: "dress", price: null, colors: ["#F3ECD8"], description: "An evening silhouette from the premium line." },
];

export const getByCategory = (category: Category): Product[] =>
  products.filter((p) => p.category === category);

export const formatPrice = (price: number | null): string =>
  price === null ? "Rs. —" : `Rs. ${price.toLocaleString("en-PK")}`;
