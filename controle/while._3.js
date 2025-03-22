const futuro = Date.now() + 1000;
let quantidade = 0;



while (Date.now() < futuro) {
    quantidade++; //aqui vou incrementar a quantidade
}

console.log("Qtde: " + quantidade);


//console.log(Date.now()); //data de referencia desde 1970 e milisegundos(convenção)