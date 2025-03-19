//Cree un programa que tome el valor de un producto e imprima su precio final si éste tiene siempre un descuento del 10%. 

let precio = prompt("Ingresa el precio del producto:");
precio = parseFloat(precio);

if (isNaN(precio) || precio <= 0) {
    console.log("Por favor, ingresa un precio válido y positivo.");
} else {
    let descuento = precio * 0.10;
    let precioFinal = precio - descuento;
    console.log("El precio final con el descuento del 10% es: " + precioFinal);
}