export default class EmpresaService {
    constructor() {
        // console.log("foi kkkkk");
    }

    start() {
        this.obterListaNomesArquivos();
        this.obterListaNomesCidades();
    }

    obterListaNomesArquivos() {
        let selectedCity = $('#city').val();
        console.log("ddddddddddddd", selectedCity);;
        const oldThis = this;
        fetch(`https://sindetursp.com.br/sistema/pdfs.php?city=${selectedCity}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            this.inserirTextoLista(data)
        });
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
        if (!Array.isArray(array)) {
          throw new Error("O argumento deve ser um array.");
        }
      
        let html = "<ul>";
        let baseUrl = "https://sindetursp.com.br/";
        array.forEach((item) => {
          html += `<li>
          <a href="${baseUrl}/sistema/aracatuba/${item}">PDF - ${item}</a>
          </li>`;
        });
      
        html += "</ul>";
      
        return html;
    }
    
    inserirTextoLista(txt) {
        // console.log("passo aqui");
        var elemento = $("#listaPdfs");
        let html = this.gerarHtmlLista(txt);
        console.log(elemento);
        elemento[0].innerHTML = html;
    }

    // select

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
        console.log(elemento);
        console.log("sdfgdfgdfgdfg");
        elemento[0].innerHTML = html;
        // elemento[0].onchange = this.changeCity;
        // elemento[0].onchange = function() {
        //     changeCity();;;
        // }
    }

    gerarHtmSelect(array) {
        if (!Array.isArray(array)) {
            throw new Error("O argumento deve ser um array.");
        }
      
        let html = "<select name=city id='city' onchange='globalThis.pdfService.changeCity()'>";
        let baseUrl = "https://sindetursp.com.br/";
        array.forEach((item) => {
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