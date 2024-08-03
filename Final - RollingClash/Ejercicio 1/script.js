/*
# Cifrado César

Implementa una función que cifre un texto utilizando el cifrado César. 
El cifrado César desplaza cada letra del texto un número fijo de posiciones en el alfabeto.
La función debe recibir el texto y el número de posiciones a desplazar.
 Asume que el texto solo contiene letras minúsculas y espacios.

### Objetivo

El objetivo es implementar un algoritmo que cifre correctamente 
el texto utilizando el cifrado César.

Ejemplo de entrada y salida

Entrada:

```js
const texto = "hola mundo";
const desplazamiento = 3;
```

Salida:

```js
"krpd pxqgr";
lrod

```

### Pistas

- Usa el código ASCII para determinar la nueva posición de cada letra.
- Asegúrate de manejar el ciclo del alfabeto (por ejemplo, después de 'z' viene 'a').
- Mantén los espacios sin cambios.

*/

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 
    'h', 'i','j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
     's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function getPositionInAlphabet(letter, displacement){
        console.log(letter)
        if(letter == ' ') return ' '
        if(!alphabet.includes(letter)) return null
        

        /* Realizar la validacion cuando se va afuera del index
        eso quiere decir cuando el desplazamiento es 3 y se va hacia afuera 
        x = a, y = b, z = c
        */ 
        const indexAlphabet = alphabet.findIndex((element) => element == letter)
        return alphabet[indexAlphabet+displacement]
}

function encryptionCesar(textEncryption, displacement) {
    if (textEncryption.length <= 0) return null
    if (displacement <= 0) return null
    let textEncrypted = []
    console.log(textEncryption, displacement)

    for(let i = 0; i < textEncryption.length; i++){
        console.log(textEncryption[i])
        textEncrypted.push(getPositionInAlphabet(textEncryption[i], displacement))
        // textEncrypted += getPositionInAlphabet(textEncryption[i], displacement)
    }

    return textEncrypted
}

console.log(encryptionCesar("hola mundo", 3))