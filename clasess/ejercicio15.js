//Crear una clase base Animal con un método hacerSonido() y dos subclases Perro y Gato que sobrescriban este método.

class Animal {
constructor(nombre,Animal){
    this.nombre = nombre
    this.Animal = Animal

}
hacerSonido (){
    console.log(`el animal esta hacieno un ruido raro `);
    
}

}

class Perro extends Animal {
   constructor(nombre,Animal){
    super()
    this.nombre = nombre
    this.Animal = Animal
   }
   hacerSonido(){
    console.log("perro haciendo sonido");
    
   }
}

class Gato extends Animal{
    constructor(nombre,Animal){
        super()
        this.nombre = nombre
        this.Animal = Animal

    }
    hacerSonido(){
        console.log("Gato haciendo sonido");
        
    }
}

const perro1 = new Perro ("sasha", "criollo")
perro1.hacerSonido()
const gato1 = new Gato ("tom", "salvaje")
gato1.hacerSonido()