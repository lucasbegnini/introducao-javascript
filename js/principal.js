
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


var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var nome = form.nome.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    var peso = form.peso.value;

    var pacienteTr = document.createElement("tr");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var nomeTd = document.createElement("td");
    var gordutraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gordutraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gordutraTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

});

