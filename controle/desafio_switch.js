// A+ -> 10
// A -> 9
// B+ -> 8
// B -> 7
// C+ -> 6
// D+ -> 4
//D -> 3
// E+ -> 2
// E -> 1
// F -> 0

const conceito = 'A+';

switch (conceito) {

    case 'A+': console.log(10); break;
    case 'A': console.log(9); break;
    case 'B+': console.log(8); break;
    case 'B': console.log(7); break;
    case 'C+': console.log(6); break;
    case 'C': console.log(5); break;
    case 'C': console.log(4); break;
    case 'A+': console.log(3); break;
    case 'A+': console.log(2); break;
    case 'A+': console.log(1); break;
    case 'A+': console.log(0); break;
    case 'A+': console.log('Conceito inválido');
}