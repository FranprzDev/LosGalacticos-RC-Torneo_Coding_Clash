/*
    Consigna:
    Maru está aprendiendo a dividir con números enteros positivos.
    Más específicamente, a dividir por dos en forma entera, es decir, descartando la parte decimal.

    Por ejemplo, `10 dividido 2 es 5`, con un resultado exacto `10 / 2 = 5`.
    Por otro lado `13 dividido 2 es 6.5`, es decir `13 / 2 = 6.5`.
    Al descartar la parte decimal se obtiene 6, que es lo que calcula Maru cuando hace 13 dividido 2.

    Para practicar más, Maru realiza el proceso de dividir por dos de esta forma varias veces, a partir de un cierto número inicial. 
    Por ejemplo, si parte del número 38 y realiza el proceso 4 veces, obtendrá primero el número 19, luego el número 9, 
    a continuación el número 4 y por último el número 2, que es el resultado final del proceso si se empieza con el número 38 y se divide 4 veces.

    Debes escribir una función que ayude a Maru a calcular el resultado final luego de las divisiones.

    ### Objetivos

    - Debes implementar la función `dividiendo(numero, veces)`
    - Sus parámetros son:
      - numero: El número inicial, con el que Maru inicia el proceso.
      - veces: La cantidad de veces que Maru dividirá por dos desde el número inicial.
    - La función debe retornar un entero: el resultado final luego de las divisiones.
*/


// Función que realiza las divisiones
function dividiendo(numero, veces) {
  if (numero < 0) return null;

  if (veces < 1) return null;

  // Constante para dividir el número
  const dividendo = 2;
  // Almacenar el resultado
  let resultado = 0;

  // Bucle que se repite la cantidad de veces indicada
  for (let i = 0; i < veces; i++) {
    // Divide el número por 2 y redondea para abajo 
    resultado = Math.floor(numero / dividendo);
    // Actualiza el número para la siguiente iteración
    numero = Math.floor(resultado);
  }

  // Retorna el resultado final luego de todas las divisiones
  return resultado;
}

// Ejemplos de uso de la función
console.log(dividiendo(7, 2)); 
console.log(dividiendo(7, 0)); 
console.log(dividiendo(15, -1)); 
console.log(dividiendo(-10, -1)); 
console.log("Numero es: (6)", dividiendo(13, 1)); 
console.log("Numero es: (5)", dividiendo(10, 1)); 
console.log("Numero es: (38)", dividiendo(38, 4)); 
