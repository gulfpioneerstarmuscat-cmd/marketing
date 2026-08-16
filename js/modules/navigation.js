/**
 * Navigation Module
 * Controls mobile navigation drawer toggle, keyboard escape listener,
 * outside click detection, and active section ScrollSpy highlighting.
 */
export function initNavigation() {
  const menuToggle = document.getElementById("menu-toggle");
  const siteNav = document.getElementById("site-nav");
  const navLinks = siteNav ? siteNav.querySelectorAll("a[href^='#']") : [];
  const sections = document.querySelectorAll("section[id]");

  if (!menuToggle || !siteNav) return;

  const setMenuState = (isOpen) => {
    siteNav.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    if (isOpen) {
      menuToggle.setAttribute("aria-label", "Close navigation menu");
    } else {
      menuToggle.setAttribute("aria-label", "Toggle navigation menu");
    }
  };

  // Toggle mobile menu drawer
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.contains("is-open");
    setMenuState(!isOpen);
  });

  // Close drawer on link click
  navLinks.forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  // Close menu on outside click
  document.addEventListener("click", (event) => {
    const clickedOutside =
      !siteNav.contains(event.target) && !menuToggle.contains(event.target);
    if (clickedOutside && siteNav.classList.contains("is-open")) {
      setMenuState(false);
    }
  });

  // Close menu on Escape key press
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && siteNav.classList.contains("is-open")) {
      setMenuState(false);
    }
  });

  // ScrollSpy: Highlight active link based on current section viewport position
  const updateScrollSpy = () => {
    const scrollPosition = window.scrollY + 120;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        navLinks.forEach((link) => {
          const href = link.getAttribute("href");
          if (href === `#${sectionId}`) {
            link.classList.add("is-active");
          } else {
            link.classList.remove("is-active");
          }
        });
      }
    });
  };

  window.addEventListener("scroll", updateScrollSpy, { passive: true });
  updateScrollSpy();
}
