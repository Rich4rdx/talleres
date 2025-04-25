class Inventario {
    #videojuego
    constructor() {
  
        this.#videojuego = []

        
    }

    AgregarJuego(NuevoJuego){
        this.#videojuego.push(NuevoJuego)
  
        
   
        
       

    }

    eliminarVideojuego(eliminarJuego){

        this.#videojuego.splice(eliminarJuego,1)

        
    }

    ObtenerTodosVideojuegos(){
        return this.#videojuego
    }

    ActualizarVideojuego(indice,nuevoNombre,nuevaCategoria,nuevoPrecio){

       const juego = this.#videojuego[indice]
       if(!juego){
        console.log("no existe el juego");
        return
       }
       if (nuevoNombre) {
        juego.nombre = nuevoNombre
        
       }
       if (nuevaCategoria) {
        juego.categoria = nuevaCategoria
        
       }
       if (nuevoPrecio) {
        juego.precio= nuevoPrecio
       }
        
    }

}

class Admin { 
    #contraseña
    #email
    constructor(nombre,contraseña,email,Inventario){
    
        this.nombre = nombre
        this.#contraseña = contraseña
        this.#email = email 
        this.Inventario =  Inventario
    }
    AgregarJuego(VideoJuego ){
        this.Inventario.AgregarJuego(VideoJuego)
    }
    ObtenerTodosVideojuegos(VideoJuego){
        return this.Inventario.ObtenerTodosVideojuegos(VideoJuego)
    }

    
    eliminarVideojuego(VideoJuego) {

        this.Inventario.eliminarVideojuego(VideoJuego)

    

    }
}
const inventario1 = new Inventario()
const Admin1 = new Admin("juan", 1234,"juan54@gmail.com", inventario1) 

Admin1.AgregarJuego({nombre:"nba",precio:4000,categoria:"deporte"})

console.log(Admin1.ObtenerTodosVideojuegos());

Admin1.eliminarVideojuego()

console.log(Admin1.ObtenerTodosVideojuegos());







