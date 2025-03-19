function numero(){
    let numero = parseInt(prompt("ingresa el numero"))
    let numero2 = parseInt(prompt("ingresa el numero"))
    if(numero > numero2){
          alert(`el numero1 ${numero} es mayor`)
    } else if(numero2 > numero){
        alert(`el numero2 ${numero2} es mayor`)
  }else {
    alert("los dos numero son iguales")
  }
}
numero();