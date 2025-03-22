//então sempre que ver uma variavel ou uma constante com uma para de chaves 
// significa que ela é um objeto
//objeto é composto por um par de chaves e um par de valores

const numeros = [1, 2, 3]
const produto = {
    nome: 'caneta',
    preco: 9.99,
    desconto: 0.2
}

console.log(numeros[0]);
console.log(produto['nome']); //acessando um atributo do objeto com chave e e string
console.log(produto['preco']);
console.log(produto['desconto']);


console.log(produto.nome);
console.log(produto.preco);

console.log(typeof produto);