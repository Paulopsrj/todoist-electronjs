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
 // Criango a tag LI com JavaScript
  const criarTagLI = document.createElement('li');

  criarTagLI.innerText = valorInput;

  // Adicionando a tal LI para nossa ul
  minhaTagUL.appendChild(criarTagLI);

  console.log(criarTagLI);

  console.log( "ENTROU NA FUNÇÃO ADICIONAR ITEM" );
}