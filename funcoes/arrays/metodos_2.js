// método splice remove e adiciona
//splice (indice, quantos elementos quer remover, ele adiciona os elementos)
//dentro de um array
// push, splice, pop e shift mudam os elementos do array

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numeros.splice(1, 1) // remove o 2 com  quantidade de 1 vez (1, 1) posição e quantidade

numeros.splice(1, 2) // remove o 2 com  quantidade de 2 vezes (1, 2) posições e quantidade
console.log(numeros)

numeros.pop() // remove o ultimo elemento do array
numeros.shift() // remove o primeiro elemento do array

console.log(numeros)