import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { J as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Mail, l as ArrowLeft, o as LoaderCircle, s as Check } from "../_libs/lucide-react.mjs";
import { a as Header, d as trackGuideView, f as trackLeadCapture, h as useBag, i as Footer, n as Button, o as Input, t as BagDrawer, u as isValidEmail } from "./bag-drawer-De-N7OU0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/guide-LI-ShPwH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var GUIDE_DAYS = [
	{
		day: "01",
		title: "Wake and water",
		body: "Before coffee, drink a full glass of water. Give the body a quiet ten minutes — a short prayer, a stretch, a window. Hydration is the first decision of a well-designed day."
	},
	{
		day: "02",
		title: "The morning mocktail",
		body: "Mix Nu Biome and Collagen+ into cool water, then finish with a splash of g3. Sip slowly. This is not a hack — it is a rhythm Frank and Abby return to because it actually fits real life."
	},
	{
		day: "03",
		title: "Feed the gut, not the rush",
		body: "Build lunch around plants, protein, and something fermented if you enjoy it. Notice energy at 3 p.m. Gut comfort is often the difference between a reactive afternoon and a steady one."
	},
	{
		day: "04",
		title: "Two minutes for skin",
		body: "If you use LumiSpa, keep it to two minutes, twice a day. If you do not, a gentle cleanse and a drop of essence still count. Consistency outruns intensity on skin, the same way it does on faith and family."
	},
	{
		day: "05",
		title: "Close the day on purpose",
		body: "Screens down a little earlier. A simple evening supplement if it is in your routine. Thank God for one ordinary mercy. The life you want is designed in these quiet closings, not in the highlight reel."
	}
];
function GuidePage() {
	const hydrate = useBag((s) => s.hydrate);
	const hasLead = useBag((s) => s.hasLead);
	const setLead = useBag((s) => s.setLead);
	const [bagOpen, setBagOpen] = (0, import_react.useState)(false);
	const [email, setEmail] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("idle");
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	(0, import_react.useEffect)(() => {
		if (hasLead) trackGuideView();
	}, [hasLead]);
	async function onSubmit(event) {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, { onOpenBag: () => setBagOpen(true) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-2xl px-4 py-12 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "inline-flex min-h-11 items-center gap-2 text-sm text-fg-muted hover:text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Back to the shop"]
				}), !hasLead ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 rounded-3xl bg-card p-6 shadow-border sm:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-3xl font-medium",
							children: "Unlock the 5-day guide"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-fg-muted",
							children: "Leave your email — the same list Frank and Abby use for the morning routine. Zero spam."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit,
							className: "mt-6",
							noValidate: true,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "guide-email",
									className: "sr-only",
									children: "Email"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-fg-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "guide-email",
										type: "email",
										placeholder: "Your email",
										value: email,
										onChange: (e) => setEmail(e.target.value),
										className: "pl-11"
									})]
								}),
								error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-accent",
									role: "alert",
									children: error
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									className: "mt-4 w-full",
									size: "lg",
									disabled: status === "loading",
									children: status === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), "Opening"] }) : "Get Free Guide"
								})
							]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "mt-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-kicker text-gold",
							children: "Gibson Wellness"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 font-display text-4xl leading-tight font-medium",
							children: "5-day gut health & morning routine"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base leading-relaxed text-fg-muted",
							children: "A short practice, not a program. Do each day once. If it fits, keep it. This is inspiration for a well-designed life — not medical advice."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-10 space-y-6",
							children: GUIDE_DAYS.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-3xl bg-card p-6 shadow-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs font-medium tracking-kicker text-gold",
										children: ["DAY ", entry.day]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-2 font-display text-2xl font-medium",
										children: entry.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-fg-muted",
										children: entry.body
									})
								]
							}, entry.day))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex items-start gap-3 rounded-2xl bg-bg-subtle p-5 text-sm text-fg-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "When you are ready, the featured bundles are waiting on the shop — each one opens Frank and Abby’s official Nu Skin checkout." })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-6",
							variant: "ink",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								children: "Return to featured bundles"
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BagDrawer, {
				open: bagOpen,
				onClose: () => setBagOpen(false)
			})
		]
	});
}
//#endregion
export { GuidePage as component };
