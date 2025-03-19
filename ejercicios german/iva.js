/*alert ("que producto desea llevar: arroz,crema,vino,lentejas")
let producto = String(prompt("ingrese el nombre del producto"))

if (producto === "crema" || producto === "vino") {
    alert ("este producto tiene un iva")
    
}else{
    alert("el producto no tiene iva ")
}
    */


alert ("que producto desea llevar: arroz,crema,vino,lentejas")
let producto = prompt("ingrese el nombre del producto")

switch (producto) {
    case "arroz":
        case "lentejas":
        alert ("sus productos no tienen iva ")
        break;

    case "crema":
        case "vino":
            alert("sus productos si tienen iva ")
            break;

        default:
    
}
