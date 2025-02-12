let signUpBtn = document.querySelector('.signupbtn');
let signInBtn = document.querySelector('.signinbtn');
let nameField = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let text = document.querySelector('.text');
let form = document.querySelector('form');
let passwordInput = document.querySelector('#passwordInput');
let togglePassword = document.querySelector('#togglePassword');

signInBtn.addEventListener('click', () => {
    nameField.style.maxHeight = '0';
    title.innerHTML = 'Sign In';
    text.innerHTML = 'Last Password';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)';
});

signUpBtn.addEventListener('click', () => {
    nameField.style.maxHeight = '60px';
    title.innerHTML = 'Sign Up';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.transform = 'translateX(0px)';
});

// Toggle password visibility
togglePassword.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePassword.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        togglePassword.classList.replace('fa-eye-slash', 'fa-eye');
    }
});

// Validate password length when the form is submitted
form.addEventListener('submit', (e) => {
    if (passwordInput.value.length < 8) {
        alert("Password must be at least 8 characters long.");
        e.preventDefault(); // Prevent form submission if password is too short
    }
});
