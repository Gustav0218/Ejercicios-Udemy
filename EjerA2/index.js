const guardar =()=>{
 let nuevoNombre = document.getElementById('name').value;
 let nuevoApellido = document.getElementById('apellido').value;
 let edad = document.getElementById('number_edad').value;
 let direc = document.getElementById('dom').value;
 let profesion = document.getElementById('estudios').value;

 document.getElementById('nameUser').innerHTML = '<strong>' + nuevoNombre + '</strong>';
 document.getElementById('nameAp').innerHTML = '<strong>' + nuevoApellido + '</stromng>';
 document.getElementById('userEdad').innerHTML = '<strong>' + edad + '</strong>';
 document.getElementById('userDom').innerHTML = '<strong>' + direc + '</strong>';
 document.getElementById('userProf').innerHTML = '<strong>' + profesion + '</strong>';
}

