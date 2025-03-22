//negação logica
console.log(!true);
console.log(!!false);

console.log("Texto!")//converter algo que não é nativamente true ou false no javascript tem como, e tem tambem a dupla negação volat o mesmo valor, e no texto volta true
console.log(!!""); //false string vazia
console.log(!!" "); // true string com espaço


console.log(!!0); //false
console.log(!!-1); // todos valores numericos irao voltar !! verdadeiro exceto o zero 
console.log(!!-0.00001); //false
