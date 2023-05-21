const personagem = document.querySelector("#personagem");
const quadrado = document.querySelector("#quadrado");
const quadrado2 = document.querySelector("#quadrado2");
var btn = document.querySelector(".btn");
let pontuacao = document.querySelector("#pontuacao");
let pontos = 0;

const jump = () => {
  personagem.classList.add("animar");
  setTimeout(() => {
    personagem.classList.remove("animar");
  }, 600);
};
window.getComputedStyle(quadrado).getPropertyValue("jump");
document.addEventListener("keydown", jump);

var testarColisao = setInterval(function () {
  var LocalizacaoPersonagem = parseInt(
    window.getComputedStyle(personagem).getPropertyValue("top")
  );

  var LocalizacaoQuadrado = parseInt(
    window.getComputedStyle(quadrado).getPropertyValue("left")
  );

  var LocalizacaoQuadrad2 = parseInt(
    window.getComputedStyle(quadrado2).getPropertyValue("left")
  );

  if (
    (LocalizacaoQuadrado < 20 &&LocalizacaoQuadrado > 0 && LocalizacaoPersonagem >= 300) ||
    LocalizacaoPersonagem >= 300 && LocalizacaoQuadrad2 < 20&& LocalizacaoQuadrad2 >0 ||LocalizacaoQuadrado < 20 &&LocalizacaoQuadrado > 0 && LocalizacaoPersonagem >= 280){
    perdeu();
  }
  else {

            pontos = pontos+1
            pontuacao.innerHTML = pontos
            console.log(pontos)

            if(pontos>1000){
            fase2()
            }
          }
}, 10);

function perdeu() {
  quadrado.style.animation = "none";
  personagem.style.display = "none";
  quadrado2.style.display = "none";
  var texto = document.getElementById("texto");
  var texto2 = document.getElementById("texto2");
  texto2.innerHTML = "x";
  pontuacao.style.display = "none";
  texto.innerHTML = "Você perdeu";
  texto.style.display = "grid";
  btn.style.display = "grid";

  if (btn == true) {
    atualizacao();
  }
}
function atualizacao() {
  setTimeout(function () {
    // Atualize a página
    window.location.reload();
  }, 5000);
}
function fase2(){
    quadrado2.style.display='grid' 

}