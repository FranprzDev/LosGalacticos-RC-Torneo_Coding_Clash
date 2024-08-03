/*
# Validación de Paréntesis

Implementa una función que valide si una cadena de caracteres con paréntesis está balanceada. Una cadena está balanceada si cada paréntesis abierto tiene su correspondiente paréntesis cerrado en el orden correcto.

### Objetivo

El objetivo es implementar una función que valide correctamente la estructura de los paréntesis en una cadena.

Ejemplo de entrada y salida
Entrada:

```js
const cadena1 = "((()))";
const cadena2 = "(()";
```

Salida:

```js
true; // para cadena1
false; // para cadena2
```

### Pistas

- Utiliza una pila para llevar un seguimiento de los paréntesis abiertos.
- Empuja los paréntesis abiertos en la pila.
- Para cada paréntesis cerrado, verifica si hay un paréntesis abierto correspondiente en la pila.
*/

function validateBrackets(stringBrackets) {
    const stack = [];
    
    /* (let i = 0; i < stringBrackets.length ; i++ )*/
    for (const i of stringBrackets) {
        if (i === '(') {
            stack.push(i); // Add brakckets to the stack
        } else if (i === ')') {
            if (stack.length === 0) {
                return false; // Don't have brackets in the stack, return false
            }
            stack.pop();  // Because have bracketS, we pop it.
        }
    }
    
    return stack.length === 0; 
}

// Test cases
console.log(validateBrackets("((()))")); // Output: true
console.log(validateBrackets("(()")); // Output: false