//Crear una clase Cliente con un atributo privado saldo y un método privado calcularDescuento() que se utilice dentro de un método público aplicarDescuento()

class Cliente {
    #saldo
    constructor(saldo,nombre) {
        this.#saldo = saldo
        this.nombre = nombre
        
    }
    #calcularDescuento(){
        if(this.#saldo > 1000){
            return 0.10;

        }else if(this.#saldo >500){
            return 0.05;
        }else{
            return 0;
        }
    }

    aplicarDescuento(precio){
        const descuento = this.#calcularDescuento()
        return precio * (1- descuento)

        
    }

    mostrarSaldo(){
        console.log(`el saldo de ${this.nombre} es de : ${this.#saldo}`);
        
    }
}

const persona1 = new  Cliente (5000 ,"Richard")
persona1.mostrarSaldo()