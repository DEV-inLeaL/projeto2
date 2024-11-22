const nomecontato = document.getElementById("nome");
const numerocontato = document.getElementById("numero");

let linhas = "";



addEventListener("submit", function(a) {
    a.preventDefault();
    

    adicionarLinha();
    console.log(nomecontato.value, numerocontato.value);
    })
    

    function adicionarLinha(){
        let linha = '<tr>';

        linha += `<td>${nomecontato.value}</td>`;
        linha += `<td>${numerocontato.value}</td>`;

        linha += '</tr>';

        linhas += linha;
        
        const tabelaHtml = document.querySelector("tbody");
        tabelaHtml.innerHTML = linhas;

        nomecontato.value = ""
        numerocontato.value= ""

    }

    