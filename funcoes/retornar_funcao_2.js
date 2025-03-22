//curring principio de paradigma funcional
//quebrar os processos ou dividir as funções é bem iimportante
//principalmente quando parte dos parametros são bem comuns 
//por exemplo em matemática é muito usado

function somar1(a, b) {
    return a + b;
}
console.log(somar1(5, 4));

function somar2(a) {
    return function (b) {
        return a + b;
    }
}



console.log(somar2(5)(4));

//aqui eu criei outra função baseada no parametro dois que ta dentro de outra função
//esse tipo de estrategia pode ajudar reuso de uma funçao
const somarMais10 = somar2(10);

console.log(somarMais10(5))
console.log(somarMais10(15))