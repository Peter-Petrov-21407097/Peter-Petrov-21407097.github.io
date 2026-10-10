// EXERCÍCIO 1 — O BÁRBARO

const textoRage = document.querySelector("#texto-rage");

document.querySelectorAll("button.color").forEach((e) => {
  e.addEventListener("click", () => {
    textoRage.style.color = e.dataset.color;
  });
});

// EXERCÍCIO 2 — POÇÕES DE CURA

const nomePocao = document.querySelector("#nome-pocao");

nomePocao.addEventListener("input", () => {
  const pocao = nomePocao.value.trim().toLowerCase();

  nomePocao.classList.remove(
    "pocao-healing",
    "pocao-greater",
    "pocao-superior",
    "pocao-supreme",
  );

  if (pocao === "potion of healing") {
    nomePocao.classList.add("pocao-healing");
  } else if (pocao === "potion of healing (greater)") {
    nomePocao.classList.add("pocao-greater");
  } else if (pocao === "potion of healing (superior)") {
    nomePocao.classList.add("pocao-superior");
  } else if (pocao === "potion of healing (supreme)") {
    nomePocao.classList.add("pocao-supreme");
  }
});

// EXERCÍCIO 3 — TIPOS DE DANO

const resultadoDano = document.querySelector("#resultado-dano");
const botoesCartas = document.querySelectorAll("button.carta-dano");
const botaoResetDano = document.querySelector("#reset-dano");

// CLICAR NUMA CARTA

let fundoDano = document.querySelector("#fundo-dano");

if (!fundoDano) {
  fundoDano = document.createElement("img");
  fundoDano.id = "fundo-dano";
  fundoDano.alt = "";
  fundoDano.setAttribute("aria-hidden", "true");
  document.body.prepend(fundoDano);
}

botoesCartas.forEach((carta) => {
  carta.addEventListener("click", () => {
    const imagem = carta.querySelector("img").getAttribute("src");

    // Mostrar a fotografia numa camada própria
    fundoDano.src = imagem;
    fundoDano.style.display = "block";

    // Destacar a carta selecionada
    botoesCartas.forEach((outraCarta) => {
      outraCarta.classList.remove("selecionada");
    });

    carta.classList.add("selecionada");

    // Mostrar o resultado
    resultadoDano.textContent = `O Bárbaro sofreu dano de ${carta.querySelector(".nome-dano").textContent}!`;
  });
});

// BOTÕES DE DANO EXISTENTES
document.querySelectorAll("button.dano").forEach((botao) => {
  botao.addEventListener("click", () => {
    const dano = botao.dataset.dano;
    const carta = document.querySelector(`.carta-dano[data-dano="${dano}"]`);

    if (carta) {
      carta.click();
    }
  });
});

// RESTAURAR O FUNDO ORIGINAL

botaoResetDano.addEventListener("click", () => {
  fundoDano.removeAttribute("src");
  fundoDano.style.display = "none";

  document.body.className = "";

  botoesCartas.forEach((carta) => {
    carta.classList.remove("selecionada");
  });

  resultadoDano.textContent = "Escolhe um tipo de dano para ver o efeito!";
});

// EXERCÍCIO 4 — TABULEIRO DE D&D

const seletorMapa = document.querySelector("#seletor-mapa");
const mapaBatalha = document.querySelector("#mapa-batalha");
const formacaoPersonagens = document.querySelector("#formacao-personagens");
const botoesFormacao = document.querySelectorAll("button[data-formacao]");

// Mapas disponíveis
const mapasBatalha = {
  praia: {
    src: "images/praia.jpg",
    alt: "Mapa de batalha da praia",
  },
  cidade: {
    src: "images/cidade.jpg",
    alt: "Mapa de batalha da cidade",
  },
  floresta: {
    src: "images/floresta.jpg",
    alt: "Mapa de batalha da floresta",
  },
};

// Alterar o mapa selecionado
seletorMapa.addEventListener("change", () => {
  const mapa = mapasBatalha[seletorMapa.value];

  if (mapa) {
    mapaBatalha.src = mapa.src;
    mapaBatalha.alt = mapa.alt;
  }
});

// Classes correspondentes às quatro formações
const classesFormacao = [
  "formacao-linha",
  "formacao-linha-invertida",
  "formacao-coluna",
  "formacao-coluna-invertida",
];

// Alterar a formação dos personagens
botoesFormacao.forEach((botao) => {
  botao.addEventListener("click", () => {
    formacaoPersonagens.classList.remove(...classesFormacao);

    formacaoPersonagens.classList.add(`formacao-${botao.dataset.formacao}`);
  });
});
