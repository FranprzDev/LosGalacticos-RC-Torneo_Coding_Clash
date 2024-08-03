/*

# Números Amigables

Implementa una función que determine si dos números son "amigables".
Dos números son amigables si la suma de los divisores propios 
de uno de los números es igual al otro número, y viceversa.

### Objetivo

El objetivo es identificar correctamente si dos números son amigables.

Ejemplo de entrada y salida
Entrada:

```js
const num1 = 220;
const num2 = 284;
```

Salida:

```js
true;
```

### Pistas

- Un divisor propio de un número es un divisor que no incluye al propio número.
- Implementa una función auxiliar para calcular la suma de los divisores propios de un número.
- Compara las sumas de los divisores propios de ambos números.


*/

function getTheSumOfDivisorsOfANumber(number) {
    const divisors = []
    for(let i = 0; i < number; i++){
        if(number % i === 0) divisors.push(i)
    }

    // sum of divisors by reduce function  
    return divisors.reduce((a,b) => a+b)
}

function makeFriendlyNumber(number, number2) {
    /* Como el ejemplo solo da numeros positivos, por lo tanto solamente voy 
        a tomar en cuenta los numeros positivos. */
    if(number <= 0) return null
    if(number2 <= 0) return null

    const sum = getTheSumOfDivisorsOfANumber(number)
    const sum2 = getTheSumOfDivisorsOfANumber(number2)
    
    if(sum !== number2) return false
    if(sum2 !== number) return false
    return true
}

console.log(makeFriendlyNumber(220, 284)) // true
console.log(makeFriendlyNumber(220, 285)) // false
