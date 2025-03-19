//Cree un programa que lea una cantidad e imprima un porcentaje a calcular requerido sobre esa cantidad.
 let cantidad = prompt("Ingresa la cantidad:");
cantidad = parseFloat(cantidad);

let porcentaje = prompt("Ingresa el porcentaje a calcular sobre la cantidad:");
porcentaje = parseFloat(porcentaje);

if (isNaN(cantidad) || cantidad <= 0 || isNaN(porcentaje) || porcentaje <= 0) {
    console.log("Por favor, ingresa valores válidos y positivos.");
} else {
    let resultado = (cantidad * porcentaje) / 100;
    console.log("El " + porcentaje + "% de " + cantidad + " es: " + resultado);
}