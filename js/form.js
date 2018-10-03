var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  //extraindo dados do input do form
  var paciente = obtemPacienteDoFormulario(form);

  //string de error
  var erros = validarPaciente(paciente);
  console.log(erros);
  if(erros.length > 0){//se string for maior que zero possui erro
      exibeMensagemDeErro(erros);
      return;
  }

  //adiciona paciente na tabela
  adicionaPacienteNaTabela(paciente);

  //limpar campos do form assim que enviar para tabela
  form.reset();

  //limpar mensagens de erro
  var ul = document.querySelector("#mensagem-erro");
  ul.innerHTML = "";

});

//função para adicionar na tabela
function adicionaPacienteNaTabela(paciente) {
  //monta a tabela
  var pacienteTr = montaTr(paciente);

  //adiciona paciente na tabela
  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);
}

function exibeMensagemDeErro(erros){
   var ul = document.querySelector("#mensagem-erro");
   ul.innerHTML = "";

   erros.forEach(function(erro){
     var li = document.createElement("li");
     li.textContent = erro;
     ul.appendChild(li);
     });
}

//extraindo dados do input do form
function obtemPacienteDoFormulario(form){

  var paciente = {
    nome:form.nome.value,
    peso:form.peso.value,
    altura:form.altura.value,
    gordura:form.gordura.value,
    imc:calculaImc(form.peso.value, form.altura.value)

  }

  return paciente;

}

//monta a tabela
function montaTr(paciente){
  var pacienteTr = document.createElement("tr");

  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe){

  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}


function validarPaciente(paciente){

  var erros = [];

  if(!validarPeso(paciente.peso)){
     erros.push("Peso é inválido");
  }

  if(!validarAltura(paciente.altura)){
     erros.push("Altura é inválida");
  }

  if(paciente.nome.length == 0){
    erros.push("Paciente necessita de um nome");
  }

  if(paciente.gordura.length == 0){
    erros.push("Gordura não pode ser em branco");
  }

 return erros;

}
