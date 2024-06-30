window.addEventListener('scroll', function() {
    const header = document.getElementsByTagName('header')[0];
    let scrolled = window.scrollY > 0;
    
    if (scrolled) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});






const menu = document.getElementById('menu')
const headerUl = document.getElementById('headerUl')

function showHideUl() {

    if(menu.classList.contains('clickedMenu')) {
        menu.classList.remove('clickedMenu')
    }
    else {
        menu.classList.add('clickedMenu')
    }

    if (headerUl.classList.contains('hiddenUl')) {
        headerUl.classList.remove('hiddenUl');
        headerUl.classList.add('displayedUl');
    }
    else {
        headerUl.classList.remove('displayedUl');
        headerUl.classList.add('hiddenUl');
    }
}

menu.addEventListener('click', showHideUl)






const logo = document.getElementById('logo')
const navHome = document.getElementById('navHome')
const navProjects = document.getElementById('navProjects')
const navAbout = document.getElementById('navAbout')
const navContact = document.getElementById('navContact')

function movoToStart() {
    window.scroll({ top: 0, behavior: "smooth" })
}

logo.addEventListener('click', movoToStart)
navHome.addEventListener('click', movoToStart)






navAbout.addEventListener('click', function() {
    const aboutMe = document.getElementById('aboutMe');
    const yOffset = aboutMe.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: yOffset, behavior: 'smooth' });
});


// navProyectos.addEventListener('click', function(){
//     const proyectosSection = document.getElementById('proyectosSection');
//     const yOffset = proyectosSection.getBoundingClientRect().top + window.scrollY;
//     window.scrollTo({ top: yOffset, behavior: 'smooth' });
// })

// navContact.addEventListener('click', function(){
//     const contactoSection = document.getElementById('contactoSection');
//     const yOffset = contactoSection.getBoundingClientRect().top + window.scrollY;
//     window.scrollTo({ top: yOffset, behavior: 'smooth' });
// })