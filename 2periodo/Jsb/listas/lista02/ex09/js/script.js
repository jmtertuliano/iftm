texto = prompt("Digite um texto:");

textoLimpo = texto.toLowerCase().split(" ").join("");
textoInvertido = textoLimpo.split("").reverse().join("");

if (textoLimpo == textoInvertido)
    alert("O texto informado é um palíndromo.");
else
    alert("O texto informado NÃO é um palíndromo.");
