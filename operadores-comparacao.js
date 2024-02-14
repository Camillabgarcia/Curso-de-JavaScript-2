const estaAprovado = true;

if (estaAprovado === true){     // === Sempre usar esse para que o código funcione da melhor forma possível para que as comparações deem certo.***
    console.log('Aprovado');
}

if ('0' == 0) {              // == avaliou que a string '0' é a mesma coisa que o número 0, os valores são iguais.
    console.log('Passou na comparação');    // === Não iria funcionar da mesma maneira, pois ele iria avaliar o tipo e o valor (string é diferente de número).
}else{
    console.log('Não passou na comparação');
}

const idadeMinima = 18;
const idadeEstudante = 16;

if (idadeEstudante >= idadeMinima) {
    console.log('Não precisa de autorização');
} else {
    console.log('Precisa de autorização');
}


