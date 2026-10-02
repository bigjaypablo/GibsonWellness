export const SHOP_BASE = "https://www.nuskin.com/us/en/mysite/gibson";

export const SOCIAL = {
  instagram: "https://www.instagram.com/frankbgibson",
  facebook: "https://www.facebook.com/frankbgibson",
} as const;

export type CategoryId = "all" | "gut" | "skincare" | "energy";

export const CATEGORIES: { id: CategoryId; label: string }[] = [
  { id: "all", label: "All Products" },
  { id: "gut", label: "Gut Health" },
  { id: "skincare", label: "Skincare" },
  { id: "energy", label: "Energy & Daily" },
];

export type Product = {
  id: string;
  title: string;
  description: string;
  price: string;
  badge: string;
  categories: CategoryId[];
  image: string;
  href: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "morning-kit",
    title: "Gut + Glow + Morning Mocktail Kit",
    description:
      "Frank and Abby’s daily trio — Nu Biome for the gut, Collagen+ for glow, and g3 for a bright morning start. Mix, sip, and begin the day on purpose.",
    price: "$216",
    badge: "Most Popular",
    categories: ["all", "gut", "energy"],
    image: "/images/product-kit.jpg",
    href: `${SHOP_BASE}/mysite-categories`,
  },
  {
    id: "collagen",
    title: "Beauty Focus Collagen+",
    description:
      "Clinically studied bioactive collagen peptides, lutein, and phytoceramides for radiance, hydration, and smoother-looking skin from within.",
    price: "$84",
    badge: "Level 1 Favorite",
    categories: ["all", "skincare"],
    image: "/images/product-collagen.jpg",
    href: `${SHOP_BASE}/product/beauty-focus-collagen`,
  },
  {
    id: "nubiome",
    title: "Pharmanex Nu Biome",
    description:
      "A dual-action pre- and postbiotic drink mix to support digestive ease and a balanced microbiome — the base of every Gibson morning mocktail.",
    price: "$99",
    badge: "Gut Health",
    categories: ["all", "gut"],
    image: "/images/product-nubiome.jpg",
    href: `${SHOP_BASE}/product/nu-biome`,
  },
  {
    id: "lumispa",
    title: "ageLOC LumiSpa iO",
    description:
      "Two minutes, twice a day. A smart facial device with micropulse cleansing for clinically proven smoothness, radiance, and refined texture.",
    price: "$275",
    badge: "Skincare Ritual",
    categories: ["all", "skincare"],
    image: "/images/product-lumispa.jpg",
    href: `${SHOP_BASE}/product/ageloc-lumispa-io`,
  },
  {
    id: "meta",
    title: "ageLOC Meta",
    description:
      "Daily metabolic support powered by anthocyanins from deep-purple berries and black rice — for how your body uses energy through a full day.",
    price: "$99",
    badge: "Daily Essential",
    categories: ["all", "energy", "gut"],
    image: "/images/product-meta.jpg",
    href: `${SHOP_BASE}/product/ageloc-meta`,
  },
  {
    id: "g3",
    title: "g3 Superfruit Juice",
    description:
      "A jewel-toned superfruit blend for antioxidant support and a bright, clean lift. The finishing pour in a Gibson morning mocktail.",
    price: "$80",
    badge: "Morning Lift",
    categories: ["all", "energy"],
    image: "/images/product-g3.jpg",
    href: `${SHOP_BASE}/product/g3`,
  },
  {
    id: "youth",
    title: "ageLOC Youth",
    description:
      "Nu Skin’s advanced age-defying supplement, designed to support the years you can enjoy being more active, energetic, and well.",
    price: "$130",
    badge: "Age-Defying",
    categories: ["all", "energy"],
    image: "/images/product-youth.jpg",
    href: `${SHOP_BASE}/product/ageloc-youth`,
  },
  {
    id: "probio",
    title: "ProBio PCC",
    description:
      "Targeted probiotic support to pair with Nu Biome — a quiet, complete gut routine for those who want to go one layer deeper.",
    price: "$45",
    badge: "Gut Health",
    categories: ["all", "gut"],
    image: "/images/product-probio.jpg",
    href: `${SHOP_BASE}/product/probio-pcc`,
  },
  {
    id: "serum",
    title: "ageLOC Tru Face Essence Ultra",
    description:
      "A concentrated facial essence to support firm, youthful-looking skin. The evening counterpart to a LumiSpa morning.",
    price: "$58",
    badge: "Evening Glow",
    categories: ["all", "skincare"],
    image: "/images/product-serum.jpg",
    href: `${SHOP_BASE}/product/tru-face-essence-ultra`,
  },
];

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  initials: string;
  avatar: string;
  quote: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "daniel",
    name: "Daniel Whitaker",
    role: "Daily energy, 3 months",
    initials: "DW",
    avatar: "/images/client1.jpg",
    quote:
      "Frank’s approach is simple: do the small things every day. Meta and g3 are now as automatic as brushing my teeth.",
  },
  {
    id: "mara",
    name: "Mara Ellison",
    role: "Gut & glow, 8 weeks",
    initials: "ME",
    avatar: "/images/client2.jpg",
    quote:
      "The morning mocktail replaced my second coffee. My skin looks rested, and I finally have a routine I don’t have to think about.",
  },
  {
    id: "marcus",
    name: "Marcus Thorne",
    role: "Coaching client",
    initials: "MT",
    avatar: "/images/client3.jpg",
    quote:
      "I came for energy support, but stayed because Frank and Abby made wellness practical. Faith, focus, and a daily glass that keeps up with my schedule.",
  },
];
