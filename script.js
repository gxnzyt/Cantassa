document.addEventListener('DOMContentLoaded', function() {
// Existing Testimonial Slider Code (as provided before)
const sliderTrack = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.testimonial');
let currentIndex = 0;

function moveSlider() {
sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
currentIndex = (currentIndex + 1) % slides.length;
moveSlider();
}

// Set interval to move to the next slide every 5 seconds
setInterval(nextSlide, 5000);

// Fade-in Functionality
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
threshold: 0.5 // Adjust this value to control when the fade-in effect triggers
};

const appearOnScroll = new IntersectionObserver(function(
entries,
appearOnScroll
) {
entries.forEach(entry => {
if (!entry.isIntersecting) {
return;
} else {
entry.target.classList.add('appear');
appearOnScroll.unobserve(entry.target);
}
});
},
appearOptions);

faders.forEach(fader => {
appearOnScroll.observe(fader);
});
});
