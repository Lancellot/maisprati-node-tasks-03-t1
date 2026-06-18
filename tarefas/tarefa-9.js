//Crie um array de objetos onde cada objeto representa um contato com `nome`, `telefone` e `e-mail`. Use `forEach` para listar todos os contatos formatados. 
//Permita buscar um contato pelo nome usando `for...of` e exiba os dados encontrados ou uma mensagem de `"não encontrado"`.

export default function tarefa9(prompt) {
    const contatos = [
        { nome: "Alice", telefone: "123-456-7890", email: "alice@example.com" },
        { nome: "Bob", telefone: "098-765-4321", email: "bob@example.com" },
        { nome: "Charlie", telefone: "555-555-5555", email: "charlie@example.com" }
    ];

    console.log("Lista de Contatos:");
    contatos.forEach(contato => {
        console.log(`- ${contato.nome}: ${contato.telefone}, ${contato.email}`);
    });

    const nomeBusca = prompt("Digite o nome do contato que deseja buscar: ");
    let contatoEncontrado = false;

    for (const contato of contatos) {
        if (contato.nome === nomeBusca) {
            console.log(`Contato encontrado: ${contato.nome}, ${contato.telefone}, ${contato.email}`);
            contatoEncontrado = true;
            break;
        }
    }

    if (!contatoEncontrado) {
        console.log("Contato não encontrado.");
    }
}