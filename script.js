// BUTTONS
const contactBtn = document.getElementById("contact-btn")
const aboutBtn = document.getElementById("about-btn")
const shippingBtn = document.getElementById("shipping-return")
const sizeGuideBtn = document.getElementById("size-guide")

// MODALS
const aboutModal = document.getElementById('about-modal')
const shippingModal = document.getElementById('shipping-modal')
const sizeGuideModal = document.getElementById('size-guide-modal')

contactBtn.addEventListener('click', function() {
  console.log("Botão Esquerda clicado!");
});

aboutBtn.addEventListener('click', function() {
  aboutModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

aboutModal.addEventListener('click', function(event) {
  if (event.target.classList.contains('fechar')) {
    aboutModal.style.display = 'none';
    document.body.style.overflow = 'auto'; 
  }
});

shippingBtn.addEventListener('click', function() {
  shippingModal.style.display = 'block'
  document.body.style.overflow = 'hidden';
})

shippingModal.addEventListener('click', function(event) {
  if (event.target.classList.contains('fechar')) {
    shippingModal.style.display = 'none';
    document.body.style.overflow = 'auto'; 
  }
});

sizeGuideBtn.addEventListener('click', function() {
  sizeGuideModal.style.display = 'block'
  document.body.style.overflow = 'hidden';
})

sizeGuideModal.addEventListener('click', function(event) {
  if (event.target.classList.contains('fechar')) {
    sizeGuideModal.style.display = 'none';
    document.body.style.overflow = 'auto'; 
  }
});


