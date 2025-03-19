//Cree un programa que lea un número y muestre si este es par o impar. Realice una versión con condicionales
//y otra con estructura switch-case.

/*function parIn(){
    let numero = parseInt(prompt("ingrse el numero"));

    if(numero < 0){
        alert("tu numero es par")
    }else if(numero > 0){
        alert("tu numero es inpar")
    }
}
parIn();*/ 


let numero = prompt("ingrse el numero");

switch(numero % 2){
    case 0:
    alert("tu numero es par")
    break;
    case 1:
    alert("tu numero es inpar")
    break;
    default:
        alert("ingresa un nunero")
        break;
}

