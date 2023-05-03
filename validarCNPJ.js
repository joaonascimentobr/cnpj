function validarCNPJ() {
  var cnpj = document.getElementById("cnpj").value;
  var regex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
  
  if (regex.test(cnpj)) {
    document.getElementById("resultado").innerHTML = "CNPJ válido.";
  } else {
    document.getElementById("resultado").innerHTML = "CNPJ inválido.";
  }
}

$(document).ready(function(){
  $('#cnpj').mask('00.000.000/0000-00');
});