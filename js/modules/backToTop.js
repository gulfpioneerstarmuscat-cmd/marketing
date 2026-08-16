/**
 * Back to Top Button Module
 * Handles scroll visibility, smooth scrolling to page top, and dynamic
 * position calculation to avoid overlapping the site footer.
 */
export function initBackToTop() {
  const backToTopButton = document.getElementById("back-to-top");
  const siteFooter = document.getElementById("site-footer") || document.querySelector(".site-footer");

  if (!backToTopButton) return;

  const defaultBottom = window.innerWidth <= 860 ? 16 : 24;
  const footerGap = 16;

  const updateBackToTopButton = () => {
    // Visibility threshold
    backToTopButton.classList.toggle("is-visible", window.scrollY > 300);

    if (!siteFooter) return;

    // Prevent overlap with site footer
    const footerRect = siteFooter.getBoundingClientRect();
    const overlap = window.innerHeight - footerRect.top + defaultBottom + footerGap;

    if (overlap > 0) {
      backToTopButton.style.bottom = `${defaultBottom + overlap}px`;
    } else {
      backToTopButton.style.bottom = `${defaultBottom}px`;
    }
  };

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", updateBackToTopButton, { passive: true });
  window.addEventListener("resize", updateBackToTopButton, { passive: true });

  updateBackToTopButton();
}
