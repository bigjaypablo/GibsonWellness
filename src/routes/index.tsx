import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/about";
import { BagDrawer } from "@/components/bag-drawer";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { LeadMagnet } from "@/components/lead-magnet";
import { ProductGrid } from "@/components/product-grid";
import { Testimonials } from "@/components/testimonials";
import { useBag } from "@/lib/bag";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const hydrate = useBag((s) => s.hydrate);
  const [bagOpen, setBagOpen] = useState(false);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  return (
    <div id="top" className="min-h-screen bg-bg text-fg">
      <a
        href="#featured"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to collection
      </a>
      <Header onOpenBag={() => setBagOpen(true)} />
      <main>
        <Hero />
        <LeadMagnet anchorId="guide" emailFieldId="lead-email" />
        <ProductGrid />
        <About />
        <Testimonials />
        <div className="mt-8 pb-16">
          <LeadMagnet emailFieldId="lead-email-footer" />
        </div>
      </main>
      <Footer />
      <BagDrawer open={bagOpen} onClose={() => setBagOpen(false)} />
    </div>
  );
}
