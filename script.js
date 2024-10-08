// BUTTONS
const aboutBtn = document.getElementById("about-btn");
const shippingBtn = document.getElementById("shipping-return");
const sizeGuideBtn = document.getElementById("size-guide");

// MODALS
const aboutModal = document.getElementById('about-modal');
const shippingModal = document.getElementById('shipping-modal');
const sizeGuideModal = document.getElementById('size-guide-modal');

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
  shippingModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

shippingModal.addEventListener('click', function(event) {
  if (event.target.classList.contains('close')) {
    shippingModal.style.display = 'none';
    document.body.style.overflow = 'auto'; 
  }
});

sizeGuideBtn.addEventListener('click', function() {
  sizeGuideModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

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

// Slideshow logic
const shirts = {
  blue: ['blue-1.jpg', 'blue-2.jpg'],
  pink: ['pink-1.jpg', 'pink-2.jpg'],
  white: ['white-1.jpg', 'white-2.jpg'],
  lilac: ['lilac-1.jpg', 'lilac-2.jpg'],
  mint: ['mint-1.jpg', 'mint-2.jpg'],
  creamstripesnavy: ['creamstripesnavy-1.jpg', 'creamstripesnavy-2.jpg']
};

let currentColor = 'blue'; // Default color
let currentSlide = 0;
let allColors = Object.keys(shirts); // All color options
let colorIndex = 0; // Index for cycling through colors

const colorSelector = document.getElementById('color');

// Function to change the slideshow image and cycle through colors
function changeSlide(n) {
  const slides = shirts[currentColor];

  // Update the slide index
  if (n > 0) {
    currentSlide = (currentSlide + 1) % slides.length; // Move forward
  } else {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Move backward
  }

  // Change the image in the slideshow container
  const imgElement = document.querySelector('#slideshow-container .slide img');
  imgElement.src = slides[currentSlide];

  // If we reached the end of the images, switch to the next color
  if (currentSlide === 0 && n > 0) {
    colorIndex = (colorIndex + 1) % allColors.length; // Move to next color
    currentColor = allColors[colorIndex];
    currentSlide = 0; // Reset to first slide of the new color
    updateSlide();
  } else if (currentSlide === slides.length - 1 && n < 0) {
    // Handle reverse navigation correctly to switch color
    if (currentColor === allColors[0]) {
      // If at the first color and going backward, go to the last slide of the last color
      colorIndex = allColors.length - 1; // Move to last color
      currentColor = allColors[colorIndex];
      currentSlide = shirts[currentColor].length - 1; // Go to the last slide of the new color
    } else {
      colorIndex = (colorIndex - 1 + allColors.length) % allColors.length; // Move to previous color
      currentColor = allColors[colorIndex];
      currentSlide = shirts[currentColor].length - 1; // Go to the last slide of the new color
    }
    updateSlide();
  }

  // Update the color selector text
  updateColorSelector();
}

// Function to update the slide when the color changes
function changeColor() {
  currentColor = colorSelector.value;
  currentSlide = 0;
  updateSlide();
}

// Function to update the slide image and selector text
function updateSlide() {
  const imgElement = document.querySelector('#slideshow-container .slide img');
  imgElement.src = shirts[currentColor][currentSlide];
  updateColorSelector();
}

// Update the color selector text to reflect the current color
function updateColorSelector() {
  colorSelector.value = currentColor; // Update the selected option
}

// Initialize slideshow
showSlide(currentSlide);
colorSelector.addEventListener('change', changeColor);

// Show slide based on currentSlide index
function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
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

// Event listeners for slideshow arrows
document.querySelector('.prev').addEventListener('click', function() {
  changeSlide(-1);
});

document.querySelector('.next').addEventListener('click', function() {
  changeSlide(1);
});

// Swipe functionality for touchscreen devices
let startX;

const slideshowContainer = document.getElementById('slideshow-container');

slideshowContainer.addEventListener('touchstart', function(event) {
  startX = event.touches[0].clientX; // Store the initial touch position
});

slideshowContainer.addEventListener('touchmove', function(event) {
  const moveX = event.touches[0].clientX;
  const threshold = 50; // Minimum distance to consider a swipe

  if (startX - moveX > threshold) {
    changeSlide(1); // Swipe left
  } else if (moveX - startX > threshold) {
    changeSlide(-1); // Swipe right
  }
});

// Scroll to second section on first section click
document.addEventListener("DOMContentLoaded", function () {
  // Find the first section
  var firstSection = document.querySelector(".first-section");

  // Add click event listener to first section
  firstSection.addEventListener("click", function () {
    // Redirect to the second section
    window.location.href = "#second-section";
  });
});
