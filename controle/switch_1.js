let nota = 7.2;

switch (Math.ceil(nota)) {
    case 10:
    case 9:
    case 8:
        console.log('Parabéns!')
        break;
    case 6:
    case 5:
        console.log('Recuperação');
        break
    case 3:
        console.log('Reprovado')
    case 1:
        console.log('Muito Reprovado')

}

console.log('Fim!')

//aqui não vou fazer um true or false mas um numero inteiro sendo arredondado ceil;