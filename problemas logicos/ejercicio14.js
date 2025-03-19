function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  let numeroAleatorio = generarNumeroAleatorio(1, 100);
  console.log(`El número aleatorio generado es: ${numeroAleatorio}`);