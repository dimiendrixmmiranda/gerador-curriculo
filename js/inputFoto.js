const btnIniciarCamera = document.querySelector('[data-video-botao]')
const campoCamera = document.querySelector('[data-camera]')
const video = document.querySelector('[data-video]')

const btnTirarFoto = document.querySelector('[data-tirar-foto]')
const canvas = document.querySelector('[data-video-canvas]')
const mensagem = document.querySelector('[data-mensagem]')

// upload foto
const carregarFoto = document.querySelector('#carregarFoto')

const imagemFinal = document.querySelector('.formulario__foto__final')

// formularios
const formularioFotoUpload = document.querySelector('.formulario__foto__upload')
const formularioFotoTirarFoto = document.querySelector('.formulario__foto__tirarFoto')
const formularioFotoFinal = document.querySelector('.formulario__foto__final')

const btnOutraFoto = document.querySelector('#selecionarOutraFoto')

btnIniciarCamera.addEventListener('click', async function () {
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    btnIniciarCamera.style.display = 'none'
    campoCamera.style.display = 'block'
    video.srcObject = iniciarVideo
})

btnTirarFoto.addEventListener('click', function () {
    canvas.getContext('2d').drawImage(video, 0, 0, 400, 200)
    const enderecoImagem = canvas.toDataURL('image/jpeg')
    campoCamera.style.display = 'none'

    const imagem = criarImagem(enderecoImagem)
    imagemFinal.appendChild(imagem)
    formularioFotoUpload.style.display = 'none'
    formularioFotoTirarFoto.style.display = 'none'
    formularioFotoFinal.style.display = 'flex'
    btnOutraFoto.style.display = 'block'
})


carregarFoto.addEventListener('change', (e) => {
    const arquivo = e.target.files[0]
    if (arquivo) {
        const reader = new FileReader()
        reader.addEventListener('load', (e) => {
            const enderecoImagem = e.target.result
            const imagem = criarImagem(enderecoImagem)
            imagemFinal.appendChild(imagem)
            formularioFotoUpload.style.display = 'none'
            formularioFotoTirarFoto.style.display = 'none'
            formularioFotoFinal.style.display = 'flex'
            btnOutraFoto.style.display = 'block'
        })
        reader.readAsDataURL(arquivo)
    }
})

btnOutraFoto.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('teste')
    formularioFotoFinal.querySelector('img').remove()
    btnOutraFoto.style.display = 'none'
    formularioFotoUpload.style.display = 'block'
    formularioFotoTirarFoto.style.display = 'block'
    formularioFotoFinal.style.display = 'none'
    btnIniciarCamera.style.display = 'block'
})

function criarImagem(enderecoImagem) {
    const imagem = document.createElement('img')
    imagem.setAttribute('src', enderecoImagem)
    return imagem
}