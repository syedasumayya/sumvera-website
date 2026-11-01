import { getByCategory } from "@/data/products";
import Hero from "@/components/Hero";
import CollectionTiles from "@/components/CollectionTiles";
import ProductSection from "@/components/ProductSection";
import PremiumSection from "@/components/PremiumSection";
import ContactCta from "@/components/ContactCta";

const MEN_TINTS = ["#e3e8da", "#cad5c3", "#e6dfcb", "#d9e0d0", "#e8ebdf"] as const;
const WOMEN_TINTS = ["#ede6d2", "#c9d4c1", "#f0ebda", "#dce3d4", "#d3ddcb"] as const;

export default function Home() {
  return (
    <main>
      <Hero />
      <CollectionTiles />
      <ProductSection
        id="men"
        eyebrow="Collection 01"
        title="Men"
        products={getByCategory("men")}
        tints={MEN_TINTS}
        shaded
      />
      <ProductSection
        id="women"
        eyebrow="Collection 02"
        title="Women"
        products={getByCategory("women")}
        tints={WOMEN_TINTS}
      />
      <PremiumSection products={getByCategory("premium")} />
      <ContactCta />
    </main>
  );
}