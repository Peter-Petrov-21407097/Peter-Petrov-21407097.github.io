const mensagemMago = document.querySelector("#mensagem-mago");
const imagemBatalha = document.querySelector("#imagem-batalha");

// EVENTO 1 — FIREBALL
mensagemMago.addEventListener("mouseenter", function () {
  mensagemMago.textContent = "🔥 Viola usa FIREBALL! 🔥";
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

botaoFogo.addEventListener("click", function () {
  textoAtaque.style.color = "red";
});

botaoGelo.addEventListener("click", function () {
  textoAtaque.style.color = "blue";
});

botaoRelampago.addEventListener("click", function () {
  textoAtaque.style.color = "yellow";
});

botaoForca.addEventListener("click", function () {
  textoAtaque.style.color = "orange";
});

botaoRadiante.addEventListener("click", function () {
  textoAtaque.style.color = "gold";
});

botaoEletricidade.addEventListener("click", function () {
  textoAtaque.style.color = "cyan";
});
