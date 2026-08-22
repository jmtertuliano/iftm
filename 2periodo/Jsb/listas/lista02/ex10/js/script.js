n = parseInt(prompt("Digite um valor inteiro maior ou igual a 2:"));

while (isNaN(n) || n < 2) {
    n = parseInt(prompt("Valor inválido! Digite um valor inteiro maior ou igual a 2:"));
}

tabela = "<table border='1'>";
tabela += "<tr><th>Base decimal</th><th>Base binária</th><th>Base hexadecimal</th></tr>";

for (i = 0; i <= n; i++) {
    tabela += `<tr><td>${i}</td><td>${i.toString(2)}</td><td>${i.toString(16)}</td></tr>`;
}

tabela += "</table>";

document.write(tabela);
