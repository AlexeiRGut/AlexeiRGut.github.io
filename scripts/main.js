const studies = document.getElementsByClassName('typeOfStudy')
const studiesList = document.getElementsByClassName('studiesList')

for(let i = 0; i < studies.length; i++) {
    studies[i].addEventListener('mouseover', function () {
        studiesList[i].classList.remove('hiddenList')
    })

    studies[i].addEventListener('mouseout', function () {
        studiesList[i].classList.add('hiddenList')
    })
}