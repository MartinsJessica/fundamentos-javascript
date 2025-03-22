// PI * raio * raio
// 3.14 * 2 * 2
// 12.56
//PI é um valor constante, ou seja, não pode ser alterado.
//raio é uma variável que pode ser alterada.
// The snippet above is a simple example of how to use constants in JavaScript.
// The variable 'a' is declared using 'let' and then it is reassigned a new value.
// The variable 'b' is declared using 'const' and then it is tried to be reassigned a new value.
// The variable 'b' will throw an error because it is a constant.
//
// You can use constants to store values that should not be changed during the execution of the program.

const PI = 3.141592;
let raio = 10;  // raio é uma variável que pode ser alterada
let AreaCirc = PI * raio * raio;
console.log("A área é " + AreaCirc + " m².");

AreaCirc = Math.PI * raio * raio;
console.log("A área é " + AreaCirc + " m².")

