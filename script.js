// Example: Add a simple alert when the contact form is submitted
const contactForm = document.querySelector('.contact-form form');

if (contactForm) {
contactForm.addEventListener('submit', function(event) {
event.preventDefault();
alert('Thanks for your message! We'll be in touch soon.');
});
}