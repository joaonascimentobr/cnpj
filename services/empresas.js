var dados = [
    { nome: "Carregando empresas...", cnpj: '' }
];

document.addEventListener('DOMContentLoaded', () => {
    gerarTabela(dados);
    loadingData();
});

let urlBase = "https://empresas-w894.onrender.com/";

function loadingData() {
    let url = urlBase + 'v1/empresa';
    $.ajax({
        url: url,
        dataType: 'json',
        type: "GET",
        contentType: 'application/json',
        success: function (response) {
            dados = response.data;
            gerarTabela(dados);
        },
        error: function (jqXHR, textStatus, errorThrown) {},
        complete: () => {}
    });
}

function excluirEmpresa(id, complete) {
    let url = urlBase + "v1/empresa/" + id;
    $.ajax({
        url: url,
        dataType: 'json',
        type: "DELETE",
        contentType: 'application/json',
        success: function (data) {
            mostrarToastEmpresaExcluida();
            loadingData();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        },
        complete: () => {
            hideLoadingInSendButton();
            complete();
        }
    });
};

function adicionaEmpresa(nome, cnpj) {
    let url = urlBase +  'v1/empresa';
    showLoadingInSendButton();
    $.ajax({
        url: url,
        dataType: 'json',
        type: "POST",
        contentType: 'application/json',
        data: JSON.stringify({
            nome: nome,
            cnpj: cnpj
        }),
        success: function (data) {
            mostrarToastSucesso();
            dados.push({ nome: nome, cnpj: cnpj });
            gerarTabela(dados);
            clearForm();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            showToastFail()
        },
        complete: function() {
            hideLoadingInSendButton();
        }
    });
}