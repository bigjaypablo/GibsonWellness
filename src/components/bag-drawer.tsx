import { ArrowRight, ShoppingBag, X } from "lucide-react";
import { toast } from "sonner";
import { useBag } from "@/lib/bag";
import { trackShopClick } from "@/lib/analytics";
import { Button } from "@/components/ui/button";

export function BagDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const items = useBag((s) => s.items);
  const remove = useBag((s) => s.remove);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        className="absolute inset-0 bg-fg/40"
        aria-label="Close bag"
        onClick={onClose}
      />
      <aside
        className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-bg shadow-lift"
        role="dialog"
        aria-modal="true"
        aria-labelledby="bag-title"
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 id="bag-title" className="font-display text-2xl font-medium">
            Your bag
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close">
            <X className="size-5" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag className="size-8 text-fg-subtle" strokeWidth={1.4} />
              <p className="mt-4 text-sm text-fg-muted">
                Nothing here yet. Explore the collection and tap Shop This Bundle.
              </p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex gap-3 rounded-2xl bg-card p-2 shadow-border">
                  <img
                    src={item.image}
                    alt=""
                    className="media size-20 rounded-xl object-cover"
                  />
                  <div className="min-w-0 flex-1 py-1 pr-1">
                    <p className="truncate text-sm font-medium text-fg">{item.title}</p>
                    <p className="mt-1 text-sm tabular-nums text-fg-muted">{item.price}</p>
                    <div className="mt-2 flex gap-3">
                      <button
                        type="button"
                        className="text-xs font-medium text-accent"
                        onClick={() => {
                          trackShopClick(item.title);
                          window.open(item.href, "_blank", "noopener,noreferrer");
                          toast("Opening Nu Skin checkout");
                        }}
                      >
                        Checkout
                      </button>
                      <button
                        type="button"
                        className="text-xs text-fg-subtle"
                        onClick={() => remove(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 ? (
          <div className="border-t border-border p-5">
            <Button
              className="w-full"
              size="lg"
              onClick={() => {
                const last = items[items.length - 1];
                if (!last) return;
                trackShopClick(last.title);
                window.open(last.href, "_blank", "noopener,noreferrer");
              }}
            >
              Continue on Nu Skin
              <ArrowRight className="size-4" />
            </Button>
            <p className="mt-3 text-center text-xs text-fg-subtle">
              Checkout is completed on the official Gibson Nu Skin storefront.
            </p>
          </div>
        ) : null}
      </aside>
    </div>
  );
}
