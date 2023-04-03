//Declaro las variables globales
let numeroMagico;
let numeroIngresado;
let formulario = document.getElementById('formulario');
//Agrego manejador de enventos
formulario.addEventListener('submit', adivinar)

//Declaro las funciones

function generarNumero(){
    numeroMagico = Math.floor(Math.random() * (10 - 1) + 1);
    console.log('el numero magico es: ' + numeroMagico);
    return numeroMagico
}

generarNumero();

function adivinar(e){
    e.preventDefault();
    let numeroIngresado = document.querySelector('input');
    let comparar = parseInt(numeroIngresado.value);
    console.log('el numero ingresado es: ' + numeroIngresado.value);
    if(comparar === numeroMagico){
        alert('Ganaste!');
    }else if(comparar < numeroMagico){
        alert('El numero ingresado es menor al número mágico');
        numeroIngresado.value = '';
    }else{
        alert('El numero ingresado es mayor al número mágico');
        numeroIngresado.value = '';
    }
}
