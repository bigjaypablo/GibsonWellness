import { ShoppingBag } from "lucide-react";
import { SOCIAL } from "@/data/catalog";
import { useBag } from "@/lib/bag";
import { Button } from "@/components/ui/button";
import { FacebookIcon, InstagramIcon } from "@/components/social-icons";

export function Header({ onOpenBag }: { onOpenBag: () => void }) {
  const count = useBag((s) => s.items.length);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-baseline gap-2 no-underline">
          <span className="font-display text-xl font-medium tracking-tight text-fg sm:text-2xl">
            Gibson
          </span>
          <span className="text-xs font-medium uppercase tracking-brand text-fg-muted">
            Wellness
          </span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <a
            href={SOCIAL.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Gibson Wellness on Instagram"
            className="inline-flex size-11 items-center justify-center rounded-full text-fg-muted transition-colors duration-150 hover:text-fg"
          >
            <InstagramIcon />
          </a>
          <a
            href={SOCIAL.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Gibson Wellness on Facebook"
            className="inline-flex size-11 items-center justify-center rounded-full text-fg-muted transition-colors duration-150 hover:text-fg"
          >
            <FacebookIcon />
          </a>
          <Button
            variant="ghost"
            size="icon"
            aria-label={`Open bag, ${count} items`}
            onClick={onOpenBag}
            className="relative"
          >
            <ShoppingBag className="size-5" strokeWidth={1.7} />
            {count > 0 ? (
              <span className="absolute top-1.5 right-1.5 flex size-4 items-center justify-center rounded-full bg-gold text-xs font-semibold leading-none text-gold-fg tabular-nums">
                {count}
              </span>
            ) : null}
          </Button>
        </div>
      </div>
    </header>
  );
}
