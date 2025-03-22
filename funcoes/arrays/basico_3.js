//;o fato do array ser um objeto, tem algumas propriedades que podem ser acessadas
// método é uma função que está associada a um objeto
//podemos acessar funções no objeto
//objeto funciona como uma pasta que você consegue dados dentro de um objeto


console.log(typeof console); //object
console.log(typeof console.log); // function

const numeros = [1, 2, 3]

console.log(typeof numeros) // objeto

numeros.push(4); //push acessa numeros por ponto igual as outras terão
numeros.push(5);
numeros.push(10.98);

console.log(numeros);
console.log(numeros.length); //lenght vai contar não dar um atributo


