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

//home animation
let title = document.querySelector('.home__title');
let text = document.querySelector('.home__discription');
let contactMe = document.querySelector('.home__contact');
window.addEventListener('scroll',function(){
    let value = window.scrollY;
    if(value>100){
        title.style.animation='back 2s ease-out'
        text.style.animation='back 2s ease-out'
        contactMe.style.animation='back 2s ease-out'
    }
    else{
        title.style.animation='slide 2s ease-out'
        text.style.animation='slide 2s ease-out'
        contactMe.style.animation='slide 2s ease-out'
    }
})

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



//When navbar scroll, highlight

const sectionIds = [
    '#home',
    '#about', 
    '#skills', 
    '#work', 
    '#testimonials', 
    '#contact'];

const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id)=> document.querySelector(`[data-link="${id}"]`));

//select function
let selectedActive = navItems[0];
let selectedNavIndex =0;

function selectNavItem(select){
            selectedActive.classList.remove('active');
            selectedActive = select
            selectedActive.classList.add('active');
        
}
//Scroll function
function scrollIntoView(selector){
    const scrollTo  = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
    selectNavItem(navItems[sectionIds.indexOf(selector)])
}

const observerOption = {
    threshold:0.3,
}

const observerCallback = (entries,obsever)=>{
    entries.forEach((entry)=>{
        if (!entry.isIntersecting && entry.intersectionRatio > 0){
            const index = sectionIds.indexOf(`#${entry.target.id}`);
            
            if(entry.boundingClientRect.y <0) {
                selectedNavIndex = index + 1;

            }else { 
                selectedNavIndex = index - 1;
            }
            
            

        };
    });
};

    
const observer = new IntersectionObserver(observerCallback, observerOption);
sections.forEach((section) => {observer.observe(section)});

window.addEventListener('wheel',() => {
    
    selectNavItem(navItems[selectedNavIndex]);
})




