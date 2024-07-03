function Produto(nome, preco){
     this.nome = nome;
     this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))

}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))

}

const p1 = new Produto('caneta', 100);
p1.aumento(10);
console.log(p1.preco);