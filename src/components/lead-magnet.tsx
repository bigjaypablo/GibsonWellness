import { useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Check, LoaderCircle, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { isValidEmail } from "@/lib/utils";
import { trackLeadCapture } from "@/lib/analytics";
import { useBag } from "@/lib/bag";

export function LeadMagnet({
  anchorId,
  emailFieldId = "lead-email",
}: {
  anchorId?: string;
  emailFieldId?: string;
}) {
  const navigate = useNavigate();
  const hasLead = useBag((s) => s.hasLead);
  const setLead = useBag((s) => s.setLead);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const value = email.trim();
    if (!isValidEmail(value)) {
      setError("Enter a valid email to receive the guide.");
      return;
    }
    setError("");
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setLead(value);
    trackLeadCapture();
    setLoading(false);
  }

  return (
    <section id={anchorId} className="px-4 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-fg text-bg shadow-lift">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
            <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-kicker text-gold">
              <Sparkles className="size-3.5" strokeWidth={1.8} />
              Free 5-day guide
            </p>
            <h2 className="mt-4 max-w-lg font-display text-3xl leading-tight font-medium text-bg sm:text-4xl">
              Get our free 5-day gut health & morning routine guide
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-bg/70 sm:text-base">
              Join 5,000+ taking back control of their wellness. Zero spam.
              A simple rhythm Frank and Abby actually live — not a 40-page PDF
              you will never open.
            </p>

            {hasLead ? (
              <div className="mt-8">
                <p className="flex items-center gap-2 text-sm font-medium text-bg">
                  <Check className="size-4 text-gold" strokeWidth={2} />
                  You are in. The guide is ready.
                </p>
                <Button
                  className="mt-5"
                  variant="gold"
                  size="lg"
                  onClick={() => navigate({ to: "/guide" })}
                >
                  Open the 5-day guide
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-8" noValidate>
                <label htmlFor={emailFieldId} className="sr-only">
                  Email address
                </label>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="relative flex-1">
                    <Mail className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-fg-subtle" />
                    <Input
                      id={emailFieldId}
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-bg pl-11 text-fg"
                      disabled={loading}
                    />
                  </div>
                  <Button type="submit" variant="gold" size="lg" disabled={loading}>
                    {loading ? (
                      <>
                        <LoaderCircle className="size-4 animate-spin" />
                        Sending
                      </>
                    ) : (
                      "Get Free Guide"
                    )}
                  </Button>
                </div>
                {error ? (
                  <p className="mt-2 text-sm text-gold" role="alert">
                    {error}
                  </p>
                ) : (
                  <p className="mt-3 text-xs text-bg/50">
                    We never share your address. Unsubscribe anytime.
                  </p>
                )}
              </form>
            )}
          </div>

          <div className="relative min-h-52">
            <img
              src="/images/hero-ritual.jpg"
              alt=""
              className="h-full w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-linear-to-t from-fg/40 to-transparent lg:bg-linear-to-l" />
          </div>
        </div>
      </div>
    </section>
  );
}
