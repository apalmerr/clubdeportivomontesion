/* Redirect raíz según idioma del dispositivo (fallback: es) */
(function () {
  var supported = ["es", "ca", "en"];
  var stored = null;
  try {
    stored = localStorage.getItem("montesion-lang");
  } catch (e) {}

  var chosen = null;
  if (stored && supported.indexOf(stored) !== -1) {
    chosen = stored;
  } else {
    var langs = navigator.languages || [navigator.language || "es"];
    for (var i = 0; i < langs.length; i++) {
      var code = String(langs[i]).toLowerCase().slice(0, 2);
      if (supported.indexOf(code) !== -1) {
        chosen = code;
        break;
      }
    }
  }
  if (!chosen) chosen = "es";
  window.location.replace("/" + chosen + "/");
})();
