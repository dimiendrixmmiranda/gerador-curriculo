const btn = document.querySelector('#gerarPdf')
const form = document.querySelector('form')
verificarInputLinkedin()
verificarInputSoftware()
verificarInputIdioma()
verificarInputCertificacoes()

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
        linkedin: e.target['linkedin'][1].value || '',
        arraySoftwares: [],
        // enderecoInputFoto: '',
        // arrayIdiomas: [],
        // descricao: e.target['descricao'].value
    }

    const listaSoftwares = e.target.querySelectorAll('#listaSoftware li')
    listaSoftwares.forEach(software => {
        dados.arraySoftwares.push(software.innerHTML)
    });

    const options = {
        filename: "Arquivo123",
        margin: [0, 0, 0, 0],
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    }
    console.log(dados)
    // html2pdf().set(options).from(divConteudo).save()
})

function verificarInputLinkedin() {
    const inputCheckboxLinkedin = document.querySelector('[inputCheckboxLinkedin]')
    const inputTextLinkedin = document.querySelector('[inputTextLinkedin]')
    inputCheckboxLinkedin.addEventListener('change', () => {
        if (inputCheckboxLinkedin.checked) {
            inputTextLinkedin.style.display = 'block'
        } else {
            inputTextLinkedin.style.display = 'none'
        }
    })
}

function verificarInputSoftware() {
    const inputCheckboxSoftware = document.querySelector('[inputCheckboxSoftware]')
    const inputTextSoftware = document.querySelector('[inputTextSoftware]')
    const btnEnviarSoftware = document.querySelector('.formulario__container_software button')
    const listaSoftwares = document.querySelector('.formulario__container_software_lista')
    
    inputCheckboxSoftware.addEventListener('change', () => {
        if (inputCheckboxSoftware.checked) {
            inputTextSoftware.style.display = 'block'
            btnEnviarSoftware.style.display = 'block'
            listaSoftwares.style.display = 'flex'
        } else {
            inputTextSoftware.style.display = 'none'
            btnEnviarSoftware.style.display = 'none'
            listaSoftwares.style.display = 'none'
        }
    })

    btnEnviarSoftware.addEventListener('click', (e) => {
        e.preventDefault()
        console.log('enviar')
        const li = document.createElement('li')
        li.innerHTML = inputTextSoftware.value
        listaSoftwares.appendChild(li)
    })
}
function verificarInputIdioma() {
    const inputCheckboxIdioma = document.querySelector('[inputcheckboxidioma]')
    const inputTextIdioma = document.querySelector('[inputtextidioma]')
    const inputRangeIdioma = document.querySelector('[inputrangeidioma]')
    const btnEnviarIdioma = document.querySelector('.formulario__container_idiomas button')
    const listaIdiomas = document.querySelector('.formulario__container_idioma_lista')

    inputCheckboxIdioma.addEventListener('change', () => {
        if (inputCheckboxIdioma.checked) {
            inputTextIdioma.style.display = 'block'
            btnEnviarIdioma.style.display = 'block'
            inputRangeIdioma.style.display = 'block'
            listaIdiomas.style.display = 'flex'
        } else {
            inputTextIdioma.style.display = 'none'
            btnEnviarIdioma.style.display = 'none'
            listaIdiomas.style.display = 'none'
            inputRangeIdioma.style.display = 'none'
        }
    })

    btnEnviarIdioma.addEventListener('click', () => {
        const objetoIdioma = {
            idioma: inputTextIdioma.value,
            conhecimentoIdioma: inputRangeIdioma.value
        }

        const li = document.createElement('li')
        li.innerHTML = `<strong>${objetoIdioma.idioma}</strong>: <strong>${objetoIdioma.conhecimentoIdioma}</strong>`
        listaIdiomas.appendChild(li)
    })
}

function verificarInputCertificacoes(){
    const inputCheckboxCertificacoes = document.querySelector('[inputCheckboxCertificacoes]')
    const inputNomeCurso = document.querySelector('[inputnomecursocertificacoes]')
    const inputCargaHoraria = document.querySelector('[inputcargahorariacertificacoes]')
    const inputInstituicao = document.querySelector('[inputinstituicaocertificacoes]')
    const inputAno = document.querySelector('[inputanocertificacoes]')
    const btnEnviarCertificacao = document.querySelector('.formulario__container_certificacoes button')

    console.log(inputCheckboxCertificacoes)
    console.log(inputNomeCurso)
    console.log(inputCargaHoraria)
    console.log(inputInstituicao)
    console.log(btnEnviarCertificacao)
    inputCheckboxCertificacoes.addEventListener('change', () => {
        if (inputCheckboxCertificacoes.checked) {
            inputNomeCurso.style.display = 'block'
            inputCargaHoraria.style.display = 'block'
            inputInstituicao.style.display = 'block'
            inputInstituicao.style.display = 'block'
            inputAno.style.display = 'block'
            btnEnviarCertificacao.style.display = 'block'
        } else {
            inputNomeCurso.style.display = 'none'
            inputCargaHoraria.style.display = 'none'
            inputInstituicao.style.display = 'none'
            inputInstituicao.style.display = 'none'
            inputAno.style.display = 'none'
            btnEnviarCertificacao.style.display = 'none'

        }
    })
}