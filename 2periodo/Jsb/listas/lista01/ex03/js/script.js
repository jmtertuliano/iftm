nome = prompt ("Digite seu nome completo:")
idade = prompt ("Digite sua idade:")

if (idade >=18)
    alert(`${nome.toUpperCase()}, você já POSSUI idade para tirar carteira.`)
else
    alert(`${nome.toUpperCase()}, você ainda NÃO POSSUI idade para tirar carteira, ainda faltam ${eval(18-idade)} anos.`)
