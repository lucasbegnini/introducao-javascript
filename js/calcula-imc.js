
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i=0;i<pacientes.length;i++){

    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    
    var calculaImc = true;
    
    if (!validaPeso(peso)){
        console.log("peso inválido");
        tdImc.textContent = "peso inválido";
        paciente.classList.add("paciente-invalido");
        calculaImc = false;
    }
    
    if (!validaAltura(altura)){
        console.log("altura inválida");
        tdImc.textContent = "altura inválida";
        paciente.classList.add("paciente-invalido");
        calculaImc = false;
    }

    if(calculaImc) {
        tdImc.textContent = calcularImc(peso, altura);
    }
}


function calcularImc(peso, altura){
    var imc = peso /(altura*altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    var pesoEhValido = true;
    if ((peso <= 0) || (peso >= 1000)){
        pesoEhValido = false;
    }
    return pesoEhValido;
}

function validaAltura(altura){
    var alturaEhValido = true;
    if ((altura <= 0) || (altura >= 3.0)){
        alturaEhValido = false;
    }
    return alturaEhValido;
}