const header = 
{
    Accept: "application/json",
    "Content-Type": "application/json",
};

async function GETTableItems() 
{
    let response = await fetch("http://jsuol.com.br/c/monaco/utils/gestor/commons.js?file=commons.uol.com.br/sistemas/esporte/modalidades/futebol/campeonatos/dados/2024/30/dados.json", 
    {
      method: "GET",
      headers: header,
    });
    
    let result = await response.json();
    console.log(result);
    buildTable(result);
}

function buildTable(cardapioItens) 
{
    let ulTeamsStats = document.querySelector("#ulStats");
    cardapioItens.forEach((item) => {
        ulTeamsStats.insertAdjacentHTML(
        "beforeend",
        `
        <li>
            ${item.titulo}
        </li>
        `
      );
    });
}
  GETTableItems();