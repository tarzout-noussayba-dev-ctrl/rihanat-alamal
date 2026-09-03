(function () {
  "use strict";

  function initMobileNav() {
    var toggle = document.getElementById("navToggle");
    var nav = document.getElementById("siteNav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function setFooterYear() {
    var footerText = document.querySelector(".credit + p, .footer-inner p[data-year]");
    document.querySelectorAll("[data-year-text]").forEach(function (el) {
      el.textContent = el.textContent.replace("{year}", new Date().getFullYear());
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initMobileNav();
    setFooterYear();
  });
})();