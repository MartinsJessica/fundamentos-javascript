// o problema consite que eu começo a ter metodos duplicados
//muitas linhas de códigos, principlamente é ruim em código com objetos recorrentes

const d1 = {
    dia: 1,
    mes: 11,
    ano: 1994,
    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const d2 = {
    dia: 1,
    mes: 11,
    ano: 1994,
    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

console.log(d1.exibir())
console.log(d2.exibir())