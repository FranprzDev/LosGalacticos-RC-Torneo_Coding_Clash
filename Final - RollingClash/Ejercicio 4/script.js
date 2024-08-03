/*

# Combinaciones de Teléfono

Implementa una función que, dada una cadena que contiene solo dígitos del 2 al 9, devuelva todas las combinaciones posibles de letras que los números podrían representar en un teclado de teléfono. El mapeo de dígitos a letras es el mismo que en un teléfono tradicional (por ejemplo, 2 corresponde a ["a", "b", "c"]).

### Objetivo

El objetivo es generar todas las combinaciones de letras que pueden formarse a partir de la secuencia de dígitos dada.

Ejemplo de entrada y salida
Entrada:

```js
const digitos = "23";
```

Salida:

```js
["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
```

### Pistas

- Usa un mapeo de los dígitos a sus correspondientes letras.
- Utiliza recursión para generar todas las combinaciones posibles.

*/

/* BUSCAR ACERCA DE LA IMPLEMENTACIÓN DE ESTE ALGORITMO,
HAY QUE HACER UNA ESPECIE DE BACKTRACK O ALGO PARECIDO
HAY QUE IR FILTRANDOLO, DEJO LOS PASOS AQUI ABAJO; PASO A OTRO
EJERCICIO POR QUE ESTE NOS TOMARÁ MÁS TIEMPO...
hecho en papel pero no llegamos con el tema de tiempo .*/

// console.log(getAllCombinations("23"))
// La salida deberia ser:
// ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];

const digitsParse = [{
    number: 2,
    alphabet: ['a', 'b', 'c']
},
{
    number: 3,
    alphabet: ['d', 'e', 'f']
},
{
    number: 4,
    alphabet: ['g', 'h', 'i']
},
{
    number: 5,
    alphabet: ['j', 'k', 'l']
},
{
    number: 6,
    alphabet: ['m', 'n', 'o']
},
{
    number: 7,
    alphabet: ['p', 'q', 'r']
},
{
    number: 8,
    alphabet: ['s', 't', 'u']
},
{
    number: 9,
    alphabet: ['v', 'w', 'x']
}
]
/* BUSCAR ACERCA DE LA IMPLEMENTACIÓN DE ESTE ALGORITMO,
HAY QUE HACER UNA ESPECIE DE BACKTRACK O ALGO PARECIDO
HAY QUE IR FILTRANDOLO, DEJO LOS PASOS AQUI ABAJO; PASO A OTRO
EJERCICIO POR QUE ESTE NOS TOMARÁ MÁS TIEMPO... */

const recursiveCombinations(digit, length) {
    if(digit < 2 || digit > 10) return null
    // return digitsParse.filter((digitArray) => {
    //     if(digit === digitArray.number) return digitArray.alphabet
    //     return null 
    // })
}

function getAllCombinations(digits) {
    if(digits.length <= 0) return null
    const combinations = []
    let length = digits.length
    for(let i = 0; i < digits.length; i++){
        combinations = recursiveCombinations(digits[i])
    }
}

console.log(getAllCombinations("23")) 
// console.log(getAllCombinations("23")) 
// La salida deberia ser:
// ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];