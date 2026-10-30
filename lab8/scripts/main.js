const API_URL = "https://deisishop.pw.deisi.ulusofona.pt";

const nodeOrdenar = document.querySelector("#ordenar");
const nodePesquisa = document.querySelector("#pesquisa");
const nodeListaProdutos = document.querySelector("#lista-produtos");
const nodeListaCesto = document.querySelector("#lista-cesto");
const nodeTotalCesto = document.querySelector("#total-cesto");
const nodePrecoTotal = document.querySelector("#preco-total");
const nodeLimparCesto = document.querySelector("#limpar-cesto");
const nodeFiltroCategoria = document.querySelector("#filtro-categoria");

let produtos = [];
let cesto = JSON.parse(localStorage.getItem("cesto")) || [];

function formatarPreco(preco) {
  return new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "EUR",
  }).format(Number(preco));
}

function guardarCesto() {
  localStorage.setItem("cesto", JSON.stringify(cesto));
}

function criarProduto(produto) {
  const nodeArticle = document.createElement("article");

  const nodeImagem = document.createElement("img");
  nodeImagem.src = new URL(produto.image, API_URL).href;
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
  nodeListaProdutos.replaceChildren();

  const categoria = nodeFiltroCategoria.value;
  const ordenacao = nodeOrdenar.value;
  const pesquisa = nodePesquisa.value.toLowerCase();

  let produtosFiltrados = produtos.filter((produto) => {
    return (
      (categoria === "todas" || produto.category === categoria) &&
      produto.title.toLowerCase().includes(pesquisa)
    );
  });

  if (ordenacao === "asc") {
    produtosFiltrados.sort((a, b) => Number(a.price) - Number(b.price));
  }

  if (ordenacao === "desc") {
    produtosFiltrados.sort((a, b) => Number(b.price) - Number(a.price));
  }

  produtosFiltrados.forEach((produto) => {
    nodeListaProdutos.append(criarProduto(produto));
  });
}

function carregarCategorias(categorias) {
  categorias.forEach((categoria) => {
    const nodeOption = document.createElement("option");
    nodeOption.value = categoria.name;
    nodeOption.textContent = categoria.name;
    nodeFiltroCategoria.append(nodeOption);
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
    const subtotal = Number(produto.price) * artigo.quantidade;

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

async function carregarDados() {
  try {
    const [respostaProdutos, respostaCategorias] = await Promise.all([
      fetch(`${API_URL}/products`),
      fetch(`${API_URL}/categories`),
    ]);

    if (!respostaProdutos.ok || !respostaCategorias.ok) {
      throw new Error("Erro ao obter dados da API");
    }

    produtos = await respostaProdutos.json();
    const categorias = await respostaCategorias.json();

    carregarCategorias(categorias);
    mostrarProdutos();
    mostrarCesto();
  } catch (erro) {
    nodeListaProdutos.textContent = "Erro ao carregar os produtos.";
    console.error(erro);
  }
}

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
nodeFiltroCategoria.addEventListener("change", mostrarProdutos);
nodeOrdenar.addEventListener("change", mostrarProdutos);
nodePesquisa.addEventListener("input", mostrarProdutos);

carregarDados();
