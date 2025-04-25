class Animal {
    hacerSonido(){
        console.log(`animal haciendo sonido`);
        
    }
}
    class Gato extends Animal{
        constructor(nombre,edad){
            super()
            this.nombre = nombre
            this.edad = edad


        }
        hacerSonido(){
            console.log(`Gato haciendo sonido`);
            
        }

    }

    class Perro extends Animal{
        constructor(nombre,edad){
            super()
            this.nombre = nombre
            this.edad = edad

        }
      hacerSonido(){
        console.log(`Perro haciendo sonido `);
        
      }
        
    }

    const gato1 = new Gato ("tom",5)
    gato1.hacerSonido()
    const perro1 = new Perro("jerry", 7)
    perro1.hacerSonido()