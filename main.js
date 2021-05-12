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

//When I touch navbar, move sclrolling

const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', (event) => {
    const target= event.target;
    const link =  target.dataset.link
    if(link == null){
        return;
    } else{
        console.log(event.target.dataset.link)
    }
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior : 'smooth' });
    
});
