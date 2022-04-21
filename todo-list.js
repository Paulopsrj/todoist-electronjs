function adicionarItem() {

  const valorInput = "Minha primeira tarefa";

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