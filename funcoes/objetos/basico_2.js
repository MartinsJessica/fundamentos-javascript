// estrutura objeto: chave, valor, sintaxe e virgula no final, do ultimo par de chave
// voce pode omitir a virgula e os espacos tambem
// o bjeto produto tem 3 atributos ou propriedades
// é possível associar o valor de uma variavel a um objeto e ou função
//método nada mais é que um preço dentro de um objeto
//preço is not defined precoComDesconto: function () {
//       return preco * (1 - desconto)
// }
// this é usado para referenciar objeto de si mesmo, o método. (usado no objeto)
//java nao é obrigado em todas usar o this




const produto = {
    nome: 'iPad',
    preco: 5600,
    desconto: 0.15,
    precoComDesconto: function () {
        return this.preco * (1 - this.desconto) //this se refere ao objeto
    }

}
console.log(produto.nome);
console.log(produto.precoComDesconto());