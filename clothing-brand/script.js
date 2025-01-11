document.addEventListener('DOMContentLoaded', () => 
  const cookiePopup = document.getElementById('cookie-popup');
  const acceptButton = document.getElementById('accept-cookies');

  if (!localStorage.getItem('cookiesAccepted')) {
    cookiePopup.classList.add('show');
  }

  acceptButton.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookiePopup.classList.remove('show');
  });
});
