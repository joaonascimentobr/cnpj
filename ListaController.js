import { EmpresaService } from "./services/EmpresaService.js";

export default class ListaController {
  empresaService = new EmpresaService();

  formCadastro = document.getElementById('cadastro');
  nameInput = document.querySelector('#name');
  cnpjInput = document.querySelector('#cnpj');
  btEnviar = document.getElementById('btn_enviar');
  spinner = document.getElementById('spinner');
  tbody = document.querySelector('tbody');
  loaingTable = document.getElementById('loaingTable');
  noItens = document.getElementById('noItens');
  
  dados = [];

    constructor() {
      this.addEventos();
      document.addEventListener('DOMContentLoaded', () => {
        this.loadingData();
      });
  
      this.hideLoadingInSendButton();
    }

    loadingData() {
      this.loaingTable.classList.remove('d-none');
      this.empresaService.loadingData(
        (data) => {
          this.dados = data;
          this.gerarTabela(data)
        }
      );
    }

    addEventos() {
      this.formCadastro.addEventListener('submit', (event) => {
        event.preventDefault();
        this.addCnpj(event);
      });

      $(document).ready(() => {
        $('#cnpj').mask('00.000.000/0000-00');
    });
    }

    
    
    addCnpj(event) {
        // event.preventDefault();
        // console.log("sdfasdf", this.empresaService);
        // const td = document.querySelector('td');
        this.showLoadingInSendButton();
        let empresa = {nome: this.nameInput.value, cnpj: this.cnpjInput.value};
        this.empresaService.adicionaEmpresa(empresa,
          (id) => {
            this.mostrarToastSucesso();
            this.loadingData();
            this.clearForm();
          },
          () => {
            this.showToastFail();
          },
          () => {
            // console.log("add completou");
            this.hideLoadingInSendButton();
          }
          );
    }
    
    mostrarToastSucesso() {
      let toast = new bootstrap.Toast(document.getElementById('toastAddSucesso'));
      toast.show()
    };
    
    showToastFail() {
      let toast = new bootstrap.Toast(document.getElementById('toastAddFalha'));
      toast.show()
    };
    
    mostrarToastEmpresaExcluida() {
      let toast = new bootstrap.Toast(document.getElementById('toastEmpresaExcluida'));
      toast.show()
    };
    
    
    gerarTabela(dados) {
        this.tbody.innerHTML = '';
        for (let i = 0; i < dados.length; i++) {
          const tr = document.createElement('tr');
          const tdNome = document.createElement('td');
          tdNome.innerHTML = dados[i].nome;
          const tdCnpj = document.createElement('td');
          const tdAcao = document.createElement('td');
          const btnRemover = document.createElement('button');
          btnRemover.classList.add('btn', 'btn-danger', 'btn-sm');
          btnRemover.innerHTML = '<i class="fas fa-trash-alt"></i>';
          btnRemover.addEventListener('click', () => {
            btnRemover.innerHTML = '<span class="spinner-border spinner-border-sm" id="spinner" role="status" aria-hidden="true"></span>';
            this.removeCompany(
              dados[i].id, 
              () => {//sucess
                this.mostrarToastEmpresaExcluida();
                tr.remove()
              },
              () => {
                
              },
              () => {
                btnRemover.innerHTML = '<i class="fas fa-trash-alt"></i>';
              }
            );
          });
          tdCnpj.textContent = dados[i].cnpj;
          tdAcao.appendChild(btnRemover);
          tr.appendChild(tdNome);
          tr.appendChild(tdCnpj);
          tr.appendChild(tdAcao);
          this.tbody.appendChild(tr);
        }
    
        if (dados.length == 0) {
          console.log("entrou");
          noItens.classList.remove('d-none');
        } else {
          noItens.classList.add("d-none");
        }
      };
    
    removeCompany(id, success, fail, completed) {
      let excluir = confirm("Tem certeza que deseja excluir?");
      if (excluir) {
        this.empresaService.excluirEmpresa(id, success, fail, completed);
      }
    };
    
    showLoadingInSendButton() {
      this.spinner.classList.remove('d-none');
      this.btEnviar.disabled = true;
    };
    
    hideLoadingInSendButton() {
      this.spinner.classList.add("d-none");
      this.btEnviar.disabled = false;
    };
  
    clearForm() {
      this.nameInput.value = '';
      this.cnpjInput.value = '';
    };
  }



  const listaController = new ListaController();