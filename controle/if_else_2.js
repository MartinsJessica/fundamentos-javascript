const hora = 23;
let saudacao;

if (hora < 12) { // temos uma unica espressão associada ao bloco de código respondendo ao verdadeiro e falso, como eu façõ para ter mais espressões ou casos diferentes
    saudacao = "BOM DIA";
} else {
    saudacao = "Boa Tarde!";
}

console.log(saudacao);