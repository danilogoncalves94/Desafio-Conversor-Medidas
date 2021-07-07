function clicar() {
    let distanciaMetros = prompt('Digite uma distância em metros(m):')
    if (distanciaMetros.length == 0) {
        alert('Por favor, digite uma distância.')
    } else {
        let distanciaMetrosReal = parseFloat(distanciaMetros)
        if (isNaN(distanciaMetrosReal)) {
            alert('Por favor, digite uma distância correta.')
        } else {
            let km = distanciaMetrosReal * 0.001
            let hectometro = distanciaMetrosReal * 0.01
            let decametro = distanciaMetrosReal * 0.1
            let decimetro = distanciaMetrosReal * 10
            let centimetro = distanciaMetrosReal * 100
            let milimetro = distanciaMetrosReal * 1000
        
            let novoConteudo = document.getElementById('secao')
            novoConteudo.innerHTML = `<h2>A distância de <span>${distanciaMetrosReal.toLocaleString()} metros</span>, corresponde a...</h2>`
            novoConteudo.innerHTML += `<p class='paragrafos'>${km.toLocaleString()} quilômetros (Km)</p>`
            novoConteudo.innerHTML += `<p class='paragrafos'>${hectometro.toLocaleString()} hectômetros (Hm)</p>`
            novoConteudo.innerHTML += `<p class='paragrafos'>${decametro.toLocaleString()} decâmetros (Dam)</p>`
            novoConteudo.innerHTML += `<p class='paragrafos'>${decimetro.toLocaleString()} decímetros (dm)</p>`
            novoConteudo.innerHTML += `<p class='paragrafos'>${centimetro.toLocaleString()} centímetros (cm)</p>`
            novoConteudo.innerHTML += `<p class='paragrafos'>${milimetro.toLocaleString()} milímetros (mm)</p>`
        }
    }
}