const nota1 = 3.8;
const nota2 = 3.1;
const nota3 = 3.0;

function minimo(n1, n2) {
    return n1 <= n2 ? n1 : n2;
}

function media(n1, n2, n3) {
    const menorNota = minimo(n1, minimo(n2, n3));

    if (menorNota === n1) {
        return (n2 + n3) / 2;
    } else if (menorNota === n2) {
        return (n1 + n3) / 2;
    } else {
        return (n1 + n2) / 2;
    }
}

function mediaParaStatus(media) {
    if (media => 7) {
        return 'Aprovado';
    } else if (media >= 4) {
        return "Recuperação";
    } else {
        return " Reprovado";
    }
}

const mediaFinal = media(nota1, nota2, nota3);
const statusFinal = mediaParaStatus(mediaFinal);
console.log(`O resultado final do aluno é ${statusFinal}`)
console.log(media(nota1, nota2, nota3))

// posso no exemplo acima criar função
// ou como esse fazer direto no console.log

console.log(minimo(nota2, nota3))  //aqui consegue comparar as 3 notas

/*function minimo(n1, n2) {
    if (n1 <= n2) {
        return n1;
    } else {
        return n2;
    }
}*/

//desafio qual nota é maior
