//a função somar exige definir o parametro
//então se eu não definir um numero vai dar indefinido
// por conta dessa flexibilidade que o javascript nos da em conta js
// tanto lendo sem o parametro ou com o parametro exemplo verde e 
// com parametro (fn, n1, n2)

/*function executar(fn) {
    if (typeof fn === "function") { //typeof para verificar se é uma função
        console.log(fn(90, 50));
    }
}*/

// função mais flexível
function executar(fn, n1, n2) {
    if (typeof fn === "function") { //typeof para verificar se é uma função
        console.log(fn(90, 50));
    }
}




function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}
//executar(somar); + flexível 
executar(somar, 90, 50);
executar(subtrair);
executar(multiplicar)