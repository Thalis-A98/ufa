const contVotos = document.getElementById('contVotos');
let contador = 0


function contadorVotos(){  
  contador = contador + 1
  contVotos.innerHTML = contador
  alert("Voto Computado!")  
}

function zerarVotos(){
  contador = 0
  contVotos.innerHTML = 0
}