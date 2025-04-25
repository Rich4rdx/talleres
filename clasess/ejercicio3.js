class cuentaBancaria{
    #saldo;
    constructor(saldo){
        this.#saldo = saldo

    }

    depositar(cantidad){
        this.#saldo = this.#saldo + cantidad

    }
    retirar(cantidad){
        this.#saldo = this.#saldo - cantidad

    }

    getsaldo(){
        return this.#saldo;
    }
}

const cuenta1 = new cuentaBancaria(10000);
console.log("Saldo actual ", cuenta1.getsaldo());
cuenta1.depositar(20000);
console.log("Saldo actual ", cuenta1.getsaldo());
cuenta1.retirar(5000);
console.log("Saldo actual ", cuenta1.getsaldo());
