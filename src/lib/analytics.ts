/**
 * Analytics event tracking utility for Saini Nexus
 * Integrates with Google Analytics 4 (GA4) without throwing errors when GA is disabled/unset.
 */

declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(
  eventName: string,
  eventParams?: Record<string, string | number | boolean | null | undefined>
) {
  if (typeof window === "undefined") return;

  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, eventParams);
    }
    // Also push to standard dataLayer if present for GTM
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...eventParams,
      });
    }
  } catch (err) {
    // Fail silently in production
    if (process.env.NODE_ENV !== "production") {
      console.warn("Analytics event tracking error:", err);
    }
  }
}
