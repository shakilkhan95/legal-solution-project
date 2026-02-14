// Variables for menu toggle
const menuBar = document.getElementById("menu-bar");
const navBar = document.querySelector(".nav-container");
const navLinks = document.querySelectorAll('.nav-items');

// Menu Toggle function
function menuToggle(){
    navBar.classList.toggle('hidden');
}
//Toggling menu by clicking hamburger icon 
menuBar.onclick = menuToggle;
//toggling by every nav link
for(const navLink of navLinks){
    navLink.onclick = menuToggle;
}


//variables for faq section card details toggler
const plusIcon = document.getElementsByClassName('fa-plus');
const minusIcon = document.getElementsByClassName('fa-minus');
const cardDetails = document.getElementsByClassName('faq-card-details');
// Accessing to all Element by looping through them
for(let i = 0; i < plusIcon.length; i++){
    //function for show card details
    plusIcon[i].onclick = function(){
        minusIcon[i].style.display = 'block';
        plusIcon[i].style.display = 'none';
        cardDetails[i].style.display = 'block';
    }
    
    //function for hide card details
    minusIcon[i].onclick = function(){
        minusIcon[i].style.display = 'none';
        plusIcon[i].style.display = 'block';
        cardDetails[i].style.display = 'none';
    }
}