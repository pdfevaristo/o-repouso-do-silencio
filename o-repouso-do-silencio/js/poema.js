/* ==========================================================================
   O REPOUSO DO SILÊNCIO — Página do poema
   --------------------------------------------------------------------------
   Responsável por:
   1. Barra de progresso da leitura
   2. Revelação suave das estrofes durante o scroll
   3. Botões «Anterior» e «Próximo» (navegação circular via js/poemas.js)
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. BARRA DE PROGRESSO DA LEITURA
   -------------------------------------------------------------------------- */
(function iniciarProgresso() {
  const barra = document.getElementById("barraProgresso");
  if (!barra) return;

  function atualizar() {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const progresso = total > 0 ? (window.scrollY / total) * 100 : 100;
    barra.style.width = progresso + "%";
  }

  window.addEventListener("scroll", atualizar, { passive: true });
  window.addEventListener("resize", atualizar);
  atualizar();
})();

/* --------------------------------------------------------------------------
   2. REVELAÇÃO SUAVE DAS ESTROFES
   Cada estrofe surge lentamente quando entra no ecrã.
   -------------------------------------------------------------------------- */
(function iniciarRevelacao() {
  const estrofes = document.querySelectorAll(".poema-texto p");
  if (estrofes.length === 0) return;

  const observador = new IntersectionObserver(
    function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visivel");
          observador.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  estrofes.forEach(function (estrofe, indice) {
    estrofe.style.transitionDelay = Math.min(indice * 0.12, 0.5) + "s";
    observador.observe(estrofe);
  });
})();

/* --------------------------------------------------------------------------
   3. NAVEGAÇÃO ANTERIOR / PRÓXIMO
   O poema atual é identificado pelo atributo data-poema no <html>.
   -------------------------------------------------------------------------- */
(function iniciarNavegacao() {
  const anterior = document.getElementById("poemaAnterior");
  const proximo = document.getElementById("poemaProximo");
  if (!anterior || !proximo || typeof POEMAS === "undefined") return;

  const slugAtual = document.documentElement.getAttribute("data-poema");
  const indice = POEMAS.findIndex(function (p) { return p.slug === slugAtual; });
  if (indice === -1) return;

  /* Navegação circular: do último volta ao primeiro e vice-versa */
  const poemaAnterior = POEMAS[(indice - 1 + POEMAS.length) % POEMAS.length];
  const poemaProximo = POEMAS[(indice + 1) % POEMAS.length];

  anterior.href = poemaAnterior.slug + ".html";
  anterior.title = poemaAnterior.titulo;

  proximo.href = poemaProximo.slug + ".html";
  proximo.title = poemaProximo.titulo;
})();
