// data
// Atributos: dia, mes e ano
// Método: exibir => "dia/mes/ano"

const nascimento = {
    dia: 1,
    mes: 11,
    ano: 1994,
    exibir() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}
nascimento.dia = 11;

console.log(nascimento.exibir())