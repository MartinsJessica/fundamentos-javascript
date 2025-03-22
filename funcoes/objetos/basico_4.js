//posso criar os atributos de forma dinâmica
//fora de uma funcao ou de um objeto
//ao criar um atributo dinâmico o atributo nome vai imprimir Aluno


const usuario = {
    email: 'aluno@coder.com.br'
};

usuario.nome = 'Aluno'; //criei um atributo dinâmico
usuario.senha = '123456';


console.log(usuario.email); //vai imprimir aluno@coder.com.br
console.log(usuario.nome); // nome não foi definido no objeto então ele vai imprimir undefined
console.log(usuario);