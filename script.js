const personagem = document.querySelector('#personagem')
const quadrado = document.querySelector('#quadrado')
var btn = document.querySelector('.btn')
var pontuacao = document.querySelector('#pontos')





btn.style.display= 'none'
const jump =() => {
    personagem.classList.add('animar')
    
    setTimeout(() =>{
        personagem.classList.remove('animar')
    },600)
    
    
}
window.getComputedStyle(quadrado).getPropertyValue('jump')
document.addEventListener('keydown', jump)

var testarColisao = setInterval(function(){
    var LocalizacaoPersonagem= parseInt(
        window.getComputedStyle(personagem).getPropertyValue('top')
    )
    var LocalizacaoQuadrado= parseInt(
        window.getComputedStyle(quadrado).getPropertyValue('left')
    )

    if(LocalizacaoQuadrado<7&& LocalizacaoQuadrado > 0 && LocalizacaoPersonagem >=300 || LocalizacaoQuadrado<7&& LocalizacaoQuadrado > 0 && LocalizacaoPersonagem >= 285 ){
        perdeu()
        
    }
},10)

function perdeu(){
    quadrado.style.animation = 'none'
    personagem.style.display = 'none'

    var texto = document.getElementById('texto')
    var texto2 = document.getElementById('texto2').innerHTML="x"
    pontuacao.style.display='none'
    pontuacao.innerHTML=""
    texto.innerHTML ='Você perdeu'
    texto.style.display='grid'
    var btn = document.querySelector('.btn')
    btn.style.display = 'flex'
    if(btn == true){
        atualizacao()

    }
}
function atualizacao(){
    setTimeout(function() {
        // Atualize a página
        window.location.reload()
      }, 5000)
    }
function score (){
    var pontuacao = document.getElementById('.pontuacao').innerHTML = 'teste'
    
}


