
var titulo = document.querySelector(".titulo");
titulo.textContent = "Nutrição";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var alturaEhValida = validarAltura(altura);
  var pesoEhValido = validarPeso(peso);

  if(!pesoEhValido){
    console.log("Peso invalido");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido";
    paciente.classList.add("paciente-invalido");
  }

  if(!validarAltura){
    console.log("Altura invalida");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido");
  }

  if(pesoEhValido && alturaEhValida){

    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;

  }

}

function validarPeso(peso){

  if(peso >= 0 && peso < 1000){
    return true;
  }else{
    return false;
  }

}

function validarAltura(altura){

  if(altura >= 0 && altura < 3){
    return true;
  }else{
    return false;
  }

}


function calculaImc(peso, altura){

  var imc = 0;

  imc = peso /(altura * altura);

  return imc.toFixed(2);

}
