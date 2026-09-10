let usuario = "Izaak"
//TODO prompt("Informe seu nome");

let bemVindo = document.getElementById("bemVindo");
bemVindo.innerHTML = `Seja bem-vindo(a), ${usuario}!`;


function adicionarItem() {
    const novoItem = document.getElementById("novoItem");
    const itens = document.getElementById("itens");

    let texto = novoItem.value.trim()



    if (texto == "") {
        alert("Preencha o campo")
        return
    }

    itens.innerHTML += `<div class="item">
                            <span>${texto}</span>
                            <div>
                                <button>✏️</button>
                                <button onclick="excluirItem(ev)>🗑️</button>
                            </div>                       
                            </div>`;
    novoItem.value = "";
}
function excluirItem(ev){
    console.log(ev)

    const button = ev.target
    const item = button.parentElement.parentElement
    item.remove()
}