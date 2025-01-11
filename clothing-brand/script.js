// Handle Cookies
document.addEventListener('DOMContentLoaded', () => {
  const cookiePopup = document.getElementById('cookie-popup');
  const acceptButton = document.getElementById('accept-cookies');

  // Show cookie popup if not previously accepted
  if (!localStorage.getItem('cookiesAccepted')) {
    cookiePopup.classList.add('show');
  }

  // Accept cookies
  acceptButton.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookiePopup.classList.remove('show');
  });
});
