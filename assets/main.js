document.getElementById('hidden-eye').addEventListener('change', function() {
    var hiddenIcon = document.getElementById('hidden');
    var passwordInput = document.getElementById('password');
    
    if (this.checked) {
        hiddenIcon.style.display = 'none';
        passwordInput.type = 'text';
    } else {
        hiddenIcon.style.display = 'inline';
        passwordInput.type = 'password';
    }
});
