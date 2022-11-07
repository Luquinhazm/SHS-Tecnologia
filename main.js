const buttonOrcamento = document.querySelector('.buttonOrcamento')
const cardCFTV = document.getElementById('cardCFTV')
const cardFibra = document.getElementById('cardFibra')
const cardOrganizacao = document.getElementById('cardOrganizacao')
const cardCabeamento = document.getElementById('cardCabeamento')

const btnFibra = document.getElementById('iconFibra')
const btnCFTV = document.getElementById('iconCFTV')
const btnOrganizacao = document.getElementById('iconOrganizacao')
const btnCabeamento = document.getElementById('iconCabeamento')
const btnMenu = document.getElementById('buttonMenu')
const btnClose = document.getElementById('buttonClose')

btnMenu.addEventListener('click', abrirMenu)
btnClose.addEventListener('click', abrirMenu)
btnFibra.addEventListener('click', mudarCardFibra )
btnCFTV.addEventListener('click', mudarCardCFTV )
btnOrganizacao.addEventListener('click', mudarCardOrganizacao )
btnCabeamento.addEventListener('click', mudarCardCabeamento )

function mudarCardFibra(){
    const actualStyleCardCFTV = getComputedStyle(cardCFTV).display
    const actualStyleCardOrganizacao = getComputedStyle(cardOrganizacao).display
    const actualStyleCardCabeamento = getComputedStyle(cardCabeamento).display

    if(actualStyleCardCFTV === 'block'){
        cardCFTV.style.display = 'none'
        btnCFTV.classList.remove('clicado')
        cardFibra.style.display = 'block'
        btnFibra.classList.add('clicado')
    } else if(actualStyleCardOrganizacao ==='block'){
        cardOrganizacao.style.display = 'none'
        btnOrganizacao.classList.remove('clicado')
        cardFibra.style.display = 'block'
        btnFibra.classList.add('clicado')
    } else if(actualStyleCardCabeamento === 'block'){
        cardCabeamento.style.display = 'none'
        btnCabeamento.classList.remove('clicado')
        cardFibra.style.display = 'block'
        btnFibra.classList.add('clicado')
    }
}

function mudarCardCFTV(){
    const actualStyleCardFibra = getComputedStyle(cardFibra).display
    const actualStyleCardOrganizacao = getComputedStyle(cardOrganizacao).display
    const actualStyleCardCabeamento = getComputedStyle(cardCabeamento).display

    if(actualStyleCardFibra === 'block'){
        cardFibra.style.display = 'none'
        btnFibra.classList.remove('clicado')
        cardCFTV.style.display = 'block'
        btnCFTV.classList.add('clicado')
    }  else if(actualStyleCardOrganizacao ==='block'){
        cardOrganizacao.style.display = 'none'
        btnOrganizacao.classList.remove('clicado')
        cardCFTV.style.display = 'block'
        btnCFTV.classList.add('clicado')
    } else if(actualStyleCardCabeamento === 'block'){
        cardCabeamento.style.display = 'none'
        btnCabeamento.classList.remove('clicado')
        cardCFTV.style.display = 'block'
        btnCFTV.classList.add('clicado')
    }
}

function mudarCardOrganizacao(){
    const actualStyleCardFibra = getComputedStyle(cardFibra).display
    const actualStyleCardCFTV = getComputedStyle(cardCFTV).display
    const actualStyleCardCabeamento = getComputedStyle(cardCabeamento).display

    if(actualStyleCardFibra === 'block'){
        cardFibra.style.display = 'none'
        btnFibra.classList.remove('clicado')
        cardOrganizacao.style.display = 'block'
        btnOrganizacao.classList.add('clicado')
    }  else if(actualStyleCardCFTV ==='block'){
        cardCFTV.style.display = 'none'
        btnCFTV.classList.remove('clicado')
        cardOrganizacao.style.display = 'block'
        btnOrganizacao.classList.add('clicado')
    } else if(actualStyleCardCabeamento === 'block'){
        cardCabeamento.style.display = 'none'
        btnCabeamento.classList.remove('clicado')
        cardOrganizacao.style.display = 'block'
        btnOrganizacao.classList.add('clicado')
    }
}

function mudarCardCabeamento(){
    const actualStyleCardFibra = getComputedStyle(cardFibra).display
    const actualStyleCardOrganizacao = getComputedStyle(cardOrganizacao).display
    const actualStyleCardCFTV = getComputedStyle(cardCFTV).display

    if(actualStyleCardFibra === 'block'){
        cardFibra.style.display = 'none'
        btnFibra.classList.remove('clicado')
        cardCabeamento.style.display = 'block'
        btnCabeamento.classList.add('clicado')
    }  else if(actualStyleCardOrganizacao ==='block'){
        cardOrganizacao.style.display = 'none'
        btnOrganizacao.classList.remove('clicado')
        cardCabeamento.style.display = 'block'
        btnCabeamento.classList.add('clicado')
    } else if(actualStyleCardCFTV === 'block'){
        cardCFTV.style.display = 'none'
        btnCFTV.classList.remove('clicado')
        cardCabeamento.style.display = 'block'
        btnCabeamento.classList.add('clicado')
    }
}

function abrirMenu(){
    const menuMobile = document.getElementById('menuMobile')
    const styleMenuMobile = getComputedStyle(menuMobile).display

    if(styleMenuMobile === 'none'){
        menuMobile.style.display = 'flex'
    }else if(styleMenuMobile === 'flex'){
        menuMobile.style.display = 'none'
    }
}