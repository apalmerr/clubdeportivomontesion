(function () {
  var root = document.querySelector("[data-carta]");
  if (!root) return;

  var lang = root.getAttribute("data-lang") || "es";

  function t(obj) {
    if (!obj) return "";
    return obj[lang] || obj.es || Object.values(obj)[0] || "";
  }

  function formatPrice(n) {
    return Number(n).toLocaleString(lang === "en" ? "en-GB" : "es-ES", {
      minimumFractionDigits: Number.isInteger(n) ? 0 : 2,
      maximumFractionDigits: 2
    }) + "€";
  }

  function itemHtml(item) {
    var html = '<div class="menu-item">';
    html += '<div class="name">' + t(item.name) + "</div>";
    html += '<div class="price">' + formatPrice(item.price) + "</div>";
    if (item.desc) html += '<div class="desc">' + t(item.desc) + "</div>";
    html += "</div>";
    return html;
  }

  fetch("/data/carta.json")
    .then(function (r) { return r.json(); })
    .then(function (data) {
      var html = "";
      (data.sections || []).forEach(function (section) {
        html += '<section class="menu-section" id="' + section.id + '">';
        html += "<h2>" + t(section.title) + "</h2>";
        if (section.note) html += '<p class="note">' + t(section.note) + "</p>";

        if (section.groups) {
          section.groups.forEach(function (group) {
            html += '<div class="menu-group">';
            html += "<h3>" + t(group.title) + "</h3>";
            if (group.note) html += '<p class="note">' + t(group.note) + "</p>";
            (group.items || []).forEach(function (item) {
              html += itemHtml(item);
            });
            html += "</div>";
          });
        }

        if (section.items) {
          section.items.forEach(function (item) {
            html += itemHtml(item);
          });
        }
        html += "</section>";
      });
      root.innerHTML = html;
    })
    .catch(function () {
      root.innerHTML = "<p>No se pudo cargar la carta. Revisa <code>data/carta.json</code>.</p>";
    });
})();
