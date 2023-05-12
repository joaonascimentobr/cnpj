function renderTable() {
    const table = document.getElementById('cnpj-table');
    table.innerHTML = '';
  
    const mockCNPJs = JSON.parse(localStorage.getItem('mockCNPJs')) || [];
  
    mockCNPJs.forEach((cnpj, index) => {
      const row = table.insertRow(index);
      const cnpjCell = row.insertCell(0);
      const deleteCell = row.insertCell(1);
  
      cnpjCell.innerHTML = cnpj;
      deleteCell.innerHTML = `<button class="btn btn-outline-danger" onclick="deleteRow(${index})"><i class="fas fa-trash"></i></button>`;
    });
  }

  const addCnpjBtn = document.getElementById('add-cnpj-btn');
addCnpjBtn.addEventListener('click', () => {
  const newCnpj = document.getElementById('new-cnpj').value;
  console.log(newCnpj);
  const mockCNPJs = JSON.parse(localStorage.getItem('mockCNPJs')) || [];

  mockCNPJs.push(newCnpj);
  localStorage.setItem('mockCNPJs', JSON.stringify(mockCNPJs));

  renderTable();
});