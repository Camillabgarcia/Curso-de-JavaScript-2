const notaFinal = 6;
const faltas = 2;
const advertencias = 0;

if (notaFinal < 7 && faltas > 4){         // CONDIÇÃO:   || = ou(or).  && = e(and).
    console.log('Reprovado, boas festas.');
} else{
    console.log('Não foi reprovado por falta.');
}

if (faltas >= 2 && !advertencias) {      // ! = não pode ter advertência para receber o bônus (operador de negação).
    console.log('Recebeu o bônus');
} else{
    console.log('Não recebeu bônus');
}

