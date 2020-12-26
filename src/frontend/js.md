# Javascript

## Variables

Al ser javascript un lenguaje debilmente tipado no se debe de indicar el tipo de valor de la variable, por lo que este puede redefinir su tipo a la hora de su ejecucion

Existen tres maneras distintas de declarar las variables en Javascript, estas son var, let y const

Var redefine la variable a nivel global de la aplicacion, por lo que puede redefinir funciones importantes del programa, por ello no recomiendo utilizarlo

Let define una variable a nivel scope o bloque, esta no puede ser redefinida pero si puede mutar su valor o su tipo de objeto, adicionalmente a esto pueden existir en distintos bloques variables con el mismo nombre y estas al tener diferente scope no tendran conflictos entre si

Const se utiliza para nombrar a las constantes, en este caso la variable no puede ser redefinida y ademas de esto no puede cambiar su tipo ni su valor

## Operadores

### Aritmeticos

```js
Estos son los encargados de realizar las operaciones aritmeticas,
por lo que entre estos se encuentran +, -, *, /, ** y %

Se puede reducir el codigo al hacer uso de la siguiente sintaxis

a = a + 5    ->   a+=5

De la misma manera anteriormente se utilizaba la funcion matematica pow()
para poder elevar a n exponente x cantidad, sin embargo ahora se puede hacer uso
del operador ** para hacerlo

Math.pow(5,2)=25    ->   5**2=25

Por ultimo tenemos al modulo, con el cual este nos regresara el residuo de una
division

10 % 2 = 0  ó  5 % 2 = 1
```
