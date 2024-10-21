function adicionar () {
        //    1 - recuperar valores, nome do produto, quantidade e valor.
        let produto = document.getElementById('produto').value;
        /*    O recurso split (separador), que é uma forma de separamos strings em arrays. No caso abaixo o split irá separar, 
                cortar a string usando o '-' como ponto de corte, os membros desta separação serão colocado num array. 
                Atribuimos à variável, nomeProduto, o valor deste array no índice 0. */
        let nomeProduto = produto.split('-')[0];
        
        let quantidade = document.getElementById('quantidade');

        // 2 -calcular o preço, o nosso subtotal.
        // 3 - adicionar o produto no carrinho.
        // 4 - atualiza o valor total da compra.
}

function limpar () {

}