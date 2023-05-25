
import { EmpresaService } from "./services/EmpresaService.js";

const botao = document.getElementById('meuBotao');
const inputCNPJ = document.getElementById('cnpj');
const resultado = document.getElementById("resultado");
const spinner = document.getElementById('spinner');

const minhaInstancia = new EmpresaService();

botao.onclick = function() {
    showSpinner();
    resultado.innerHTML = "";
    minhaInstancia.searchCNPJ(
        inputCNPJ.value,
        (data) => {
            let array = data.filter(item => item.cnpj == inputCNPJ.value);
            if (array.length > 0) {
                resultado.innerHTML = "Foi encontrado a empresa " + data[0].nome;
            } else {
                resultado.innerHTML = "Não há empresa cadastrada com este CNPJ";
            }
        },
        () => {
            resultado.innerHTML = "Algo deu errado, tente novamente!";
        },
        () => {
            hideSpinner();
        }
    );
};

function showSpinner() {
    spinner.classList.remove('d-none');
}

function hideSpinner() {
    spinner.classList.add('d-none');
}

$(document).ready(function() {
    $('#nome').mask('00.000.000/0000-00');
});