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
botoesCartas.forEach((carta) => {
  carta.addEventListener("click", () => {
    const dano = carta.dataset.dano;
    const imagem = carta.querySelector("img").getAttribute("src");

    // Colocar a fotografia como fundo da página
    document.body.className = `dano-${dano}`;
    document.body.style.backgroundImage = `url("${imagem}")`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundRepeat = "no-repeat";

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
  document.body.className = "";
  document.body.style.backgroundImage = "";
  document.body.style.backgroundSize = "";
  document.body.style.backgroundPosition = "";
  document.body.style.backgroundAttachment = "";
  document.body.style.backgroundRepeat = "";

  botoesCartas.forEach((carta) => {
    carta.classList.remove("selecionada");
  });

  resultadoDano.textContent = "Escolhe um tipo de dano para ver o efeito!";
});
