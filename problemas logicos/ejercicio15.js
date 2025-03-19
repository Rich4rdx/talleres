function convertirSegundos(segundos) {
    let horas = Math.floor(segundos / 3600);
    let minutos = Math.floor((segundos % 3600) / 60);
    segundos = segundos % 60;
    
    return { horas, minutos, segundos };
  }
  
  let tiempo = convertirSegundos(3665);
  console.log(`${tiempo.horas} horas, ${tiempo.minutos} minutos y ${tiempo.segundos} segundos`);