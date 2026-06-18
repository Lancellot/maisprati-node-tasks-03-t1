//Crie um objeto representando um produto com as propriedades: `nome`, `preço`, `categoria` e `quantidade em estoque`.
// Use `for...in` para percorrer e exibir todas as propriedades e seus valores. Em seguida, adicione uma nova propriedade `desconto` ao objeto e exiba o preço final calculado.


export default function tarefa1(prompt) {
    const produto = {
        nome: "Smartphone",
        preco: 1500,
        categoria: "Eletrônicos",
        quantidadeEmEstoque: 50
    };

    console.log("___________________________________________");
    console.log("Propriedades do produto:");
    for (let propriedade in produto) {
        console.log(`${propriedade}: ${produto[propriedade]}`);
    }
    console.log("___________________________________________");

    produto.desconto = 0.1;

    const precoFinal = produto.preco * (1 - produto.desconto);
    console.log(`Preço final com desconto: R$ ${precoFinal.toFixed(2)}`);
}