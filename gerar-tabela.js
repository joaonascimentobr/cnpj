function gerarTabela(dados) {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    for (let i = 0; i < dados.length; i++) {
      const tr = document.createElement('tr');
      const tdCnpj = document.createElement('td');
      const tdAcao = document.createElement('td');
      const btnRemover = document.createElement('button');
      btnRemover.classList.add('btn', 'btn-danger', 'btn-sm');
      btnRemover.innerHTML = '<i class="fas fa-trash-alt"></i>';
      btnRemover.addEventListener('click', () => {
        tr.remove();
      });
      tdCnpj.textContent = dados[i].cnpj;
      tdAcao.appendChild(btnRemover);
      tr.appendChild(tdCnpj);
      tr.appendChild(tdAcao);
      tbody.appendChild(tr);
    }
  }