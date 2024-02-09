const btn = document.querySelector('#gerarPdf')
const form = document.querySelector('form')
console.log(form)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const conteudo = document.querySelector('.content')
    const divConteudo = document.createElement('div')
    divConteudo.classList.add('content')
    divConteudo.innerHTML = conteudo.innerHTML

    const dados = {
        nome: e.target['nome'].value,
        cargo: e.target['cargo'].value,
    }


    // local que eu tenho que substituir
    divConteudo.querySelector('.container__titulo').innerHTML = dados.nome
    divConteudo.querySelector('.container__cargo').innerHTML = dados.cargo
    const options = {
        filename: "Arquivo123",
        html2canvas: {scale: 2},
        jsPDF: {unit: 'mm', format: 'a4', orientation: 'portrait'}
    }

    html2pdf().set(options).from(divConteudo).save()
})