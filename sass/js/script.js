const hamBtn = document.querySelector('#hamBtn');
const navLinks = document.querySelector('#nav-link');

hamBtn.addEventListener("click", function() {
  navLinks.classList.add('navbar__links__open');
  });