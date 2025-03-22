// foreach percorre cda elemento diferente do for, sem se preocuparo que for add
const notas = [7, 8, 3, 5, 10, 9, 8, 8];

let valores = ''
for (let nota of notas) { //; of valores
    valores += nota + ''; // aqui não vai somar vai concatenar os valores 835109

}

console.log(valores);
let indices = ''; // vai concatenar os indices
for (let indice in notas) {  //in indices
    indices += indice + ';'
}

console.log(indices);