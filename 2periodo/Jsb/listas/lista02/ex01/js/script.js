primeiroNome = prompt("Qual o seu primeiro nome?");
sobrenome = prompt("Qual o seu sobrenome?");
nomeCompleto = primeiroNome + " " + sobrenome;

n = parseInt(prompt("Quantas vezes deseja exibir o nome?"));
cor = prompt("Qual cor você deseja ver no seu nome?");

for (i = 1; i <= n; i++) {
    corAtual = (i % 2 == 0) ? cor : "black";
    document.write(`<p style="color: ${corAtual};"> ${nomeCompleto}</p>`);
}
