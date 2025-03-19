let precios = parseFloat(prompt("ingrese el valor de su electrodomestico"))
let meses = parseFloat(prompt("ingrese sus meses"))
let int = 0.05;
let intmeses = int * meses
let prefinal = precios + (precios * int)
let pagomeses = prefinal / meses;

alert(`el precio total a pagar con los intereses son de ${prefinal}`)