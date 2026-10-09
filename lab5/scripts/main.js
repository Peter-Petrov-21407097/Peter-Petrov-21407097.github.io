```javascript
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

