const initScrollReveal = () => {
  const revealElements = Array.from(
    document.querySelectorAll<HTMLElement>("[data-scroll-reveal]"),
  );

  if (revealElements.length === 0) {
    return;
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReducedMotion) {
    revealElements.forEach((element) => {
      element.classList.add("scroll-reveal--visible");
    });
    return;
  }

  document.documentElement.classList.add("scroll-reveal-enabled");

  const revealVisibleElements = () => {
    const viewportHeight = window.innerHeight;

    revealElements.forEach((element) => {
      if (element.classList.contains("scroll-reveal--visible")) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const revealPoint = viewportHeight * 0.88;

      if (rect.top <= revealPoint && rect.bottom >= 0) {
        element.classList.add("scroll-reveal--visible");
      }
    });
  };

  let ticking = false;

  const handleScroll = () => {
    if (ticking) {
      return;
    }

    ticking = true;

    window.requestAnimationFrame(() => {
      revealVisibleElements();
      ticking = false;
    });
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", revealVisibleElements);

  revealVisibleElements();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initScrollReveal);
} else {
  initScrollReveal();
}
