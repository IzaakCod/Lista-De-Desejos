const usuario = 'Izaak'; //TODO prompt('Informe seu nome');

const bemVindo = document.getElementById('bemVindo');
bemVindo.innerHTML = `Seja bem-vindo(a), ${usuario}!`;

let lista = JSON.parse(localStorage.getItem("lista")) || [];
exibirLista()

function exibirLista() {
    const itens = document.getElementById('itens');
    itens.innerHTML = '';

    for (let i = 0; i < lista.length; i++) {
        itens.innerHTML += `<div class='item'>
                                <span>${lista[i]}</span>
                                <div>
                                    <button onclick='editarItem(${i})'>✏️</button>
                                    <button onclick='excluirItem(${i})'>🗑️</button>
                                </div>
                            </div>`;
    }
}

function adicionarItem() {
    const novoItem = document.getElementById('novoItem');

    let texto = novoItem.value.trim();

    if (texto == '') {
        alert('Preencha o campo!');
    } else {
        lista.push(texto);
        localStorage.setItem("lista", JSON.stringify(lista))
        exibirLista();
    }

    novoItem.value = '';
}

function excluirItem(index) {
    console.log('Excluindo posição: ', index);
    lista.splice(index, 1);
    localStorage.setItem("lista", JSON.stringify(lista))
    exibirLista();
}

function editarItem(index) {
    let texto = prompt(`Informe o novo texto para ${lista[index]}`);
    texto = texto.trim();

    if (texto == '') {
        alert('Preencha, desgraça!');
    } else {
        lista[index] = texto;
        localStorage.setItem("lista", JSON.stringify(lista))
        exibirLista();
    }
}