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
const projectLink = document.querySelectorAll('.project');
console.log(projectLink)
workBtn.addEventListener('click', (event) => {
    const filter = event.target.parentNode.dataset.filter|| 
    event.target.dataset.filter;
 
    projectLink.forEach((project) =>{
        if ( filter === '*' || filter === project.dataset.type){
            project.classList.remove('invisible');
        } else{
            project.classList.add('invisible')
        }
    })
})





//function
function scrollIntoView(selector){
    const scrollTo  = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}

