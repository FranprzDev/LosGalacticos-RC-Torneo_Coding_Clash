/*

# Juego de Palabras

Implementa una función que reciba un arreglo de palabras y un número entero n. La función debe devolver un nuevo arreglo que contenga solo las palabras que tienen exactamente n caracteres.

### Objetivo

El objetivo es filtrar las palabras del arreglo original para que solo queden aquellas que tienen una longitud específica.

Ejemplo de entrada y salida
Entrada:

```js
const palabras = ["casa", "perro", "gato", "elefante", "pez"];
const n = 4;
```

Salida:

```js
["casa", "gato"];
```

### Pistas

- Utiliza un bucle para recorrer el arreglo de palabras.
- Usa una condición para verificar la longitud de cada palabra.
- Agrega las palabras que cumplen la condición a un nuevo arreglo.
*/


const palabras = ["casa", "perro", "gato", "elefante", "pez"];

function findWordByCharacterLenght(words, n) {
    return words.filter((word) => word.length === n);
}
  
// Casos de prueba:
console.log(findWordByCharacterLenght(["casa", "perro", "gato", "elefante", "pez"], 4)) /* Casa y perro */
console.log(findWordByCharacterLenght(["casa", "perro", "gato", "elefante", "pez"], 3)) /* Pez */


  console.log(palabrasConLongitud(palabras, n)); // Salida: ["casa", "gato"