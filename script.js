const contactBtn = document.getElementById("contact-btn")
const aboutBtn = document.getElementById("about-btn")
const modal = document.getElementById('modal');

// Adiciona um evento de clique para o botão esquerdo
contactBtn.addEventListener('click', function() {
  console.log("Botão Esquerda clicado!");
  
});

// Adiciona um evento de clique para o botão direito
aboutBtn.addEventListener('click', function() {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

modal.addEventListener('click', function(event) {
  if (event.target.classList.contains('fechar')) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; 
  }
});
