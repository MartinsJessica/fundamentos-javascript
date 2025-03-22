function sempreRetornaUm() {
    console.log(1);
    return 1; //palavra reservada para retorna um valor
    // se eu colocar um console.log depois do return ele não será executado
}

function textoOuNumero(retornaTexto) {
    if (retornaTexto) {
        return "Sou um texto!";
    } else {
        return 123;
    }
} // tambem poderia usar um operador ternario
// exemp: return retornaTexto ? "Sou um texto!" : 123;

let valor = sempreRetornaUm() + 999;
console.log(valor);

let texto = textoOuNumero(true)
console.log(texto)

console.log(textoOuNumero(false))
//função que retorna valor fixo