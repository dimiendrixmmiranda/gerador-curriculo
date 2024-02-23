const btn = document.querySelector('#gerarPdf')
const form = document.querySelector('form')
verificarInputLinkedin()
verificarInputSoftware()
verificarInputIdioma()
verificarInputCertificacoes()
vereficarExperienciasDeTrabalho()
vereficarNivelEducacional()

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const dados = {
        nome: e.target['nome'].value,
        cargo: e.target['cargo'].value,
        telefone: e.target['telefone'].value,
        email: e.target['email'].value,
        linkedin: e.target['linkedin'][1].value || '',
        arraySoftwares: [],
        arrayIdiomas: [],
        descricao: e.target['descricao'].value,
        arrayCertificacoes: [],
        arrayExperiencias: [],
        arrayEducacao: [],
        enderecoInputFoto: document.querySelector('.formulario__foto__final img').getAttribute('src')
    }

    const listaSoftwares = e.target.querySelectorAll('#listaSoftware li')
    listaSoftwares.forEach(software => {
        dados.arraySoftwares.push(software.innerHTML)
    });

    const listaIdiomas = e.target.querySelectorAll('.formulario__container_idioma_lista li')
    listaIdiomas.forEach(idioma => {
        const nomeIdioma = idioma.querySelector('[idioma]').innerHTML
        const valorIdioma = idioma.querySelector('[valoridioma]').innerHTML
        const objetoIdioma = {
            idioma: nomeIdioma,
            valorIdioma
        }
        dados.arrayIdiomas.push(objetoIdioma)
    })

    const listaCertificacoes = document.querySelectorAll('.lista__certificacoes li')
    listaCertificacoes.forEach(certificacao => {
        const objetoCertificao = {
            nomeCurso: certificacao.querySelector('.certificacao__nomeCurso').innerHTML,
            instituicao: certificacao.querySelector('.certificacao__instituicao').innerHTML,
            cargaHoraria: certificacao.querySelector('.certificacao__cargaHoraria').innerHTML,
            anoConclusao: certificacao.querySelector('.certificacao__ano').innerHTML
        }
        dados.arrayCertificacoes.push(objetoCertificao)
    })

    const listaExperiencias = document.querySelectorAll('.lista__experiencia__item li')
    listaExperiencias.forEach(experiencia => {
        const experienciaObjeto = {
            cargo: experiencia.querySelector('.experiencia__cargo').innerHTML,
            empresa: experiencia.querySelector('.experiencia__empresa').innerHTML,
            periodo: experiencia.querySelector('.experiencia__periodo').innerHTML,
            atribuicoes: experiencia.querySelector('.experiencia__atribuicoes').innerHTML
        }

        dados.arrayExperiencias.push(experienciaObjeto)
    })

    const listaFormacao = document.querySelectorAll('.lista__formacao li')
    listaFormacao.forEach(formacao => {
        const objetoFormacao = {
            curso: formacao.querySelector('.educacao__curso').innerHTML,
            instituicao: formacao.querySelector('.educacao__instituicao').innerHTML,
            periodo: formacao.querySelector('.educacao__periodo').innerHTML,
            detalhes: formacao.querySelector('.educacao__detalhes').innerHTML
        }
        dados.arrayEducacao.push(objetoFormacao)
    })

    const options = {
        filename: "Arquivo123",
        margin: [0, 0, 0, 0],
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    }

    document.querySelector('.container__titulo').innerHTML = dados.nome
    document.querySelector('.container__cargo').innerHTML = dados.cargo
    document.querySelector('#containerPerfilTelefone').innerHTML = dados.telefone
    document.querySelector('#containerPerfilEmail').innerHTML = dados.email
    document.querySelector('.container__descricao').innerHTML = dados.descricao

    const imagem = document.querySelector('.foto img')
    document.querySelector('#foto__imagem').setAttribute('src', dados.enderecoInputFoto)
    console.log(imagem)


    if(dados.linkedin){
        const elementoLinkedin = document.querySelector('#containerPerfilLinkedin')
        const spanTitulo = document.createElement('span')
        spanTitulo.innerHTML = 'Linkedin'
        
        const spanLinkLinkedin = document.createElement('span')
        spanLinkLinkedin.innerHTML = dados.linkedin

        elementoLinkedin.appendChild(spanTitulo)
        elementoLinkedin.appendChild(spanLinkLinkedin)
        }

    if(dados.arraySoftwares.length > 0){
        const containerSoftware = document.querySelector('.container__software')
        const h3 = document.createElement('h3')
        h3.innerHTML = 'Software'
        containerSoftware.appendChild(h3)
        const elementoListaSoftware = document.querySelector('.container__software__lista')
        dados.arraySoftwares.forEach(software => {
            const li = document.createElement('li')
            li.innerHTML = software
            elementoListaSoftware.appendChild(li)
        })
    }

    if(dados.arrayIdiomas.length > 0){
        const containerIdioma = document.querySelector('.container__idiomas')
        const h3 = document.createElement('h3')
        h3.innerHTML = 'Idiomas'
        containerIdioma.appendChild(h3)

        const elementoListaIdioma = document.querySelector('.container__idioma__lista')
        dados.arrayIdiomas.forEach(idioma => {
            const li = document.createElement('li')
            
            const nomeIdioma = document.createElement('p')
            nomeIdioma.innerHTML = idioma.idioma

            const divExterna = document.createElement('div')
            const divInterna = document.createElement('div')
            divInterna.style.width = `${idioma.valorIdioma}%`
            divExterna.appendChild(divInterna)
            
            li.appendChild(nomeIdioma)
            li.appendChild(divExterna)

            elementoListaIdioma.appendChild(li)
        })
    }

    if(dados.arrayCertificacoes.length > 0){
        const h3 = document.createElement('h3')
        h3.innerHTML = 'Certificações'

        const elementoContainerCertificacoes = document.querySelector('.container__certificacoes')
        elementoContainerCertificacoes.appendChild(h3)
        
        const ul = document.createElement('ul')
        dados.arrayCertificacoes.forEach(certificacao => {
            const li = document.createElement('li')
            const spanNomeCurso = document.createElement('span')
            spanNomeCurso.innerHTML = certificacao.nomeCurso

            const spanInstituicao = document.createElement('span')
            spanInstituicao.innerHTML = certificacao.instituicao

            const spanCargaHoraria = document.createElement('span')
            spanCargaHoraria.innerHTML = certificacao.cargaHoraria

            const spanAnoConclusao = document.createElement('span')
            spanAnoConclusao.innerHTML = certificacao.anoConclusao

            li.appendChild(spanNomeCurso)
            li.appendChild(spanInstituicao)
            li.appendChild(spanCargaHoraria)
            li.appendChild(spanAnoConclusao)
            ul.appendChild(li)
        })
        elementoContainerCertificacoes.appendChild(ul)
    }

    const conteudo = document.querySelector('.content')
    const divConteudo = document.createElement('div')
    divConteudo.classList.add('content')
    divConteudo.innerHTML = conteudo.innerHTML

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
        li.innerHTML = `<strong idioma>${objetoIdioma.idioma}</strong>: <strong valorIdioma>${objetoIdioma.conhecimentoIdioma}</strong>`
        listaIdiomas.appendChild(li)
    })
}

function verificarInputCertificacoes(){
    const inputCheckboxCertificacoes = document.querySelector('[inputCheckboxCertificacoes]')
    const inputNomeCurso = document.querySelector('[inputnomecursocertificacoes]')
    const inputCargaHoraria = document.querySelector('[inputcargahorariacertificacoes]')
    const inputInstituicao = document.querySelector('[inputinstituicaocertificacoes]')
    const inputAno = document.querySelector('[inputanocertificacoes]')
    const listaCertificacoes = document.querySelector('.lista__certificacoes')
    const btnEnviarCertificacao = document.querySelector('.formulario__container_certificacoes button')

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

    btnEnviarCertificacao.addEventListener('click', (e) => {
        e.preventDefault()
        const li = document.createElement('li')

        const nomeCurso = document.createElement('span')
        nomeCurso.classList.add('certificacao__nomeCurso')
        nomeCurso.innerHTML = inputNomeCurso.value
        
        const instituicaoCurso = document.createElement('span')
        instituicaoCurso.innerHTML = inputInstituicao.value
        instituicaoCurso.classList.add('certificacao__instituicao')
        
        const cargaHoraria = document.createElement('span')
        cargaHoraria.innerHTML = inputCargaHoraria.value
        cargaHoraria.classList.add('certificacao__cargaHoraria')
        
        const ano = document.createElement('span')
        ano.innerHTML = inputAno.value
        ano.classList.add('certificacao__ano')

        li.appendChild(nomeCurso)
        li.appendChild(instituicaoCurso)
        li.appendChild(cargaHoraria)
        li.appendChild(ano)

        listaCertificacoes.appendChild(li)
    })
}

function vereficarExperienciasDeTrabalho(){
    const inputCargo = document.querySelector('#cargoExperiencia')
    const inputEmpresa = document.querySelector('#empresaExperiencia')
    const inputPeriodo = document.querySelector('#periodoExperiencia')
    const inputAtribuicoes = document.querySelector('#atribuicoesExperiencia')
    const btnEnviarExperiencia = document.querySelector('.formulario__container__experiencia button')
    const listaExperiencias = document.querySelector('.lista__experiencia__item')

    btnEnviarExperiencia.addEventListener('click', (e) => {
        e.preventDefault()
        const li = document.createElement('li')

        const spanCargo = document.createElement('span')
        spanCargo.innerHTML = inputCargo.value
        spanCargo.classList.add('experiencia__cargo')
        
        const spanEmpresa = document.createElement('span')
        spanEmpresa.innerHTML = inputEmpresa.value
        spanEmpresa.classList.add('experiencia__empresa')
        
        const spanPeriodo = document.createElement('span')
        spanPeriodo.innerHTML = inputPeriodo.value
        spanPeriodo.classList.add('experiencia__periodo')
        
        const spanAtribuicoes = document.createElement('span')
        spanAtribuicoes.innerHTML = inputAtribuicoes.value
        spanAtribuicoes.classList.add('experiencia__atribuicoes')

        li.appendChild(spanCargo)
        li.appendChild(spanEmpresa)
        li.appendChild(spanPeriodo)
        li.appendChild(spanAtribuicoes)
        listaExperiencias.appendChild(li)
    })
}
function vereficarNivelEducacional(){
    const inputCurso = document.querySelector('#cursoFormacao')
    const inputInstituicao = document.querySelector('#instituicaoFormacao')
    const inputPeriodo = document.querySelector('#periodoFormacao')
    const inputDetalhes = document.querySelector('#detalhesFormacao')
    const btnEnviarNivelEducacional = document.querySelector('.formulario__container__formacao button')
    const listaExperiencias = document.querySelector('.lista__formacao')

    btnEnviarNivelEducacional.addEventListener('click', (e) => {
        e.preventDefault()
        const li = document.createElement('li')

        const spanCurso = document.createElement('span')
        spanCurso.innerHTML = inputCurso.value
        spanCurso.classList.add('educacao__curso')
        
        const spnaInstituicao = document.createElement('span')
        spnaInstituicao.innerHTML = inputInstituicao.value
        spnaInstituicao.classList.add('educacao__instituicao')
        
        const spanPeriodo = document.createElement('span')
        spanPeriodo.innerHTML = inputPeriodo.value
        spanPeriodo.classList.add('educacao__periodo')
        
        const spanDetalhes = document.createElement('span')
        spanDetalhes.innerHTML = inputDetalhes.value
        spanDetalhes.classList.add('educacao__detalhes')

        li.appendChild(spanCurso)
        li.appendChild(spnaInstituicao)
        li.appendChild(spanPeriodo)
        li.appendChild(spanDetalhes)
        listaExperiencias.appendChild(li)
    })
}