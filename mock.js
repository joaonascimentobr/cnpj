
let dados = [
    { nome: "Nenhuma empresa cadastrada", cnpj: ''}
];
document.addEventListener('DOMContentLoaded', async () => {

    async function logJSONData() {
        const response = await fetch("https://teste23424.herokuapp.com/v1/empresa");
        const jsonData = await response.json();
        console.log(jsonData);
        dados = jsonData.data
    }
    await logJSONData();
    gerarTabela(dados);
  });

