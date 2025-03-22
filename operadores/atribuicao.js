// juntar operadores aritméticos com operadores de atribuição 
// e concatenação de strings que é apanhar um texto e colocar do lado e colocar ele em um texto maior, isso é possível com um operador de atribuição

//let x = 10;
//x = 6;
//console.log(x)   aqui o valor de x é substituído


//aqui queremos acrescentar nessa combinação
let x = 10;
x = x + 6;
x = x - 1;
console.log(x)


// atrbuição aditiva / negativa, multiplicação, divisão ou módulo,
let y = 20;
y += 10;  // y = y + 10;
y -= 2; // y = y - 2;
y *= 4;  // y = y * 4;
y /= 4; // y = y / 4;
y %= 3; // y = y % 3;

console.log(x);
console.log(y);


//concatenou a string em um texto MutationRecord, usad em
let w = 'texto';
w += ', mais texto';
w += '!!!';

console.log(w);