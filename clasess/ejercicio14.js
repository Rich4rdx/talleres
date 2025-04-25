// Crear una clase Producto con un atributo privado precio y métodos públicos setPrecio() y getPrecio() para acceder y modificar el precio.

class Producto {
    #precio
    constructor(nombre,precio) {
        this.nombre = nombre
        this.#precio = precio
        
    }

    setprecio(precioNuevo){
        if (precioNuevo >= 0) {
            this.#precio = precioNuevo
            console.log(`el precio de ${this.nombre} es de ${this.#precio}`);
            
        }else{
            console.log(`el numero debe ser mayor a 0`);
            
        }

    }

    getprecio(){
        return this.#precio;
    }
}

const producto1 = new Producto ("teclado",5000)

console.log(`el precio del producto ${producto1.nombre} es de : ${producto1.getprecio()}`);

producto1.setprecio(500)

console.log(`${producto1.nombre} tiene un precio de ${producto1.getprecio()}`);




