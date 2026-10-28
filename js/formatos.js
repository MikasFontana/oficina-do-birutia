// Caixa "Baixar o material": a pessoa escolhe o formato e vê o ícone do que escolheu.
(function () {
  Array.prototype.forEach.call(document.querySelectorAll(".formatos"), function (caixa) {
    var radios = caixa.querySelectorAll("input[name=fmt]");
    var link = caixa.querySelector(".fmt-baixar");
    var icones = caixa.querySelectorAll(".fmt-ico");
    var nome = caixa.querySelector(".fmt-nome");
    var desc = caixa.querySelector(".fmt-desc");
    var nota = caixa.querySelector(".fmt-nota");
    function atualizar() {
      var r = caixa.querySelector("input[name=fmt]:checked");
      if (!r) return;
      link.setAttribute("href", r.getAttribute("data-href"));
      link.setAttribute("data-material", r.getAttribute("data-material"));
      link.querySelector("span").textContent = r.getAttribute("data-nome");
      nome.textContent = r.getAttribute("data-nome");
      desc.textContent = r.getAttribute("data-desc");
      Array.prototype.forEach.call(icones, function (i) {
        var mostra = i.getAttribute("data-ext") === r.value;
        i.hidden = !mostra;
        if (mostra) { i.classList.remove("fmt-pop"); void i.offsetWidth; i.classList.add("fmt-pop"); }
      });
      nota.hidden = r.value !== "md";
    }
    Array.prototype.forEach.call(radios, function (r) { r.addEventListener("change", atualizar); });
    atualizar();
  });
})();
