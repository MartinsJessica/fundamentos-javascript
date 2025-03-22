//Duas expressões esultar em TRUE (Aritméticos/Relacionais/Lógicos)
//Duas expressões esultar em FAlSE (Aritméticos/Relacionais/Lógicos)


let verdadeira1 = 2 + 5 >= 7 && 8 > 2; //relacional >= , operadores &&
let verdadeira2 = !(6 * 6 < 3); //aritmética * , relacional ! e lógica <

console.log(verdadeira1);
console.log(verdadeira2);

// Duas expressões resultar em FALSE (Aritméticos/Relacionais/Lógicos)
let falso1 = !(1 + 1 < 3 || 7 !== 7);
let falso2 = 8 - 4 > 12 || false || 15 === '15';

console.log(falso1);
console.log(falso2);