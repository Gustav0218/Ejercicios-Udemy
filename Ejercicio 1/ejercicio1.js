/*utilizando un bucle, mostrar la suma y la media 
de los numeros introducdiso hasta introducir un numero negativo
y ahi mostrar el resultado*/




 /*let suma = 0;
let contador = 0;

do {
    var numero = parseInt (prompt('Introduce un numero hasta que metas uno negativo', 0));
    if (isNaN(numero)) {
        numero = 0;
    } else if (numero >= 0) {
        suma = suma + numero;
       contador++;
    }
   console.log(suma);
   console.log(contador);
} while (numero >= 0)

alert('la suma de todos los numeros es' + suma);
alert('la media de todos los numeros es'+ (suma/contador)); */


let suma = 0;
let contador = 0;
let numero = 0;
do {
    let numero = parseInt (prompt('Introduce un numero hasta que metas uno negativo', 0));
    if (isNaN(numero)) {
        numero = 0;
    } else if (numero >= 0) {
        suma = suma + numero;
       contador++;
    }
   console.log(suma);
   console.log(contador);
} while (numero >= 0)

alert('la suma de todos los numeros es' + suma);
alert('la media de todos los numeros es'+ (suma/contador));
