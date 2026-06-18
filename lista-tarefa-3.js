import tarefa1 from "./tarefas/tarefa-1.js";

import {promptContinuar, sairPrograma, opcaoInvalida} from "./utils/utilsTexto.js";
import exibirMenu from "./components/menu.js";
import promptSync from 'prompt-sync';

const prompt = promptSync();

const acoes ={
    '1': () => tarefa1(prompt),
    '2': () => tarefa1(prompt),
    '3': () => tarefa1(prompt),
    '4': () => tarefa1(prompt),
    '5': () => tarefa1(prompt),
    '6': () => tarefa1(prompt),
    '7': () => tarefa1(prompt),
    '8': () => tarefa1(prompt),
    '9': () => tarefa1(prompt),
    '10': () => tarefa1(prompt)
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