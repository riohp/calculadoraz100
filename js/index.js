const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');
const botonRiver= document.querySelectorAll('.river');







const display = new Display(displayValorAnterior,displayValorActual);

botonesNumeros.forEach(boton=>{
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});




function  amor() {
    const riverMensaje = '¡Soy lindo!';
    const mensajeRiver = document.getElementById('river');
    mensajeRiver.innerHTML = riverMensaje;
}

