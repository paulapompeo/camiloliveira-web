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
  charcoal: ['charcoal_1.jpg', 'charcoal_2.jpg'],
  blue_squares: ['blue_squares_1.jpg', 'blue_squares_2.jpg'],
  sage: ['sage_1.jpg', 'sage_2.jpg'],
  sand_squares: ['sand_squares_1.jpg', 'sand_squares_2.jpg'],
  white_stripes: ['white_stripes_1.jpg', 'white_stripes_2.jpg'],
  powder: ['powder_1.jpg', 'powder_2.jpg'],
};

let currentColor = 'charcoal'; // Default color
let currentSlide = 0;
let allColors = Object.keys(shirts); // All color options
let colorIndex = 0; // Index for cycling through colors

const colorSelector = document.getElementById('color');

// Function to change the slideshow image and cycle through colors
function changeSlide(n) {
  const slides = shirts[currentColor];

  // Update the slide index
  currentSlide = (currentSlide + n + slides.length) % slides.length;

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
let touchStartX = 0;
let isSwiping = false; // Flag to prevent multiple swipes during an ongoing swipe
const swipeThreshold = 50; // Minimum distance to consider a swipe
const swipeCooldown = 300; // Cooldown period in milliseconds after a swipe
let lastSwipeTime = 0; // Track the time of the last swipe

const slideshowContainer = document.getElementById('slideshow-container');

slideshowContainer.addEventListener('touchstart', function(event) {
  if (isSwiping) return; // Prevent swiping if already in progress
  touchStartX = event.touches[0].clientX; // Store the initial touch position
});

slideshowContainer.addEventListener('touchmove', function(event) {
  if (isSwiping) return; // Prevent swiping if already in progress
  const moveX = event.touches[0].clientX;

  if (Math.abs(touchStartX - moveX) > swipeThreshold) {
    isSwiping = true; // Mark as swiping
    const swipeDirection = touchStartX - moveX > 0 ? 1 : -1; // Determine swipe direction
    const currentTime = Date.now();

    // Check if enough time has passed since the last swipe
    if (currentTime - lastSwipeTime >= swipeCooldown) {
      changeSlide(swipeDirection); // Change slide based on swipe direction
      lastSwipeTime = currentTime; // Update the last swipe time
    }
    
    // Reset the flag to allow new swipes after the move
    setTimeout(() => {
      isSwiping = false; // Reset swiping flag after a short delay
    }, swipeCooldown);
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
