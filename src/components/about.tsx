import { Check } from "lucide-react";
import { FoundersMark } from "@/components/founders-mark";

const POINTS = [
  "Thirty-plus years with Nu Skin, still showing up daily",
  "Faith first — family wellness that fits a real household",
  "Curated, not catalogued. If they would not take it, it is not here",
];

export function About() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="grid items-center gap-10 rounded-3xl bg-bg-subtle px-6 py-10 sm:px-10 lg:grid-cols-2 lg:px-14 lg:py-14">
        <div className="flex items-center gap-5">
          <FoundersMark className="size-24 text-2xl" />
          <div>
            <p className="font-display text-2xl font-medium text-fg">Frank & Abby</p>
            <p className="mt-1 text-sm text-fg-muted">
              Designing a life — then living it in public.
            </p>
          </div>
        </div>
        <div>
          <h2 className="font-display text-3xl font-medium text-fg">
            Personal coaching, without the noise
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-fg-muted sm:text-base">
            The Gibsons have spent three decades helping people take back control
            of their wellness — with nutrition that is measured, a gut that is
            tended, and a morning that is designed on purpose.
          </p>
          <ul className="mt-6 space-y-3">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-fg">
                <Check className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={2} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
