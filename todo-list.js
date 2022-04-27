//Função responsável por adicionar item pelo evento de onkeypress no input

function adicionarItemPelaTecla(event){
  // Pegando o tpo da tecla pelo evento
   const tecla = event.key;

   //Verifcando se a tecla pressionada é o Enter
   if(tecla=== "Enter"){
  
    //Chamando a função responsável por adicionar item
   adicionarItem()
   }

  console.log("ENTROU NA FUNÇÃO PELA TECLA");
  console.log(event);

}

function adicionarItem() {

  const valorInput = document.getElementById('texto').value;

  // Pegando a tag UL do nosso HTML pelo id
  const minhaTagUL = document.getElementById('lista-de-tarefas');
 
  // Criando a tag LI com JavaScript
  const criarTagLI = document.createElement('li');

  criarTagLI.addEventListener('click', concluirTarefa);

  //Criando uma tag em negrito
  const tagRemover = `<i onclick="removerItem(event)" class="fa-solid fa-circle-minus"></i>`;

  criarTagLI.innerHTML = valorInput + tagRemover;

  // Adicionando a tal LI para nossa ul
  minhaTagUL.appendChild(criarTagLI);
}

function removerItem(event) {

  //Pegando a tag <i> dentro do nosso event
  const meuIcone = event.target;

  //Pegando a tag <i> através da miha tag <i> com propriedade parentElement
  const minhaLi = meuIcone.parentElement ;

  //Ecluindo a tag <li> com a função remove()
  minhaLi.remove();
}

function concluirTarefa (event){

  const minhaTagLi = event.target;

  minhaTagLi.className = "concluida";
}