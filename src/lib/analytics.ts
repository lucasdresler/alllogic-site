const measurementId = "G-WYZ9BBQ6YW";

let analyticsLoaded = false;

export function loadAnalytics(): void {
  if (analyticsLoaded || typeof window === "undefined") {
    return;
  }

  analyticsLoaded = true;

  window.dataLayer = window.dataLayer || [];

  window.gtag = function (...args: unknown[]) {
    window.dataLayer.push(args);
  };

  window.gtag("js", new Date());
  window.gtag("config", measurementId);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;

  document.head.appendChild(script);
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}
