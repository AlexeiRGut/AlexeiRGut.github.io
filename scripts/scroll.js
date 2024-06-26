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

    if(menu.classList.contains('menuClicked')) {
        menu.classList.remove('menuClicked')
    }
    else {
        menu.classList.add('menuClicked')
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
// menu.addEventListener('focusout', showHideUl)

const navInicio = document.getElementById('navInicio')
const navProyectos = document.getElementById('navProyectos')
const navSobreMi = document.getElementById('navSobreMi')
const navContacto = document.getElementById('navContacto')





navInicio.addEventListener('click', function(){

    window.scroll({ top: 0, behavior: "smooth" })
})

navSobreMi.addEventListener('click', function() {
    const sobreMiSection = document.getElementById('sobreMiSection');
    const yOffset = sobreMiSection.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: yOffset, behavior: 'smooth' });
});


// navProyectos.addEventListener('click', function(){
//     const proyectosSection = document.getElementById('proyectosSection');
//     const yOffset = proyectosSection.getBoundingClientRect().top + window.scrollY;
//     window.scrollTo({ top: yOffset, behavior: 'smooth' });
// })

// navContacto.addEventListener('click', function(){
//     const contactoSection = document.getElementById('contactoSection');
//     const yOffset = contactoSection.getBoundingClientRect().top + window.scrollY;
//     window.scrollTo({ top: yOffset, behavior: 'smooth' });
// })
