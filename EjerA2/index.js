const guardar =()=>{
 let nuevoNombre = document.getElementById('name').value;
 let nuevoApellido = document.getElementById('apellido').value;
 let edad = document.getElementById('number_edad').value;
 let direccion = document.getElementById('dom').value;
 let profesion = document.getElementById('carrera').value;

 /*console.log ( nuevoNombre + ''  + nuevoApellido + '' + edad + ' ' + direccion + '' + profesion + ' ' ); */
 console.log (nuevoNombre + ' ');
 console.log (nuevoApellido + '');
 
 let nuevosDatos = parseInt ( nuevoNombre) + parseInt ( nuevoApellido);
 document.getElementById('datos').innerHTML
}

