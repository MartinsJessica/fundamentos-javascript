const a = 8;
const b = 4;
const operacao = "/"; // + - */

const resultado =
    operacao === "+" ? a + b :
        operacao === "-" ? a - b :
            operacao === "*" ? a * b : a / b;  // faz uma operação por vez de forma condicional de acordo com o valor da operação 
console.log(resultado)


//algoritmo passo1. passo2. passo3 e passo4  são executados conforme a ordem, mas digamos que não seja executado 2 e 3, só queremos que 
// que seja executado se a nota for nota>7, agora estrtura de repetição sendo >7 quero que seja executado 10x
// um estrtura de repetição controla o fluxo da execuçãp