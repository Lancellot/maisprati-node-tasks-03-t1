//Crie um array de objetos representando músicas, cada uma com `título`, `artista` e `duração em segundos`. Use `for...of` para exibir cada música no formato `"Artista — Título (mm:ss)"`.
//Ao final, use `forEach` para somar a duração total e exiba-a no mesmo formato.

export default function tarefa6(prompt) {
    const musicas = [
        { titulo: "Bohemian Rhapsody", artista: "Queen", duracao: 354 },
        { titulo: "Imagine", artista: "John Lennon", duracao: 183 },
        { titulo: "Stairway to Heaven", artista: "Led Zeppelin", duracao: 482 },
        { titulo: "Hotel California", artista: "Eagles", duracao: 391 },
        { titulo: "Smells Like Teen Spirit", artista: "Nirvana", duracao: 301 }
    ];

    console.log("________________________________________________");
    console.log("Músicas:");
    for (const musica of musicas) {
        const minutos = Math.floor(musica.duracao / 60);
        const segundos = musica.duracao % 60;
        console.log(`${musica.artista} — ${musica.titulo} (${minutos}:${segundos.toString().padStart(2, '0')})`);
    }
    console.log("________________________________________________");

    let duracaoTotal = 0;
    musicas.forEach(musica => {
        duracaoTotal += musica.duracao;
    }
    );

    const minutosTotal = Math.floor(duracaoTotal / 60);
    const segundosTotal = duracaoTotal % 60;
    console.log(`Duração total: ${minutosTotal}:${segundosTotal.toString().padStart(2, '0')}`);
};