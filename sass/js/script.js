const hamBtn = document.querySelector('#hamBtn');
const navLinks = document.querySelector('#nav-link');

hamBtn.addEventListener("click", function() {

  if (navLinks.classList.contains('navbar__links__open')) {
    navLinks.classList.remove('navbar__links__open');
  } else {
    navLinks.classList.add('navbar__links__open');
  }
  });

window.addEventListener("resize", () => {
    if (window.innerWidth >= 786) {
      navLinks.classList.remove('navbar__links__open');
    }
});


$('.button').click(function() {
	$(this).closest('.accordian__section').siblings().find('.panel').slideUp(400);
	$(this).closest('.accordian__section').find('.panel').slideToggle(400);
	return false;
});