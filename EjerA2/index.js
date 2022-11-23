const guardar = () => {
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
    const nuevoUsario = {
        nombre: nuevoNombre,
        apellido: nuevoApellido,
        edad: edad,
        domicilio: direc,
        carrera: profesion
    }
    let listUser = []
    listUser.push(nuevoUsario)
    localStorage.setItem('listaDeUsuarios', JSON.stringify(listUser))
}

/*Estilisar el segundo div/ Guardar los datos en localsorage.*/

const reflejarUsuario = () => {
    datos.innerHTML = '' 
   
    let listUser = JSON.parse (localStorage.getItem('listadeUsuarios',));

    
if (listUser === null){
    listUser = [];
} else {
    listUser.forEach(element => {
      datos.innerHTML += 'datos'
    });
}
}


