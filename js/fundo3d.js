// Formas 3D flutuando ao fundo (roxo, laranja e chumbo), com paralaxe do mouse e da rolagem.
(function () {
  var canvas = document.getElementById("fundo3d");
  if (!canvas) return;
  var reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var tentativas = 0;

  function iniciar() {
    if (!window.THREE) {
      if (tentativas++ < 40) return setTimeout(iniciar, 100);
      canvas.style.display = "none"; // sem a biblioteca, a página segue só com o fundo em CSS
      return;
    }
    var T = window.THREE;
    var renderer;
    try {
      renderer = new T.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    } catch (e) {
      canvas.style.display = "none";
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    var cena = new T.Scene();
    var camera = new T.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 15;
    cena.add(new T.AmbientLight(0xffffff, 0.6));
    var luz1 = new T.DirectionalLight(0xffffff, 0.9);
    luz1.position.set(5, 8, 10);
    cena.add(luz1);
    var luz2 = new T.DirectionalLight(0xff7f00, 0.7);
    luz2.position.set(-9, -5, 4);
    cena.add(luz2);

    // aleatório com semente, para o desenho ser sempre o mesmo
    var s = 7;
    function rnd() { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }

    var geos = [
      new T.IcosahedronGeometry(1, 0),
      new T.OctahedronGeometry(1, 0),
      new T.TorusGeometry(0.85, 0.3, 14, 30),
      new T.BoxGeometry(1.3, 1.3, 1.3),
      new T.TetrahedronGeometry(1.2, 0),
      new T.CylinderGeometry(0.8, 0.8, 0.55, 6)
    ];
    var cores = [0x6236c7, 0x8a63f0, 0xff7f00, 0x3a3d44, 0x6236c7];
    var formas = [];
    var N = window.innerWidth < 700 ? 11 : 18;
    for (var i = 0; i < N; i++) {
      var cor = cores[Math.floor(rnd() * cores.length)];
      var fio = rnd() < 0.28;
      var mat = new T.MeshStandardMaterial({ color: cor, flatShading: true, roughness: 0.45, metalness: 0.15, wireframe: fio, transparent: true, opacity: fio ? 0.55 : 0.92 });
      var m = new T.Mesh(geos[Math.floor(rnd() * geos.length)], mat);
      m.position.set((rnd() - 0.5) * 30, (rnd() - 0.5) * 18, -13 + rnd() * 9);
      var e = 0.45 + rnd() * 0.8;
      m.scale.set(e, e, e);
      m.userData = { vx: (rnd() - 0.5) * 0.012, vy: (rnd() - 0.5) * 0.012, fase: rnd() * 6.28, amp: 0.4 + rnd() * 0.8, y0: m.position.y, x0: m.position.x };
      cena.add(m);
      formas.push(m);
    }

    function medir() {
      var w = window.innerWidth, h = window.innerHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    medir();
    window.addEventListener("resize", medir);

    var alvoX = 0, alvoY = 0, rolagem = 0;
    window.addEventListener("pointermove", function (e) {
      alvoX = (e.clientX / window.innerWidth - 0.5) * 2;
      alvoY = (e.clientY / window.innerHeight - 0.5) * 2;
    });
    window.addEventListener("scroll", function () { rolagem = window.scrollY; }, { passive: true });

    var t0 = performance.now();
    var parado = false;
    document.addEventListener("visibilitychange", function () { parado = document.hidden; if (!parado) quadro(); });

    function quadro() {
      if (parado) return;
      var t = (performance.now() - t0) / 1000;
      if (!reduzir) {
        formas.forEach(function (m) {
          var d = m.userData;
          m.rotation.x += d.vx;
          m.rotation.y += d.vy + 0.004;
          m.position.y = d.y0 + Math.sin(t * 0.5 + d.fase) * d.amp;
          m.position.x = d.x0 + Math.cos(t * 0.35 + d.fase) * d.amp * 0.6;
        });
        camera.position.x += (alvoX * 1.2 - camera.position.x) * 0.03;
        camera.position.y += (-alvoY * 0.8 - rolagem * 0.004 - camera.position.y) * 0.03;
        camera.lookAt(0, -rolagem * 0.003, 0);
      }
      renderer.render(cena, camera);
      if (!reduzir) requestAnimationFrame(quadro);
    }
    quadro();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", iniciar);
  else iniciar();
})();
