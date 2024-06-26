function criaPessoa(nome, sobrenome){
    return {
        nome, 
        sobrenome, 
        fala: function(assunto){
            return `${nome} está falando sobre ${assunto}`; 
        }
    };
}

const p1 = criaPessoa('Pedro', 'Grigolli');
console.log(p1);
console.log(p1.fala('autoescola'));