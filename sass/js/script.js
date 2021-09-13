const hamBtn = document.querySelector('#hamBtn');
const navLinks = document.querySelector('#nav-link');

hamBtn.addEventListener("click", function() {

  if (navLinks.classList.contains('navbar__links__open')) {
    navLinks.classList.remove('navbar__links__open')
  } else {
    navLinks.classList.add('navbar__links__open')
  }
  });