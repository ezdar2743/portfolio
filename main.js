'use strict'
//Navbar scroll 
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll',() =>{
    
    if(window.scrollY > navbarHeight){
        navbar.classList.add("navbar__dark")
    }else{
        navbar.classList.remove("navbar__dark")
    }
})