const inputLinkedin = document.querySelector('.linkedin input[type="checkbox"]')

inputLinkedin.addEventListener('click', (e) => {
    console.log('teste')
    const inputText = e.target.parentElement.querySelector('input[type="text"]')
    if(inputLinkedin.checked){
        inputText.style.display = 'block'
    }else{
        inputText.style.display = 'none'
    }
})