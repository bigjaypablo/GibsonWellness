import { SOCIAL } from "@/data/catalog";
import { FacebookIcon, InstagramIcon } from "@/components/social-icons";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="font-display text-2xl font-medium text-fg">Gibson Wellness</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-fg-muted">
            Independent Brand Affiliate of Nu Skin. Product names are trademarks
            of their respective owners. These statements have not been evaluated
            by the FDA and products are not intended to diagnose, treat, cure,
            or prevent any disease.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={SOCIAL.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="inline-flex size-11 items-center justify-center rounded-full text-fg-muted hover:text-fg"
          >
            <InstagramIcon />
          </a>
          <a
            href={SOCIAL.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="inline-flex size-11 items-center justify-center rounded-full text-fg-muted hover:text-fg"
          >
            <FacebookIcon />
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-border px-4 py-6 text-xs text-fg-subtle sm:flex-row sm:justify-between sm:px-6">
        <p>© {new Date().getFullYear()} Gibson Wellness. All rights reserved.</p>
        <p>Independent Brand Affiliate · Shop opens on Nu Skin.</p>
      </div>
    </footer>
  );
}
