class DispositivoEletronico{
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado){
            console.log(this.nome + ' já está ligado.');
            return;
        }
        this.ligado = true;

    }

    desligar() {
        if (this.ligado){
            console.log('desligando ' + this);
            this.ligado = false;
            return;
        }

    }



}

const d1 = new DispositivoEletronico('Computador');
d1.ligar();
console.log(d1)
d1.ligar();



