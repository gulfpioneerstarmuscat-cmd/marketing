/**
 * Promotions Carousel Module
 * Live-data driven slide carousel fetching active promo posters and JSON metadata
 * from assets/promo/img/ and assets/promo/txt/. Supports 1 to 10 max dynamic slides,
 * indicator dots, touch swipe, keyboard arrows, and auto-play timer.
 */
export function initCarousel() {
  const promoCarousel = document.getElementById("promo-carousel");
  const promoPrev = document.getElementById("promo-prev");
  const promoNext = document.getElementById("promo-next");
  const promoShell = document.getElementById("promo-shell") || document.querySelector(".promo-shell");

  if (!promoCarousel || !promoPrev || !promoNext) return;

  let currentPromo = 0;
  let autoPlayTimer = null;
  let promoSlides = [];

  // Helper to re-bind quote modal triggers on dynamically added slides
  const rebindModalTriggers = () => {
    const triggerButtons = promoCarousel.querySelectorAll("[data-open-quote]");
    const quoteModal = document.getElementById("quote-modal");
    if (!quoteModal) return;

    triggerButtons.forEach((button) => {
      button.removeEventListener("click", button._quoteHandler);
      const handler = (e) => {
        e.preventDefault();
        const category = button.getAttribute("data-category") || "";
        quoteModal.classList.add("is-open");
        quoteModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        const categorySelect = quoteModal.querySelector("#quote-category");
        if (categorySelect && category) {
          categorySelect.value = category;
        }
      };
      button._quoteHandler = handler;
      button.addEventListener("click", handler);
    });
  };

  // Helper to build slide HTML from JSON metadata
  const buildSlideElement = (promo, index) => {
    const article = document.createElement("article");
    article.id = `promo-slide-${index + 1}`;
    article.className = `promo-slide ${index === 0 ? "promo-slide-active is-active" : ""}`;
    article.setAttribute("aria-hidden", String(index !== 0));

    const validTillHtml = promo.validTill
      ? `<span class="valid-till-badge">⏱ Valid until: ${promo.validTill}</span>`
      : "";

    const tagHtml = promo.tag
      ? `<p id="promo-tag-${index + 1}" class="promo-tag slide-tag">${promo.tag}</p>`
      : "";

    const ctaText = promo.ctaText || "Request Quote";
    const ctaCategory = promo.ctaCategory || "Gate Automation";
    const imageSrc = `./assets/promo/img/${promo.image}`;

    article.innerHTML = `
      <div id="promo-content-${index + 1}" class="promo-content slide-content">
        ${tagHtml}
        ${validTillHtml}
        <h3 id="promo-title-${index + 1}" class="title slide-title">${promo.title || promo.product}</h3>
        <p id="promo-desc-${index + 1}" class="text slide-desc">${promo.description}</p>
        <button
          id="promo-cta-${index + 1}"
          class="btn btn-primary slide-cta"
          type="button"
          data-open-quote
          data-category="${ctaCategory}"
        >
          ${ctaText}
        </button>
      </div>

      <div id="promo-graphic-${index + 1}" class="promo-media-frame visual-graphic-promo">
        <img
          id="promo-story-img-${index + 1}"
          src="${imageSrc}"
          alt="${promo.title || promo.product}"
          class="promo-story-image story-image"
          width="1080"
          height="1920"
          loading="lazy"
        />
      </div>
    `;

    return article;
  };

  // Initialize controls and auto-play after slides are rendered
  const setupControls = () => {
    promoSlides = Array.from(promoCarousel.querySelectorAll(".promo-slide"));
    const slideCount = promoSlides.length;

    // Existing dots cleanup
    let dotsContainer = promoShell.querySelector(".promo-dots");
    if (dotsContainer) {
      dotsContainer.innerHTML = "";
    }

    if (slideCount <= 1) {
      promoPrev.style.display = "none";
      promoNext.style.display = "none";
      if (dotsContainer) dotsContainer.style.display = "none";
      showPromo(0);
      rebindModalTriggers();
      return;
    } else {
      promoPrev.style.display = "inline-flex";
      promoNext.style.display = "inline-flex";
    }

    if (!dotsContainer) {
      dotsContainer = document.createElement("div");
      dotsContainer.id = "promo-dots";
      dotsContainer.className = "promo-dots carousel-dots";
      dotsContainer.setAttribute("role", "tablist");
      dotsContainer.setAttribute("aria-label", "Slide indicators");
      promoShell.appendChild(dotsContainer);
    }
    dotsContainer.style.display = "flex";

    const dots = promoSlides.map((_, index) => {
      const dot = document.createElement("button");
      dot.id = `promo-dot-${index + 1}`;
      dot.className = `promo-dot carousel-dot ${index === 0 ? "is-active" : ""}`;
      dot.type = "button";
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
      dot.setAttribute("aria-selected", String(index === 0));
      dot.addEventListener("click", () => goToPromo(index));
      dotsContainer.appendChild(dot);
      return dot;
    });

    const showPromo = (index) => {
      promoSlides.forEach((slide, slideIndex) => {
        const isActive = slideIndex === index;
        slide.classList.toggle("is-active", isActive);
        slide.setAttribute("aria-hidden", String(!isActive));
      });

      dots.forEach((dot, dotIndex) => {
        const isActive = dotIndex === index;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-selected", String(isActive));
      });
    };

    const goToPromo = (index) => {
      currentPromo = (index + promoSlides.length) % promoSlides.length;
      showPromo(currentPromo);
      resetAutoPlay();
    };

    const goToPreviousPromo = () => {
      goToPromo(currentPromo - 1);
    };

    const goToNextPromo = () => {
      goToPromo(currentPromo + 1);
    };

    // Remove prior listeners to avoid duplication
    promoPrev.onclick = goToPreviousPromo;
    promoNext.onclick = goToNextPromo;

    const SLIDE_DURATION = 6000;
    let slideStartTime = Date.now();
    let remainingTime = SLIDE_DURATION;

    const startAutoPlay = (duration = SLIDE_DURATION) => {
      if (slideCount <= 1) return;
      stopAutoPlay();
      slideStartTime = Date.now();
      remainingTime = duration;
      autoPlayTimer = setTimeout(() => {
        autoPlayTimer = null;
        goToNextPromo();
      }, duration);
    };

    const stopAutoPlay = () => {
      if (autoPlayTimer) {
        clearTimeout(autoPlayTimer);
        autoPlayTimer = null;
        const elapsed = Date.now() - slideStartTime;
        remainingTime = Math.max(100, remainingTime - elapsed);
      }
    };

    const resumeAutoPlay = () => {
      if (slideCount <= 1) return;
      if (!autoPlayTimer && remainingTime > 0) {
        slideStartTime = Date.now();
        autoPlayTimer = setTimeout(() => {
          autoPlayTimer = null;
          goToNextPromo();
        }, remainingTime);
      }
    };

    const resetAutoPlay = () => {
      const activeDot = dotsContainer ? dotsContainer.querySelector(".promo-dot.is-active") : null;
      if (activeDot) {
        activeDot.classList.remove("is-active");
        void activeDot.offsetWidth;
        activeDot.classList.add("is-active");
      }
      startAutoPlay(SLIDE_DURATION);
    };

    if (promoShell) {
      promoShell.onmouseenter = stopAutoPlay;
      promoShell.onmouseleave = resumeAutoPlay;
    }

    showPromo(currentPromo);
    startAutoPlay();
    rebindModalTriggers();
  };

  const showPromo = (index) => {
    promoSlides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === index;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive));
    });
  };

  // Touch Swipe Support
  let touchStartX = 0;
  let touchEndX = 0;

  promoCarousel.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  promoCarousel.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const swipeDistance = touchEndX - touchStartX;
    if (Math.abs(swipeDistance) > 40 && promoSlides.length > 1) {
      if (swipeDistance < 0) {
        currentPromo = (currentPromo + 1) % promoSlides.length;
      } else {
        currentPromo = (currentPromo - 1 + promoSlides.length) % promoSlides.length;
      }
      setupControls();
    }
  }, { passive: true });

  // Fetch Live Data from manifest.json and txt/*.json
  fetch("./assets/promo/manifest.json")
    .then((res) => {
      if (!res.ok) throw new Error("Manifest not found");
      return res.json();
    })
    .then((manifest) => {
      if (!Array.isArray(manifest) || manifest.length === 0) {
        setupControls();
        return;
      }

      // Limit to 10 max promos
      const activeIds = manifest.slice(0, 10);
      const jsonPromises = activeIds.map((id) =>
        fetch(`./assets/promo/txt/${id}.json`)
          .then((res) => (res.ok ? res.json() : null))
          .catch(() => null)
      );

      return Promise.all(jsonPromises);
    })
    .then((promoDataList) => {
      if (!promoDataList) {
        setupControls();
        return;
      }

      const validPromos = promoDataList.filter(Boolean);
      if (validPromos.length === 0) {
        setupControls();
        return;
      }

      // Clear static placeholder slides and render live slides
      promoCarousel.innerHTML = "";
      validPromos.forEach((promo, index) => {
        const slideEl = buildSlideElement(promo, index);
        promoCarousel.appendChild(slideEl);
      });

      setupControls();
    })
    .catch((err) => {
      console.warn("Live promo data fetch fallback:", err);
      // Fallback to static slides in HTML
      setupControls();
    });
}
