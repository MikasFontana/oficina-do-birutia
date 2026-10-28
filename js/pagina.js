// Filtro, busca e olhos do Biruta.
// Links do pedido de conteúdo. Preencha e salve: o botão só aparece quando há link.
var LINK_FORMULARIO = "https://docs.google.com/forms/d/e/1FAIpQLSeSofeChquem0vQqf2tDS3412ojMrT0HfaZaZwzyaX3xc7iJw/viewform"; // Google Formulários da conta MLM
[["link-formulario", LINK_FORMULARIO]].forEach(function (p) {
  var a = document.getElementById(p[0]);
  if (a && p[1]) { a.href = p[1]; a.target = "_blank"; a.rel = "noopener"; a.hidden = false; }
});

(function () {
  var grade = document.getElementById("grade");
  if (grade) {
    // cartões com cadeado: liberam sozinhos na data (?hoje=AAAA-MM-DD simula um dia)
    var q = /[?&]hoje=(\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2})?)/.exec(location.search);
    // relógio da página: com ?hoje= ele simula o dia e segue correndo a partir dali
    var inicio = Date.now();
    var base = q ? Date.parse(q[1].length === 10 ? q[1] + "T00:00" : q[1]) : inicio;
    var agoraMs = function () { return base + (Date.now() - inicio); };
    var unidade = function (n, s, p) { return n + " " + (n === 1 ? s : p); };
    var texto = function (ms) {
      var min = Math.max(0, Math.ceil(ms / 60000));
      var d = Math.floor(min / 1440), h = Math.floor((min % 1440) / 60), m = min % 60;
      var partes = [];
      if (d) partes.push(unidade(d, "dia", "dias"));
      if (h) partes.push(unidade(h, "hora", "horas"));
      if (m || !partes.length) partes.push(unidade(m, "minuto", "minutos"));
      return "Libera em " + (partes.length > 1 ? partes.slice(0, -1).join(", ") + " e " + partes[partes.length - 1] : partes[0]);
    };
    // post-it vermelho: aponta o próximo material a liberar e leva até ele
    var postit = document.getElementById("postit");
    var diaDe = function (ms) { return new Date(ms).toDateString(); };
    var avisar = function () {
      if (!postit) return;
      var futuros = Array.prototype.slice.call(grade.querySelectorAll(".bloqueada[data-libera]")).filter(function (li) {
        return Date.parse(li.getAttribute("data-libera")) > agoraMs();
      });
      if (!futuros.length) { postit.hidden = true; return; }
      futuros.sort(function (a, b) { return Date.parse(a.getAttribute("data-libera")) - Date.parse(b.getAttribute("data-libera")); });
      var prox = futuros[0], alvo = Date.parse(prox.getAttribute("data-libera"));
      var nesseDia = futuros.filter(function (li) { return diaDe(Date.parse(li.getAttribute("data-libera"))) === diaDe(alvo); }).length;
      var tempo = texto(alvo - agoraMs());
      if (nesseDia > 1) tempo += " · mais " + (nesseDia - 1) + (nesseDia - 1 === 1 ? " no mesmo dia" : " no mesmo dia");
      postit._li = prox;
      postit.querySelector(".postit-titulo").textContent = prox.querySelector("h3").textContent;
      postit.querySelector(".postit-tempo").textContent = tempo;
      postit.hidden = false;
    };
    if (postit) postit.addEventListener("click", function (e) {
      e.preventDefault();
      var li = postit._li;
      if (!li) return;
      var todos = document.querySelector('.chip[data-filtro="todos"]');
      if (todos) todos.click();
      if (busca && busca.value) { busca.value = ""; busca.dispatchEvent(new Event("input")); }
      setTimeout(function () {
        li.scrollIntoView({ behavior: "smooth", block: "center" });
        li.classList.add("destaque-vermelho");
        setTimeout(function () { li.classList.remove("destaque-vermelho"); }, 4200);
      }, 80);
    });
    var atualizar = function () {
      Array.prototype.forEach.call(grade.querySelectorAll("[data-libera]"), function (li) {
        var alvo = Date.parse(li.getAttribute("data-libera"));
        var chegou = alvo <= agoraMs();
        if (chegou && li.querySelector("a[href]")) {
          li.classList.remove("bloqueada", "t-tracejada");
          li.setAttribute("data-cats", li.getAttribute("data-cats").replace("embreve", "guias"));
          var c = li.querySelector(".cadeado"); if (c) c.remove();
          var b = li.querySelector(".conteudo-borrado"); if (b) b.remove();
          if (Array.prototype.indexOf.call(grade.children, li) > 2) grade.insertBefore(li, grade.firstElementChild); // se abriu longe do topo, vai para o começo
        } else {
          var r = li.querySelector(".regressiva");
          if (r) r.textContent = chegou ? "Chegando em instantes" : texto(alvo - agoraMs());
        }
      });
      avisar();
    };
    atualizar();
    setInterval(atualizar, 30000);
    var itens = Array.prototype.slice.call(grade.children);
    var chips = Array.prototype.slice.call(document.querySelectorAll(".chip"));
    var busca = document.getElementById("busca");
    var vazio = document.getElementById("vazio");
    var contagem = document.getElementById("contagem");
    var filtro = "todos";

    var sem = function (t) {
      return t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
    };

    var aplicar = function () {
      var q = sem(busca.value.trim());
      var visiveis = 0;
      itens.forEach(function (li) {
        var cats = li.getAttribute("data-cats") || "";
        var texto = sem((li.getAttribute("data-texto") || "") + " " + li.textContent);
        var ok = (filtro === "todos" || cats.indexOf(filtro) !== -1) && (!q || texto.indexOf(q) !== -1);
        li.hidden = !ok;
        if (ok) visiveis++;
      });
      vazio.hidden = visiveis !== 0;
      contagem.textContent = visiveis === 1 ? "1 material" : visiveis + " materiais";
    };

    chips.forEach(function (c) {
      c.addEventListener("click", function () {
        filtro = c.getAttribute("data-filtro");
        chips.forEach(function (x) { x.setAttribute("aria-pressed", x === c ? "true" : "false"); });
        aplicar();
      });
    });
    busca.addEventListener("input", aplicar);
    document.getElementById("limpar").addEventListener("click", function () {
      busca.value = "";
      filtro = "todos";
      chips.forEach(function (x) { x.setAttribute("aria-pressed", x.getAttribute("data-filtro") === "todos" ? "true" : "false"); });
      aplicar();
    });
    aplicar();
  }

  // botão "Copiar pedido"
  Array.prototype.forEach.call(document.querySelectorAll("[data-prompt]"), function (caixa) {
    var botao = caixa.querySelector(".copiar");
    var texto = caixa.querySelector(".prompt-texto");
    botao.addEventListener("click", function () {
      var feito = function () { botao.textContent = "Copiado ✓"; setTimeout(function () { botao.textContent = "Copiar pedido"; }, 2000); };
      var selecionar = function () {
        var r = document.createRange();
        r.selectNodeContents(texto);
        var s = window.getSelection();
        s.removeAllRanges();
        s.addRange(r);
        botao.textContent = "Selecionado: Ctrl + C";
      };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(texto.textContent).then(feito, selecionar);
      else selecionar();
    });
  });

  // pupilas do Biruta seguem o cursor
  var biruta = document.getElementById("biruta");
  if (biruta && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var pupilas = biruta.querySelectorAll(".b-pupila");
    window.addEventListener("pointermove", function (e) {
      var r = biruta.getBoundingClientRect();
      var dx = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / 300)) * 7;
      var dy = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height * 0.3)) / 300)) * 5;
      pupilas.forEach(function (p) { p.style.transform = "translate(" + dx + "px," + dy + "px)"; });
    });
  }
})();
