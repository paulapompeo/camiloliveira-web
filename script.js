// BUTTONS
const aboutBtn = document.getElementById("about-btn")
const shippingBtn = document.getElementById("shipping-return")
const sizeGuideBtn = document.getElementById("size-guide")

// MODALS
const aboutModal = document.getElementById('about-modal')
const shippingModal = document.getElementById('shipping-modal')
const sizeGuideModal = document.getElementById('size-guide-modal')

aboutBtn.addEventListener('click', function() {
  aboutModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

aboutModal.addEventListener('click', function(event) {
  if (event.target.classList.contains('close')) {
    aboutModal.style.display = 'none';
    document.body.style.overflow = 'auto'; 
  }
});

shippingBtn.addEventListener('click', function() {
  shippingModal.style.display = 'block'
  document.body.style.overflow = 'hidden';
})

shippingModal.addEventListener('click', function(event) {
  if (event.target.classList.contains('close')) {
    shippingModal.style.display = 'none';
    document.body.style.overflow = 'auto'; 
  }
});

sizeGuideBtn.addEventListener('click', function() {
  sizeGuideModal.style.display = 'block'
  document.body.style.overflow = 'hidden';
})

sizeGuideModal.addEventListener('click', function(event) {
  if (event.target.classList.contains('close')) {
    sizeGuideModal.style.display = 'none';
    document.body.style.overflow = 'auto'; 
  }
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    aboutModal.style.display = 'none';
    shippingModal.style.display = 'none';
    sizeGuideModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const colorSelector = document.getElementById('color');

function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[currentSlide].style.display = 'block';
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

function changeColor() {
    const selectedColor = colorSelector.value;
    for (let i = 0; i < slides.length; i++) {
        slides[i].firstElementChild.src = `${selectedColor}-${i + 1}.png`;
    }
}

showSlide(currentSlide);
colorSelector.addEventListener('change', changeColor);
