// Importa os dados dos produtos
import { produtos } from "../produtos.js";

// A. Estado e variáveis
const nodeListaProdutos = document.querySelector("#lista-produtos");
const nodeListaCesto = document.querySelector("#lista-cesto");
const nodeTotalCesto = document.querySelector("#total-cesto");
const nodePrecoTotal = document.querySelector("#preco-total");
const nodeLimparCesto = document.querySelector("#limpar-cesto");

let cesto = JSON.parse(localStorage.getItem("cesto")) || [];

// B. Funções utilitárias
function formatarPreco(preco) {
  return new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "EUR",
  }).format(preco);
}

function guardarCesto() {
  localStorage.setItem("cesto", JSON.stringify(cesto));
}

function criarProduto(produto) {
  const nodeArticle = document.createElement("article");

  const nodeImagem = document.createElement("img");
  nodeImagem.src = produto.image;
  nodeImagem.alt = produto.title;

  const nodeTitulo = document.createElement("h3");
  nodeTitulo.textContent = produto.title;

  const nodeDescricao = document.createElement("p");
  nodeDescricao.textContent = produto.description;

  const nodePreco = document.createElement("p");
  nodePreco.textContent = formatarPreco(produto.price);

  const nodeBotao = document.createElement("button");
  nodeBotao.type = "button";
  nodeBotao.textContent = "Adicionar ao cesto";
  nodeBotao.dataset.id = produto.id;
  nodeBotao.classList.add("adicionar-cesto");

  nodeArticle.append(
    nodeImagem,
    nodeTitulo,
    nodeDescricao,
    nodePreco,
    nodeBotao,
  );

  return nodeArticle;
}

function mostrarProdutos() {
  produtos.forEach((produto) => {
    nodeListaProdutos.append(criarProduto(produto));
  });
}

function mostrarCesto() {
  nodeListaCesto.replaceChildren();

  let quantidadeTotal = 0;
  let precoTotal = 0;

  cesto.forEach((artigo) => {
    const produto = produtos.find((item) => item.id === artigo.id);

    if (!produto) {
      return;
    }

    const nodeItem = document.createElement("li");
    const subtotal = produto.price * artigo.quantidade;

    const nodeTexto = document.createElement("span");
    nodeTexto.textContent =
      `${produto.title} — ${artigo.quantidade} × ` +
      `${formatarPreco(produto.price)} = ${formatarPreco(subtotal)}`;

    const nodeBotaoRemover = document.createElement("button");
    nodeBotaoRemover.type = "button";
    nodeBotaoRemover.textContent = "Remover";
    nodeBotaoRemover.dataset.id = produto.id;
    nodeBotaoRemover.classList.add("remover-cesto");

    nodeItem.append(nodeTexto, nodeBotaoRemover);
    nodeListaCesto.append(nodeItem);

    quantidadeTotal += artigo.quantidade;
    precoTotal += subtotal;
  });

  nodeTotalCesto.textContent = quantidadeTotal;
  nodePrecoTotal.textContent = formatarPreco(precoTotal);
}

// C. Event handlers
function adicionarAoCesto(id) {
  const produto = produtos.find((item) => item.id === id);

  if (!produto) {
    return;
  }

  const artigoExistente = cesto.find((artigo) => artigo.id === id);

  if (artigoExistente) {
    artigoExistente.quantidade += 1;
  } else {
    cesto.push({
      id: produto.id,
      quantidade: 1,
    });
  }

  guardarCesto();
  mostrarCesto();
}

function removerDoCesto(id) {
  cesto = cesto.filter((artigo) => artigo.id !== id);

  guardarCesto();
  mostrarCesto();
}

function limparCesto() {
  cesto = [];
  guardarCesto();
  mostrarCesto();
}

// D. Event Listeners
nodeListaProdutos.addEventListener("click", (evento) => {
  const botao = evento.target.closest(".adicionar-cesto");

  if (botao) {
    adicionarAoCesto(Number(botao.dataset.id));
  }
});

nodeListaCesto.addEventListener("click", (evento) => {
  const botao = evento.target.closest(".remover-cesto");

  if (botao) {
    removerDoCesto(Number(botao.dataset.id));
  }
});

nodeLimparCesto.addEventListener("click", limparCesto);

// E. Inicialização
mostrarProdutos();
mostrarCesto();
