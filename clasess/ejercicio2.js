class contador {
    static = 0
    static incrementar(){
        contador.cuenta ++
    }
}

contador.incrementar()
contador.incrementar()
console.log(`valor de la cuenta:`, contador.cuenta);
