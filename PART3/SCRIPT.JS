function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || (fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/menino.jpg')
                //res.innerHTML = `É uma criança com ${idade} anos.`
            } else if (idade < 21){
                img.setAttribute('src', 'img/jovemh.jpg')
                //res.innerHTML = `É um jovem com ${idade} anos.`
            } else if (idade < 50) {
                img.setAttribute('src', 'img/homem.jpg')
                //res.innerHTML = `É um adulto com ${idade} anos.`
            } else {
                img.setAttribute('src', 'img/idoso.jpg')
                //res.innerHTML = `É um sénior com ${idade} anos.`
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/menina.jpg')
                //res.innerHTML = `É uma criança com ${idade} anos.`
            } else if (idade < 21){
                img.setAttribute('src', 'img/jovemm.jpg')
                //res.innerHTML = `É uma jovem com ${idade} anos.`
            } else if (idade < 50) {
                img.setAttribute('src', 'img/mulher.jpg')
                //res.innerHTML = `É uma adulta com ${idade} anos.`
            } else {
                img.setAttribute('src', 'img/idosa.jpg')
                //res.innerHTML = `É uma sénior com ${idade} anos.`
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
            

 }
    

