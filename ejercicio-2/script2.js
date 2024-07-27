/*
# Ejercicio Número 2 

# Jugando al chinchón

El chinchón es un juego de naipes de 2 a 8 jugadores principalmente jugado en España, Argentina, Colombia, Paraguay, Uruguay, Cabo Verde y otros países.

Existen muchas variaciones del juego.

Para este problema, usaremos la variación con 48 cartas sin comodín.
Cada una de las 48 cartas posibles tiene un número y un palo. 
El número varía desde 1 hasta 12 inclusive, y el palo puede ser cualquiera de los siguientes:

- Oros, Copas, Espadas o Bastos.

Un momento importante en el chinchón ocurre a la hora de contar los puntos de penalización que recibirá un 
jugador por las cartas que tiene en la mano cuando termina la ronda. Un jugador siempre termina la 
ronda con 7 cartas en la mano, que puede agrupar formando juegos. Un juego es un conjunto de cartas 
con cierto patrón particular. Los posibles juegos son:
- Escalera: se forma con 3 o más cartas del mismo palo, cuyos números sean consecutivos. 
  Por ejemplo 1, 2, 3 forma escalera, al igual que 5, 6, 7, 8, 9, pero en cambio 11,
  12, 1 no es una escalera válida, ni tampoco lo son ni 4, 5, 7 ni 8, 9.
- Pierna: se forma con 3 o más cartas que tengan todas el mismo número.
- Chinchón: se forma con 7 cartas del mismo palo, cuyos números sean consecutivos. 
  Es decir, el chinchón es una escalera de 7 cartas.

Al agrupar las cartas para formar juegos, no se permite utilizar una misma carta para formar dos juegos diferentes.
Es posible que queden cartas sin agrupar, es decir, sin formar ningún juego. 
La penalización del jugador será igual a la suma de los números de las cartas que quedan sin agrupar.
Si el jugador puede agrupar sus cartas para formar juegos de varias maneras, 
siempre elegirá aquella que resulte en la mínima penalización posible.
Un caso especial se da cuando el jugador logra agrupar todas sus 7 cartas formando un juego: 
en este caso, en lugar de 0 puntos, obtiene -10 puntos (menos diez, que resta 10 puntos de penalización).
Un caso aún más especial se da cuando el jugador logra no solo agrupar todas sus 7 cartas, 
sino además hacerlo formando un chinchón. En ese caso, la penalización no es ni 0 ni -10, sino que es de -50 puntos (menos cincuenta puntos).

Debes escribir un programa que, dado un listado de 7 cartas, calcule la mínima penalización posible si se agrupan correctamente las cartas.

### Objetivo

- Se debe implementar una función: `chinchon(numero, palo)`, donde palo es una cadena de exactamente 7 caracteres, 
  y numero es un arreglo de exactamente 7 números.
- Para cada i entre 0 y 6 inclusive, la carta i-ésima tiene el número numero[i] y el palo indicado por la letra palo[i].
- Los palos se indican por su primera letra en mayúscula. [B, O, E, C]
- La función debe retornar un único entero: los puntos de penalización correspondientes a las cartas recibidas.

*/

function esMismoPalo(arrayPalos) {
    for (let i = 1; i < arrayPalos.length; i++) {
      if (arrayPalos[i] !== arrayPalos[0]) {
        return false; // Si encuentra un palo diferente, no es chinchón
      }
    }
    return true; // Todos los palos son iguales
  }
  
  /* Función principal para calcular la penalización mínima */
  function chinchon(numero, palo) {
    if (numero.length !== 7 || palo.length !== 7) return null; // Verificar longitud válida
  
    const arrayPalos = palo.toUpperCase().split(""); // Convertir palos a mayúsculas y a un array
  
    // Comprobar si todas las cartas son del mismo palo
    let esChinchon = esMismoPalo(arrayPalos);
  
    if (esChinchon) {
      // Ordenar números de cartas
      const sortedNumeros = numero.sort((a, b) => a - b);
  
      // Comprobar si los números son consecutivos
      for (let i = 1; i < sortedNumeros.length; i++) {
        if (sortedNumeros[i] !== sortedNumeros[i - 1] + 1) {
          esChinchon = false;
          break;
        }
      }
  
      // Si es chinchón, retornar -50 puntos
      if (esChinchon) {
        return -50;
      }
    }
  
    // Si no es chinchón, calcular la penalización mínima
    // (Implementar lógica para encontrar la agrupación óptima)
    // Por simplicidad, vamos a asumir que la penalización mínima es la suma de todas las cartas no agrupadas
    let puntos = numero.reduce((acc, val) => acc + val, 0);
  
    // Aquí debería ir la lógica para encontrar la agrupación óptima y minimizar la penalización
  
    return puntos;
  }
  
  // Ejemplo de uso
  console.log(chinchon([1, 2, 3, 4, 5, 6, 7], "BBBBBBB"));  // Debe retornar -50 porque forma un chinchón
  