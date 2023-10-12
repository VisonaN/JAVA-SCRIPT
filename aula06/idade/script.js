function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <10) {
                //Criança
                img.setAttribute('src', 'imagens/crianca_m.png')
            } else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem_m.png')
            } else if (idade > 21 && idade < 59) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <10) {
                //Criança
                img.setAttribute('src', 'imagens/crianca_f.png')
            } else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem_f.png')
            } else if (idade > 22 && idade < 59) {
                //Adulto
                img.setAttribute('src', 'imagens/adulta.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos que é um ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}