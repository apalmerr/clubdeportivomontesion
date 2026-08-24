(function () {
  var list = document.querySelector("[data-blog-list]");
  if (!list) return;
  var lang = list.getAttribute("data-lang") || "es";

  function t(obj) {
    return obj[lang] || obj.es || "";
  }

  fetch("/data/blog.json")
    .then(function (r) { return r.json(); })
    .then(function (data) {
      var posts = (data.posts || []).slice().sort(function (a, b) {
        return a.date < b.date ? 1 : -1;
      });
      list.innerHTML = posts.map(function (post) {
        var href = "/" + lang + "/blog/" + post.slug + ".html";
        return (
          '<a class="blog-card" href="' + href + '">' +
            '<img src="' + post.image + '" alt="" loading="lazy" width="400" height="250">' +
            '<div class="blog-card-body">' +
              "<time datetime=\"" + post.date + "\">" + post.date + "</time>" +
              "<h2>" + t(post.title) + "</h2>" +
              "<p>" + t(post.excerpt) + "</p>" +
            "</div>" +
          "</a>"
        );
      }).join("");
    })
    .catch(function () {
      list.innerHTML = "<p>No se pudo cargar el blog.</p>";
    });
})();
