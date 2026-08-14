nota1 = parseFloat(prompt ("Digite a nota do 1º bimestre:"))
nota2 = parseFloat(prompt ("Digite a nota do 2º bimestre:"))

if ((nota1 + nota2) >= 60)
    alert(`Você foi aprovado, sua nota é ${nota1 + nota2}`)
else
    alert(`Você foi reprovado, sua nota é ${nota1 + nota2}, ainda faltam ${eval(60-(nota1+nota2))} pontos.`)
