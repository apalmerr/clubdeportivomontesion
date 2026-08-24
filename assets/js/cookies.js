(function () {
  var KEY = "montesion-cookies";
  var banner = document.querySelector("[data-cookie-banner]");
  if (!banner) return;

  function getConsent() {
    try {
      return localStorage.getItem(KEY);
    } catch (e) {
      return null;
    }
  }

  function setConsent(value) {
    try {
      localStorage.setItem(KEY, value);
    } catch (e) {}
    banner.classList.remove("show");
  }

  if (!getConsent()) {
    banner.classList.add("show");
  }

  var accept = banner.querySelector("[data-cookie-accept]");
  var reject = banner.querySelector("[data-cookie-reject]");
  if (accept) accept.addEventListener("click", function () { setConsent("accepted"); });
  if (reject) reject.addEventListener("click", function () { setConsent("rejected"); });
})();
