const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = -2;
const notaquartoBi = Number.parseInt('5');    //Para transformar a string(5) em número é preciso colocar Number.parseInt antes.

const total = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaquartoBi) / 4;

console.log('A média é ' + total.toFixed(2));     //toFixed: função para números (quantidade de casas decímais a serem vizualizadas).

const nome = 'Camilla';
console.log('Meu nome é ' + nome)
