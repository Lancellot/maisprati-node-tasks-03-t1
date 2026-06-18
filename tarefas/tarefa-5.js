//Crie um objeto representando o orçamento mensal de uma pessoa, com categorias como `alimentação`, `transporte`, `lazer` e `saúde`,cada uma com `valor planejado` e `valor gasto`.
//Use `for...in` para percorrer as categorias e exibir se cada uma ficou dentro ou acima do orçamento, e calcule o saldo geral do mês.

export default function tarefa5(prompt) {
    const orcamentoMensal = {
        alimentacao: { valorPlanejado: 1000, valorGasto: 1200 },
        transporte: { valorPlanejado: 300, valorGasto: 250 },
        lazer: { valorPlanejado: 400, valorGasto: 150 },
        saude: { valorPlanejado: 400, valorGasto: 450 }
    };

    let saldoGeral = 0;

    console.log("____________________________________________");
    console.log("Orçamento Mensal:");
    for (const categoria in orcamentoMensal) {
        const valorPlanejado = orcamentoMensal[categoria].valorPlanejado;
        const valorGasto = orcamentoMensal[categoria].valorGasto;
        const saldoCategoria = valorPlanejado - valorGasto;
        saldoGeral += saldoCategoria;
        const status = saldoCategoria >= 0 ? "Dentro do orçamento" : "Acima do orçamento";
        console.log(`${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: ${status} (Planejado: R$${valorPlanejado}, Gasto: R$${valorGasto})`);
    }
    console.log("____________________________________________");

    console.log(`Saldo geral do mês: R$${saldoGeral}`);
};
