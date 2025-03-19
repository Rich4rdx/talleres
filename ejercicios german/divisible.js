/*let numero =parseInt(prompt("ingrese su numero "))
if (numero % 5 ==0) {
    alert("su numero si es divisible entre 5")

    
}else{
    alert("su numero no es divisible entre 5")
}
    */

let numero =parseInt(prompt("ingrese su numero "))
let resultado = numero % 5 == 0

switch (resultado) {
    case true:
        alert("su numero si es divisible entre 5")
        break;

        case false:
            alert("su numero no es divisible entre 5 ")

    default:
        alert("ocurrio un error")
}