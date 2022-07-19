//LISTA DE FIGURE ACTIONS
const secaoListFigure = document.getElementsByClassName('action-figures')[0]
const secaoListPainting = document.getElementsByClassName('paintings')[0]

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

//CRIAR ITENS DE AÇÃO
function createActionItem(objeto) {
    for(let i = 0; i < objeto.length; i++){
        let elementoLista = document.createElement('li')
        let nome = document.createElement('span')

        nome.innerText = `${listPerson[i].nome}`
        elementoLista.appendChild(nome)

        secaoListFigure.appendChild(elementoLista)
    }
}
createActionItem(listFigure)

//CRIAR PINTURAS
function createPaitingItem(objeto) {
    for(let i = 0; i < objeto.length; i++){
        let elementoLista = document.createElement('li')
        let nome = document.createElement('span')

        nome.innerText = `${listPerson[i].nome}`
        elementoLista.appendChild(nome)

        secaoListPainting.appendChild(elementoLista)
    }
}
createPaitingItem(listPainting)