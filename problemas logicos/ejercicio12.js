function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  let celsius = 25;
  let fahrenheit = celsiusAFahrenheit(celsius);
  
  console.log(`${celsius}°C es igual a ${fahrenheit}°F`);