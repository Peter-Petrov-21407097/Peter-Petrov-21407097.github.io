const mensagemMago = document.querySelector("#mensagem-mago");
const imagemBatalha = document.querySelector("#imagem-batalha");

mensagemMago.addEventListener("mouseenter", function () {
  mensagemMago.textContent = "🔥 Viola usa FIREBALL! 🔥";
  imagemBatalha.src = "images/fireball.jpg";
});

mensagemMago.addEventListener("mouseleave", function () {
  mensagemMago.textContent = "🧙‍♂️ O mago está à espera do seu turno...";
  imagemBatalha.src = "images/batalha.jpg";
});
