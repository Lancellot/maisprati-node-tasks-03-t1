//Crie um objeto representando um funcionário com `nome`, `cargo`, `salário` e `anos de experiência`. Use `for...in` para listar todos os dados.

//Bônus anual com base nos anos de experiência:
//- Até 2 anos = 5% do salário
//- De 3 a 5 anos = 10%
//- Acima de 5 anos = 15%

export default function tarefa3(prompt) {
    const funcionario = {
        nome: "João Silva",
        cargo: "Desenvolvedor",
        salario: 5000,
        anosExperiencia: 4
    };

    console.log("___________________________________________"); 
    console.log("Dados do funcionário:");
    for (let atributo in funcionario) {
        console.log(`${atributo}: ${funcionario[atributo]}`);
    }
    console.log("___________________________________________");

    let bonus;
    if (funcionario.anosExperiencia <= 2) {
        bonus = funcionario.salario * 0.05;
    } else if (funcionario.anosExperiencia <= 5) {
        bonus = funcionario.salario * 0.10;
    } else {
        bonus = funcionario.salario * 0.15;
    }

    console.log(`Bônus anual: R$ ${bonus.toFixed(2)}`);
};