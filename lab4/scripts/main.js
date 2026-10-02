const mensagemMago = document.querySelector("#mensagem-mago");

mensagemMago.addEventListener("mouseover", function () {
  mensagemMago.textContent = "🔥 Viola usa FIREBALL! 🔥";
});

mensagemMago.addEventListener("mouseout", function () {
  mensagemMago.textContent = "🧙‍♂️ O mago está à espera do seu turno...";
});
