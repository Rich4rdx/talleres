//Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un 
//triángulo o no. Realice una versión con condicionales y otra con estructura switch-case.

let angulo = parseFloat(prompt("ingrese el angulo"))
let angulo2 = parseFloat(prompt("ingresa el angulo2"))
let angulo3 = parseFloat(prompt("ingresa el angulo3"))

if(angulo > 0 && angulo2 > 0 && angulo3 > 0 && angulo + angulo2 + angulo3 === 180){
    alert(`los angulos corresponde a un triangulo`)
}else{
    alert("los angulos no  es de un triangulo")
}
