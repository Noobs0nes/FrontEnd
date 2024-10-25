const inputVida = {
    "atual": document.getElementById("vidaAtual"),
    "total": document.getElementById("vidaTotal"),
    "barra": document.documentElement.style
};

inputVida.atual.onchange = () => {
    let vidaAtual = inputVida.atual.innerText;
    let vidaTotal = inputVida.total.innerText;
    let value = (Number(vidaAtual)/Number(vidaTotal))*100;
    let percent = value +'%';
    inputVida.barra.setProperty('--VIDA-ATUAL-PERCENT', percent)
}
