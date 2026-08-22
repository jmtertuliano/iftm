paragrafo = prompt("Digite um texto", "Caminhão quebrou na companhia Caminhão quebrado dá prejuizo porque custa caro");

trocar1 = prompt("Qual letra deseja substituir?").toUpperCase();
trocar2 = prompt("Qual a nova letra?").toUpperCase();

vetor = paragrafo.split(" ");

for (i=0; i<vetor.length; i++) {
    if ((vetor[i].charAt(0)).toUpperCase() == trocar1)
        vetor[i] = trocar2 + vetor[i].slice(1);
}

alert((vetor).join(" "));