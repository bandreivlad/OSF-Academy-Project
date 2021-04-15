// Navigation Menu Mobile

const navOpenButton = document.getElementById('open-btn');
const navCloseButton = document.getElementById('close-btn');
const services = document.getElementsByClassName('first-level-item')[0];
const sale = document.getElementsByClassName('second-level-item')[1];

const firstLevel = document.getElementById('first-level');
const secondLevel = document.getElementById('second-level');
const thirdLevel = document.getElementById('third-level');

const firstArrow = document.getElementById('first-arrow');
const secondArrow = document.getElementById('second-arrow');

let onPage = true;

let openSecond = false;
let openThird = false;
let angleSecond = 0;
let angleThird = 0;

if (window.screen.width < 768) {
    const openMenu = () => {
        firstLevel.style.display = 'inline-flex';
        secondLevel.style.display = 'none';
        thirdLevel.style.display = 'none';
        navOpenButton.style.display = 'none';
        navCloseButton.style.display = 'block';
    }
    
    const openServices = () => {
        angleSecond += 180;
        secondLevel.style.display = 'inline-flex';
        thirdLevel.style.display = 'none';
        firstArrow.style.transform = `rotate(${angleSecond}deg)`;
        openSecond = true;
    }
    
    const closeServices = () => {
        angleSecond += 180;
        secondLevel.style.display = 'none';
        thirdLevel.style.display = 'none';
        firstArrow.style.transform = `rotate(${angleSecond}deg)`;
        openSecond = false;
    }
    
    const openSale = () => {
        angleThird += 180;
        secondLevel.style.display = 'inline-flex';
        thirdLevel.style.display = 'inline-flex';
        secondArrow.style.transform = `rotate(${angleThird}deg)`;
        openThird = true;
    }
    
    const closeSale = () => {
        angleThird += 180;
        secondLevel.style.display = 'inline-flex';
        thirdLevel.style.display = 'none';
        secondArrow.style.transform = `rotate(${angleThird}deg)`;
        openThird = false;
    }
    
    const verifySaleState = () => {
        if (openThird === false) {
            openSale();
        } else if (openThird === true) {
            closeSale();
        }
    }
    
    const verifyServicesState = () => {
        if (openSecond === false) {
            openServices();
        } else if (openSecond === true) {
            if (openThird) {
                closeSale();
            }
            closeServices();
        }
    }
    
    const closeMenu = () => {
        if (openSecond) {
            closeServices();
        }
        if (openThird) {
            closeSale();
        }
        firstLevel.style.display = 'none';
        navCloseButton.style.display = 'none';
        navOpenButton.style.display = 'block';
    }
    
    navOpenButton.addEventListener('click', openMenu);
    services.addEventListener('click', verifyServicesState);
    sale.addEventListener('click', verifySaleState);
    navCloseButton.addEventListener('click', closeMenu);
}