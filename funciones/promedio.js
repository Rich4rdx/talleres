function promedio() {

    let nota1 = parseFloat(prompt("ingrese su nota 1"))
    let nota2 = parseFloat(prompt("ingrese su nota 2"))
    let nota3 = parseFloat(prompt("ingrese su nota 3"))
    let nota4 = parseFloat(prompt("ingrese su nota 4"))
    let nota5 = parseFloat(prompt("ingrese su nota 5"))
    let promedio = (nota1 + nota2 + nota3 + nota4 + nota5 )/5
    let resultado = promedio

    if (resultado >= 3) {
    alert(`usted aprobo con un promedio de ${resultado}`)
        
    }if( resultado <3){
    alert (`usted no aprobo su promedio fue de ${resultado}`)
    }

   
    
}

 promedio()