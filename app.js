
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
var bar1 = document.getElementsByClassName('bar1');
var bar1 = document.getElementsByClassName('bar2');
var bar1 = document.getElementsByClassName('bar3');
var section1 = document.getElementById('section1');
var head1 = document.getElementById('head-link');
head1.addEventListener("mouseenter",() => {
    section1.style.backgroundImage = "url('assets/adventurous.gif')";
});
head1.addEventListener("mouseleave",() => {
    section1.style.backgroundImage = "none";
});
window.scroll = "smooth";


