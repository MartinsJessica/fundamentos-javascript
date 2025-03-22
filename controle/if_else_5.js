const hora = 11;
let saudacao;

if (hora < 12) {
    saudacao = "Bom dia";
} else {
    if (hora < 18) {
        saudacao = "Boa Tarde!";
    } else {
        if (hora < 22) {
            saudacao = " Boa noite"
        } else {
            saudacao = "MUITO TARDE!";
        }
    }
}

console.log(saudacao)