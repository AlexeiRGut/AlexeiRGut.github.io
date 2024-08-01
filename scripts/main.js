// const studies = document.getElementsByClassName('typeOfStudy')
// const studiesList = document.getElementsByClassName('studiesList')

// for(let i = 0; i < studies.length; i++) {

//     studies[i].addEventListener('click', function () {
//         studiesList[i].classList.toggle('hiddenList')
//     })

// }









const studies = document.getElementsByClassName('typeOfStudy');
const studiesList = document.getElementsByClassName('studiesList');

for (let i = 0; i < studies.length; i++) {
    studies[i].addEventListener('click', function (event) {
        // Toggle la lista de estudios correspondiente
        studiesList[i].classList.toggle('hiddenList');
        
        // Prevenir la propagación del evento para que no afecte a los elementos hijos
        event.stopPropagation();
    });
    
    // Agregar event listener a los elementos hijos para que no cierren la lista
    let childElements = studiesList[i].getElementsByTagName('li');
    for (let j = 0; j < childElements.length; j++) {
        childElements[j].addEventListener('click', function (event) {
            event.stopPropagation();
        });
    }
}
