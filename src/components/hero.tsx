import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FoundersMark } from "@/components/founders-mark";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-20">
      <div>
        <div className="rise-1 mb-6 flex items-center gap-4">
          <FoundersMark className="size-20" />
          <div>
            <p className="text-sm font-medium text-fg">Frank & Abby Gibson</p>
            <p className="text-sm text-fg-muted">Independent Brand Affiliates · Faith first</p>
          </div>
        </div>

        <h1 className="rise-2 font-display text-4xl leading-tight font-medium tracking-tight text-fg sm:text-5xl lg:text-6xl">
          Design & live the life you want
        </h1>
        <p className="rise-3 mt-5 max-w-md text-base leading-relaxed text-fg-muted sm:text-lg">
          Curated daily nutrition, gut health, and age-defying wellness essentials
          recommended by Frank & Abby.
        </p>
        <div className="rise-4 mt-8">
          <Button asChild size="lg" variant="ink">
            <a href="#featured">
              Explore Featured Bundles
              <ArrowRight className="size-4" strokeWidth={1.8} />
            </a>
          </Button>
        </div>
      </div>

      <div className="rise-5">
        <div className="overflow-hidden rounded-3xl bg-bg-subtle shadow-lift">
          <img
            src="/images/hero-ritual.jpg"
            alt="A peach collagen morning mocktail on cream stone, with citrus and sage"
            className="media aspect-portrait w-full object-cover"
          />
        </div>
        <p className="mt-3 text-center text-xs tracking-wide text-fg-subtle">
          The Gibson morning mocktail — collagen, gut support, a quiet start.
        </p>
      </div>
    </section>
  );
}
