/*let numero =parseInt(prompt("ingrese un numero "))

if (numero % 2 == 0) {
    alert ("su numero es par")
    
}else{
    alert("su numero es impar ")
}
*/

let numero = parseInt(prompt("ingrese un numero "))
let resultado = numero % 2 == 0

switch (resultado) {
    case true:
        alert("su numero es par ")
        break;
        
        case false:
            alert("su numero es impar")
            break;
        default:
            alert("ocurrio un error")

}