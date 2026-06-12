

import {promptContinuar, sairPrograma, opcaoInvalida} from "./utils/utilsTexto.js";
import exibirMenu from "./components/menu.js";
import promptSync from 'prompt-sync';

const prompt = promptSync();

const acoes ={
    '1': () => exibirTabuada(prompt),
    '2': () => contarDigitos(prompt),
    '3': () => exibirFibonacci(prompt),
    '4': () => verificarSenha(prompt),
    '5': () => exibirPrimos(prompt),
    '6': () => turmaNotas(prompt),
    '7': () => carrinhoCompras(prompt),
    '8': () => ehPalindromo(prompt),
    '9': () => sorteioNumero(prompt),
    '10': () => matrixNotas(prompt)
}

let verificador = true;

do {

    exibirMenu();

    const opcao = prompt("Escolha uma opção: ");

    if(opcao === "0") {
        sairPrograma();
        verificador = false;
        continue;
    }

    if (acoes[opcao]) {
        acoes[opcao]();
    } else {
        opcaoInvalida();
    }
    promptContinuar();

} while (verificador);