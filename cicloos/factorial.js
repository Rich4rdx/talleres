function consultarFactorial(n) {
    if (n ==0||n==1) {
        return 1;
    }else{
        return n*consultarFactorial(n-1)
    }        
}

let numero = parseInt(prompt("ingrese el numero "))
let factorial = consultarFactorial(numero)
alert(`el factorial de su numero es ${factorial}`)
