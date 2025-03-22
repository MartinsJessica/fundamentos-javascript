const hora = 12;
let saudacao;

if (hora < 12) {
    saudacao = "Bom dia";
} else {
    if (hora < 18) {
        saudacao = "Boa Tarde!";
    } else {
        saudacao = " Boa noite"
    }
}

console.log(saudacao)

// hora sendo 12 hora cai no else se cai < 18 é boa tarde se não seria boa noite
// hora sendo 18 horas cai no primeiro else, mas não é < 18 entao cai no segundo else que é Boa noite!