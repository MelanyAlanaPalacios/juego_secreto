let numeroSecreto = generarNumeroSecreto();
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMax = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    //let numeroUsuario = document.querySelector('input');
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroUsuario>numeroSecreto){
            asignarTextoElemento('p','Elnumero secreto es Menor');
        } else {
            asignarTextoElemento('p','El numero secreto es Mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random()*numeroMax)+1;
    
    if(listaNumerosSorteados.length == numeroMax){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{
        if(listaNumerosSorteados.includes(numeroSecreto)){
            return generarNumeroSecreto();
        }else {
            listaNumerosSorteados.push(numeroSecreto);
            return numeroSecreto;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMax}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled',true);
}

condicionesIniciales();
