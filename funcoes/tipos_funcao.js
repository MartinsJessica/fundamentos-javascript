// #1: Função COM Parametro e retorno
// uma função com retorno é mais usada, pois pode pegar o resultado e fazer
//outras operações com ele
function somar(a, b) {
    return a + b;
}

let resultado = somar(30, 56);
console.log(`O resultado final é: ${resultado}`);
console.log(`O resulttado final é: ${somar(30, 56)}`);

// #2: Função com parâmetro e SEM retorno
function exibirMultiplicacao(a, b) {
    console.log(a * b);
}

exibirMultiplicacao(10, 21);
exibirMultiplicacao(7, 9);


// #3: Função SEM parâmetro e COM retorno
function retornarDataAtual() {
    return new Date();
}

console.log(retornarDataAtual());

// #4: Função SEM pârametro e SEM retorno
function exibirHoraAtual() {
    console.log(new Date().getHours());
}

exibirHoraAtual();