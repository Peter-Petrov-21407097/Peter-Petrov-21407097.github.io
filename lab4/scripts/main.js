let counter = 0;

const heading = document.querySelector("h1");
const botao = document.querySelector("#botao-contador");

function count() {
  counter++;
  heading.textContent = counter;
}

botao.addEventListener("click", count);
