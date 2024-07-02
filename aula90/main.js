// function Produto(nome, preco, estoque){
//     this.nome = nome;
//     this.preco = preco;
//     this.estoque = estoque;

//     Object.defineProperty(this, 'estoque', {
//         enumerable: true, // mostra a chave
//         value: estoque, // valor
//         writable: false, // pode alterar
//         configurable: false, // configurável
//     })

//     Object.defineProperties(this, {
//         nome: {
//             enumerable: true, // mostra a chave
//             value: estoque, // valor
//             writable: true, // pode alterar
//             configurable: true, // configurável

//         },
//         preco: {
//             enumerable: true, // mostra a chave
//             value: estoque, // valor
//             writable: true, // pode alterar
//             configurable: true, // configurável

//         }
//     })


// }



// const p1 = new Produto('Camiseta', 20, 3);
// console.log(p1);



function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: () => {
            return estoquePrivado;
        },
        set: (valor) => {
            if(typeof(valor) !== "number"){
                console.log("Bad value");
                return;
            }

            estoquePrivado = valor;

        }
    });
}