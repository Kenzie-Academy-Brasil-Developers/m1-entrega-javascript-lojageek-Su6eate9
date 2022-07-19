//LISTA DE FIGURE ACTIONS
const secaoListFigure   = document.querySelector('.action-figures')
const secaoListPainting = document.querySelector('.paintings')

const listPaintings     = document.querySelector('.list-paintings')
const listActionFigures = document.querySelector('.list-action-figures')

let listFigure = [
    {
        Imagem: "./assets/painting/clock.jpg",
        Nome: 'Clock',
        Valor: 'R$50,00',
    },
    {
        Imagem: "./assets/painting/gamepad.jpg",
        Nome: 'GamePad',
        Valor: 'R$50,00',
    },
    {
        Imagem: "./assets/painting/personagem.jpg",
        Nome: 'C3-PO',
        Valor: 'R$150,00',
    }
]

//LISTA DE PAINTINGS
let listPainting = [
    {
        Imagem: "./assets/actions/animewoman.jpg",
        Nome: 'Woman Figure',
        Valor: 'R$125,00',
    },
    {
        Imagem: "./assets/actions/dragonballpersonagem.jpg",
        Nome: 'Goku Super Sayajin',
        Valor: 'R$309,00',
    },
    {
        Imagem: "./assets/actions/starwarspersonagem.jpg",
        Nome: 'Baby Yoda',
        Valor: 'R$276,00',
    }
]

//CRIAR PINTURAS
function createPaitingItem(objeto) {
    for(let i = 0; i < objeto.length; i++){
        const elementoLista = document.createElement('li')

        let img = document.createElement('img')
            img.src = objeto[i].Imagem
            img.alt = objeto[i].Nome
        let nome = document.createElement('p')
        let valor = document.createElement('span')

        elementoLista.classList.add('card')

        nome.innerText = `${objeto[i].Nome}`
        valor.innerText = `${objeto[i].Valor}`

        elementoLista.appendChild(img)
        elementoLista.appendChild(nome)
        elementoLista.appendChild(valor)

        listPaintings.appendChild(elementoLista)

    }
}
createPaitingItem(listPainting)

//CRIAR ITENS DE AÇÃO
function createActionItem(objeto) {
    for(let i = 0; i < objeto.length; i++){
        const elementoLista = document.createElement('li')

        let img = document.createElement('img')
            img.src = objeto[i].Imagem
            img.alt = objeto[i].Nome
        let nome = document.createElement('p')
        let valor = document.createElement('span')

        elementoLista.classList.add('card')

        nome.innerText = `${objeto[i].Nome}`
        valor.innerText = `${objeto[i].Valor}`

        elementoLista.appendChild(img)
        elementoLista.appendChild(nome)
        elementoLista.appendChild(valor)

        listActionFigures.appendChild(elementoLista)
    }
}
createActionItem(listFigure)
{/* 
<li class="card">
    <img src="./assets/painting/clock.jpg" alt="">
    <p>Nome do Item</p>
    <span>Valor do Item</span>
</li>
*/}