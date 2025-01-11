// Script to handle cookies and navigation
document.addEventListener('DOMContentLoaded', () => {
    const acceptCookiesButton = document.getElementById('accept-cookies');
    if (acceptCookiesButton) {
        acceptCookiesButton.addEventListener('click', () => {
            // Set a cookie to remember the user's consent
            document.cookie = "cookiesAccepted=true; path=/; max-age=31536000"; // 1 year expiration
            // Redirect to home page
            window.location.href = "home.html";
        });
    }
});
