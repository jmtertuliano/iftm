texto = prompt("Informe um texto:", "O carro quebrou na estrada de São Paulo. O carro foi levado para a oficina.");
palavra1 = prompt("Informe a primeira palavra:");
palavra2 = prompt("Informe a segunda palavra:");

palavras = texto.split(" ");

for (i = 0; i < palavras.length; i++) {
    if (palavras[i].toLowerCase() == palavra1.toLowerCase())
        palavras[i] = palavra2;
}

alert(palavras.join(" "));
