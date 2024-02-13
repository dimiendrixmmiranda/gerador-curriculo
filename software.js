const btnEnviarSoftware = document.querySelector('#enviarSoftware')

btnEnviarSoftware.addEventListener('click', (e) => {
    const listaDeSoftwares = document.querySelector('.formulario__container__software__lista')
    const inputSoftware = e.target.parentElement.querySelector('#software')
    if(inputSoftware.value){
        const li = document.createElement('li')
        li.innerHTML = inputSoftware.value
        listaDeSoftwares.appendChild(li)
    }
})