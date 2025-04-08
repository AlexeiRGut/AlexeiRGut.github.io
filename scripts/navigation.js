window.addEventListener("scroll", function () {
  const header = document.getElementsByTagName("header")[0];
  let scrolled = window.scrollY > 0;

  if (scrolled) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const menu = document.getElementById("menu");
const headerUl = document.getElementById("headerUl");

function showHideUl() {
  if (menu.classList.contains("clickedMenu")) {
    menu.classList.remove("clickedMenu");
  } else {
    menu.classList.add("clickedMenu");
  }

  if (headerUl.classList.contains("hiddenUl")) {
    headerUl.classList.remove("hiddenUl");
    headerUl.classList.add("displayedUl");
  } else {
    headerUl.classList.remove("displayedUl");
    headerUl.classList.add("hiddenUl");
  }
}

menu.addEventListener("click", showHideUl);

/* CERRAR MODALES */
const closeModal = document.getElementsByClassName("x");

Array.from(closeModal).forEach((cm) => {
  cm.addEventListener("click", function () {
    cm.parentElement.parentElement.classList.add("hiddenModal");
    document.body.style.overflow = "";
  });
});

/* ABRIR MODALES */
const courses = document.getElementsByClassName("hasModal");
const modals = document.getElementsByClassName("modal");

for (let course of courses) {
  course.addEventListener("click", () => {
    const targetId = course.dataset.modalTarget;
    const modal = document.getElementById(targetId);

    modal.classList.remove("hiddenModal");
    document.body.style.overflow = "hidden";
  });
}

const logo = document.getElementById("logo");
const navHome = document.getElementById("navHome");
const navProjects = document.getElementById("navProjects");
const navAbout = document.getElementById("navAbout");
const navContact = document.getElementById("navContact");

/* NAVEAGACIÓN: desplaza al usuario hasta la sección Presentación */
function movoToStart() {
  window.scroll({ top: 0, behavior: "smooth" });
}

logo.addEventListener("click", movoToStart);
navHome.addEventListener("click", movoToStart);

/* NAVEAGACIÓN: desplaza al usuario hasta la sección Sobre mí */
navAbout.addEventListener("click", function () {
  const aboutMe = document.getElementById("aboutMe");
  const yOffset = aboutMe.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top: yOffset, behavior: "smooth" });
});

// navProyectos.addEventListener('click', function(){
//     const proyectosSection = document.getElementById('proyectosSection');
//     const yOffset = proyectosSection.getBoundingClientRect().top + window.scrollY;
//     window.scrollTo({ top: yOffset, behavior: 'smooth' });
// })

navContact.addEventListener("click", function () {
  const contactoSection = document.getElementById("contact");
  const yOffset = contactoSection.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top: yOffset, behavior: "smooth" });
});

function copyTel() {
  const iconCopy = document.getElementById("iconCopyTel");
  navigator.clipboard
    .writeText("+34622922462")
    .then(() => {
      iconCopy.style.opacity = "0";
      setTimeout(() => {
        iconCopy.src = "images/webDesign/check.svg";
        iconCopy.classList.add("nice");
        iconCopy.style.opacity = "1";
      }, 200);
      setTimeout(() => {
        iconCopy.style.opacity = "0";
        setTimeout(() => {
          iconCopy.src = "images/webDesign/copy.svg";
          iconCopy.classList.remove("nice");
          iconCopy.style.opacity = "1";
        }, 200);
      }, 3000);
    })
    .catch(() => {
      iconCopy.style.opacity = "0";
      setTimeout(() => {
        iconCopy.src = "images/webDesign/close.svg";
        iconCopy.classList.add("ohh");
        iconCopy.style.opacity = "1";
      }, 200);
      icon;
      setTimeout(() => {
        iconCopy.style.opacity = "0";
        setTimeout(() => {
          iconCopy.src = "images/webDesign/copy.svg";
          iconCopy.classList.remove("ohh");
          iconCopy.style.opacity = "1";
        }, 200);
      }, 3000);
    });
}

function copyMail() {
  const iconCopy = document.getElementById("iconCopyMail");
  navigator.clipboard
    .writeText("alexeirojogutierrez@gmail.com")
    .then(() => {
      iconCopy.style.opacity = "0";
      setTimeout(() => {
        iconCopy.src = "images/webDesign/check.svg";
        iconCopy.classList.add("nice");
        iconCopy.style.opacity = "1";
      }, 200);
      setTimeout(() => {
        iconCopy.style.opacity = "0";
        setTimeout(() => {
          iconCopy.src = "images/webDesign/copy.svg";
          iconCopy.classList.remove("nice");
          iconCopy.style.opacity = "1";
        }, 200);
      }, 3000);
    })
    .catch(() => {
      iconCopy.style.opacity = "0";
      setTimeout(() => {
        iconCopy.src = "images/webDesign/close.svg";
        iconCopy.classList.add("ohh");
        iconCopy.style.opacity = "1";
      }, 200);
      icon;
      setTimeout(() => {
        iconCopy.style.opacity = "0";
        setTimeout(() => {
          iconCopy.src = "images/webDesign/copy.svg";
          iconCopy.classList.remove("ohh");
          iconCopy.style.opacity = "1";
        }, 200);
      }, 3000);
    });
}
