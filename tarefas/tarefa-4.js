//Crie um objeto onde cada chave é o nome de um item e o valor é a quantidade no inventário do jogador (ex: `{ espada: 1, poção: 5, escudo: 2 }`).
//Use `for...in` para listar o inventário completo. Permita que o usuário informe um item para usar: reduza a quantidade em 1 ou exiba `"item esgotado"` se for zero.

export default function tarefa4(prompt) {
    const inventario = {
        espada: 1,
        pocao: 5,
        escudo: 2
    };

    console.log("___________________________________________");
    console.log("Inventário do jogador:");
    for (let item in inventario) {
        console.log(`${item}: ${inventario[item]}`);
    }
    console.log("___________________________________________");

    const itemParaUsar = prompt("Informe o item que deseja usar: ");
    if (inventario[itemParaUsar.toLowerCase()] > 0) {
        inventario[itemParaUsar.toLowerCase()]--;
        console.log(`Você usou ${itemParaUsar}. Quantidade restante: ${inventario[itemParaUsar.toLowerCase()]}`);
    } else {
        console.log("Item não encontrado no inventário.");
    }
}