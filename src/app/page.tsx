import { getByCategory } from "@/data/products";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import PremiumSection from "@/components/PremiumSection";
import ContactCta from "@/components/ContactCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductSection
        id="men"
        eyebrow="Collection 01"
        title="Men"
        products={getByCategory("men")}
        shaded
      />
      <ProductSection
        id="women"
        eyebrow="Collection 02"
        title="Women"
        products={getByCategory("women")}
      />
      <PremiumSection products={getByCategory("premium")} />
      <ContactCta />
    </main>
  );
}
