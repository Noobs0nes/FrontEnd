const inputVida = {
    "atual": document.getElementById("vidaAtual"),
    "total": document.getElementById("vidaTotal"),
    "barra": document.documentElement.style
};

inputVida.atual.onchange = () => {
    let vidaAtual = inputVida.atual.value;
    let vidaTotal = inputVida.total.value;
    let value = (Number(vidaAtual)/Number(vidaTotal))*100;
    let valueExtra = (value-100);
    if(value>100){
        value = 100
    } else if(value<0){
        value = 0
    }
    if(valueExtra<0){
        valueExtra = 0
    }

    let percent = value +'%';
    let percentExtra = valueExtra + '%';
    inputVida.barra.setProperty('--VIDA-EXTRA-PERCENT', percentExtra)
    inputVida.barra.setProperty('--VIDA-ATUAL-PERCENT', percent)
}
