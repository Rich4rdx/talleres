class persona {
    constructor(nombre) {
        this.nombre = nombre   
    }
     caminar(){
        console.log(`${this.nombre} esta caminando`);
        
     }
}

const persona1 = new persona(`richard`)
persona1.caminar()