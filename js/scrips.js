///
///

function mudarCor(elemento, cor) {
    elemento.style.color = cor;
}
/**onclick=" alert('botão clicado')" */
function clicarBotao() {
    alert('Botão foi clidado')
}
/**onfocus="this.value=('campo em foco')" onblur="this.value=('') */

function emFoco(elemento) {
    elemento.value = 'Campo em foco'
}
function semFoco(elemento) {
    elemento.value = ''
}
/**função para altera a imagem */
function mudarImagemFacil(imagem, novoSrc){
    imagem.src=novoSrc;
}