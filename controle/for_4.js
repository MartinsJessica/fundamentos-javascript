// [1, 1] [1, 2] [1, 3]  coluna 2 não varia, coluna 1 varia + 1
// [2, 1] [2, 2] [2, 3]
// [3, 1] [3, 2] [3, 3]


for (let i = 1; i <= 3; i++) {     //debugando i vai valer i = 1, 2 e 3 e j a mesma coisa depois termina o,laço de repetição ate 3 vezes o laço externo e 3x o interno
    let linha = ""; //string vazia     podia usar console.log
    for (let j = 1; j <= 3; j++) {
        linha += `[${i}, ${j}]`  //foi usado template dtring ``
    }
    console.log(linha);
}