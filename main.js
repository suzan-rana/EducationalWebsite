const menuBtn = document.getElementById('menu');
const navBar = document.getElementById('nav--list');
const burgerOne = document.getElementsByClassName('bars')[0];
const burgerTwo = document.getElementsByClassName('bars')[1];

menuBtn.addEventListener("click", () => {
    navBar.classList.toggle('active');
    if( navBar.classList.contains('active') ) {
        burgerOne.classList.add('black')
        burgerTwo.classList.add('black')
    } else {
        burgerOne.classList.remove('black')
        burgerTwo.classList.remove('black')

    }
})