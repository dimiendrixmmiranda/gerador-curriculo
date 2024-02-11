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
        linkedin: '',
        arraySoftwares: [],
        arrayIdiomas: []
    }
    // lógica do linkedin
    if(e.target['linkedin'][1].value != ''){
        dados.linkedin = e.target['linkedin'][1].value
    }

    // logica da lista de softwares
    const itensListaSoftware = document.querySelectorAll('.formulario__container__software__lista__item')
    itensListaSoftware.forEach(li => {
        dados.arraySoftwares.push(li.innerHTML)
    })

    // logica da lista de idiomas
    const itensListaIdiomas = document.querySelectorAll('.formulario__container__idiomas__lista__item')
    itensListaIdiomas.forEach(li => {
        console.log(li.querySelector('#nomeIdioma').innerHTML)
        const objetoIdioma = {
            nomeIdioma: li.querySelector('#nomeIdioma').innerHTML,
            nivelIdioma: li.querySelector('#nivelIdioma').innerHTML
        }
        dados.arrayIdiomas.push(objetoIdioma)
    })

    console.log(dados)


    // local que eu tenho que substituir
    divConteudo.querySelector('.container__titulo').innerHTML = dados.nome
    divConteudo.querySelector('.container__cargo').innerHTML = dados.cargo
    divConteudo.querySelector('#containerPerfilTelefone').innerHTML = dados.telefone
    divConteudo.querySelector('#containerPerfilEmail').innerHTML = dados.email
    divConteudo.querySelector('#containerPerfilLinkedin').innerHTML = dados.linkedin
    
    const options = {
        filename: "Arquivo123",
        html2canvas: {scale: 2},
        jsPDF: {unit: 'mm', format: 'a4', orientation: 'portrait'}
    }

    html2pdf().set(options).from(divConteudo).save()
})