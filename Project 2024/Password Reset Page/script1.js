document.getElementById('reset-password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    console.log(`Email: ${email}`);
    // Add your password reset logic here
});