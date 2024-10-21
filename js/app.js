// 1 Declaração de variável
let totalGeral = 0;
// 2 Zerando dados de compra.
limpar ();

function adicionar() {
// 3 Recuperar valores
let produto = document.getElementById('produto').value;
let nomeProduto = produto.split('-')[0];
let valorUnitario = produto.split('R$')[1];
let quantidade = document.getElementById('quantidade').value; 

// 4 Calcular o preço, o nosso subtotal.
let preco = quantidade * valorUnitario;

// 5 Adicionar o produto no carrinho.
let carrinho = document.getElementById('lista-produtos');
carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R${preco}</span></section>`;

// 6 Atualiza o valor total da compra.
totalGeral = totalGeral + preco;
let campoTotal = document.getElementById('valor-total');
campoTotal.textContent = `R$ ${totalGeral}`;
document.getElementById('quantidade').value = 0;
}

// 7 Resetando todos os valores com o botão limpar.
function limpar() {
        totalGeral = 0;
        document.getElementById('lista-produtos').innerHTML = '';
        document.getElementById('valor-total').textContent = 'R$ 0';
}

/*    O recurso split (separador), que é uma forma de separamos strings em arrays. No caso abaixo o split irá separar, 
        cortar a string usando o '-' como ponto de corte, os membros desta separação serão colocado num array. 
        Atribuimos à variável, nomeProduto, o valor deste array no índice 0. */