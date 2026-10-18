// Visor de capturas: toque una imagen para verla completa.
(function () {
  var dlg = document.getElementById("visor");
  if (!dlg) return;
  var img = dlg.querySelector("img"), cap = dlg.querySelector("p");
  document.querySelectorAll("button.shot").forEach(function (b) {
    b.addEventListener("click", function () {
      var i = b.querySelector("img");
      img.src = i.currentSrc || i.src;
      img.alt = i.alt;
      cap.textContent = b.getAttribute("data-cap") || i.alt;
      if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
    });
  });
  dlg.querySelector(".close").addEventListener("click", function () { dlg.close(); });
  dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
})();
