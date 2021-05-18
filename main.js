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
    const link =  target.dataset.link;
    const menuActive = document.querySelector('.navbar__menu__item.active');
    
    menuActive.classList.remove('active');
    target.classList.add('active');
    navbarMenu.classList.remove('open');
    
    
    
    if(link == null){
        return;
    } else{
        scrollIntoView(link);
    }
    
    
});

//Navbar hamburger button for smartphon

const navbarHamburger = document.querySelector('.navbar__hamburger');
    navbarHamburger.addEventListener('click',() =>{
    
        navbarMenu.classList.toggle('open');
        
    })




const contactMe = document.querySelector('.home__contact');

contactMe.addEventListener('click',(event) => {
    const target = event.target;
    const link = target.dataset.link;
    
    
    scrollIntoView('#contact');

    

    
});
//home slowly opacity
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

//show up-arrow When I scrolling
const arrowUp = document.querySelector('.arrowUp');
document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight / 2){
        arrowUp.classList.add('visible');
    }
    else {
        arrowUp.classList.remove('visible');
    
    }
});
arrowUp.addEventListener('click',() => {
    scrollIntoView('#home');
});

//Project
const workBtn = document.querySelector('.work__categories');
const projectBox = document.querySelector('.work__projects');
const projectLink = document.querySelectorAll('.project');

workBtn.addEventListener('click', (event) => {
    const filter = event.target.parentNode.dataset.filter|| 
    event.target.dataset.filter;

    //project button set.
    const active = document.querySelector('.category__btn.active');
    active.classList.remove('active');
    event.target.parentNode.classList.add('active')
    ||event.target.classList.add('active');
    
    
    projectBox.classList.add('animation');
    setTimeout(() => {
        projectLink.forEach((project) =>{
            if ( filter === '*' || filter === project.dataset.type){
                project.classList.remove('invisible');
            } else{
                project.classList.add('invisible')
            }
        });

        projectBox.classList.remove('animation');
    }, 300);


    

});









//function
function scrollIntoView(selector){
    const scrollTo  = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}

