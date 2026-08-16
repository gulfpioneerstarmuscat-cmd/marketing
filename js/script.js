/**
 * GPS Muscat Main Application Script
 * Master entrypoint loading modular feature controllers.
 */

import { initNavigation } from "./modules/navigation.js";
import { initCarousel } from "./modules/carousel.js";
import { initWhatsAppLinks } from "./modules/whatsapp.js";
import { initBackToTop } from "./modules/backToTop.js";
import { initQuoteModal } from "./modules/quoteModal.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    initNavigation();
    initCarousel();
    initWhatsAppLinks();
    initBackToTop();
    initQuoteModal();
  } catch (error) {
    console.error("GPS Muscat application initialization error:", error);
  }
});
