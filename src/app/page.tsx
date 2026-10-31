import { products } from "@/data/products";

export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>SUMVERA</h1>
      <p>{products.length} products loaded. Step 1 complete.</p>
    </main>
  );
}
