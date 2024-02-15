// Criando cópias

//Considere a seguinte lista de notas: 7, 7, 8 e 9.

//Crie uma nova lista adicionando a nota 10, sem alterar a lista original.

const notas = [7, 7, 8, 9];
const novaListaNotas = [...notas, 10];   //[...] aderi o novo valor de 10 apenas para novaListaNotas e não para notas.
//spread operator (operador que espalha valores)

//novaListaNotas.push(10);

//let nota = 9.75;
//let novaNota = nota;

//nota = 10;

console.log(notas);
console.log(novaListaNotas);
