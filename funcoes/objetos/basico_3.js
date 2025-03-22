const data = {
    dia: 1,
    mes: 10,
    ano: 2021,
};

//alterar o valor de um atributo de um objeto
//data é uma constante mas os atributos dentro dele podem ser alterados
//o que eu não posso alterar é a constante data exemple data = 1
data.dia = 24;
data.mes = 12;



console.log(`${data.dia}/${data.mes}/${data.ano}`); // interpolação de string