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

// EXERCÍCIO 5 — HP DO BÁRBARO

// 1. VARIÁVEIS
const HP_INICIAL = 54;
const HP_MAXIMO = 104;
const HP_MINIMO = 0;
const DANO_INIMIGO = 9;
const CURA_ALCOOL = 27;
const CHAVE_HP = "barbaroHP";

const valorHP = document.querySelector("#valor-hp");
const progressoHP = document.querySelector("#progresso-hp");
const mensagemHP = document.querySelector("#mensagem-hp");

const botaoDano = document.querySelector("#botao-dano");
const botaoAlcool = document.querySelector("#botao-alcool");
const botaoResetHP = document.querySelector("#botao-reset-hp");

// Recuperar o HP guardado ou começar com 54
const hpGuardado = localStorage.getItem(CHAVE_HP);
let hp = hpGuardado === null ? HP_INICIAL : Number(hpGuardado);

// Garantir que o valor recuperado é válido
if (!Number.isFinite(hp)) {
  hp = HP_INICIAL;
}

hp = Math.max(HP_MINIMO, Math.min(HP_MAXIMO, Math.trunc(hp)));

// 2. EVENT HANDLERS
function atualizarHP(mensagem) {
  valorHP.textContent = hp;
  progressoHP.style.width = `${(hp / 105) * 100}%`;

  if (hp <= 27) {
    progressoHP.style.backgroundColor = "#a32121";
  } else if (hp <= 54) {
    progressoHP.style.backgroundColor = "#d49a17";
  } else {
    progressoHP.style.backgroundColor = "#299764";
  }

  mensagemHP.textContent = mensagem;
  localStorage.setItem(CHAVE_HP, hp);
}

function esmagarInimigo() {
  hp = Math.max(HP_MINIMO, hp - DANO_INIMIGO);
  atualizarHP("💥 O Bárbaro esmagou o inimigo e perdeu 9 HP!");
}

function consumirAlcool() {
  hp = Math.min(HP_MAXIMO, hp + CURA_ALCOOL);
  atualizarHP("🍺 O Bárbaro bebeu e recuperou até 27 HP!");
}

function resetHP() {
  hp = HP_INICIAL;
  atualizarHP("⚔️ O Bárbaro voltou aos 54 HP iniciais!");
}

// 3. EVENT LISTENERS
botaoDano.addEventListener("click", esmagarInimigo);
botaoAlcool.addEventListener("click", consumirAlcool);
botaoResetHP.addEventListener("click", resetHP);

// 4. ESTADO INICIAL
atualizarHP("O Bárbaro está pronto para a batalha!");

// EXERCÍCIO 6 — REGENERAÇÃO DO BÁRBARO

// 1. VARIÁVEIS
const INTERVALO_REGENERACAO = 6000;
const CURA_REGENERACAO = 1;

const valorRegeneracao = document.querySelector("#valor-regeneracao");
const progressoRegeneracao = document.querySelector("#progresso-regeneracao");
const mensagemRegeneracao = document.querySelector("#mensagem-regeneracao");

// 2. EVENT HANDLER
function regenerarHP() {
  // Usar o mesmo HP do Exercício 5
  if (hp < HP_MAXIMO) {
    hp = Math.min(HP_MAXIMO, hp + CURA_REGENERACAO);

    // Atualizar o contador do Exercício 5
    atualizarHP("✨ A magia regenerou 1 HP!");

    // Atualizar também o Exercício 6
    atualizarRegeneracao();
  }

  if (hp >= HP_MAXIMO) {
    mensagemRegeneracao.textContent =
      "✨ O Bárbaro atingiu o máximo de 104 HP!";
  }
}

function atualizarRegeneracao() {
  valorRegeneracao.textContent = hp;
  progressoRegeneracao.style.width = `${(hp / HP_MAXIMO) * 100}%`;
}

// 3. TEMPORIZADOR AUTOMÁTICO
setInterval(regenerarHP, INTERVALO_REGENERACAO);

// 4. ESTADO INICIAL
atualizarRegeneracao();
