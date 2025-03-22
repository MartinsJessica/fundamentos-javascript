//;funçao anonima
function retornaUmaFuncao() {
    return function () {
        return function () {
            return "BOa tarde";
        }
    }
}
console.log(retornaUmaFuncao)
console.log(retornaUmaFuncao())
console.log(retornaUmaFuncao()())
console.log(retornaUmaFuncao()()()) // aqui vou receber o resultado dentro da função