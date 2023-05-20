const btEnviar = document.getElementById('btn_enviar');
const spinner = document.getElementById('spinner');

const nameInput = document.querySelector('#name');
const cnpjInput = document.querySelector('#cnpj');

function addCnpj(event) {
    event.preventDefault();
    const td = document.querySelector('td');
    adicionaEmpresa(nameInput.value, cnpjInput.value);
}

function mostrarToastSucesso() {
  let toast = new bootstrap.Toast(document.getElementById('toastAddSucesso'));
  toast.show()
};

function showToastFail() {
  let toast = new bootstrap.Toast(document.getElementById('toastAddFalha'));
  toast.show()
};

function mostrarToastEmpresaExcluida() {
  let toast = new bootstrap.Toast(document.getElementById('toastEmpresaExcluida'));
  toast.show()
};

function gerarTabela(dados) {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    for (let i = 0; i < dados.length; i++) {
      const tr = document.createElement('tr');
      const tdNome = document.createElement('td');
      tdNome.innerHTML = dados[i].nome;
      const tdCnpj = document.createElement('td');
      const tdAcao = document.createElement('td');
      const btnRemover = document.createElement('button');
      btnRemover.classList.add('btn', 'btn-danger', 'btn-sm');
      btnRemover.innerHTML = '<i class="fas fa-trash-alt"></i>';
      btnRemover.addEventListener('click', async () => {
        btnRemover.innerHTML = '<span class="spinner-border spinner-border-sm" id="spinner" role="status" aria-hidden="true"></span>';
        removeCompany(dados[i].id, tr, () => {
          btnRemover.innerHTML = '<i class="fas fa-trash-alt"></i>';
          tr.remove()
        });
      });
      tdCnpj.textContent = dados[i].cnpj;
      tdAcao.appendChild(btnRemover);
      tr.appendChild(tdNome);
      tr.appendChild(tdCnpj);
      tr.appendChild(tdAcao);
      tbody.appendChild(tr);
    }
  };

function removeCompany(id, tr, complete) {
  let excluir = confirm("Tem certeza que deseja excluir?");
  if (excluir) {
    excluirEmpresa(id, complete);
  }
};

function showLoadingInSendButton() {
  spinner.classList.remove('d-none');
  btEnviar.disabled = true;
};

function hideLoadingInSendButton() {
  console.log('hideloading');
  spinner.classList.add("d-none");
  btEnviar.disabled = false;
};

hideLoadingInSendButton();

function clearForm() {
  nameInput.value = '';
  cnpjInput.value = '';
};