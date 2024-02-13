const btnEnviarIdioma = document.querySelector('#enviarIdioma')

btnEnviarIdioma.addEventListener('click', (e) => {
    const listaDeIdiomas = document.querySelector('.formulario__container__idiomas__lista')
    const inputIdioma = e.target.parentElement.querySelector('#idiomas')
    const inputIdiomaNivel = e.target.parentElement.querySelector('#nivelIdioma')
    const objetoIdioma = {idioma: inputIdioma.value, nivelIdioma: inputIdiomaNivel.value}

    const li = document.createElement('li')
    const spanIdioma = document.createElement('span')
    spanIdioma.innerHTML = objetoIdioma.idioma
    spanIdioma.classList.add('span__idioma')
    
    const spanIdiomaNivel = document.createElement('span')
    spanIdiomaNivel.innerHTML = objetoIdioma.nivelIdioma 
    spanIdiomaNivel.classList.add('span__idioma__nivel')
    
    li.appendChild(spanIdioma)
    li.appendChild(spanIdiomaNivel)
    listaDeIdiomas.appendChild(li)
})