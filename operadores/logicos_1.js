let temDinheiro = true;
let estaEnsolarado = true;
let carroEstaNaGaregm = true;

// na linha 7 vamos somar as duas funções e as concatenar aqui é o caso do E
let resultadoE = '# (AND) Vai pro shopping'
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE)

// concatenar resultados || pipe é igual ou
// operações lógicas binarias voce vai usar o comercial & que representa o e, e ou que é o pipe ||
let resultadoOU = '#2 (OR) - Vai ao shopping?'
resultadoOU += estaEnsolarado || carroEstaNaGaregm;
console.log(resultadoOU);


// é o simbolo do ou exclusivo ^ e != diferente usados em operadores binários e temos o extritamente diferente !==
//console.log(true ^ false);
console.log(true !== false);
console.log(true != true);
console.log(false != true);
console.log(false != false);

// operador unário que opera sobre um unico operando ! negação lógica
console.log("Não verdadeiro: " + !true);
console.log("Não falso: " + !false);

