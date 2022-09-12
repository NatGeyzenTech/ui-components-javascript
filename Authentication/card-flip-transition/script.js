const loginButton = document.getElementById('login');
const createAccountButton = document.getElementById('createAccount');
const scene = document.querySelector('.scene');
const card = document.querySelector('.card');

[loginButton, createAccountButton].forEach(button => {
  button.addEventListener("click", () => {
    loginButton.classList.toggle("active");
    scene.classList.toggle("hasFlippedCard");
    card.classList.toggle("isFlipped");
  })
});