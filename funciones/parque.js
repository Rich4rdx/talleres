/*Escriba una función la cual permita o no la entrada a un parque de atracciones,
dicha función recibe la edad, estatura y permiso parental como parámetros. Para
permitir el acceso el usuario deberá de ser mayor de edad y medir más de 150 cm,
en caso de ser menor de edad debe contar con un permiso parental para que sea
concedido el acceso.*/


alert ("bienvenido al parque de diversiones")

let edad = parseInt(prompt("ingrese su edad por favor"))
let estatura = parseFloat (prompt("ingrese su estatura por favor"))
let permisoParental = prompt("si tine acceso parental marque S/N")


function parque(edad,estatura, permisoParental) {
    if (edad >= 18 && estatura >= 150) {
        alert ("usted cumple con los requisitos bienvenido")
        
    }else if(edad < 18 || edad < estatura < 150 || permisoParental == "s S"){
        
        alert("usted tiene un permiso tiene acceso bienvenido")
    }else{
        alert("no cumple con los requisitos lo sentimos..")
    }
    
}


parque(edad,estatura,permisoParental)
