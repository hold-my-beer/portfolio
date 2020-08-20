const navButton = document.querySelector('.nav-button');
const nav = document.querySelector('.nav');

const toggleMenu = () => {
  navButton.classList.toggle('open');
  nav.classList.toggle('show');
};

navButton.addEventListener('click', toggleMenu);
