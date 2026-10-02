import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  tone = "sage",
  children,
}: {
  className?: string;
  tone?: "sage" | "gold" | "ink";
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide",
        tone === "sage" && "bg-accent text-accent-fg",
        tone === "gold" && "bg-gold text-gold-fg",
        tone === "ink" && "bg-fg text-bg",
        className,
      )}
    >
      {children}
    </span>
  );
}
