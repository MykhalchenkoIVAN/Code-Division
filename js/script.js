'use script'

const headerLngBtn = document.querySelector('.header_lng_btn');
const headerLng = document.querySelectorAll('.lng_txt');
const headerLngContent = document.querySelector('.header_lng_content');
// const inputEmail = document.querySelector('.input_email').value;
// console.log(inputEmail, typeof inputEmail);

const signInButton = document.getElementById('sign_in_button');




headerLngContent.classList.add('display_none');


headerLngBtn.onclick = function () {
    headerLngContent.classList.remove('display_none');
}

signInButton.onclick = function () {
    const inputEmail = document.querySelector('.input_email').value;
    const inputPassword = document.querySelector('.input_password').value;
    console.log(inputEmail);
    console.log(inputPassword);
}


for (let i = 0; i < headerLng.length; i++) {
    headerLng[i].addEventListener('click', function () {
        headerLngBtn.innerHTML = headerLng[i].textContent;
        headerLngContent.classList.add('display_none');
        console.log(headerLng[i].textContent);
    });
}
