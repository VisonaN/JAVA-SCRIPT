
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        document.body.style.background = '#dcd1ca'
        img.src = 'imagens/foto_manha.png'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'imagens/foto_tarde.png'
        document.body.style.background = '#9f6e5e'
    } else {
        //BOA NOITE!
        img.src = 'imagens/foto_noite.png'
        document.body.style.background = '#1e151b'
    }
}