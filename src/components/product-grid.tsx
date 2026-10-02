import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { CATEGORIES, PRODUCTS, type CategoryId, type Product } from "@/data/catalog";
import { trackProductClick, trackShopClick } from "@/lib/analytics";
import { useBag } from "@/lib/bag";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProductGrid() {
  const [filter, setFilter] = useState<CategoryId>("all");
  const add = useBag((s) => s.add);

  const items = useMemo(
    () => PRODUCTS.filter((product) => product.categories.includes(filter)),
    [filter],
  );

  function shop(product: Product) {
    trackProductClick(product.title);
    trackShopClick(product.title);
    add(product);
    window.open(product.href, "_blank", "noopener,noreferrer");
    toast("Opening Nu Skin checkout", { description: product.title });
  }

  return (
    <section id="featured" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="max-w-xl">
        <p className="text-xs font-medium uppercase tracking-kicker text-gold">
          Curated for you
        </p>
        <h2 className="mt-3 font-display text-3xl font-medium text-fg sm:text-4xl">
          Featured collection
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-fg-muted sm:text-base">
          Deep links into Frank and Abby’s Nu Skin storefront. Every card opens
          their official checkout in a new tab.
        </p>
      </div>

      <div
        className="mt-8 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Product collections"
      >
        {CATEGORIES.map((category) => {
          const active = filter === category.id;
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={active}
              data-filter={category.id}
              onClick={() => setFilter(category.id)}
              className={cn(
                "h-11 shrink-0 rounded-full px-4 text-sm font-medium transition-[background-color,color,box-shadow] duration-150",
                active
                  ? "bg-fg text-bg shadow-border"
                  : "bg-card text-fg-muted shadow-border hover:text-fg",
              )}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((product) => (
          <article
            key={product.id}
            className="flex flex-col rounded-3xl bg-card p-3 shadow-border transition-[box-shadow,transform] duration-200 ease-out hover:shadow-border-hover"
          >
            <div className="relative overflow-hidden rounded-2xl bg-bg-subtle">
              <img
                src={product.image}
                alt={product.title}
                className="media aspect-photo w-full object-cover"
              />
              <Badge
                tone={product.badge === "Most Popular" ? "gold" : "sage"}
                className="absolute top-3 left-3"
              >
                {product.badge}
              </Badge>
            </div>
            <div className="flex flex-1 flex-col px-2 pt-4 pb-2">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl leading-snug font-medium text-fg">
                  {product.title}
                </h3>
                <p className="shrink-0 pt-1 text-sm font-medium tabular-nums text-fg-muted">
                  {product.price}
                </p>
              </div>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-muted">
                {product.description}
              </p>
              <Button
                className="mt-5 w-full"
                variant="primary"
                onClick={() => shop(product)}
              >
                Shop This Bundle
                <ArrowRight className="size-4" strokeWidth={1.8} />
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
