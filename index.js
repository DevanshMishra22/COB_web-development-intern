const user_con = document.querySelector('.user-container');
const sign_btn = document.querySelector('.signup-btn');
const login_btn = document.querySelector('.login-btn');

sign_btn.addEventListener('click', () => {
    user_con.classList.add('login-section--display')
})
login_btn.addEventListener('click', () => {
    user_con.classList.remove('login-section--display')
})