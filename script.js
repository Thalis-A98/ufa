const atletas = [
  {nome:'Alirio',id:'alirio',count:0},
  {nome:'Bruno',id:'bruno',count:0},
  {nome:'Celio',id:'celio',count:0},
  {nome:'Claudio ',id:'claudio',count:0},
  {nome:'Daniel',id:'daniel',count:0},
  {nome:'Dario',id:'dario',count:0},
  {nome:'Elias',id:'elias',count:0},
  {nome:'Geovane',id:'geovane',count:0},
  {nome:'Giovanni',id:'giovanni',count:0},
  {nome:'Guilherme',id:'guilherme',count:0},
  {nome:'Hedel',id:'hedel',count:0},
  {nome:'Helder',id:'helder',count:0},
  {nome:'Jose Araújo',id:'jose',count:0},
  {nome:'Juscilei',id:'juscilei',count:0},
  {nome:'Lucas',id:'lucas',count:0},
  {nome:'Lucio',id:'lucio',count:0},
  {nome:'Manduca',id:'manduca',count:0},
  {nome:'Márcio',id:'márcio',count:0},
  {nome:'Mauro',id:'mauro',count:0},
  {nome:'Natan',id:'natan',count:0},
  {nome:'Ramon',id:'ramon',count:0},
  {nome:'Romeu',id:'romeu',count:0},
  {nome:'Rubsom',id:'rubsom',count:0},
  {nome:'Thalis',id:'thalis',count:0},
  {nome:'Vitor',id:'vitor',count:0},
]

function rederButtons(){
  const atletasContainer = document.getElementById('container')
  atletasContainer.innerHTML = atletas.map(atleta =>
    `    
     <div class="containerAtleta">
      <button class="atletas" id="${atleta.id}" onclick="contadorVotos('${atleta.id}')">${atleta.nome}</button>
      <div class="contAltetas " id='${atleta.id}'></div>
    </div>
    `
  ).join('');
}
function contadorVotos(idAtleta){
  const atleta = atletas.find(p => p.id === idAtleta);
  if (atleta) {
      atleta.count += 1;
      atualizarPlacar(idAtleta)
  }
}
function atualizarPlacar(idAtleta){
  const atleta = atletas.find(p => p.id === idAtleta);
  const placar = document.querySelectorAll(`div#${idAtleta}`)
  placar.forEach(item =>{      
    item.innerHTML = `<p>${atleta.count}</p>`
  })
}

function renderPlacar(){
  // Seleciona todas as divs com a classe 'contAltetas'
  const contAltetas = document.querySelectorAll('.contAltetas');    
  // Itera sobre todos os elementos selecionados e adiciona a classe 'visible'
  contAltetas.forEach(item => {
    item.classList.add('visible');
  });  
}
function zerarVotos(){
  atletas.map(atleta => {
    return { ...atleta, count: 0 };
     // Retorna um novo objeto com a pontuação zerada
  });
  const contAltetas = document.querySelectorAll('.contAltetas');
  contAltetas.forEach(item => {
    item.classList.remove('visible');
  });
}

rederButtons()