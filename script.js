function sortearAgora() {
    const resultado = document.querySelector(".num-sorteado");
    const numMin = Math.ceil(document.querySelector(".num-min").value)
    const numMax = Math.floor(document.querySelector(".num-max").value)
    const numSorteado = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
    resultado.innerHTML = numSorteado;
}