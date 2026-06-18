//Crie um array de objetos representando produtos com `nome`, `preço` e `quantidade`. 
//Use `forEach` para calcular o valor total em estoque de cada produto (preço × quantidade) e exibir um relatório. Ao final, exiba o valor total geral de todo o estoque.

export default function tarefa8(prompt) {
    const produtos = [
        { nome: "Produto A", preco: 10.0, quantidade: 5 },
        { nome: "Produto B", preco: 20.0, quantidade: 3 },
        { nome: "Produto C", preco: 15.0, quantidade: 8 }
    ];

    let valorTotalGeral = 0;

    console.log("________________________________________________");
    console.log("Relatório de Produtos:");
    produtos.forEach(produto => {
        const valorTotal = produto.preco * produto.quantidade;
        valorTotalGeral += valorTotal;
        console.log(`- ${produto.nome}: Preço = R$${produto.preco.toFixed(2)}, Quantidade = ${produto.quantidade}, Valor Total = R$${valorTotal.toFixed(2)}`);
    }
    );
    console.log("________________________________________________");

    console.log(`Valor Total Geral do Estoque: R$${valorTotalGeral.toFixed(2)}`);
};