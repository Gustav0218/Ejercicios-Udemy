const calcular =()=>{
    let numero_uno = document.getElementById('number_one').value;
    let numero_dos = document.getElementById('number_two').value;
    console.log('calcular '+ numero_uno + ' ' + numero_dos)

    let resultado = parseInt(numero_uno) + parseInt (numero_dos);
    document.getElementById('result').innerHTML = resultado
}