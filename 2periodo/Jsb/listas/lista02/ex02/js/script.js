nomeCompleto = prompt ("Digite seu nome completo").trim();

if (nomeCompleto != null) { // pressionou o btn "ok"?
    if (nomeCompleto != "") {
        document.write(`<p>${nomeCompleto}</p>`);
        document.write(`${nomeCompleto} tem ${nomeCompleto.length} caracteres`);
    } 
    else
        alert ("Nome inválido, digite novamente.")
}