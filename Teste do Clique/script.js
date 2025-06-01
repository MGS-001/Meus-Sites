let cx = document.querySelector("div#caixa")
cx.addEventListener('click', clicou)
let n = 0

function clicou(){
    cx.innerHTML = `Você Clicou ${++n} Vezes`
    cx.style.background = 'yellow'
}