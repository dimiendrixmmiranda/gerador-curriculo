const btnFormExperiencia = document.querySelector('#enviarExperiencia')

const contadorExperiencia = 0

btnFormExperiencia.addEventListener('click', (e) => {
    const cargo = e.target.parentElement.querySelector('#experiencia__cargo').value
    const nomeDaEmpresa = e.target.parentElement.querySelector('#nome__empresa').value
    const periodo = e.target.parentElement.querySelector('#experiencia__periodo').value
    const descricao = e.target.parentElement.querySelector('#experiencia__descricao').value
    
    const itemExperiencia = criarExperiencia(cargo, nomeDaEmpresa, periodo, descricao)
    const listaExperiencia = document.querySelector('.lista__experiencia')
    listaExperiencia.appendChild(itemExperiencia)
})

function criarExperiencia(cargo, nomeDaEmpresa, periodo, descricao) {
    const li = document.createElement('li')

    const spanCargo = document.createElement('span')
    spanCargo.innerHTML = cargo
    spanCargo.classList.add('lista__experiencia__cargo')
    const spanNomeDaEmpresa = document.createElement('span')
    spanNomeDaEmpresa.innerHTML = nomeDaEmpresa
    spanNomeDaEmpresa.classList.add('lista__experiencia__nomeDaEmpresa')
    const spanPeriodo = document.createElement('span')
    spanPeriodo.innerHTML = periodo
    spanPeriodo.classList.add('lista__experiencia__periodo')
    const pDescricao = document.createElement('p')
    pDescricao.innerHTML = descricao
    pDescricao.classList.add('lista__experiencia__descricao')

    li.appendChild(spanCargo)
    li.appendChild(spanNomeDaEmpresa)
    li.appendChild(spanPeriodo)
    li.appendChild(pDescricao)

    return li
}