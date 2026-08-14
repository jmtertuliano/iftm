let x = parseInt(prompt("Digite um valor inteiro positivo, maior que zero:"));

while (isNaN(x) || x <= 0) {
  x = parseInt(prompt("Valor inválido! Digite um número inteiro maior que zero:"));
}

const nome = prompt("Digite seu nome completo:");

for (let i = 0; i < x; i++) {
  document.write(`${nome}<br>`);
}
