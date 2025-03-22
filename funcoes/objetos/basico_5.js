const cliente = {
    codigo: 123,
    nome: 'Ana',
    vip: true,
    endereco: {  // valor que é outro objeto
        logradouro: 'Rua 2',
        numero: 123,
        complemento: 'Casa',
        pontosRef: [   //valor que é um array
            'Hospital x',
            'hospital y',
        ]



    },
    nomeFilhos: ['joao', 'maria', 'pedro'] //forma literal, ir adicionando a partir do objeto
}

console.log(cliente['endereco']['logradouro']); //acessando um atributo do objeto com chave e e string
console.log(cliente.endereco.logradouro); // mais usual, acessando um atributo do objeto com ponto
console.log(cliente.endereco.pontosRef[0]); // acessando um atributo do objeto com ponto chave e e string