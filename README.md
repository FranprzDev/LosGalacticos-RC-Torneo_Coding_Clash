# Ejercicio Número 1

# Dividir varias veces

Maru está aprendiendo a dividir con números enteros positivos.
Más específicamente, a dividir por dos en forma entera, es decir, descartando la parte decimal.

Por ejemplo, `10 dividido 2 es 5`, con un resultado exacto `10 / 2 = 5`.
Por otro lado `13 dividido 2 es 6.5`, es decir `13 / 2 = 6.5`.
Al descartar la parte decimal se obtiene 6, que es lo que calcula Maru cuando hace 13 dividido 2.

Para practicar más, Maru realiza el proceso de dividir por dos de esta forma varias veces, a partir de un cierto número inicial. Por ejemplo, si parte del número 38 y realiza el proceso 4 veces, obtendrá primero el número 19, luego el número 9, a continuación el número 4 y por último el número 2, que es el resultado final del proceso si se empieza con el número 38 y se divide 4 veces.

Debes escribir una función que ayude a Maru a calcular el resultado final luego de las divisiones.

### Objetivos

- Debes implementar la función `dividiendo(numero, veces)`
- Sus parámetros son:
  - numero: El número inicial, con el que Maru inicia el proceso.
  - veces: La cantidad de veces que Maru dividirá por dos desde el número inicial.
- La función debe retornar un entero: el resultado final luego de las divisiones.

# Ejercicio Número 2 

# Jugando al chinchón

El chinchón es un juego de naipes de 2 a 8 jugadores principalmente jugado en España, Argentina, Colombia, Paraguay, Uruguay, Cabo Verde y otros países.

Existen muchas variaciones del juego.

Para este problema, usaremos la variación con 48 cartas sin comodín.
Cada una de las 48 cartas posibles tiene un número y un palo. El número varía desde 1 hasta 12 inclusive, y el palo puede ser cualquiera de los siguientes:

- Oros, Copas, Espadas o Bastos.
  Un momento importante en el chinchón ocurre a la hora de contar los puntos de penalización que recibirá un jugador por las cartas que tiene en la mano cuando termina la ronda. Un jugador siempre termina la ronda con 7 cartas en la mano, que puede agrupar formando juegos. Un juego es un conjunto de cartas con cierto patrón particular. Los posibles juegos son:
- Escalera: se forma con 3 o más cartas del mismo palo, cuyos números sean consecutivos. Por ejemplo 1, 2, 3 forma escalera, al igual que 5, 6, 7, 8, 9, pero en cambio 11,
  12, 1 no es una escalera válida, ni tampoco lo son ni 4, 5, 7 ni 8, 9.
- Pierna: se forma con 3 o más cartas que tengan todas el mismo número.
- Chinchón: se forma con 7 cartas del mismo palo, cuyos números sean consecutivos. Es decir, el chinchón es una escalera de 7 cartas.

Al agrupar las cartas para formar juegos, `no se permite utilizar una misma carta para formar dos juegos diferentes.`
Es posible que queden cartas sin agrupar, es decir, sin formar ningún juego. `La penalización del jugador será igual a la suma de los números de las cartas que quedan sin agrupar`
Si el jugador puede agrupar sus cartas para formar juegos de varias maneras, siempre elegirá aquella que resulte en la mínima penalización posible.
Un caso especial se da cuando `el jugador logra agrupar todas sus 7 cartas formando un juego`: en este caso, en lugar de 0 puntos, `obtiene -10 puntos` (menos diez, que resta 10 puntos de penalización).
Un caso aún más especial se da cuando `el jugador logra no solo agrupar todas sus 7 cartas, sino además hacerlo formando un chinchón`. En ese caso, la penalización no es ni 0 ni -10, sino que es de `-50 puntos` (menos cincuenta puntos).

Debes escribir un programa que, dado un listado de 7 cartas, calcule la mínima
penalización posible si se agrupan correctamente las cartas.

### Objetivo

- Se debe implementar una función: `chinchon(numero, palo)`, donde palo es una cadena de exactamente 7 caracteres, y numero es un arreglo de exactamente 7 números.
- Para cada i entre 0 y 6 inclusive, la carta i-ésima tiene el número numero[i] y el palo indicado por la letra palo[i].
- Los palos se indican por su primera letra en mayúscula. [B, O, E, C]
- La función debe retornar un único entero: los puntos de penalización correspondientes a las cartas recibidas.