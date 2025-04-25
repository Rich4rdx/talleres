class Vehiculo {
    constructor(peso,velocidadMaxima) {
        this.peso = peso
        this.velocidadMaxima = velocidadMaxima
        
    }
    mover(){
        console.log(`usted va mover su vehiculo`);
        
    }
}

class Carro extends Vehiculo{
    constructor(peso,velocidadMaxima){
        super()
        this.peso = peso
        this.velocidadMaxima = velocidadMaxima
    }

    mover(){
        console.log(`su peso de su carro es de  ${this.peso}, y su velocidad maxima es de ${this.velocidadMaxima} km`);
        
    }
}

class Moto extends Vehiculo{
    constructor(peso,velocidadMaxima){
        super()
        this.peso = peso
        this.velocidadMaxima = velocidadMaxima
    }
    mover(){
        console.log(`su peso de su moto es  es de  ${this.peso}, y su velocidad maxima es de  ${this.velocidadMaxima} km`);
        
    }
}

const moto1= new Moto(100,300)
moto1.mover()
const carro1 = new Carro (500, 600)
carro1.mover()
