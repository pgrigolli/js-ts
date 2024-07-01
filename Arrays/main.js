// const nomes = ['Pedro', 'Julia', 'Eduardo', 'Luis', 'Rafaela'];

//.splice(indice, delete, e1, e2, e3, e4)
// a partir do indice "indice" remova "delete" elementos
//adiciona os elementos "e1,e2,e3,e4" no indice "indice"


// const removido = nomes.splice(4, 1);

// console.log(nomes, removido);


// const numerosFiltrados = numeros.filter(valor => valor > 10);
// console.log(numerosFiltrados);




// const pessoasComNomeMaiorQueCincoLetras = pessoas.filter(valor => valor.nome.length > 5);
// const pessoasComMaisDeCinquentaAnos = pessoas.filter(valor => valor.idade > 50);
// const pessoasComNomeTerminadoEmA = pessoas.filter(valor => valor.nome.toLowerCase.endsWith('a'));
// console.log(pessoasComNomeMaiorQueCincoLetras);
// console.log(pessoasComMaisDeCinquentaAnos);
// console.log(pessoasComNomeTerminadoEmA);

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosEmDobro = numeros.map(valor => valor*2);
// console.log(numerosEmDobro);

const pessoas = [
        { nome: 'Luiz', idade: 62},
        { nome: 'Ian', idade: 30},
        { nome: 'Bianca', idade: 18},
        { nome: 'Rafaela', idade: 55},
        { nome: 'Felipe', idade: 27},
        { nome: 'Victor', idade: 19},
        { nome: 'Kaike', idade: 12},
        { nome: 'Eduardo', idade: 36},
        { nome: 'Julia', idade: 25},
        { nome: 'Pedro', idade: 23},
    ]

const nomes = pessoas.map(valor => valor.nome);
console.log(nomes);

const idades = pessoas.map(valor => ({idade: valor.idade}));
console.log(idades);

const comIds = pessoas.map(function(valor, indice){
    const newObj = { ...valor };
    newObj.id = indice;
    return newObj;
});
console.log(comIds);



