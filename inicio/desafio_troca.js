let a = 7;
let b = 94;
let temp = a;

a = b;
b = temp;

// depois da troca... a = 94 e b = 7  ; o a vira b e a temporária não foi alterada  

console.log(a);
console.log(b);