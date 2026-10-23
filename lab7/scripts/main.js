// Indica ao ESLint que produtos é definido noutro ficheiro
/* global produtos */

// A. Estado e variáveis
const nodeListaProdutos = document.querySelector("#lista-produtos");

// B. Funções utilitárias
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
  nodePreco.textContent = new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "EUR",
  }).format(produto.price);

  nodeArticle.append(nodeImagem, nodeTitulo, nodeDescricao, nodePreco);

  return nodeArticle;
}

function mostrarProdutos() {
  produtos.forEach((produto) => {
    const nodeProduto = criarProduto(produto);
    nodeListaProdutos.append(nodeProduto);
  });
}

// C. Event handlers

// D. Event Listeners

// E. Inicialização
mostrarProdutos();
