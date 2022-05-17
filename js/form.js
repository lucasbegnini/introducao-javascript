
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    // Extraindo função do form
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente); 

    if(erros.length > 0) {
        console.log("paciente inválido");
        exibeMensagensDeErros(erros);
        return;
    }

    // Monta TR 
    adiconaPaciente(paciente);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erros");
    mensagensErro.innerHTML = "";

});

function adiconaPaciente(paciente){
    var tabela = document.querySelector("#tabela-pacientes");
    var pacienteTr = montaTr(paciente);
    tabela.appendChild(pacienteTr);
}

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

function validaPaciente(paciente){
    
    var erros = [];
    
    if(paciente.nome.length <= 0) erros.push("Nome não pode ser em branco");
    if(paciente.gordura.length <= 0) erros.push("Gordura não pode ser em branco");
    if(paciente.altura.length <= 0) erros.push("Altura não pode ser em branco");
    if(paciente.peso.length <= 0) erros.push("Peso não pode ser em branco");

    if(!validaPeso(paciente.peso)) erros.push("Peso inválido");

    if(!validaAltura(paciente.altura)) erros.push("Altura inválida");

    if(paciente.gordura.length <= 0) erros.push("Gordura não pode ser em branco");

    return erros;
}

function exibeMensagensDeErros(erros){
     var ul = document.querySelector("#mensagens-erros");
     ul.innerHTML = "";
     erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}