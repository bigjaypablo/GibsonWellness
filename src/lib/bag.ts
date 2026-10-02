import { create } from "zustand";
import type { Product } from "@/data/catalog";

const STORAGE_KEY = "gibson-wellness-bag";
const LEAD_KEY = "gibson-wellness-lead";

export type BagItem = {
  id: string;
  title: string;
  price: string;
  image: string;
  href: string;
};

type BagState = {
  items: BagItem[];
  hydrated: boolean;
  hasLead: boolean;
  hydrate: () => void;
  add: (product: Product) => void;
  remove: (id: string) => void;
  setLead: (email: string) => void;
};

function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export const useBag = create<BagState>((set, get) => ({
  items: [],
  hydrated: false,
  hasLead: false,
  hydrate: () => {
    if (get().hydrated) return;
    set({
      items: readJson<BagItem[]>(STORAGE_KEY, []),
      hasLead: Boolean(readJson<string | null>(LEAD_KEY, null)),
      hydrated: true,
    });
  },
  add: (product) => {
    const exists = get().items.some((item) => item.id === product.id);
    const items = exists
      ? get().items
      : [
          ...get().items,
          {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            href: product.href,
          },
        ];
    set({ items });
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  },
  remove: (id) => {
    const items = get().items.filter((item) => item.id !== id);
    set({ items });
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  },
  setLead: (email) => {
    window.localStorage.setItem(LEAD_KEY, email.trim().toLowerCase());
    set({ hasLead: true });
  },
}));
