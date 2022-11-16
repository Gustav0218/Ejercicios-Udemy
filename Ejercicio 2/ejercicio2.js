/*Hacer un programa que muestre todos los numeros
entre numero a y numero b introducidos por el usuario.*/

var numero1 = parseInt(prompt('Introduce tu primer numero', 0));
var numero2 = parseInt(prompt('Introduce tu segundo numero', 0));

document.write('<h2>De' + numero1 + 'a' + numero2 + 'estan esttos numeros</h2>')
for (
    var i = numero1; i <= numero2; i++) {
document.write(i+'<br/>');
}

/*if ( i = numero1; i >= numero2) {alert('Tu segundo numero de ser mayor al primero')
    
} else {
    
}*/
/*Donde se pone el alert/prompt para indicar que algo esta mal en el if/else?*/