// Cookie Consent Handler
document.addEventListener('DOMContentLoaded', () => {
    const acceptCookiesButton = document.getElementById('accept-cookies');
    if (acceptCookiesButton) {
        acceptCookiesButton.addEventListener('click', () => {
            document.cookie = "cookiesAccepted=true; path=/; max-age=31536000"; // 1 year
            window.location.href = "home.html";
        });
    }

    // Newsletter subscription handler
    const subscribeForm = document.getElementById('subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.querySelector('#email').value;
            alert(`Thank you for subscribing, ${email}!`);
            subscribeForm.reset();
        });
    }
});
