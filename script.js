const btn = document.querySelector('#gerarPdf')
const form = document.querySelector('form')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const conteudo = document.querySelector('.content')
    const divConteudo = document.createElement('div')
    divConteudo.classList.add('content')
    divConteudo.innerHTML = conteudo.innerHTML

    const dados = {
        nome: e.target['nome'].value,
        cargo: e.target['cargo'].value,
        telefone: e.target['telefone'].value,
        email: e.target['email'].value,
        enderecoInputFoto: '',
        linkedin: '',
        arraySoftwares: [],
        arrayIdiomas: []
    }

    // lógica no input de foto
    const enderecoFoto = document.querySelector('.picture__image__img')
    if (enderecoFoto != null) {
        dados.enderecoInputFoto = enderecoFoto.src
    }

    // lógica do linkedin
    if (e.target['linkedin'][1].value != '') {
        dados.linkedin = e.target['linkedin'][1].value
    }

    // logica da lista de softwares
    const itensListaSoftware = document.querySelectorAll('.formulario__container__software__lista li')
    itensListaSoftware.forEach(li => {
        dados.arraySoftwares.push(li.innerHTML)
    })

    // logica da lista de idiomas
    const itensListaIdiomas = document.querySelectorAll('.formulario__container__idiomas__lista li')
    itensListaIdiomas.forEach(li => {
        const objetoIdioma = {
            nomeIdioma: li.querySelector('.span__idioma').innerHTML,
            nivelIdioma: li.querySelector('.span__idioma__nivel').innerHTML
        }
        dados.arrayIdiomas.push(objetoIdioma)
    })

    // local que eu tenho que substituir
    divConteudo.querySelector('.container__titulo').innerHTML = dados.nome
    divConteudo.querySelector('.container__cargo').innerHTML = dados.cargo
    divConteudo.querySelector('#containerPerfilTelefone').innerHTML = dados.telefone
    divConteudo.querySelector('#containerPerfilEmail').innerHTML = dados.email
    divConteudo.querySelector('.foto img').src = dados.enderecoInputFoto
    divConteudo.querySelector('#containerPerfilLinkedin').innerHTML = dados.linkedin
    dados.arraySoftwares.forEach(software => {
        const li = document.createElement('li')
        li.innerHTML = software
        const lista = divConteudo.querySelector('.container__software ul')
        lista.appendChild(li)
    })

    dados.arrayIdiomas.forEach(idioma => {
        console.log(idioma)
        const li = document.createElement('li')
        const spanNome = document.createElement('span')
        spanNome.innerHTML = idioma.nomeIdioma

        const divNivel = document.createElement('div')
        const divNivelInterno = document.createElement('div')
        divNivelInterno.style.width = `${idioma.nivelIdioma}%`
        divNivel.appendChild(divNivelInterno)


        li.appendChild(spanNome)
        li.appendChild(divNivel)

        const lista = divConteudo.querySelector('.container__idiomas ul')
        lista.appendChild(li)
        console.log(lista)
    })

    const options = {
        filename: "Arquivo123",
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    }
    html2pdf().set(options).from(divConteudo).save()
})