//Crear una clase base Vehiculo con un método mover(), y subclases Coche y Bicicleta que implementen este método de forma diferente.

class Vehiculo {
    constructor(marca,color){
        this.color = color
        this.marca = marca
    }
    mover(){
        console.log(`el vehiculo de marca ${this.marca}  tiene un color ${this.color} muy lindo ya esta en movimiento`);
        
    }
}

class Coche extends Vehiculo {
    constructor(color,marca){
        super()
        this.color = color
        this.marca = marca

    }

    mover(){
        console.log(`el coche de marca ${this.marca} ya esta moviendose a 20km/h y es de color ${this.color}`);
        
    }
}

class Bicicleta extends Vehiculo{
    constructor(color, tamaño){
        super()
        this.color = color
        this.tamaño = tamaño 

    }

    mover(){
        console.log(`la bicicleta tiene un color brillante ${this.color}  y un tamaño de ${this.tamaño}`);
        
    }
}

const vehiculo1 = new Vehiculo ("nissan","dorado")
vehiculo1.mover()
const coche1 = new Coche ("rojo","toyota")
coche1.mover()
const bicicleta1 = new Bicicleta ("azul", "1,93m")
bicicleta1.mover()