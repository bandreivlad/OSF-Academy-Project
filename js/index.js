// Navigation Menu Mobile

const navOpenButton = document.getElementById('open-btn');
const navCloseButton = document.getElementById('close-btn');
const services = document.getElementsByClassName('first-level-item')[0];
const prodCat = document.getElementsByClassName('second-level-item')[0];
const sale = document.getElementsByClassName('second-level-item')[1];

const firstLevel = document.getElementById('first-level');
const secondLevel = document.getElementById('second-level');
const thirdLevelFirst = document.getElementById ('third-level-first');
const thirdLevelSecond = document.getElementById('third-level-second');

const firstArrow = document.getElementById('first-arrow');
const secondArrow = document.getElementById('second-arrow');
const thirdArrow = document.getElementById('third-arrow');

let openSecond = false;
let openThirdFirst = false;
let openThirdSecond = false;
let angleFirst = 0;
let angleSecond = 0;
let angleThird = 0;

if (window.screen.width < 768) {
    const openMenu = () => {
        firstLevel.style.display = 'inline-flex';
        secondLevel.style.display = 'none';
        thirdLevelFirst.style.display = 'none';
        thirdLevelSecond.style.display = 'none';
        navOpenButton.style.display = 'none';
        navCloseButton.style.display = 'block';
    }
    
    const openServices = () => {
        angleFirst += 180;
        secondLevel.style.display = 'inline-flex';
        thirdLevelFirst.style.display = 'none';
        thirdLevelSecond.style.display = 'none';
        firstArrow.style.transform = `rotate(${angleFirst}deg)`;
        openSecond = true;
    }
    
    const closeServices = () => {
        angleFirst += 180;
        secondLevel.style.display = 'none';
        thirdLevelSecond.style.display = 'none';
        firstArrow.style.transform = `rotate(${angleFirst}deg)`;
        openSecond = false;
    }

    const openProdCat = () => {
        angleSecond += 180;
        secondLevel.style.display = 'inline-flex';
        thirdLevelFirst.style.display = 'inline-flex';
        secondArrow.style.transform = `rotate(${angleSecond}deg)`;
        openThirdFirst = true;
    }

    const closeProdCat = () => {
        angleSecond += 180;
        secondLevel.style.display = 'inline-flex';
        thirdLevelFirst.style.display = 'none';
        secondArrow.style.transform = `rotate(${angleSecond}deg)`;
        openThirdFirst = false;
    }
    
    const openSale = () => {
        angleThird += 180;
        secondLevel.style.display = 'inline-flex';
        thirdLevelSecond.style.display = 'inline-flex';
        thirdArrow.style.transform = `rotate(${angleThird}deg)`;
        openThirdSecond = true;
    }
    
    const closeSale = () => {
        angleThird += 180;
        secondLevel.style.display = 'inline-flex';
        thirdLevelSecond.style.display = 'none';
        thirdArrow.style.transform = `rotate(${angleThird}deg)`;
        openThirdSecond = false;
    }

    const verifyProdCatState = () => {
        if(openThirdFirst === false) {
            openProdCat();
        } else if (openThirdFirst === true) {
            closeProdCat();
        }
    }
    
    const verifySaleState = () => {
        if (openThirdSecond === false) {
            openSale();
        } else if (openThirdSecond === true) {
            closeSale();
        }
    }
    
    const verifyServicesState = () => {
        if (openSecond === false) {
            openServices();
        } else if (openSecond === true) {
            if (openThirdFirst) {
                closeProdCat();
            }
            if (openThirdSecond) {
                closeSale();
            }
            closeServices();
        }
    }
    
    const closeMenu = () => {
        if (openSecond) {
            closeServices();
        }
        if (openThirdFirst) {
            closeProdCat();
        }
        if (openThirdSecond) {
            closeSale();
        }
        firstLevel.style.display = 'none';
        navCloseButton.style.display = 'none';
        navOpenButton.style.display = 'block';
    }
    
    navOpenButton.addEventListener('click', openMenu);
    services.addEventListener('click', verifyServicesState);
    prodCat.addEventListener('click', verifyProdCatState);
    sale.addEventListener('click', verifySaleState);
    navCloseButton.addEventListener('click', closeMenu);
}

// Slider carousel

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}