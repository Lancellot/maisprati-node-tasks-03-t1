//Crie um array de objetos com `nome` e `nota` de 6 alunos. Use `for...of` para classificar cada aluno (`Aprovado`, `Recuperação` ou `Reprovado`) e exibir o resultado. 
//Use `forEach` para calcular e exibir separadamente a média dos aprovados e a média dos reprovados.

export default function tarefa7(prompt) {
    const alunos = [
        { nome: "Alice", nota: 85 },
        { nome: "Bob", nota: 72 },
        { nome: "Charlie", nota: 60 },
        { nome: "Diana", nota: 45 },
        { nome: "Eve", nota: 90 },
        { nome: "Frank", nota: 55 }
    ];

    let aprovados = [];
    let reprovados = [];

    for (const aluno of alunos) {
        if (aluno.nota >= 70) {
            aluno.status = "Aprovado";
            aprovados.push(aluno);
        } else if (aluno.nota >= 50) {
            aluno.status = "Recuperação";
            reprovados.push(aluno);
        } else {
            aluno.status = "Reprovado";
            reprovados.push(aluno);
        }
        console.log(`${aluno.nome} - Nota: ${aluno.nota} - Status: ${aluno.status}`);
    }

    const mediaAprovados = aprovados.reduce((acc, aluno) => acc + aluno.nota, 0) / aprovados.length;
    const mediaReprovados = reprovados.reduce((acc, aluno) => acc + aluno.nota, 0) / reprovados.length;
    console.log(`Média dos aprovados: ${mediaAprovados.toFixed(2)}`);
    console.log(`Média dos reprovados: ${mediaReprovados.toFixed(2)}`);
};