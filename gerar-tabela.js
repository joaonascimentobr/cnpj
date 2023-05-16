const cadastroForm = document.getElementById('form');

const btEnviar = document.getElementById('btn_enviar');

console.log(cadastroForm);

async function addCnpj(event) {
    event.preventDefault();
    const td = document.querySelector('td');
    const nameInput = document.querySelector('#name').value;
    const cnpjInput = document.querySelector('#cnpj').value;

    console.log(td);

    await adicionaEmpresa(nameInput, cnpjInput);
}

async function adicionaEmpresa(nome, cnpj) {

// let dados = JSON.stringify({
//   nome: nome,
//   cnpj: cnpj
// })
// console.log("dados",dados);

//   $.ajax({
//     url: 'https://teste23424.herokuapp.com/v1/empresa',
//     type: "POST",
//     data: dados,
//     success: function(data) {
//       mostrarToast();
//       //2 etapa adicionar ao html na hora
//       dados.push({nome:nome, id:id});
//       console.log(dados);
//       gerarTabela(dados);
//     },
//     error: function(jqXHR, textStatus, errorThrown) {
      
//       console.log(textStatus, errorThrown);
//     }
//   });

  let hedears = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({
      nome: nome,
      cnpj: cnpj,
    })
  };

  fetch('https://teste23424.herokuapp.com/v1/empresa', hedears)
  .then(response => {
    response.json()
    // response.json()
    mostrarToast();
    //2 etapa adicionar ao html na hora
    dados.push({nome:nome, id:id});
    console.log(dados);
    gerarTabela(dados);
  })
  // .then(data => {
  //   mostrarToast();
  //   //2 etapa adicionar ao html na hora
  //   dados.push({nome:nome, id:id});
  //   console.log(dados);
  //   gerarTabela(dados);
  // })
  .catch(error => {
    console.error(error);
  });
}

function mostrarToast() {
  var toast = new bootstrap.Toast(document.getElementById('toast'))
  
  toast.show()
}

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
        let excluir = confirm("Tem certeza que deseja excluir?")
        if (excluir) {
          await excluirEmpresa(dados[i].id);
           tr.remove();
        }
      });
      tdCnpj.textContent = dados[i].cnpj;
      tdAcao.appendChild(btnRemover);
      tr.appendChild(tdNome);
      tr.appendChild(tdCnpj);
      tr.appendChild(tdAcao);
      tbody.appendChild(tr);
    }
  }

async function excluirEmpresa(id) {
  try {
    const response = await fetch("https://teste23424.herokuapp.com/v1/empresa/" + id, {method: "DELETE"});
    const jsonData = await response.json();
    console.log(jsonData);
    dados = jsonData.data
    console.log("foi")
  } catch(error) {
    console.log("deu merda")
  }
}