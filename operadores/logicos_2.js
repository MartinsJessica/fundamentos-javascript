const t1 = true;
const t2 = true;

// concatenação pode usar o + ou , (virgula)


let comprarTV50 = t1 && t2;
console.log('Vamos comprar a Tv?"' + (t1 && t2)); //AND


let comprarTV32 = t1 !== t2;
console.log('Vamos comprar a TV 32"', t1 !== t2); //XOR


let tomarSorvete = t1 || t2;
console.log('Vamos comprar o sorvete?', t1 || t2); //OR

let ficarEmCasa = !tomarSorvete
console.log('Vamos ficar em casa?', !tomarSorvete); //NOT