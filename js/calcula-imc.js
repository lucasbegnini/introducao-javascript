
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
    var pesoEhValido = validaPeso(peso);
   
    if (!pesoEhValido){
        console.log("peso inválido");
        tdImc.textContent = "peso inválido";
        paciente.classList.add("paciente-invalido");
    }
    
    var alturaEhValida = validaAltura(altura);
    if (!alturaEhValida){
        console.log("altura inválida");
        tdImc.textContent = "altura inválida";
        paciente.classList.add("paciente-invalido");
        calculaImc = false;
    }

    if(pesoEhValido && alturaEhValida) {
        tdImc.textContent = calcularImc(peso, altura);
    }
}


function calcularImc(peso, altura){
    var imc = peso /(altura*altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if ((peso >= 0) && (peso < 1000)){
        return true;
    }else {
        return false;
    }
}

function validaAltura(altura){
    if ((altura > 0) && (altura < 3.0)){
        return true;
    } else {
        return false;
    }
}