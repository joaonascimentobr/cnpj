
import { EmpresaService } from "./services/EmpresaService.js";
import PdfService from "./services/PdfService.js";

const botao = document.getElementById('meuBotao');
const inputCNPJ = document.getElementById('cnpj');
const resultado = document.getElementById("resultado");
const spinner = document.getElementById('spinner');

const empresaService = new EmpresaService();
const pdfService = new PdfService();
globalThis.pdfService = pdfService;

botao.onclick = function() {
    showSpinner();
    resultado.innerHTML = "";
    empresaService.searchCNPJ(
        inputCNPJ.value,
        (data) => {
            let array = data.filter(item => item.cnpj == inputCNPJ.value);
            if (array.length > 0) {
                resultado.innerHTML = "A empresa se encontra em dia.";
                mostrarLista();
            } else {
                resultado.innerHTML = "A empresa encontra-se com pendência junto ao Sindetur-SP.";
                removerLista();
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

const func = function teste() {};
function toWakeUpServer() {
    empresaService.loadingData(func,func,func);
};

// function gerarHtmlListaPdf(array) {
//     if (!Array.isArray(array)) {
//       throw new Error("O argumento deve ser um array.");
//     }
//     let html = "<ul>";
//     let baseUrl = "https://sindetursp.com.br/";
//     array.forEach((item) => {
//       html += `<li>
//       <a href="${baseUrl}/sistema/aracatuba/${item}">PDF - ${item}</a>
//       </li>`;
//     });
//     html += "</ul>";
//     return html;
// }
//   function inserirTexto(txt) {
//     var elemento = $("#listaPdfs");
//     let html = gerarHtmlListaPdf(txt);
//     // console.log(elemento);
//     elemento[0].innerHTML = html;
//   }

function mostrarLista() {
    $("#listaCity").show();
    $("#listaPdfs").show();
    listaPdfs
    pdfService.start();
}

function removerLista() {
    $("#listaCity").hide();
    $("#listaPdfs").hide();
}

toWakeUpServer();

function changeCity() {
    console.log("fdp")
}