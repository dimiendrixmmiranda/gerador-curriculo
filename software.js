const btnEnviarSoftware = document.querySelector('#enviarSoftware')
const listaDeSoftwares = document.querySelector('.formulario__container__software__lista')

btnEnviarSoftware.addEventListener('click', () => {
    const inputSoftware = btnEnviarSoftware.parentElement.querySelector('#software').value
    criarItemSoftware(inputSoftware)
})

function criarItemSoftware(inputSoftware){
    const li = document.createElement('li')
    li.classList.add('formulario__container__software__lista__item')
    li.innerHTML = inputSoftware
    listaDeSoftwares.appendChild(li)
}