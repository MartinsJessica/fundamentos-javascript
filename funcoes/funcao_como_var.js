//formas de declara funcção

const x = 123;
let y = 321;
var z = 456;


const somar = function (a, b) { //função anônima quero armazenar ela dentro de uma constante ou variável
    return a + b;
}

//nessa função atribuimos a uma constante a função anônima

console.log(somar(x, y));