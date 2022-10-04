'use script'
const signInButton = document.getElementById('sign_in_button');



signInButton.onclick = function () {
    const inputEmail = document.querySelector('.input_email').value;
    const inputPassword = document.querySelector('.input_password').value;
    console.log(inputEmail);
    console.log(inputPassword);
}

