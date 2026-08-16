/**
 * WhatsApp Dynamic Link Module
 * Formats WhatsApp URL parameters dynamically based on user screen viewport.
 */
export function initWhatsAppLinks() {
  const whatsappLinks = document.querySelectorAll(".whatsapp-link");
  if (whatsappLinks.length === 0) return;

  const updateWhatsAppUrls = () => {
    const isMobileViewport = window.matchMedia("(max-width: 860px)").matches;

    whatsappLinks.forEach((link) => {
      const phone = link.dataset.phone;
      if (!phone) return;

      link.href = isMobileViewport
        ? `https://wa.me/${phone}`
        : `https://web.whatsapp.com/send?phone=${phone}`;
    });
  };

  updateWhatsAppUrls();

  // Listen for viewport changes
  const mediaQuery = window.matchMedia("(max-width: 860px)");
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener("change", updateWhatsAppUrls);
  } else {
    window.addEventListener("resize", updateWhatsAppUrls);
  }
}
