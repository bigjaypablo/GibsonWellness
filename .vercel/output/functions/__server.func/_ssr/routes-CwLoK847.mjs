import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { J as require_jsx_runtime, b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Mail, c as ArrowRight, o as LoaderCircle, r as Sparkles, s as Check } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as Header, c as TESTIMONIALS, f as trackLeadCapture, h as useBag, i as Footer, l as cn, m as trackShopClick, n as Button, o as Input, p as trackProductClick, r as CATEGORIES, s as PRODUCTS, t as BagDrawer, u as isValidEmail } from "./bag-drawer-De-N7OU0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CwLoK847.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FoundersMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative flex size-16 items-center justify-center rounded-full bg-bg-subtle shadow-border", className),
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-1 rounded-full border border-gold/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "font-display text-xl font-medium tracking-tight text-fg",
			children: [
				"F",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gold",
					children: "+"
				}),
				"A"
			]
		})]
	});
}
var POINTS = [
	"Thirty-plus years with Nu Skin, still showing up daily",
	"Faith first — family wellness that fits a real household",
	"Curated, not catalogued. If they would not take it, it is not here"
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-6xl px-4 py-8 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-10 rounded-3xl bg-bg-subtle px-6 py-10 sm:px-10 lg:grid-cols-2 lg:px-14 lg:py-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FoundersMark, { className: "size-24 text-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl font-medium text-fg",
					children: "Frank & Abby"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-fg-muted",
					children: "Designing a life — then living it in public."
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-medium text-fg",
					children: "Personal coaching, without the noise"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-fg-muted sm:text-base",
					children: "The Gibsons have spent three decades helping people take back control of their wellness — with nutrition that is measured, a gut that is tended, and a morning that is designed on purpose."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 space-y-3",
					children: POINTS.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-3 text-sm text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: "mt-0.5 size-4 shrink-0 text-accent",
							strokeWidth: 2
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: point })]
					}, point))
				})
			] })]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rise-1 mb-6 flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FoundersMark, { className: "size-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-fg",
					children: "Frank & Abby Gibson"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-fg-muted",
					children: "Independent Brand Affiliates · Faith first"
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "rise-2 font-display text-4xl leading-tight font-medium tracking-tight text-fg sm:text-5xl lg:text-6xl",
				children: "Design & live the life you want"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rise-3 mt-5 max-w-md text-base leading-relaxed text-fg-muted sm:text-lg",
				children: "Curated daily nutrition, gut health, and age-defying wellness essentials recommended by Frank & Abby."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rise-4 mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					variant: "ink",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#featured",
						children: ["Explore Featured Bundles", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "size-4",
							strokeWidth: 1.8
						})]
					})
				})
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rise-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-3xl bg-bg-subtle shadow-lift",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero-ritual.jpg",
					alt: "A peach collagen morning mocktail on cream stone, with citrus and sage",
					className: "media aspect-portrait w-full object-cover"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-center text-xs tracking-wide text-fg-subtle",
				children: "The Gibson morning mocktail — collagen, gut support, a quiet start."
			})]
		})]
	});
}
function LeadMagnet({ anchorId, emailFieldId = "lead-email" }) {
	const navigate = useNavigate();
	const hasLead = useBag((s) => s.hasLead);
	const setLead = useBag((s) => s.setLead);
	const [email, setEmail] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	async function onSubmit(event) {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: anchorId,
		className: "px-4 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl overflow-hidden rounded-3xl bg-fg text-bg shadow-lift",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-14 lg:py-14",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "inline-flex items-center gap-2 text-xs font-medium uppercase tracking-kicker text-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
								className: "size-3.5",
								strokeWidth: 1.8
							}), "Free 5-day guide"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 max-w-lg font-display text-3xl leading-tight font-medium text-bg sm:text-4xl",
							children: "Get our free 5-day gut health & morning routine guide"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-lg text-sm leading-relaxed text-bg/70 sm:text-base",
							children: "Join 5,000+ taking back control of their wellness. Zero spam. A simple rhythm Frank and Abby actually live — not a 40-page PDF you will never open."
						}),
						hasLead ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-2 text-sm font-medium text-bg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "size-4 text-gold",
									strokeWidth: 2
								}), "You are in. The guide is ready."]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "mt-5",
								variant: "gold",
								size: "lg",
								onClick: () => navigate({ to: "/guide" }),
								children: "Open the 5-day guide"
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit,
							className: "mt-8",
							noValidate: true,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: emailFieldId,
									className: "sr-only",
									children: "Email address"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-3 sm:flex-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-fg-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: emailFieldId,
											type: "email",
											inputMode: "email",
											autoComplete: "email",
											placeholder: "Your email",
											value: email,
											onChange: (e) => setEmail(e.target.value),
											className: "bg-bg pl-11 text-fg",
											disabled: loading
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										variant: "gold",
										size: "lg",
										disabled: loading,
										children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), "Sending"] }) : "Get Free Guide"
									})]
								}),
								error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-gold",
									role: "alert",
									children: error
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-xs text-bg/50",
									children: "We never share your address. Unsubscribe anytime."
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative min-h-52",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/hero-ritual.jpg",
						alt: "",
						className: "h-full w-full object-cover opacity-90"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-fg/40 to-transparent lg:bg-linear-to-l" })]
				})]
			})
		})
	});
}
function Badge({ className, tone = "sage", children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide", tone === "sage" && "bg-accent text-accent-fg", tone === "gold" && "bg-gold text-gold-fg", tone === "ink" && "bg-fg text-bg", className),
		children
	});
}
function ProductGrid() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const add = useBag((s) => s.add);
	const items = (0, import_react.useMemo)(() => PRODUCTS.filter((product) => product.categories.includes(filter)), [filter]);
	function shop(product) {
		trackProductClick(product.title);
		trackShopClick(product.title);
		add(product);
		window.open(product.href, "_blank", "noopener,noreferrer");
		toast("Opening Nu Skin checkout", { description: product.title });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "featured",
		className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-kicker text-gold",
						children: "Curated for you"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-medium text-fg sm:text-4xl",
						children: "Featured collection"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-fg-muted sm:text-base",
						children: "Deep links into Frank and Abby’s Nu Skin storefront. Every card opens their official checkout in a new tab."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex flex-wrap gap-2",
				role: "tablist",
				"aria-label": "Product collections",
				children: CATEGORIES.map((category) => {
					const active = filter === category.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						role: "tab",
						"aria-selected": active,
						"data-filter": category.id,
						onClick: () => setFilter(category.id),
						className: cn("h-11 shrink-0 rounded-full px-4 text-sm font-medium transition-[background-color,color,box-shadow] duration-150", active ? "bg-fg text-bg shadow-border" : "bg-card text-fg-muted shadow-border hover:text-fg"),
						children: category.label
					}, category.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: items.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "flex flex-col rounded-3xl bg-card p-3 shadow-border transition-[box-shadow,transform] duration-200 ease-out hover:shadow-border-hover",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-2xl bg-bg-subtle",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: product.image,
							alt: product.title,
							className: "media aspect-photo w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: product.badge === "Most Popular" ? "gold" : "sage",
							className: "absolute top-3 left-3",
							children: product.badge
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 flex-col px-2 pt-4 pb-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl leading-snug font-medium text-fg",
									children: product.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "shrink-0 pt-1 text-sm font-medium tabular-nums text-fg-muted",
									children: product.price
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 flex-1 text-sm leading-relaxed text-fg-muted",
								children: product.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								className: "mt-5 w-full",
								variant: "primary",
								onClick: () => shop(product),
								children: ["Shop This Bundle", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "size-4",
									strokeWidth: 1.8
								})]
							})
						]
					})]
				}, product.id))
			})
		]
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-kicker text-gold",
				children: "Lived-in results"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-3xl font-medium text-fg sm:text-4xl",
				children: "Quiet transformations"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid gap-5 lg:grid-cols-3",
			children: TESTIMONIALS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "flex flex-col rounded-3xl bg-card p-6 shadow-border sm:p-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						item.avatar ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.avatar,
							alt: item.name,
							className: "size-12 rounded-full object-cover shadow-sm",
							onError: (e) => {
								e.currentTarget.style.display = "none";
								if (e.currentTarget.nextElementSibling) e.currentTarget.nextElementSibling.classList.remove("hidden");
							}
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `flex size-12 items-center justify-center rounded-full bg-bg-subtle font-display text-lg text-accent ${item.avatar ? "hidden" : ""}`,
							"aria-hidden": "true",
							children: item.initials
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-fg",
							children: item.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-fg-muted",
							children: item.role
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "mt-5 flex-1 font-display text-lg leading-snug font-medium text-fg",
					children: [
						"“",
						item.quote,
						"”"
					]
				})]
			}, item.id))
		})]
	});
}
function Home() {
	const hydrate = useBag((s) => s.hydrate);
	const [bagOpen, setBagOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "min-h-screen bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#featured",
				className: "sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-fg focus:px-4 focus:py-2 focus:text-bg",
				children: "Skip to collection"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, { onOpenBag: () => setBagOpen(true) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadMagnet, {
					anchorId: "guide",
					emailFieldId: "lead-email"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 pb-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadMagnet, { emailFieldId: "lead-email-footer" })
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BagDrawer, {
				open: bagOpen,
				onClose: () => setBagOpen(false)
			})
		]
	});
}
//#endregion
export { Home as component };
