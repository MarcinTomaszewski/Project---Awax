// Variables 
// For mobile menu
const hamBtn = document.querySelector('.ham');
const menuMobile = document.querySelector('.menu-sm');

// For modal-header
const showModalHeaderBtns = document.querySelectorAll('.js-modal-header');
const modalHeader = document.querySelector('.modal-header');
const mainWrapper = document.querySelector('.main-wrapper');
const modalHeaderCloseBtn = document.querySelector('.close');

// For modal done
const modalDoneBtn = document.querySelector('.js-done');
const modalDone = document.querySelector('.modal-done');

// For modal video
const closeModalVideoBtn = document.querySelector('.modal-video .close');
const modalVideo = document.querySelector('.modal-video');
const showModalVideoBtn = document.querySelector('.about-box .close');
const video = document.querySelector('.modal-video video');

// Scroll page
const scrollBtn = document.querySelector('.scroll-up');

// For section projects
const projectsBtn = document.querySelectorAll('.project-btn');
const sectionBox = document.querySelectorAll('.project-box');

// For banner
const dots = document.querySelectorAll('.dot');

// For animation banner
const firstTitleBanner = document.querySelector('.banner>h1:nth-of-type(1)');
const secondTitleBanner = document.querySelector('.banner>h1:nth-of-type(2)');
const bannerTitleFirstChange = ['Design is about', 'Design is good', 'Idea is best'];
const bannerTitleSecondChange = ['Communication', 'Creation', 'Programming'];
let element = 0;

// Animation for banner
function changeTitle() {
    element++;
    if (element === bannerTitleFirstChange.length) {
        element = 0;
    }
    firstTitleBanner.textContent = bannerTitleFirstChange[element];
    secondTitleBanner.textContent = bannerTitleSecondChange[element];
}
setInterval(changeTitle, 4000);

// EVENTS

// MENU EFFECTS
//Mobile menu support
hamBtn.addEventListener('click', function () {
    hamBtn.classList.toggle('active');
    menuMobile.classList.toggle('active');
})

// Cick menu mobile and remove class active
menuMobile.addEventListener('click', function () {
    menuMobile.classList.remove('active');
})

// BANNER IN HEADER EFFECTS
// Banner service after click
dots.forEach(function (element) {
    element.addEventListener('click', function () {
        if (element.getAttribute('data-dot') == 0) {
            firstTitleBanner.textContent = bannerTitleFirstChange[element.getAttribute('data-dot')];
            secondTitleBanner.textContent = bannerTitleSecondChange[element.getAttribute('data-dot')];
        } else if (element.getAttribute('data-dot') == 1) {
            firstTitleBanner.textContent = bannerTitleFirstChange[element.getAttribute('data-dot')];
            secondTitleBanner.textContent = bannerTitleSecondChange[element.getAttribute('data-dot')];
        } else {
            firstTitleBanner.textContent = bannerTitleFirstChange[element.getAttribute('data-dot')];
            secondTitleBanner.textContent = bannerTitleSecondChange[element.getAttribute('data-dot')];
        }
    })
})

// MODAL EFFECTS
//Show modal-header
showModalHeaderBtns.forEach(function (element) {
    element.addEventListener('click', function () {
        modalHeader.classList.add('active');
        mainWrapper.classList.add('active');
    })
})

// Close modal-header
modalHeaderCloseBtn.addEventListener('click', function () {
    modalHeader.classList.remove('active');
    mainWrapper.classList.remove('active');
})

// Modal-done support
modalDoneBtn.addEventListener('click', function (e) {
    modalDone.classList.add('active');
    // e.preventDefault();
})

// Modal video support
showModalVideoBtn.addEventListener('click', function () {
    modalVideo.classList.add('active');
    mainWrapper.classList.add('active');
})
closeModalVideoBtn.addEventListener('click', function () {
    modalVideo.classList.remove('active');
    mainWrapper.classList.remove('active');
    video.pause();
})


// SCROLL EFFECTS
// Scroll page to start
$(document).ready(function () {
    $(".scroll-up").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });
});

// Show scroll button
window.addEventListener('scroll', function () {
    const scrollValue = window.scrollY;
    if (scrollValue > 100) {
        scrollBtn.classList.add('active');
    } else scrollBtn.classList.remove('active');
})

// Scroll to section after click button menu
function chooseSection(attr) {
    $('html, body').animate({
        scrollTop: $('.' + attr).offset().top
    }, 500);
}
$('.menu-xl li a, .menu-sm li a').on('click', function () {
    const attrValue = $(this).attr('data-scroll');
    if (attrValue) {
        chooseSection(attrValue);
    }
})

// Section projects support
function clearSectionFromActiveClass(section) {
    section.forEach(function (element) {
        if (element.classList.contains('active')) {
            element.classList.remove('active');
        }
    })
}

function clearBtnFromActiveClass(button) {
    button.forEach(function (element) {
        if (element.classList.contains('active')) {
            element.classList.remove('active');
        }
    })
}

function addClassActiveBtn(element) {
    element.classList.add('active');
}

function addClassActiveSection(section, attr) {
    section.forEach(function (element) {
        if (element.getAttribute('data-link') === attr) {
            element.classList.add('active');
        }
    })
}

projectsBtn.forEach(function (element) {
    element.addEventListener('click', function () {
        const attrValue = element.getAttribute('data-link');
        clearBtnFromActiveClass(projectsBtn);
        clearSectionFromActiveClass(sectionBox);

        if (attrValue) {
            addClassActiveBtn(element);
            addClassActiveSection(sectionBox, attrValue);
        }
    })
})