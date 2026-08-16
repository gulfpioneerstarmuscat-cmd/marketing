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
      const categorySelect = form.querySelector("#quote-category");
      const branchSelect = form.querySelector("#quote-branch");
      const messageInput = form.querySelector("#quote-message");

      const name = nameInput ? nameInput.value.trim() : "";
      const phone = phoneInput ? phoneInput.value.trim() : "";
      const category = categorySelect ? categorySelect.value : "Gate Automation";
      const branchVal = branchSelect ? branchSelect.value : "Al Khoudh Branch";
      const message = messageInput ? messageInput.value.trim() : "";

      if (!name || !phone) {
        if (formStatus) {
          formStatus.textContent = "Please fill in your full name and phone number.";
          formStatus.className = "form-status status-message error";
          formStatus.style.display = "block";
        }
        return;
      }

      // Branch phone routing
      let targetWhatsAppNumber = "96891214949"; // Default Al Khoudh
      let branchLabel = "Al Khoudh Branch";

      if (branchVal.toLowerCase().includes("ghala")) {
        targetWhatsAppNumber = "96897440010";
        branchLabel = "Ghala Branch";
      } else {
        targetWhatsAppNumber = "96891214949";
        branchLabel = "Al Khoudh Branch";
      }

      // Build formatted WhatsApp markdown message
      let waMessage = `*New Quotation Request - GPS Muscat*\n\n`;
      waMessage += `*Full Name:* ${name}\n`;
      waMessage += `*Phone / WhatsApp:* ${phone}\n`;
      waMessage += `*Product Category:* ${category}\n`;
      waMessage += `*Preferred Branch:* ${branchLabel}\n`;
      if (message) {
        waMessage += `*Message / Requirements:* ${message}\n`;
      }

      const encodedMessage = encodeURIComponent(waMessage);
      const waUrl = `https://api.whatsapp.com/send?phone=${targetWhatsAppNumber}&text=${encodedMessage}`;

      // Universal cross-platform launch (bypasses popup blockers on desktop & mobile)
      const link = document.createElement("a");
      link.href = waUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      if (formStatus) {
        formStatus.textContent = `Connecting you to WhatsApp (${branchLabel})... Thank you, ${name}!`;
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
