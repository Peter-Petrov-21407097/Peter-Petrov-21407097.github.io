const mensagemMago = document.querySelector("#mensagem-mago");
const imagemBatalha = document.querySelector("#imagem-batalha");

// EVENTO 1 — FIREBALL
mensagemMago.addEventListener("mouseenter", function () {
  mensagemMago.textContent = "🔥 Gandalf usa FIREBALL! 🔥";
  imagemBatalha.src = "images/fireball.jpg";
});

mensagemMago.addEventListener("mouseleave", function () {
  mensagemMago.textContent = "🧙‍♂️ O mago está à espera do seu turno...";
  imagemBatalha.src = "images/batalha.jpg";
});

// EVENTO 2 — CORES DOS ATAQUES

const textoAtaque = document.querySelector("#texto-ataque");
const botaoFogo = document.querySelector("#botao-fogo");
const botaoGelo = document.querySelector("#botao-gelo");
const botaoRelampago = document.querySelector("#botao-relampago");
const botaoForca = document.querySelector("#botao-forca");
const botaoRadiante = document.querySelector("#botao-radiante");
const botaoEletricidade = document.querySelector("#botao-eletricidade");

const gifFireball = document.querySelector("#gif-fireball");
const audioFireball = document.querySelector("#audio-fireball");
const botaoAudioFireball = document.querySelector("#botao-audio-fireball");
const gifGelo = document.querySelector("#gif-gelo");
const gifRelampago = document.querySelector("#gif-relampago");
const gifForca = document.querySelector("#gif-forca");
const gifRadiante = document.querySelector("#gif-radiante");
const gifEletricidade = document.querySelector("#gif-eletricidade");

// BOTÃO DO ÁUDIO DA FIREBALL
botaoAudioFireball.addEventListener("click", function () {
  audioFireball.currentTime = 0;
  audioFireball.play();
});

// ATAQUE — FOGO
botaoFogo.addEventListener("click", function () {
  textoAtaque.textContent = "🔥 Fireball!";
  textoAtaque.style.color = "red";

  gifFireball.parentElement.style.display = "block";

  setTimeout(function () {
    gifFireball.parentElement.style.display = "none";
  }, 3000);
});

// ATAQUE — GELO
botaoGelo.addEventListener("click", function () {
  textoAtaque.textContent = "❄️ Cone of Cold!";
  textoAtaque.style.color = "blue";

  gifGelo.parentElement.style.display = "block";

  setTimeout(function () {
    gifGelo.parentElement.style.display = "none";
  }, 3000);
});

// ATAQUE — RELÂMPAGO
botaoRelampago.addEventListener("click", function () {
  textoAtaque.textContent = "⚡ Lightning Bolt!";
  textoAtaque.style.color = "yellow";

  gifRelampago.parentElement.style.display = "block";

  setTimeout(function () {
    gifRelampago.parentElement.style.display = "none";
  }, 3000);
});

// ATAQUE — FORÇA
botaoForca.addEventListener("click", function () {
  textoAtaque.textContent = "💪 Bigby's Hand!";
  textoAtaque.style.color = "orange";

  gifForca.parentElement.style.display = "block";

  setTimeout(function () {
    gifForca.parentElement.style.display = "none";
  }, 3000);
});

// ATAQUE — RADIANTE
botaoRadiante.addEventListener("click", function () {
  textoAtaque.textContent = "✨ Guiding Bolt!";
  textoAtaque.style.color = "gold";

  gifRadiante.parentElement.style.display = "block";

  setTimeout(function () {
    gifRadiante.parentElement.style.display = "none";
  }, 3000);
});

// ATAQUE — ELETRICIDADE
botaoEletricidade.addEventListener("click", function () {
  textoAtaque.textContent = "⚡ Chain Lightning!";
  textoAtaque.style.color = "cyan";

  gifEletricidade.parentElement.style.display = "block";

  setTimeout(function () {
    gifEletricidade.parentElement.style.display = "none";
  }, 3000);
});

// EVENTO 3 — POÇÃO MÁGICA

const corPocao = document.querySelector("#cor-pocao");

corPocao.addEventListener("input", function () {
  corPocao.style.backgroundColor = corPocao.value;
});

// EVENTO 4 — COR DA MAGIA

const corMagica = document.querySelector("#cor-magica");
const botaoMagia = document.querySelector("#botao-magia");
const explosao = document.querySelector("#explosao");

botaoMagia.addEventListener("click", function () {
  document.body.style.backgroundColor = corMagica.value;

  explosao.classList.add("explosao-ativa");

  setTimeout(function () {
    explosao.classList.remove("explosao-ativa");
  }, 500);
});

// EVENTO 5 — CONTADOR DE INIMIGOS

let inimigosEsmagados = 33;

const contadorInimigos = document.querySelector("#contador-inimigos");
const botaoEsmagar = document.querySelector("#botao-esmagar");

botaoEsmagar.addEventListener("click", function () {
  inimigosEsmagados++;
  contadorInimigos.textContent = inimigosEsmagados;
});

// BOTÃO — COMEÇAR BATALHA

const botaoComecarBatalha = document.querySelector("#botao-comecar-batalha");

const audioBatalha = document.querySelector("#audio-batalha");

botaoComecarBatalha.addEventListener("click", function () {
  audioBatalha.currentTime = 0;
  audioBatalha.play();
});
