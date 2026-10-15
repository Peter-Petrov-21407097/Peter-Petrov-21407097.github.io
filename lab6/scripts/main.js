
 // A. declaração de variáveis

const nodeInputNumero = document.querySelector(
  "#registar input[type='number']"
);

const form = document.querySelector("#registar form");

const nodeUlColecao = document.querySelector("#colecao ul");
const nodeTotalCromos = document.querySelector("#colecao h3 span");

const nodeUlRepetidos = document.querySelector("#repetidos ul");
const nodeTotalRepetidos = document.querySelector(
  "#repetidos h3 span"
);

let colecao = [];
let repetidos = [];

// Recuperar os dados guardados no localStorage
const colecaoGuardada = localStorage.getItem("colecao");
const repetidosGuardados = localStorage.getItem("repetidos");

if (colecaoGuardada !== null) {
  colecao = JSON.parse(colecaoGuardada);
}

if (repetidosGuardados !== null) {
  repetidos = JSON.parse(repetidosGuardados);
}

// B. event handlers

function guardaDados() {
  localStorage.setItem("colecao", JSON.stringify(colecao));
  localStorage.setItem("repetidos", JSON.stringify(repetidos));
}

function guardaCarta() {
  const numero = Number(nodeInputNumero.value);

  if (!Number.isInteger(numero) || numero < 1) {
    return;
  }

  // Verificar se o cromo já existe na coleção
  if (colecao.includes(numero)) {
    repetidos.push(numero);
  } else {
    colecao.push(numero);
  }

  // Ordenar as duas listas
  colecao.sort((a, b) => a - b);
  repetidos.sort((a, b) => a - b);

  // Guardar as listas no localStorage
  guardaDados();

  // Atualizar as listas no HTML
  atualizaLista(colecao, nodeUlColecao);
  atualizaLista(repetidos, nodeUlRepetidos);

  // Atualizar os totais
  nodeTotalCromos.textContent = colecao.length;
  nodeTotalRepetidos.textContent = repetidos.length;

  // Associar eventos aos botões Eliminar
  adicionaEventosEliminar();
}

function atualizaLista(lista, nodeUl) {
  nodeUl.innerHTML = "";

  lista.forEach((numero, indice) => {
    const novoCromo = document.createElement("li");

    // Se for a lista de repetidos, mostrar o botão Eliminar
    if (nodeUl === nodeUlRepetidos) {
      novoCromo.innerHTML = `
        ${numero}
        <button
          type="button"
          class="btn-eliminar"
          data-indice="${indice}"
        >
          Eliminar
        </button>
      `;
    } else {
      novoCromo.textContent = numero;
    }

    nodeUl.append(novoCromo);
  });
}

function adicionaEventosEliminar() {
  const botoesEliminar = document.querySelectorAll(
    "#repetidos .btn-eliminar"
  );

  botoesEliminar.forEach((botao) => {
    botao.onclick = () => {
      // Obter o índice do cromo repetido
      const indice = Number(botao.dataset.indice);

      // Remover o cromo repetido
      repetidos.splice(indice, 1);

      // Guardar as alterações
      guardaDados();

      // Atualizar a lista e o total de repetidos
      atualizaLista(repetidos, nodeUlRepetidos);
      nodeTotalRepetidos.textContent = repetidos.length;

      // Associar novamente os eventos aos botões
      adicionaEventosEliminar();
    };
  });
}

// C. event listeners

form.onsubmit = (event) => {
  event.preventDefault();

  guardaCarta();

  // Limpar o campo e preparar novo registo
  nodeInputNumero.value = "";
  nodeInputNumero.focus();
};

// Mostrar os dados recuperados ao abrir a página
atualizaLista(colecao, nodeUlColecao);
atualizaLista(repetidos, nodeUlRepetidos);

nodeTotalCromos.textContent = colecao.length;
nodeTotalRepetidos.textContent = repetidos.length;

adicionaEventosEliminar();
