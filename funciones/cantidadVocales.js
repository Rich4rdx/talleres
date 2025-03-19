

function CantidadVocales() {
    let palabra = prompt("ingrese una palabra")
    let contador = 0

    for (let i = 0; i < palabra.length; i++) {
      let  letra = palabra[i].toLowerCase()

        if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
            contador ++;
        }
  
    }
alert (`tu cantidad de vocales es : ${contador}`)
}

CantidadVocales()