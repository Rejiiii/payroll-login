document.addEventListener('DOMContentLoaded', function () {
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function () {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            const icon = this.querySelector('img');
            if (type === 'password') {
                icon.src = './src/eye.png';
            } else {
                icon.src = './src/hidden.png'; 
            }
        });
    }
    
    const loginButton = document.getElementById('loginButton');
    if (loginButton) {
        loginButton.addEventListener('click', function (event) {
            event.preventDefault();
            alert('Login button clicked');
        });
    }
    sdf
});
