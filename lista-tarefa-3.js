import tarefa1 from "./tarefas/tarefa-1.js";
import tarefa2 from "./tarefas/tarefa-2.js";
import tarefa3 from "./tarefas/tarefa-3.js";
import tarefa4 from "./tarefas/tarefa-4.js";
import tarefa5 from "./tarefas/tarefa-5.js";
import tarefa6 from "./tarefas/tarefa-6.js";
import tarefa7 from "./tarefas/tarefa-7.js";
import tarefa8 from "./tarefas/tarefa-8.js";
import tarefa9 from "./tarefas/tarefa-9.js";
import tarefa10 from "./tarefas/tarefa-10.js";

import {promptContinuar, sairPrograma, opcaoInvalida} from "./utils/utilsTexto.js";
import exibirMenu from "./components/menu.js";
import promptSync from 'prompt-sync';


const prompt = promptSync();

const acoes ={
    '1': () => tarefa1(prompt),
    '2': () => tarefa2(prompt),
    '3': () => tarefa3(prompt),
    '4': () => tarefa4(prompt),
    '5': () => tarefa5(prompt),
    '6': () => tarefa6(prompt),
    '7': () => tarefa7(prompt),
    '8': () => tarefa8(prompt),
    '9': () => tarefa9(prompt),
    '10': () => tarefa10(prompt)
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