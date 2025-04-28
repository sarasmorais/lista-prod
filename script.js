const produtos = {
    "Notebook": 3500,
    "Celular": 2500,
    "Fone de Ouvido": 300,
    "Monitor": 800
  };
  
  function mostrarProdutos() {
    const lista = document.getElementById('listaProdutos');
    lista.innerHTML = ""; 
    
    for (let item in produtos) {
      let li = document.createElement('li');
      li.textContent = `${item}: R$ ${produtos[item]}`;
      lista.appendChild(li);
    }
  }
  
  const botao = document.getElementById('mostrarProdutos');
  botao.addEventListener('click', mostrarProdutos);
  