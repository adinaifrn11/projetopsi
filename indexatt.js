console.log("Bem-vindo ao nosso estabelecimento online! "); // questão 1

//  Questão 2
let nomeProduto = "Camisa Polo"; 
let produtoDisponivel = true; 

//  Questão 3
let precoOriginal = 100;
let desconto = precoOriginal * 0.10; 
let precoFinal = precoOriginal - desconto;

let preco1 = 40, preco2 = 60;
let totalCompra = preco1 + preco2;

let parcelas = 4;
let valorParcela = precoFinal / parcelas;


//  Questão 4
let nomeCliente = "Adina";
console.log(`Bem-vinda ao nosso estabelecimento online, ${nomeCliente}!`);

//  Questão 5
let carrinho = ["Tênis", "Camisa", "Calça", "Boné"];
let itemRemovido = carrinho.splice(2, 1); 
console.log(`Você removeu o item "${itemRemovido}" do seu carrinho.`);

//  Questão 6
let precoProduto = 10;
let carteiraVirtual = 100;

if (carteiraVirtual >= 49.9) {
  console.log("Compra realizada com sucesso!");
} else {
  console.log("Saldo insuficiente para a compra.");
}

//  Questão 7 
let limiteEstoque = 5;

for (let i = 1; i <= limiteEstoque; i++) {
  console.log(`Peça nº ${i} adicionada ao estoque.`);
}
//  Questão 8
function saudacaoPersonalizada(nome) {
  return `Bem-vindo(a), ${nome}! Aproveite as ofertas!`;
}

function calcularDesconto(preco, percentual) {
  return preco - (preco * (percentual / 100));
}

console.log(saudacaoPersonalizada("Carlos"));
console.log(`Preço com desconto: R$${calcularDesconto(100, 20)}`);

//  Questão 9
let produto = {
  nome: "Fone de Ouvido",
  preco: 199.90
};

let cliente = {
  nome: "Adina",
  membroFidelidade: true
};

//  Questão 10

function pagamentoParcelado(precoTotal, numParcelas) {
  let parcela = precoTotal / numParcelas;
  console.log(`Pagamento em ${numParcelas}x de R$${parcela.toFixed(2)}.`);
}

function pagamentoComDesconto(precoTotal, percentualDesconto) {
  let desconto = precoTotal * (percentualDesconto / 100);
  let precoFinal = precoTotal - desconto;
  console.log(`Pagamento à vista com ${percentualDesconto}% de desconto: R$${precoFinal.toFixed(2)}.`);
}

pagamentoParcelado(300, 3);
pagamentoComDesconto(300, 15);
