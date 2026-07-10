/* ==========================================================================
   O REPOUSO DO SILÊNCIO — Script partilhado (todas as páginas)
   --------------------------------------------------------------------------
   Responsável por:
   1. Modo claro / escuro (com memória e troca automática)
   2. Botão «voltar ao topo»
   3. Verso do dia (quando a página tem o elemento adequado)
   4. Transição suave da capa para a biblioteca
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. MODO CLARO / ESCURO
   - Na primeira visita segue a preferência do sistema (troca automática).
   - Depois de o leitor escolher, a escolha fica guardada em localStorage.
   -------------------------------------------------------------------------- */
(function iniciarTema() {
  const botao = document.getElementById("botaoTema");
  if (!botao) return;

  /* Atualiza o ícone consoante o tema ativo */
  function atualizarIcone() {
    const escuro = document.documentElement.getAttribute("data-theme") === "escuro";
    botao.textContent = escuro ? "☀" : "☾";
    botao.setAttribute("aria-label", escuro ? "Ativar modo claro" : "Ativar modo escuro");
  }

  botao.addEventListener("click", function () {
    const atual = document.documentElement.getAttribute("data-theme");
    const novo = atual === "escuro" ? "claro" : "escuro";
    document.documentElement.setAttribute("data-theme", novo);
    localStorage.setItem("tema", novo); // memoriza a escolha do leitor
    atualizarIcone();
  });

  /* Troca automática: acompanha o sistema enquanto o leitor não escolher */
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
    if (!localStorage.getItem("tema")) {
      document.documentElement.setAttribute("data-theme", e.matches ? "escuro" : "claro");
      atualizarIcone();
    }
  });

  atualizarIcone();
})();

/* --------------------------------------------------------------------------
   2. BOTÃO «VOLTAR AO TOPO»
   Aparece suavemente depois de 400px de scroll.
   -------------------------------------------------------------------------- */
(function iniciarVoltarTopo() {
  const botao = document.getElementById("voltarTopo");
  if (!botao) return;

  window.addEventListener("scroll", function () {
    botao.classList.toggle("visivel", window.scrollY > 400);
  }, { passive: true });

  botao.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();

/* --------------------------------------------------------------------------
   3. VERSO DO DIA
   Escolhido pelo dia do ano — o mesmo verso durante todo o dia.
   -------------------------------------------------------------------------- */
(function iniciarVersoDoDia() {
  const alvo = document.getElementById("versoDoDia");
  if (!alvo || typeof VERSOS === "undefined") return;

  const agora = new Date();
  const inicioDoAno = new Date(agora.getFullYear(), 0, 0);
  const diaDoAno = Math.floor((agora - inicioDoAno) / 86400000);

  alvo.textContent = "“" + VERSOS[diaDoAno % VERSOS.length] + "”";
})();

/* --------------------------------------------------------------------------
   4. TRANSIÇÃO DA CAPA
   O botão «Entrar» desvanece a página antes de abrir a biblioteca.
   -------------------------------------------------------------------------- */
(function iniciarEntrada() {
  const botao = document.getElementById("botaoEntrar");
  if (!botao) return;

  botao.addEventListener("click", function (evento) {
    evento.preventDefault();
    const destino = botao.getAttribute("href");
    document.body.classList.add("a-sair");
    setTimeout(function () {
      window.location.href = destino;
    }, 750); // espera pelo fim da animação de saída
  });
})();
