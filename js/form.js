
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    // Extraindo função do form
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);

    // Monta TR
    var tabela = document.querySelector("#tabela-pacientes");
    var pacienteTr = montaTr(paciente);
    tabela.appendChild(pacienteTr);

    form.reset();

});

function obtemPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        peso: form.peso.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    }

 return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var nomeTd = montaTd(paciente.nome, "info-nome");
    var gordutraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gordutraTd.textContent = paciente.gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gordutraTd);
    pacienteTr.appendChild(imcTd);
    imcTd.textContent = calcularImc(peso, altura);

    return pacienteTr;
}

function montaTd(dado,classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}