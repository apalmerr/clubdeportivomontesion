(function () {
  function qs(sel, root) {
    return (root || document).querySelector(sel);
  }
  function qsa(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  // Mobile nav
  var toggle = qs("[data-nav-toggle]");
  var nav = qs("[data-nav]");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Remember language choice when switching
  qsa("[data-lang]").forEach(function (link) {
    link.addEventListener("click", function () {
      try {
        localStorage.setItem("montesion-lang", link.getAttribute("data-lang"));
      } catch (e) {}
    });
  });

  // Floating WhatsApp menu
  var fab = qs("[data-fab]");
  var fabMenu = qs("[data-fab-menu]");
  if (fab && fabMenu) {
    fab.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      var open = fabMenu.classList.toggle("open");
      fab.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("click", function (e) {
      if (!fab.contains(e.target) && !fabMenu.contains(e.target)) {
        fabMenu.classList.remove("open");
        fab.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Carousel
  var carousel = qs("[data-carousel]");
  if (carousel) {
    var track = qs("[data-carousel-track]", carousel);
    var slides = qsa(".carousel-slide", carousel);
    var dotsWrap = qs("[data-carousel-dots]", carousel);
    var prev = qs("[data-carousel-prev]", carousel);
    var next = qs("[data-carousel-next]", carousel);
    var index = 0;
    var timer = null;

    function go(i) {
      if (!slides.length) return;
      index = (i + slides.length) % slides.length;
      track.style.transform = "translateX(" + -index * 100 + "%)";
      qsa("button", dotsWrap).forEach(function (dot, di) {
        dot.setAttribute("aria-current", di === index ? "true" : "false");
      });
    }

    slides.forEach(function (_, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", "Slide " + (i + 1));
      b.addEventListener("click", function () {
        go(i);
        restart();
      });
      dotsWrap.appendChild(b);
    });

    if (prev) prev.addEventListener("click", function () { go(index - 1); restart(); });
    if (next) next.addEventListener("click", function () { go(index + 1); restart(); });

    function restart() {
      if (timer) clearInterval(timer);
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      timer = setInterval(function () { go(index + 1); }, 5000);
    }

    go(0);
    restart();
  }
})();
