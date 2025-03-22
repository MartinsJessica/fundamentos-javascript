// por exemplo por dr NaN o que podemos fazer podemos fazer um parametro de fow, ou seja defini cada parametro a caso um poou outro não for chamado
// quando você nomeia não da nan d = o exemplo
//no JavaScript lê os parametros definidos e não definidos e isso não gera um erro
//filosia mais flexível, não faz sentido colocar mais parametros do que os definidos
// adicionei 5 e 6 e somou normal


function somar(a = 0, b = 0, c = 0, d = 0) {
    return a + b + c + d;
}

console.log(somar(1, 2, 3, 4, 5, 6));
console.log(somar(1, 2, 3));
console.log(somar(1, 2));
console.log(somar(1));
console.log(somar());

console.log('Fim');