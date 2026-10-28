// Sem menu do botão direito no site, exceto dentro de campos de texto (para colar).
document.addEventListener("contextmenu", function (e) {
  if (e.target.closest && e.target.closest("input, textarea")) return;
  e.preventDefault();
});

// Cadastro rápido antes de baixar: nome e e-mail vão direto para o Google Formulários (sem abrir o formulário).
(function () {
  var CADASTRO = {
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfRcSk-6FTBSt-lJjpdR6ip8xhVkG0-hbWcvU96VundUn37Fw/formResponse",
    nome: "entry.1280996861",
    email: "entry.1152016279",
    material: "entry.212069383"
  };
  var CHAVE = "birutia_cadastro";
  var NOMES = { "baixador-do-biruta.zip": "Baixador de Vídeos", "cofre-modelo.zip": "Cofre modelo (Obsidian)", "pacote-de-skills.zip": "Pacote de skills", "guia-completo-de-skills.pdf": "Guia completo de skills (PDF)", "pedido-limpar-tv.txt": "Pedido para limpar a TV", "curadoria-de-skills.txt": "Curadoria de skills", "pedidos-foto-ia.txt": "Pedidos de foto com IA" };
  var links = Array.prototype.slice.call(document.querySelectorAll("a[download]"));
  if (!links.length || !CADASTRO.url) return;

  var lido = function () { try { return localStorage.getItem(CHAVE) === "1"; } catch (e) { return false; } };
  var gravar = function () { try { localStorage.setItem(CHAVE, "1"); } catch (e) { /* sem armazenamento, pede de novo */ } };
  var CADEADO = '<svg class="icone-cadeado" viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';

  var marcar = function () {
    links.forEach(function (a) {
      var tem = a.querySelector(".icone-cadeado");
      if (lido()) { if (tem) tem.remove(); a.classList.remove("com-trava"); }
      else if (!tem) { a.insertAdjacentHTML("afterbegin", CADEADO); a.classList.add("com-trava"); a.setAttribute("title", "Cadastro rápido para baixar"); }
    });
  };
  marcar();

  var baixar = function (href) {
    var a = document.createElement("a");
    a.href = href; a.setAttribute("download", ""); a.style.display = "none";
    document.body.appendChild(a); a.click(); a.remove();
  };

  var modal, ultimo, alvo;
  var montar = function () {
    modal = document.createElement("div");
    modal.className = "modal";
    modal.hidden = true;
    modal.innerHTML =
      '<div class="modal-caixa" role="dialog" aria-modal="true" aria-labelledby="m-titulo">' +
        '<button class="modal-fechar" type="button" aria-label="Fechar">×</button>' +
        '<img class="modal-biruta" src="img/biruta.png" alt="">' +
        '<form novalidate>' +
          '<p class="cat">Download gratuito</p>' +
          '<h2 id="m-titulo">Para baixar, diga quem você é</h2>' +
          '<p class="modal-sub">Leva 10 segundos. O download começa assim que você enviar.</p>' +
          '<label for="m-nome">Nome</label><input id="m-nome" name="nome" type="text" autocomplete="name" maxlength="80">' +
          '<label for="m-email">E-mail</label><input id="m-email" name="email" type="email" autocomplete="email" maxlength="120">' +
          '<input class="armadilha" name="site" type="text" tabindex="-1" autocomplete="off" aria-hidden="true">' +
          '<p class="modal-erro" role="alert" aria-live="assertive"></p>' +
          '<button class="btn modal-enviar" type="submit">' + CADEADO + '<span>Liberar o download</span></button>' +
          '<p class="modal-lgpd"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 L20 6 V12 C20 16.5 16.5 19.8 12 21 C7.5 19.8 4 16.5 4 12 V6 Z"/><path d="M8.5 12 L11 14.5 L15.5 9.5"/></svg>' +
            '<span>Seus dados estão protegidos e são tratados conforme a Lei Geral de Proteção de Dados (LGPD, Lei 13.709/2018). Usamos só para enviar o material e as novidades da Oficina do BirutIA, e você pode pedir a exclusão quando quiser. <a href="privacidade.html">Política de privacidade</a></span></p>' +
        '</form>' +
        '<div class="modal-ok" hidden><svg viewBox="0 0 52 52" aria-hidden="true"><circle cx="26" cy="26" r="23"/><path d="M15 27 L23 35 L38 18"/></svg><h2>Liberado!</h2><p>O download já começou. Obrigado por estar aqui.</p></div>' +
      '</div>';
    document.body.appendChild(modal);
    modal.addEventListener("click", function (e) { if (e.target === modal) fechar(); });
    modal.querySelector(".modal-fechar").addEventListener("click", fechar);
    modal.querySelector("form").addEventListener("submit", enviar);
    document.addEventListener("keydown", function (e) {
      if (modal.hidden) return;
      if (e.key === "Escape") return fechar();
      if (e.key !== "Tab") return;
      var f = Array.prototype.slice.call(modal.querySelectorAll("button, input, a[href]")).filter(function (x) { return x.offsetParent !== null && !x.classList.contains("armadilha"); });
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    });
  };

  var abrir = function (a) {
    if (!modal) montar();
    alvo = a; ultimo = document.activeElement;
    modal.querySelector(".modal-caixa").className = "modal-caixa " + (a.closest(".t-roxo") ? "roxo" : "laranja");
    modal.querySelector("form").hidden = false;
    modal.querySelector(".modal-ok").hidden = true;
    modal.querySelector(".modal-erro").textContent = "";
    modal.hidden = false;
    document.documentElement.classList.add("modal-aberto");
    setTimeout(function () { modal.querySelector("#m-nome").focus(); }, 60);
  };
  var fechar = function () {
    modal.hidden = true;
    document.documentElement.classList.remove("modal-aberto");
    if (ultimo && ultimo.focus) ultimo.focus();
  };

  var enviar = function (e) {
    e.preventDefault();
    var f = e.target, nome = f.nome.value.trim(), email = f.email.value.trim(), erro = modal.querySelector(".modal-erro");
    if (f.site.value) return; // campo-armadilha preenchido: ignora
    if (nome.length < 2) { erro.textContent = "Informe o seu nome."; f.nome.focus(); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { erro.textContent = "Confira o e-mail: ele parece incompleto."; f.email.focus(); return; }
    erro.textContent = "";
    var arquivo = alvo.getAttribute("href"), material = alvo.getAttribute("data-material") || NOMES[arquivo.split("/").pop()] || arquivo.split("/").pop();
    baixar(arquivo); // dentro do clique, para o navegador permitir
    try {
      var d = new FormData();
      d.append(CADASTRO.nome, nome); d.append(CADASTRO.email, email); d.append(CADASTRO.material, material);
      fetch(CADASTRO.url, { method: "POST", mode: "no-cors", body: d, keepalive: true }).catch(function () {});
    } catch (x) { /* o download já começou; o registro é um extra */ }
    gravar(); marcar();
    f.hidden = true; modal.querySelector(".modal-ok").hidden = false;
    setTimeout(fechar, 1800);
  };

  links.forEach(function (a) {
    a.addEventListener("click", function (e) {
      if (lido()) return;
      e.preventDefault();
      abrir(a);
    });
  });
})();
