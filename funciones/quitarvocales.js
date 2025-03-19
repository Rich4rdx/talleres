function QuitarVocales() {
    let palabra = prompt("ingrese una palabra")
    let resultado = ``
    const vocales = "aeiouAEIOU"
   
    for (let i = 0; i < palabra.length; i++) {
        if (!vocales.includes(palabra[i])) {
            resultado +=palabra[i]
    
            
        }
  
        
    }

    return alert(resultado)
}

QuitarVocales()