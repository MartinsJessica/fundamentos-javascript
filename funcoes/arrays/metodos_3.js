// o . vai ser o operador de percorrer o array
// o forEach é usado para percorrer o array
//sempre o primeiro parametro para o forEach vai ser o elemento e o segundo o indice
//e o terceiro o array
// o JS é muito flexível ele vai percorrer o array e vai executar essa funcao
// //porem podemos passar como parametro do forEach elemento, indice e array

const numeros = [1, 2, 3, 4];

function paraCadaElemento(el, indice, array) {
    console.log(el, indice, array); // para cada elemento do array ele vai executar essa funcao
}

numeros.forEach(paraCadaElemento)

numeros.forEach(function (el, i, array) {
    console.log('forEach')
})

numeros.forEach(function (el) {
    console.log(el)
})

numeros.forEach(function (_, i) {
    console.log(i);
})

/*for(let n of numeros) { // forma de percorrer cada elemento do array
    console.log(n);
}

for (let i = 0; i < numeros.length; i++) { //formas de percorrer cada elemento do array
    console.log(numeros[i]);
}*/