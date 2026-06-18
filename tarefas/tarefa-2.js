//Crie dois objetos representando personagens de um jogo, cada um com as propriedades: `nome`, `vida`, `ataque` e `defesa`. 
//Use `for...in` para exibir os atributos de cada personagem lado a lado e determine qual deles tem maior poder total (soma de vida + ataque + defesa).

export default function tarefa2(prompt) {

    const personagem1 = {
        nome: "Guerreiro",
        vida: 100,
        ataque: 30,
        defesa: 20
    }; 

    const personagem2 = {
        nome: "Mago",
        vida: 80,
        ataque: 40,
        defesa: 10
    };

    console.log("___________________________________________");
    console.log("Atributos dos personagens:");
    for (let atributo in personagem1) {
        console.log(`${atributo}: ${personagem1[atributo]} | ${personagem2[atributo]}`);
    }
    console.log("___________________________________________");

    const poderTotal1 = personagem1.vida + personagem1.ataque + personagem1.defesa;
    const poderTotal2 = personagem2.vida + personagem2.ataque + personagem2.defesa;

    const vencedor = poderTotal1 > poderTotal2 ? personagem1.nome : personagem2.nome;
    console.log(`O personagem com maior poder total é: ${vencedor}`);

}