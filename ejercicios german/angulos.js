
    /*let n1 = parseInt(prompt("ingrese el primer angulo de su triangulo"))
    let n2 = parseInt(prompt("ingrese el segundo angulo de su triangulo"))
    let n3 = parseInt(prompt("ingrese el tercer angulo de su triangulo"))

    if(n1 + n2 + n3 > 180){
        alert("estos datos no perteneces a un triangulo ")

    }else if( n1 <= 0 && n2 <= 0 && n3 <= 0){

        alert("no es posible calcular con estos datos")

    }else if(n1 + n2 + n3 <= 180){
        alert("estos datos si pertenecen a un triangulo")
    }
    */

    let n1 =parseInt(prompt("ingrese su primer angulo de su triangulo"))
    let n2 =parseInt(prompt("ingrese su segundo angulo de su triangulo"))
    let n3 =parseInt(prompt("ingrese su tercer angulo de su triangulo"))

   let sumas = n1 + n2 + n3

   switch (sumas) {
    case 180:
        alert("estos datos si pertenecen a un triangulo")
        break;

        case 0:
            alert("no es posible calcular con estos datos ")

   
    default:
        alert("no se puede sumar estos datos ")
        break;
   }
         
    
