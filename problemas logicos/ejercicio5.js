//Cree un programa que tome el radio de un círculo e imprima su área y perímetro
let radio = parseFloat(prompt("ingrse el radio de tu circulo"))
const pi = Math.PI;
let area = pi * (radio**2)
let perimetro = 2 * pi * radio;
alert(`el area de tu circulo es ${area} y tu perimetro es ${perimetro}`);
