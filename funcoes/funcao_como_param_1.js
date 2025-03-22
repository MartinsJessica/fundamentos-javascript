function executar(param) {
    if (typeof param === "function")
        console.log(param()) // < -- Parte central da aula

    //ctrl+d editar todas palavras iguais
}

function bomDia() {
    return "Bom dia";
}


executar(3);
executar(bomDia) // < -- Parte central da aula

const x = bomDia;
const y = bomDia();

console.log(x()); // x é uma função
console.log(y); // aqui mesmo não tendo passado y como parametro


//uma função como parametro para outra função
//assim como consigo armazenar em uma constante
// e uma função dentro de uma variável