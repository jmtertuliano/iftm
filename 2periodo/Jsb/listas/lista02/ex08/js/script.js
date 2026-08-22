texto = prompt("Digite um texto:", "amor, carro, bola, bexiga, caminhão, aranha, pastel");
palavras = texto.split(" ");

grupos = {};

for (i = 0; i < palavras.length; i++) {
    letra = palavras[i].charAt(0).toLowerCase();
    if (!grupos[letra])
        grupos[letra] = [];
    grupos[letra].push(palavras[i]);
}

letras = Object.keys(grupos).sort();

for (i = 0; i < letras.length; i++) {
    letra = letras[i];
    document.write(`<p>Palavras iniciadas com a letra ${letra}:</p>`);
    document.write("<ul>");
    for (j = 0; j < grupos[letra].length; j++) {
        document.write(`<li>${grupos[letra][j]}</li>`);
    }
    document.write("</ul>");
}
