// Escreva uma função que receba dois numero e retorne o maior entre eles

function maxEntreDoisNumeros(n1, n2) {
    if (n1 > n2) {
        return n1;
    }else{
        return n2;
    }
}



// Escreva uma função que receba comprimento e largura e diga se a imagem está em modo paisagem ou não

function ePaisagem(larg, alt){

    return larg > alt;
}

// Escreva uma função que retorne Fizz se for divisivel por 3, Buzz se for divisivel por 5, FizzBuzz se for divisivel por 3 e 5,
// se não for divisil nem por 3 nem por 5 retorna o proprio numero, se é realmente um numero, executar de 0 ate 100;

function fizzBuzz(num){

    if (isNaN(num)) {return num};


    if(num % 3 == 0 && num % 5 == 0){
        return "FizzBuzz";
    }else if (num % 3 === 0){
        return "Fizz";
    }else if (num % 5 === 0){
        return "Buzz";
    }else{
        return num;
    }


}

for (let i = 0; i <=100; i++){
    console.log(i, fizzBuzz(i))

}