// require('empresas.js')
import {Teste} from './services/EmpresaService.js';


function validarCNPJ() {
  // var cnpjValue = document.getElementById("nome").value;
  // var regex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
  
  // if (regex.test(cnpj)) {
  //   document.getElementById("resultado").innerHTML = "CNPJ válido.";
  // } else {
  //   document.getElementById("resultado").innerHTML = "CNPJ inválido.";
  // }
  Teste.searchCNPJ(cnpjValue, (data) => {

  },
  () => {},
  () => {})
}

