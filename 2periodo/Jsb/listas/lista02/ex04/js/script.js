nomeCompleto = prompt ("Digite seu nome completo:");

//1º passo: converter tudo para minusculo, depois transforma a string em vetor;
//ex: "Jonata de Matos Tertuliano" -> [jonata|de|matos|tertuliano]
nomeCompleto = nomeCompleto.toLowerCase().split(" ");

//2º passo: converter a primeira palavra do nome que está na posição "0" do vetor para letras maísculas;
nomeCompleto[0] = nomeCompleto[0].toUpperCase();

//3º passo: converter o vetor em uma string
// [JONATA|de|matos|tertuliano] -> "JONATA de matos Tertuliano"

// nomeCompleto = nomeCompleto.join(" ");

alert(nomeCompleto.join(" "));

