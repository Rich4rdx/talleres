function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  function lanzarDados() {
    const dado1 = lanzarDado();
    const dado2 = lanzarDado();
    const suma = dado1 + dado2;
  
    console.log(`Lanzamiento 1: ${dado1}`);
    console.log(`Lanzamiento 2: ${dado2}`);
    console.log(`Suma de los dados: ${suma}`);
  }
  
  lanzarDados();