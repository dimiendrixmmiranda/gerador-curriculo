const btnEnviarIdioma = document.querySelector('#enviarIdioma')
const listaDeIdiomas = document.querySelector('.formulario__container__idiomas__lista')

btnEnviarIdioma.addEventListener('click', () => {
    const inputIdiomaTexto = btnEnviarIdioma.parentElement.querySelector('#idiomas').value
    const inputIdiomaNivel = btnEnviarIdioma.parentElement.querySelector('#nivelIdioma').value
    const inputIdioma = {
        nomeIdioma: inputIdiomaTexto,
        nivelIdioma: inputIdiomaNivel,
    }

    criarItemSoftware(inputIdioma)
})

function criarItemSoftware(inputIdioma){
    const li = document.createElement('li')
    li.classList.add('formulario__container__idiomas__lista__item')
    const nomeIdioma = document.createElement('span')
    nomeIdioma.innerHTML = inputIdioma.nomeIdioma
    nomeIdioma.id = 'nomeIdioma'
    const nivelIdioma = document.createElement('span')
    nivelIdioma.innerHTML = inputIdioma.nivelIdioma
    nivelIdioma.id = 'nivelIdioma'
    li.appendChild(nomeIdioma)
    li.appendChild(nivelIdioma)
    listaDeIdiomas.appendChild(li)
}