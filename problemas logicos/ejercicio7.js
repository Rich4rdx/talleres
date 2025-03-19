//Cree un programa que tome el precio de un producto e imprima su precio final al consumidor con un IVA de 19%. 
let precio = prompt("Ingresa el precio del producto:");
precio = parseFloat(precio);

if (isNaN(precio) || precio <= 0) {
    console.log("Por favor, ingresa un precio válido y positivo.");
} else {
    let iva = precio * 0.19;
    let precioFinal = precio + iva;
    console.log("El precio final con IVA es: " + precioFinal);
}