import cidades from '../cidades.json' assert { type: "json" };

export default class EmpresaService {

    constructor() {
        // console.log("foi kkkkk");
    }

    start() {
        // this.obterListaNomesArquivos();
        this.obterListaNomesCidades();
    }

    obterListaNomesArquivos() { // agr vai mostrar o link do arquivo
        let selectedCity = $('#city').val();
        console.log("ddddddddddddd", selectedCity);;
        const oldThis = this;
        // fetch(`https://sindetursp.com.br/sistema/pdfs.php?city=${selectedCity}`)
        // .then((response) => {
        //     return response.json();
        // })
        // .then((data) => {
        //     console.log(data)
            this.inserirTextoLista()
        // });
        // .then(function(response) {
        //     // let res = JSON.parse(response);
        //     console.log("lll",response.text());
        //     // oldThis.inserirTextoLista(response);
        // })
        // $.get("https://sindetursp.com.br/sistema/pdfs.php", function( data ) {
        //     let response = JSON.parse(data);
        //     // console.log(data);
        //     oldThis.inserirTextoLista(response);
        // });
    }

    gerarHtmlLista(array) {
        // if (!Array.isArray(array)) {
        //   throw new Error("O argumento deve ser um array.");
        // }
      
        let html = "<ul>";
        // let baseUrl = "https://sindetursp.com.br";
        let selectedCity = $('#city').val();
        //<a href="${baseUrl}/sistema/pdf/${selectedCity}/${item}">PDF - ${item}</a>

        let selectedCity2 = $('#city').val();
        let nomePdf = cidades[selectedCity2];
        console.log("nome da poha do pdf", nomePdf);
        let baseUrl = "https://sindetursp.com.br/sistema/Npdfs"
        // https://sindetursp.com.br/sistema/Npdfs/
        // array.forEach((item) => {
          html += `<li>
          <a href="${baseUrl}/${nomePdf}">PDF</a>
          </li>`;
        // });
      
        html += "</ul>";
        return html;
    }
    
    inserirTextoLista(txt) {
        console.log("passo aqui");
        var elemento = $("#listaPdfs");
        let html = this.gerarHtmlLista(txt);
        console.log(elemento);
        elemento[0].innerHTML = html;
    }

    obterListaNomesCidades() {
        const oldThis = this;
        $.get("https://sindetursp.com.br/sistema/pastas.php", function( data ) {
            let response = JSON.parse(data);
            console.log(data);
            oldThis.inserirTextoSelect(response);
        });
    }

    inserirTextoSelect(txt) {
        let elemento = $("#listaCity");
        let html = this.gerarHtmSelect(txt);
        elemento[0].innerHTML = html;
    }

    gerarHtmSelect(array) {
        let html = "<label>Escolha a cidade da qual deseja ver o termo:</label><select name=city id='city' onchange='globalThis.pdfService.changeCity()'>";
        // let cidades = ['selecione'].concat(array);
        let cidadesKeys = Object.keys(cidades);
        cidadesKeys.forEach((item) => {
          html += `<option value="${item}">${item}</option>`;
        });
      
        html += "</select>";
      
        return html;
    }

    changeCity() {
        this.obterListaNomesArquivos();
    }

    // <select name="cars" id="cars">
    //       <option value="volvo">Votuporanga</option>
    //       <option value="saab">Aracatuba</option>
    //       <option value="mercedes">Bauru</option>
    //       <option value="audi">Campinas</option>
    //     </select>
    
}