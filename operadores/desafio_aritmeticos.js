let f = 73;
// F - 32   C
// -----  = ---
//   9       5
// como * tem prioridade na soma e no caso na conta o - tem prioridade, então tenho que isolar com os parenteses;

let c = ((f - 32) / 9) * 5;
console.log(c);
