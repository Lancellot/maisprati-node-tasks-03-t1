//Implemente uma pilha usando um array para simular o histórico de um navegador. Crie as funções `visitar(pagina)` (push), `voltar()` (pop) e `paginaAtual()` (peek). 
//Simule uma sessão: visite 4 páginas, volte 2 vezes e exiba a página atual a cada operação.

export default function tarefa10() {
    const historico = [];

    function visitar(pagina) {
        historico.push(pagina);
        paginaAtual();
    }

    function voltar() {
        console.log("---------------------------------");
        if (historico.length > 1) {
            historico.pop();
            console.log("Voltando...");
            paginaAtual();
        } else {
            console.log("Não há páginas para voltar.");
        }
    }

    function paginaAtual() {
        console.log("---------------------------------");
        if (historico.length > 0) {
            console.log(`Página atual: ${historico[historico.length - 1]}`);
        } else {
            console.log("Não há páginas no histórico.");
        }
    }


    visitar("https://www.google.com");
    visitar("https://www.github.com");
    visitar("https://www.maisprati.trindtech.com.br");
    visitar("https://www.youtube.com");


    voltar();
    voltar();
}