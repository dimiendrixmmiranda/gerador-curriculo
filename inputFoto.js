const inputFile = document.querySelector('.picture__input')
const pictureImage = document.querySelector('.picture__image')
const picture = document.querySelector('.picture')
inputFile.addEventListener('change', (e) => {
    const inputTarget = e.target
    const file = inputTarget.files[0]

    if (file) {
        // lendo a imagem
        const reader = new FileReader()
        reader.addEventListener('load', (e) => {
            const readerTarget = e.target
            const img = document.createElement('img')
            img.classList.add('picture__image__img')
            img.src = readerTarget.result

            pictureImage.innerHTML = ''
            pictureImage.appendChild(img)
        })
        reader.readAsDataURL(file)
        pictureImage.innerHTML = 'Imagem Selecionada'
    } else {
        pictureImage.innerHTML = 'Selecione a Imagem'
    }
})