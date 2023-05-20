var dados = [
    { nome: "Nenhuma empresa cadastrada", cnpj: '' }
];

document.addEventListener('DOMContentLoaded', () => {
    gerarTabela(dados);
    loadingData();
});

function loadingData() {
    let url = 'https://teste23424.herokuapp.com/v1/empresa';
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

async function excluirEmpresa(id) {
    let url = "https://teste23424.herokuapp.com/v1/empresa/" + id;
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
        }
    });

    mostrarToastEmpresa();
};

async function adicionaEmpresa(nome, cnpj) {
    let url = 'https://teste23424.herokuapp.com/v1/empresa';
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