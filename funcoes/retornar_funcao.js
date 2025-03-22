
//// ao chamar duas vezes a função ai da o bom  dia
// no javascript podemos colocar uma funcao dentro de outra
// e tambem a funcao de dentro pode responder uma função de fora
function retornaUmaFuncao() {
    function bomDia() {
        return "Bom dia!!"
    }

    return bomDia
}

console.log(retornaUmaFuncao);
console.log(retornaUmaFuncao());
console.log(retornaUmaFuncao()()); // ao chamar duas vezes

