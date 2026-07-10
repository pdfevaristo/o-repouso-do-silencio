/* ==========================================================================
   O REPOUSO DO SILÊNCIO — Biblioteca
   --------------------------------------------------------------------------
   Responsável por:
   1. Desenhar os cartões dos poemas a partir de POEMAS (js/poemas.js)
   2. Pesquisa instantânea (título + descrição)
   3. Filtro por categoria
   4. Poema aleatório
   ========================================================================== */

(function iniciarBiblioteca() {
  const grelha = document.getElementById("grelha");
  const campoPesquisa = document.getElementById("campoPesquisa");
  const contentorCategorias = document.getElementById("categorias");
  const botaoAleatorio = document.getElementById("poemaAleatorio");

  if (!grelha) return;

  /* Estado atual dos filtros */
  let categoriaAtiva = "Todos";
  let termoPesquisa = "";

  /* Normaliza texto para pesquisa sem acentos nem maiúsculas */
  function normalizar(texto) {
    return texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  /* ------------------------------------------------------------------
     1. DESENHAR OS CARTÕES
     ------------------------------------------------------------------ */
  function desenhar() {
    const termo = normalizar(termoPesquisa);

    const visiveis = POEMAS.filter(function (poema) {
      const combinaCategoria =
        categoriaAtiva === "Todos" || poema.categoria === categoriaAtiva;
      const combinaTermo =
        termo === "" ||
        normalizar(poema.titulo).includes(termo) ||
        normalizar(poema.descricao).includes(termo);
      return combinaCategoria && combinaTermo;
    });

    grelha.innerHTML = "";

    if (visiveis.length === 0) {
      const aviso = document.createElement("p");
      aviso.className = "sem-resultados";
      aviso.textContent = "Nenhum poema encontrado. O silêncio, por agora, é a resposta.";
      grelha.appendChild(aviso);
      return;
    }

    visiveis.forEach(function (poema, indice) {
      const cartao = document.createElement("a");
      cartao.className = "cartao";
      cartao.style.animationDelay = Math.min(indice * 0.08, 0.6) + "s";
      cartao.href = "#";
      cartao.onclick = function(e) {
        e.preventDefault();
        abrirPoema(poema.slug);
      };

      cartao.innerHTML =
        '<span class="rotulo">' + poema.categoria + "</span>" +
        "<h3>" + poema.titulo + "</h3>" +
        "<p>" + poema.descricao + "</p>" +
        '<span class="cartao-meta"><span>' + poema.data +
        "</span><span>" + poema.tempo + " de leitura</span></span>";

      grelha.appendChild(cartao);
    });
  }

  /* ------------------------------------------------------------------
     2. PESQUISA INSTANTÂNEA
     ------------------------------------------------------------------ */
  if (campoPesquisa) {
    campoPesquisa.addEventListener("input", function () {
      termoPesquisa = campoPesquisa.value.trim();
      desenhar();
    });
  }

  /* ------------------------------------------------------------------
     3. FILTRO POR CATEGORIA
     ------------------------------------------------------------------ */
  if (contentorCategorias) {
    ["Todos"].concat(CATEGORIAS).forEach(function (categoria) {
      const botao = document.createElement("button");
      botao.className = "categoria-botao" + (categoria === "Todos" ? " ativo" : "");
      botao.textContent = categoria;
      botao.addEventListener("click", function () {
        categoriaAtiva = categoria;
        contentorCategorias
          .querySelectorAll(".categoria-botao")
          .forEach(function (b) { b.classList.remove("ativo"); });
        botao.classList.add("ativo");
        desenhar();
      });
      contentorCategorias.appendChild(botao);
    });
  }

  /* ------------------------------------------------------------------
     4. POEMA ALEATÓRIO
     ------------------------------------------------------------------ */
  if (botaoAleatorio) {
    botaoAleatorio.addEventListener("click", function () {
      const sorteado = POEMAS[Math.floor(Math.random() * POEMAS.length)];
      abrirPoema(sorteado.slug);
    });
  }

  desenhar();
})();

/* ==========================================================================
   FUNÇÕES DO MODAL (Leitor integrado)
   ========================================================================== */

let poemaAtualIndex = -1;

function abrirPoema(slug) {
  const poema = POEMAS.find(p => p.slug === slug);
  if (!poema) return;

  poemaAtualIndex = POEMAS.findIndex(p => p.slug === slug);

  const conteudo = document.getElementById("conteudoPoema");
  conteudo.innerHTML = `
    <span class="rotulo">${poema.categoria}</span>
    <h1 class="poema-titulo">${poema.titulo}</h1>
    <p class="poema-meta">${poema.data} · ${poema.tempo} de leitura</p>
    <p class="ornamento" aria-hidden="true">✦ ✦ ✦</p>
    <div class="poema-texto">${poema.texto}</div>
  `;

  document.getElementById("modalPoema").style.display = "flex";

  // Iniciar barra de progresso no modal
  iniciarProgressoModal();

  // Revelação das estrofes
  setTimeout(() => {
    const estrofes = conteudo.querySelectorAll(".poema-texto p");
    estrofes.forEach((p, i) => {
      p.style.transitionDelay = (i * 0.1) + "s";
      p.classList.add("visivel");
    });
  }, 100);
}

function fecharModal() {
  const modal = document.getElementById("modalPoema");
  modal.style.display = "none";
  
  // Limpar barra de progresso
  const barra = document.getElementById("barraProgressoModal");
  if (barra) barra.style.width = "0%";
}

function navegarPoema(direcao) {
  if (poemaAtualIndex === -1) return;
  
  const novoIndex = (poemaAtualIndex + direcao + POEMAS.length) % POEMAS.length;
  const novoPoema = POEMAS[novoIndex];
  abrirPoema(novoPoema.slug);
}

function iniciarProgressoModal() {
  const barra = document.getElementById("barraProgressoModal");
  if (!barra) return;

  function atualizar() {
    const modalContent = document.querySelector(".modal-conteudo");
    if (!modalContent) return;
    
    const total = modalContent.scrollHeight - modalContent.clientHeight;
    const progresso = total > 0 ? (modalContent.scrollTop / total) * 100 : 100;
    barra.style.width = progresso + "%";
  }

  const modalContent = document.querySelector(".modal-conteudo");
  if (modalContent) {
    modalContent.addEventListener("scroll", atualizar, { passive: true });
  }
  atualizar();
}
