
// import { EmpresaService } from "./EmpresaService.js";

// require('ListaController.js');
// let listaController = new ListaController();

// const btEnviar = document.getElementById('btn_enviar');
// const spinner = document.getElementById('spinner');

// const nameInput = document.querySelector('#name');
// const cnpjInput = document.querySelector('#cnpj');
// const tbody = document.querySelector('tbody');
// const loaingTable = document.getElementById('loaingTable');

// const empresaService = new EmpresaService();

// document.addEventListener('DOMContentLoaded', () => {
//   loadingData();
//   // empresaService.loadingData();
// });


// const noItens = document.getElementById('noItens');

// function addCnpj(event) {
//     event.preventDefault();
//     console.log("sdfasdf");
//     // const td = document.querySelector('td');
//     // listaController.addCnpj(event)
//     // adicionaEmpresa(nameInput.value, cnpjInput.value);
// }

// function mostrarToastSucesso() {
//   let toast = new bootstrap.Toast(document.getElementById('toastAddSucesso'));
//   toast.show()
// };

// function showToastFail() {
//   let toast = new bootstrap.Toast(document.getElementById('toastAddFalha'));
//   toast.show()
// };

// function mostrarToastEmpresaExcluida() {
//   let toast = new bootstrap.Toast(document.getElementById('toastEmpresaExcluida'));
//   toast.show()
// };


// export function gerarTabela(dados) {
//     tbody.innerHTML = '';

//     for (let i = 0; i < dados.length; i++) {
//       const tr = document.createElement('tr');
//       const tdNome = document.createElement('td');
//       tdNome.innerHTML = dados[i].nome;
//       const tdCnpj = document.createElement('td');
//       const tdAcao = document.createElement('td');
//       const btnRemover = document.createElement('button');
//       btnRemover.classList.add('btn', 'btn-danger', 'btn-sm');
//       btnRemover.innerHTML = '<i class="fas fa-trash-alt"></i>';
//       btnRemover.addEventListener('click', async () => {
//         btnRemover.innerHTML = '<span class="spinner-border spinner-border-sm" id="spinner" role="status" aria-hidden="true"></span>';
//         removeCompany(dados[i].id, tr, () => {
//           btnRemover.innerHTML = '<i class="fas fa-trash-alt"></i>';
//           tr.remove()
//         });
//       });
//       tdCnpj.textContent = dados[i].cnpj;
//       tdAcao.appendChild(btnRemover);
//       tr.appendChild(tdNome);
//       tr.appendChild(tdCnpj);
//       tr.appendChild(tdAcao);
//       tbody.appendChild(tr);
//     }

//     if (dados.length == 0) {
//       console.log("entrou");
//       noItens.classList.remove('d-none');
//     } else {
//       noItens.classList.add("d-none");
//     }
//   };

// function removeCompany(id, tr, complete) {
//   let excluir = confirm("Tem certeza que deseja excluir?");
//   if (excluir) {
//     excluirEmpresa(id, complete);
//   }
// };

// function showLoadingInSendButton() {
//   spinner.classList.remove('d-none');
//   btEnviar.disabled = true;
// };

// function hideLoadingInSendButton() {
//   spinner.classList.add("d-none");
//   btEnviar.disabled = false;
// };

// hideLoadingInSendButton();

// function clearForm() {
//   nameInput.value = '';
//   cnpjInput.value = '';
// };

