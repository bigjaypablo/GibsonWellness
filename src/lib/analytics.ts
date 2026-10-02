/**
 * Tracking placeholders for Google Tag Manager and Meta Pixel.
 * Wire real IDs in production by loading GTM/Pixel in the document shell
 * and leaving these event names unchanged.
 */

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    fbq?: (...args: unknown[]) => void;
  }
}

function pushDataLayer(event: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(event);
}

export function trackLeadCapture() {
  pushDataLayer({ event: "lead_capture", content_name: "5-day-gut-health-guide" });
  window.fbq?.("track", "Lead", { content_name: "5-Day Gut Health & Morning Routine Guide" });
}

export function trackProductClick(productName: string) {
  pushDataLayer({ event: "product_click", product_name: productName });
  window.fbq?.("track", "ViewContent", {
    content_name: productName,
    content_type: "product",
  });
}

export function trackShopClick(productName: string) {
  pushDataLayer({ event: "initiate_checkout", product_name: productName });
  window.fbq?.("track", "InitiateCheckout", { content_name: productName });
}

export function trackGuideView() {
  pushDataLayer({ event: "guide_view", content_name: "5-day-gut-health-guide" });
  window.fbq?.("trackCustom", "GuideView");
}
