let usuario = "Izaak"
//TODO prompt("Informe seu nome");

let bemVindo = document.getElementById("bemVindo");
bemVindo.innerHTML = `Seja bem-vindo(a), ${usuario}!`;


function adicionarItem() {
    const novoItem = document.getElementById("novoItem");
    const itens = document.getElementById("itens");

    itens.innerHTML += `<div class="item">
                            <span>${novoItem.value}</span>
                            <button>X</button>
                        </div>`;
    novoItem.value = "";
}