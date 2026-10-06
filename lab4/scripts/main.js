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

botaoFogo.addEventListener("click", function () {
  textoAtaque.textContent = "🔥 Fireball!";
  textoAtaque.style.color = "red";

  gifFireball.parentElement.style.display = "block";

  audioFireball.currentTime = 0;
  audioFireball.play();

  setTimeout(function () {
    gifFireball.parentElement.style.display = "none";
  }, 3000);
});

botaoGelo.addEventListener("click", function () {
  textoAtaque.textContent = "❄️ Cone of Cold!";
  textoAtaque.style.color = "blue";
});

botaoRelampago.addEventListener("click", function () {
  textoAtaque.textContent = "⚡ Lightning Bolt!";
  textoAtaque.style.color = "yellow";
});

botaoForca.addEventListener("click", function () {
  textoAtaque.textContent = "💪 Bigby's Hand!";
  textoAtaque.style.color = "orange";
});

botaoRadiante.addEventListener("click", function () {
  textoAtaque.textContent = "✨ Guiding Bolt!";
  textoAtaque.style.color = "gold";
});

botaoEletricidade.addEventListener("click", function () {
  textoAtaque.textContent = "⚡ Chain Lightning!";
  textoAtaque.style.color = "cyan";
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
