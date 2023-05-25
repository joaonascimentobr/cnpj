// import { gerarTabela } from "./index.js";
// import { Comeco } from "./index.js";

// import { ListaController } from "./ListaController";

export class EmpresaService {
    urlBase = "https://empresas-w894.onrender.com/";
    dados = [];

    // comeco = new Comeco();

    // constructor() {
    //     // this.altura = altura;
    //     // this.largura = largura;
    // }

    loadingData(success, fail, completed) {
        // loaingTable.classList.remove('d-none');
        let url = this.urlBase + 'v1/empresa';
        $.ajax({
            url: url,
            dataType: 'json',
            type: "GET",
            contentType: 'application/json',
            success: function (response) {
                success(response.data);
                // this.dados = response.data;
                // Comeco.gerarTabela(this.dados);
            },
            error: function (jqXHR, textStatus, errorThrown) {},
            complete: () => {
                loaingTable.classList.add('d-none');
            }
        });
    }
    
    excluirEmpresa(id, success, fail, completed) {
        let url = this.urlBase + "v1/empresa/" + id;
        $.ajax({
            url: url,
            dataType: 'json',
            type: "DELETE",
            contentType: 'application/json',
            success: (data) => {
                success();
                // this.mostrarToastEmpresaExcluida();
                // this.loadingData();
            },
            error: (jqXHR, textStatus, errorThrown) => {
                fail();
                console.log(textStatus, errorThrown);
            },
            complete: () => {
                // this.hideLoadingInSendButton();
                completed();
            }
        });
    };
    
    adicionaEmpresa(empresa, success, fail, completed) {
        // console.log("adicionaEmpresa");
        let url = this.urlBase +  'v1/empresa';
        
        $.ajax({
            url: url,
            dataType: 'json',
            type: "POST",
            contentType: 'application/json',
            data: JSON.stringify(empresa),
            success: function (data) {
                success(data.id);
                // mostrarToastSucesso();
                // dados.push({ nome: nome, cnpj: cnpj });
                // gerarTabela(dados);
                // clearForm();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                fail();
            },
            complete: function() {
                completed();
                // hideLoadingInSendButton();
            }
        });
    }
    
    searchCNPJ(cnpj, success, fail, completed) {
        let url = this.urlBase + 'v1/empresa' + '?q=' + cnpj;
        $.ajax({
            url: url,
            dataType: 'json',
            type: "GET",
            contentType: 'application/json',
            success: function (response) {
                // console.log(response);
                success(response.data);
                // dados = response.data;
                // gerarTabela(dados);
            },
            error: function (jqXHR, textStatus, errorThrown) {},
            complete: () => {
                completed();
                // loaingTable.classList.add('d-none');
            }
        });
    }
}