
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
    
    var pesoEhValido = true;
    var alturaEhValido = true;
    
    if ((peso <= 0) || (peso >= 1000)){
        console.log("peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "peso inválido";
        paciente.classList.add("paciente-invalido");
    }
    
    if ((altura <= 0) || (altura >= 3.0)){
        console.log("altura inválida");
        alturaEhValido = false;
        tdImc.textContent = "altura inválida";
        paciente.classList.add("paciente-invalido");
    }
    
    if(pesoEhValido && alturaEhValido){
        var imc = peso /(altura*altura);
        tdImc.textContent = imc.toFixed(2);
    }
}