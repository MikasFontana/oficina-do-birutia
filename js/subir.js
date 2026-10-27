// Botão do mascote: aparece ao rolar a página e leva de volta ao topo.
(function () {
  var b = document.createElement("button");
  b.type = "button"; b.className = "subir"; b.hidden = true;
  b.setAttribute("aria-label", "Voltar ao topo");
  b.innerHTML = '<img src="img/biruta-cima.svg" alt="" width="84" height="99">';
  document.body.appendChild(b);
  var calmo = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  b.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: calmo ? "auto" : "smooth" }); });
  var mostra = function () { b.hidden = window.scrollY < 500; };
  window.addEventListener("scroll", mostra, { passive: true });
  mostra();
})();
