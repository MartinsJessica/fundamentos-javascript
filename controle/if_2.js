const nota = 8;
const bomComportamento = true; //outra variável constante

if (nota >= 7 && bomComportamento) //operador logico &&
    console.log('Parabéns'); // tem esse tab porque a linha 4 é condicionada a linha 3


if (nota < 7 || !bomComportamento)  // ou !nega 
    console.log("Uma pena!");

console.log("Fim")