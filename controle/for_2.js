//for(;;) {

//}        aqui daria laço infinito por não determinar o true

//for(; true; ) {    aqui já daria certo com laço infinito

//}

let controle = 1;

for (; controle <= 10;) {  // os incrementos podem ser colocados dentro ou fora
    console.log(controle);
    controle++;
}
console.log("Fim");