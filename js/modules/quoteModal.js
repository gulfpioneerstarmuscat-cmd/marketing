/**
 * Quote Request Modal Module
 * Controls opening, closing, keyboard traps, and submission validation
 * for the interactive sales quote request modal.
 */
export function initQuoteModal() {
  const quoteModal = document.getElementById("quote-modal");
  const closeBtn = document.getElementById("modal-close");
  const form = document.getElementById("quote-form");
  const formStatus = document.getElementById("form-status");

  if (!quoteModal) return;

  const openModal = (productCategory = "") => {
    quoteModal.classList.add("is-open");
    quoteModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    if (productCategory && form) {
      const categorySelect = form.querySelector("#quote-category");
      if (categorySelect) {
        categorySelect.value = productCategory;
      }
    }

    const firstInput = quoteModal.querySelector("input, select, textarea");
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 100);
    }
  };

  const closeModal = () => {
    quoteModal.classList.remove("is-open");
    quoteModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (formStatus) {
      formStatus.style.display = "none";
      formStatus.className = "form-status status-message";
    }
  };

  // Attach open triggers to CTA buttons
  const triggerButtons = document.querySelectorAll("[data-open-quote]");
  triggerButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const category = button.getAttribute("data-category") || "";
      openModal(category);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  quoteModal.addEventListener("click", (e) => {
    if (e.target === quoteModal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && quoteModal.classList.contains("is-open")) {
      closeModal();
    }
  });

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = form.querySelector("#quote-name");
      const phoneInput = form.querySelector("#quote-phone");

      const name = nameInput ? nameInput.value.trim() : "";
      const phone = phoneInput ? phoneInput.value.trim() : "";

      if (!name || !phone) {
        if (formStatus) {
          formStatus.textContent = "Please fill in your name and phone number.";
          formStatus.className = "form-status status-message error";
          formStatus.style.display = "block";
        }
        return;
      }

      if (formStatus) {
        formStatus.textContent = `Thank you, ${name}! Your quotation request has been received. Our sales team will contact you shortly.`;
        formStatus.className = "form-status status-message success";
        formStatus.style.display = "block";
      }

      form.reset();
      setTimeout(() => {
        closeModal();
      }, 3500);
    });
  }
}
