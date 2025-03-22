// o problema consite que eu começo a ter metodos duplicados
//muitas linhas de códigos, principlamente é ruim em código com objetos recorrentes
//como resolver esse problema

function criarData(dia, mes, ano) { }

const d1 = {
    dia: dia,
    mes: mes,
    ano: ano,
    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}


const d1 = criarData(9, 10, 1994)
const d2 = criarData(1, 11, 1994)
const d3 = criarData(1, 11, 1994)

console.log(d1.exibir())
console.log(d2.exibir())