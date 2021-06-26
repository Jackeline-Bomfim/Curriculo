const modalCertificados = document.querySelector('.modal-cert')
const certificados = document.querySelectorAll('.imagem')

for (let imagem of certificados) {
    imagem.addEventListener("click", function(){
        const certID = imagem.getAttribute("id")
        modalCertificados.classList.add('ativo')
        modalCertificados.querySelector("iframe").src=`_certificados/${certID}`
    })
}

document.querySelector(".botao").addEventListener("click", function(){
    modalCertificados.classList.remove('ativo')
})