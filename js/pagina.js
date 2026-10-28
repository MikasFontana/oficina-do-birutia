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
    // os 3 últimos lançamentos ficam em vidro vermelho; os demais alternam roxo e laranja
    var colorir = function () {
      var agora = agoraMs();
      var cartoes = Array.prototype.slice.call(grade.children);
      var recentes = cartoes.filter(function (li) {
        var d = Date.parse(li.getAttribute("data-lancamento") || "");
        return !li.classList.contains("bloqueada") && d <= agora;
      }).sort(function (a, b) { return Date.parse(b.getAttribute("data-lancamento")) - Date.parse(a.getAttribute("data-lancamento")); }).slice(0, 3);
      var n = 0;
      cartoes.forEach(function (li) {
        var vermelho = recentes.indexOf(li) !== -1;
        li.classList.toggle("t-vermelho", vermelho);
        var tag = li.querySelector(".tag-dia");
        if (vermelho && !tag) { tag = document.createElement("span"); tag.className = "tag-dia"; tag.textContent = "Lançamento do dia"; li.insertBefore(tag, li.firstChild); }
        if (!vermelho && tag) tag.remove();
        if (li.classList.contains("bloqueada")) return;
        li.classList.remove("t-roxo", "t-laranja");
        if (!vermelho) li.classList.add(n++ % 2 === 0 ? "t-roxo" : "t-laranja");
      });
    };
    var atualizar = function () {
      Array.prototype.forEach.call(grade.querySelectorAll("[data-libera]"), function (li) {
        var alvo = Date.parse(li.getAttribute("data-libera"));
        var chegou = alvo <= agoraMs();
        if (chegou && li.querySelector("a[href]")) {
          li.classList.remove("bloqueada", "t-tracejada");
          li.setAttribute("data-cats", li.getAttribute("data-cats").replace("embreve", "guias"));
          var c = li.querySelector(".cadeado"); if (c) c.remove();
          var b = li.querySelector(".conteudo-borrado"); if (b) b.remove();
        } else {
          var r = li.querySelector(".regressiva");
          if (r) r.textContent = chegou ? "Chegando em instantes" : texto(alvo - agoraMs());
        }
      });
      ordenar();
      avisar();
      colorir();
    };
    // ordem da grade: 1) lançamentos manuais (os que postamos à mão, mais novo primeiro) sempre na frente;
    // 2) estreias automáticas já abertas (mais nova primeiro); 3) os antigos como já estavam;
    // 4) os que ainda vão abrir, do mais próximo ao mais distante
    var INICIO_AUTOMATICO = Date.parse("2026-10-29T00:00"); // o que tem data antes disso foi lançado à mão
    var ordemOriginal = Array.prototype.slice.call(grade.children);
    var ordenar = function () {
      var ms = function (li) { return Date.parse(li.getAttribute("data-libera") || ""); };
      var lanc = function (li) { return Date.parse(li.getAttribute("data-lancamento") || "") || 0; };
      var abertos = ordemOriginal.filter(function (li) { return !li.classList.contains("bloqueada"); });
      var manual = function (li) { return !!li.querySelector(".selo") || (li.hasAttribute("data-libera") && ms(li) < INICIO_AUTOMATICO); };
      var manuais = abertos.filter(manual).sort(function (a, b) { return lanc(b) - lanc(a); });
      abertos = abertos.filter(function (li) { return manuais.indexOf(li) === -1; });
      var estreias = abertos.filter(function (li) { return li.hasAttribute("data-libera"); }).sort(function (a, b) { return ms(b) - ms(a); });
      var antigos = abertos.filter(function (li) { return !li.hasAttribute("data-libera"); });
      var fechados = ordemOriginal.filter(function (li) { return li.classList.contains("bloqueada"); }).sort(function (a, b) {
        var pa = a.querySelector("a[href]") ? 0 : 1, pb = b.querySelector("a[href]") ? 0 : 1; // guias prontos antes dos "em preparação"
        return pa - pb || ms(a) - ms(b);
      });
      var nova = manuais.concat(estreias, antigos, fechados);
      var igual = nova.every(function (li, i) { return grade.children[i] === li; });
      if (!igual) nova.forEach(function (li) { grade.appendChild(li); });
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
