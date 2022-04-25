function adicionarItemPelaTecla(event){
   const tecla = event.key;

   if(tecla=== "Enter"){
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