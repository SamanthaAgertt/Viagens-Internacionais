function pesquisar () {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // se campoPesquisa for uma string sem nada
    if (campoPesquisa == "")

// para cada dado dentro da lista de dados;
for (let dado of dados)     {
    console.log(dado.titulo.includes(campoPesquisa))
    resultados +=
    <div class="item-resultado">
            <h2>
                <a href="#" target="_blank"> ${dado.titulo}</a>
                </h2>
            <p class="descricao-meta"> ${dado.descricao} </p> 
            <a href= "#" target="_blank"> ${dado.linkWikipedia} Sobre o país</a>
            <a href= "#" target="_blank"> ${dado.linkGoogle} Principais pontos turísticos</a> 
            </div>
}

section.innerHTML = resultados
}
//console.log(dados);

