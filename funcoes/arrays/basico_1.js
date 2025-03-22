// 6 elementos que começam a partir do zero
//é uma constante mas posso alterar os valores dentro do array
// eu não posso o alterar o valor da constante notas,
// exemplo o que não pode notas = "ruim"
//entretando os elementos do array podem se alterados

const notas = [7, 8, 7.8, 9.2, 10, 5.8]; // a partir de uma unica variavel consico acessa as notas dentro do array

console.log(notas)
console.log(notas[3]);

notas[4] = 8.7; //alterando o valor da posição 4

console.log(notas[4]);