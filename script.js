const menuBar = document.getElementById("menu-bar");
const navBar = document.querySelector(".nav-container");
const navLinks = document.querySelectorAll('.nav-items');

function menuToggle(){
    navBar.classList.toggle('hidden');
}
menuBar.addEventListener('click', menuToggle);
navLinks.forEach(link => {
    link.onclick = menuToggle;
});
