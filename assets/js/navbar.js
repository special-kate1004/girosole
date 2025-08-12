  // Mobile menu toggle
  document
    .querySelector(".mobile-menu-btn")
    .addEventListener("click", function () {
      document.querySelector(".nav-links").classList.toggle("active");
    // Toggle menu icons
    this.querySelector(".menu-open").style.display =
      this.querySelector(".menu-open").style.display === "none" ? "block" : "none";
    this.querySelector(".menu-close").style.display =
      this.querySelector(".menu-close").style.display === "none" ? "block" : "none";
  });

// FIND A TRIP toggle
document
  .querySelector(".dropdown-toggle")
  .addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.toggle("active");
    document.querySelector(".dropdown-menu").classList.toggle("show");

    // For mobile: show accordion by default when menu opens
    if (window.innerWidth <= 817) {
      document.querySelector(".mobile-accordion").style.display = "block";
    }
  });

// Accordion behavior for mobile
const accordionHeaders = document.querySelectorAll(".accordion-header");
accordionHeaders.forEach(header => {
  header.addEventListener("click", function () {
    const item = this.closest(".accordion-item");

    // Toggle active state
    item.classList.toggle("active");

    // Close other accordions
    accordionHeaders.forEach(otherHeader => {
      const otherItem = otherHeader.closest(".accordion-item");
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });
  });
});

// Close dropdown when clicking outside
document.addEventListener("click", function (e) {
  if (!e.target.closest(".dropdown")) {
    document.querySelector(".dropdown-menu").classList.remove("show");
  }
    });