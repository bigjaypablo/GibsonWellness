import { cn } from "@/lib/utils";

export function FoundersMark({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex size-16 items-center justify-center rounded-full bg-bg-subtle shadow-border",
        className,
      )}
      aria-hidden="true"
    >
      <span className="absolute inset-1 rounded-full border border-gold/50" />
      <span className="font-display text-xl font-medium tracking-tight text-fg">
        F<span className="text-gold">+</span>A
      </span>
    </div>
  );
}
