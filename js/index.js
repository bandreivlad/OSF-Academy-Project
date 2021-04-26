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

// Footer Menu Mobile
const contact = document.getElementsByClassName('footer-list')[0];
const categories = document.getElementsByClassName('footer-list')[1];
const about = document.getElementsByClassName('footer-list')[2];

const contactContent = document.getElementsByClassName('footer-contact-content')[0];
const categoriesContent = document.getElementsByClassName('footer-categories-content')[0];
const aboutContent = document.getElementsByClassName('footer-about-content')[0];

const firstFooterArrow = document.getElementById('first-footer-arrow');
const secondFooterArrow = document.getElementById('second-footer-arrow');
const thirdFooterArrow = document.getElementById('third-footer-arrow');

let angleFooterFirst = 180;
let angleFooterSecond = 180;
let angleFooterThird = 180;

// Functionality for mobile menus
if (window.screen.width < 768) {
    // Header
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

    // Footer
    const toggleContact = () => {
        if(contactContent.style.display === 'none') {
            angleFooterFirst += 180;
            firstFooterArrow.style.transform = `rotate(${angleFooterFirst}deg)`;
            contactContent.style.display = 'block';
        } else {
            angleFooterFirst += 180;
            contactContent.style.display = 'none';
            firstFooterArrow.style.transform = `rotate(${angleFooterFirst}deg)`;
        }
    }

    const toggleCategories = () => {
        if(categoriesContent.style.display === 'none') {
            angleFooterSecond += 180;
            categoriesContent.style.display = 'block';
            secondFooterArrow.style.transform = `rotate(${angleFooterSecond}deg)`;
        } else {
            angleFooterSecond += 180;
            categoriesContent.style.display = 'none';
            secondFooterArrow.style.transform = `rotate(${angleFooterSecond}deg)`;
        }
    }

    const toggleAbout = () => {
        if(aboutContent.style.display === 'none') {
            angleFooterThird += 180;
            aboutContent.style.display = 'block';
            thirdFooterArrow.style.transform = `rotate(${angleFooterThird}deg)`;
        } else {
            angleFooterThird += 180;
            aboutContent.style.display = 'none';
            thirdFooterArrow.style.transform = `rotate(${angleFooterThird}deg)`;
        }
    }

    contact.addEventListener('click', toggleContact);
    categories.addEventListener('click', toggleCategories);
    about.addEventListener('click', toggleAbout);
}

// Toggle password visibility and eye type
togglePassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

// Toggle Footer Menu
