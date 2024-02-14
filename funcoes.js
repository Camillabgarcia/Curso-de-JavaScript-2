// Parâmetros/Argumentos
//Retorno

function exibeInfosEstudante (nome, nota){    //Não possui parâmetro. ()- vazio   //Pode possuir 1 ou vários parâmetros.
    return  `O nome é ${nome} e a nota é ${nota}`;  //O return: faz com que tudo que está dentro da função funcione fora dela também. Parece com o console.log.
}

console.log (exibeInfosEstudante('Caroline', 10));  //A função recebe um tipo de dado : Caroline. (console.log)
console.log (exibeInfosEstudante('Ana', 7));       //A função recebe um tipo de dado : Ana. (console.log)


//RETURN: faz processamento.
//Console.log: Só exibe na tela e não faz processamento.