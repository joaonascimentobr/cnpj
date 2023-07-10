
import { EmpresaService } from "./services/EmpresaService.js";

const botao = document.getElementById('meuBotao');
const inputCNPJ = document.getElementById('cnpj');
const resultado = document.getElementById("resultado");
const spinner = document.getElementById('spinner');

const empresaService = new EmpresaService();

botao.onclick = function() {
    showSpinner();
    resultado.innerHTML = "";
    empresaService.searchCNPJ(
        inputCNPJ.value,
        (data) => {
            let array = data.filter(item => item.cnpj == inputCNPJ.value);
            if (array.length > 0) {
                resultado.innerHTML = "A empresa se encontra em dia.";
            } else {
                resultado.innerHTML = "A empresa encontra-se atrasada.";
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
    $('#cnpj').mask('00.000.000/0000-00');
});

function toWakeUpServer() {
    empresaService.loadingData();
};

toWakeUpServer();
