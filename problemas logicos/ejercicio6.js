//Cree un programa que tome el lado de un cubo e imprima su volumen. 
let lado = prompt("Ingresa el lado del cubo:");
lado = parseFloat(lado);

if (isNaN(lado) || lado <= 0) {
    console.log("Por favor, ingresa un número válido y positivo para el lado del cubo.");
} else {
    let volumen = lado * lado * lado;
    console.log("El volumen del cubo con lado " + lado + " es: " + volumen);
}