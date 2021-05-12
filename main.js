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
});

//When I touch navbar, move sclrolling

const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', (event) => {
    const target= event.target;
    const link =  target.dataset.link
    if(link == null){
        return;
    } else{
        scrollIntoView(link);
    }
    
    
});

const contactMe = document.querySelector('.home__contact');
contactMe.addEventListener('click',(event) => {
    const target = event.target;
    const link = target.dataset.link;
    scrollIntoView('#contact');

    
});

function scrollIntoView(selector){
    const scrollTo  = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}

