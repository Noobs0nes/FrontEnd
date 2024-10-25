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
    let percentExtra;
    if(valueExtra>0){
        percentExtra = valueExtra+'%';
    } else{
        percentExtra = '0%'
    }
    let percent = value +'%';
    inputVida.barra.setProperty('--VIDA-EXTRA-PERCENT', percentExtra)
    inputVida.barra.setProperty('--VIDA-ATUAL-PERCENT', percent)
}
