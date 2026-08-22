texto = prompt("Digite um texto:");
letra = prompt("Digite uma letra:").toLowerCase();

palavras = texto.split(" ");

escrever = "";

for (i=0; i<palavras.length; i++) {
    if (palavras[i].charAt(0).toLowerCase() == letra)
        escrever += palavras[i] + " ";
}

document.write(escrever).trim();
