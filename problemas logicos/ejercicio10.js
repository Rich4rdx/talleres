//Cree un programa que tome un número real e imprima su valor absoluto.
let numero = prompt("Ingresa un número real:");
numero = parseFloat(numero);

if (isNaN(numero)) {
    console.log("Por favor, ingresa un número válido.");
} else {
    let valorAbsoluto = Math.abs(numero);
    console.log("El valor absoluto de " + numero + " es: " + valorAbsoluto);
}