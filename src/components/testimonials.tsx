import { TESTIMONIALS } from "@/data/catalog";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
      <div className="max-w-xl">
        <p className="text-xs font-medium uppercase tracking-kicker text-gold">
          Lived-in results
        </p>
        <h2 className="mt-3 font-display text-3xl font-medium text-fg sm:text-4xl">
          Quiet transformations
        </h2>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {TESTIMONIALS.map((item) => (
          <figure
            key={item.id}
            className="flex flex-col rounded-3xl bg-card p-6 shadow-border sm:p-7"
          >
            <div className="flex items-center gap-3">
              {item.avatar ? (
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="size-12 rounded-full object-cover shadow-sm"
                  onError={(e) => {
                    // Fallback to initials circle if image file is missing
                    e.currentTarget.style.display = "none";
                    if (e.currentTarget.nextElementSibling) {
                      e.currentTarget.nextElementSibling.classList.remove("hidden");
                    }
                  }}
                />
              ) : null}
              <div
                className={`flex size-12 items-center justify-center rounded-full bg-bg-subtle font-display text-lg text-accent ${
                  item.avatar ? "hidden" : ""
                }`}
                aria-hidden="true"
              >
                {item.initials}
              </div>
              <div>
                <p className="text-sm font-medium text-fg">{item.name}</p>
                <p className="text-xs text-fg-muted">{item.role}</p>
              </div>
            </div>

            <blockquote className="mt-5 flex-1 font-display text-lg leading-snug font-medium text-fg">
              “{item.quote}”
            </blockquote>
          </figure>
        ))}
      </div>
    </section>
  );
}
