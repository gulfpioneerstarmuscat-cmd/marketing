const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const navLinks = siteNav ? siteNav.querySelectorAll("a") : [];

if (menuToggle && siteNav) {
  const setMenuState = (isOpen) => {
    siteNav.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.contains("is-open");
    setMenuState(!isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  document.addEventListener("click", (event) => {
    const clickedOutsideNav =
      !siteNav.contains(event.target) && !menuToggle.contains(event.target);

    if (clickedOutsideNav) {
      setMenuState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuState(false);
    }
  });
}

const whatsappLinks = document.querySelectorAll(".whatsapp-link");
const isMobileViewport = window.matchMedia("(max-width: 860px)").matches;

whatsappLinks.forEach((link) => {
  const phone = link.dataset.phone;

  if (!phone) return;

  link.href = isMobileViewport
    ? `https://wa.me/${phone}`
    : `https://web.whatsapp.com/send?phone=${phone}`;
});

const promoCarousel = document.getElementById("promoCarousel");
const promoPrev = document.getElementById("promoPrev");
const promoNext = document.getElementById("promoNext");
const promoSlides = promoCarousel
  ? Array.from(promoCarousel.querySelectorAll(".promo-slide"))
  : [];

if (promoSlides.length && promoPrev && promoNext) {
  let currentPromo = 0;

  const showPromo = (index) => {
    promoSlides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === index;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive));
    });
  };

  const goToPreviousPromo = () => {
    currentPromo = (currentPromo - 1 + promoSlides.length) % promoSlides.length;
    showPromo(currentPromo);
  };

  const goToNextPromo = () => {
    currentPromo = (currentPromo + 1) % promoSlides.length;
    showPromo(currentPromo);
  };

  promoPrev.addEventListener("click", goToPreviousPromo);
  promoNext.addEventListener("click", goToNextPromo);

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      goToPreviousPromo();
    }

    if (event.key === "ArrowRight") {
      goToNextPromo();
    }
  });

  showPromo(currentPromo);
}

const backToTopButton = document.getElementById("backToTop");
const siteFooter = document.querySelector(".site-footer");

if (backToTopButton) {
  const defaultBottom = window.innerWidth <= 860 ? 16 : 24;
  const footerGap = 16;

  const updateBackToTopButton = () => {
    backToTopButton.classList.toggle("is-visible", window.scrollY > 300);

    if (!siteFooter) return;

    const footerRect = siteFooter.getBoundingClientRect();
    const overlap =
      window.innerHeight - footerRect.top + defaultBottom + footerGap;

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

  window.addEventListener("scroll", updateBackToTopButton);
  window.addEventListener("resize", updateBackToTopButton);

  updateBackToTopButton();
}
