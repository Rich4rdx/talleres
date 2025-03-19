/*Escriba una función que se llame facturacion() La función tiene que recibir como
parámetro el monto de un producto , y el medio de pago : C (tarjeta de crédito), E
(efectivo) y D (tarjeta de débito). Si el monto del producto es menor a $200 no se
aplicará ningún descuento. Si el monto a pagar es entre $200 y $400 se aplicará un
descuento del 30% si el medio de pago es efectivo, 20% si se realiza con débito y
10% con tarjeta de crédito. Para montos mayores a $400, el descuento es del 40%
sin importar el medio de pago La función deberá retornar el monto final a pagar.
*/

let medioPago = prompt("¿Cómo desea pagar? 1- Tarjeta de débito. 2- Efectivo. 3- Tarjeta de crédito");
let montoProducto = parseFloat(prompt("Ingrese el monto de su producto"));
let descuento = 0;

function facturacion(montoProducto, medioPago) {

    if (montoProducto < 200) {
        alert(`El total de su producto es de: $${montoProducto}`);
    } 
    
    else if (montoProducto >= 200 && montoProducto <= 400) {
        if (medioPago == 2) {
            descuento = montoProducto * 0.7 
        } 
        else if (medioPago == 1) {
            descuento = montoProducto * 0.8 
        } 
        else if (medioPago == 3) {
            descuento = montoProducto * 0.9 
        } 
        else {
            alert("Método de pago no válido.")
            return; 
        }
        alert(`El total de su producto con el descuento es de: $${descuento.toFixed(2)}`)
    } 
    
    else if (montoProducto > 400 && (medioPago == 1 || medioPago == 2 || medioPago == 3)) {
        descuento = montoProducto * 0.6
        alert(`El total de su compra con el descuento es de: $${descuento.toFixed(2)}`)
    } 
    else {
        alert(`El total de su producto es de: $${montoProducto} (sin descuento)`)
    }
}


facturacion(montoProducto,medioPago)