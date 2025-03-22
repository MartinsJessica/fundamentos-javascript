const hora = 23;
let saudacao;

if (hora < 12) {
    saudacao = "Bom dia";
} else if (hora < 18) {
    saudacao = "Boa Tarde!";
} else if (hora < 22) {
    saudacao = " Boa noite"
} else {
    saudacao = "MUITO TARDE!";
}

console.log(saudacao)

// um bloco de codigo com if e else é visto como uma unidade
// nessa unidade temos co if e o else, podendo ser juntos
//bloco mais legível do que os outros feitos
