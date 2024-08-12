import Header from "@/components/header/header";
import { Button } from "@/components/ui/button";
import { FAQs } from "@/containers/landing/FAQs";
import { Features } from "@/containers/landing/features";
import { Hero } from "@/containers/landing/hero";
import { LogoTicker } from "@/containers/landing/logoTicker";
import { ProductShowcase } from "@/containers/landing/productShowcase";

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Hero />
        <LogoTicker />
        <Features />
        <ProductShowcase />
        <FAQs />
      </div>
    </>
  );
}
