function sortearAgora() {
    const numMin = Math.ceil(document.querySelector(".num-min").value);
    const numMax = Math.floor(document.querySelector(".num-max").value);
  if (numMax > numMin) {
    const resultado = document.querySelector(".num-sorteado");
    
    const numSorteado =
      Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
    resultado.innerHTML = numSorteado;
  } else {
    alert("O número máximo deve ser MAIOR que o número mínimo.");
  }
}
