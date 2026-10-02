import { useEffect, useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check, LoaderCircle, Mail } from "lucide-react";
import { GUIDE_DAYS } from "@/data/guide";
import { isValidEmail } from "@/lib/utils";
import { trackGuideView, trackLeadCapture } from "@/lib/analytics";
import { useBag } from "@/lib/bag";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BagDrawer } from "@/components/bag-drawer";

export const Route = createFileRoute("/guide")({ component: GuidePage });

function GuidePage() {
  const hydrate = useBag((s) => s.hydrate);
  const hasLead = useBag((s) => s.hasLead);
  const setLead = useBag((s) => s.setLead);
  const [bagOpen, setBagOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "loading">("idle");

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  useEffect(() => {
    if (hasLead) trackGuideView();
  }, [hasLead]);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const value = email.trim();
    if (!isValidEmail(value)) {
      setError("Enter a valid email to open the guide.");
      return;
    }
    setError("");
    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 600));
    setLead(value);
    trackLeadCapture();
    setStatus("idle");
  }

  return (
    <div className="min-h-screen bg-bg text-fg">
      <Header onOpenBag={() => setBagOpen(true)} />
      <main className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
        <Link
          to="/"
          className="inline-flex min-h-11 items-center gap-2 text-sm text-fg-muted hover:text-fg"
        >
          <ArrowLeft className="size-4" />
          Back to the shop
        </Link>

        {!hasLead ? (
          <div className="mt-10 rounded-3xl bg-card p-6 shadow-border sm:p-10">
            <h1 className="font-display text-3xl font-medium">Unlock the 5-day guide</h1>
            <p className="mt-3 text-sm leading-relaxed text-fg-muted">
              Leave your email — the same list Frank and Abby use for the morning
              routine. Zero spam.
            </p>
            <form onSubmit={onSubmit} className="mt-6" noValidate>
              <label htmlFor="guide-email" className="sr-only">
                Email
              </label>
              <div className="relative">
                <Mail className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-fg-subtle" />
                <Input
                  id="guide-email"
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-11"
                />
              </div>
              {error ? (
                <p className="mt-2 text-sm text-accent" role="alert">
                  {error}
                </p>
              ) : null}
              <Button type="submit" className="mt-4 w-full" size="lg" disabled={status === "loading"}>
                {status === "loading" ? (
                  <>
                    <LoaderCircle className="size-4 animate-spin" />
                    Opening
                  </>
                ) : (
                  "Get Free Guide"
                )}
              </Button>
            </form>
          </div>
        ) : (
          <article className="mt-10">
            <p className="text-xs font-medium uppercase tracking-kicker text-gold">
              Gibson Wellness
            </p>
            <h1 className="mt-3 font-display text-4xl leading-tight font-medium">
              5-day gut health & morning routine
            </h1>
            <p className="mt-4 text-base leading-relaxed text-fg-muted">
              A short practice, not a program. Do each day once. If it fits,
              keep it. This is inspiration for a well-designed life — not medical
              advice.
            </p>
            <ol className="mt-10 space-y-6">
              {GUIDE_DAYS.map((entry) => (
                <li key={entry.day} className="rounded-3xl bg-card p-6 shadow-border">
                  <p className="text-xs font-medium tracking-kicker text-gold">
                    DAY {entry.day}
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-medium">{entry.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">{entry.body}</p>
                </li>
              ))}
            </ol>
            <div className="mt-10 flex items-start gap-3 rounded-2xl bg-bg-subtle p-5 text-sm text-fg-muted">
              <Check className="mt-0.5 size-4 shrink-0 text-accent" />
              <p>
                When you are ready, the featured bundles are waiting on the shop —
                each one opens Frank and Abby’s official Nu Skin checkout.
              </p>
            </div>
            <Button asChild className="mt-6" variant="ink">
              <Link to="/">Return to featured bundles</Link>
            </Button>
          </article>
        )}
      </main>
      <Footer />
      <BagDrawer open={bagOpen} onClose={() => setBagOpen(false)} />
    </div>
  );
}
