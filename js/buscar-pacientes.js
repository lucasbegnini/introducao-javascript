var botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", function() {
    console.log("Buscando pacientes...");
    var xhr = new XMLHttpRequest();

    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente) {
                adiconaPaciente(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });
    xhr.send();
});