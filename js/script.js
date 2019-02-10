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
const showModalVideoBtn = document.querySelector('.about-box .show');
const video = document.querySelector('.modal-video video');

// Scroll page
const scrollBtn = document.querySelector('.scroll-up');

// For section projects
const projectsBtn = document.querySelectorAll('.project-btn');
const sectionBox = document.querySelectorAll('.project-box');

// For banner
const dotsBanner = document.querySelectorAll('header .dot');

// For animation banner
const firstTitleBanner = document.querySelector('.banner>h1:nth-of-type(1)');
const secondTitleBanner = document.querySelector('.banner>h1:nth-of-type(2)');
const bannerTitleFirstChange = ['Design is about', 'Design is good', 'Idea is best'];
const bannerTitleSecondChange = ['Communication', 'Creation', 'Programming'];
let counterBanner = 1;

// Animation for banner
function changeTitle() {
    dotsBanner.forEach(dot => {
        dot.classList.remove('active');
    })
    if (counterBanner === bannerTitleFirstChange.length) {
        counterBanner = 0;
    }
    firstTitleBanner.textContent = bannerTitleFirstChange[counterBanner];
    secondTitleBanner.textContent = bannerTitleSecondChange[counterBanner];

    dotsBanner.forEach(dot => {
        const dotDataAttr = dot.getAttribute('data-dot');
        if (dotDataAttr == counterBanner) {
            dot.classList.add('active')
        }
    })
    counterBanner++;
}
setInterval(changeTitle, 4000);

// EVENTS


// BANNER IN HEADER EFFECTS
// Banner service after click
dotsBanner.forEach(element => {
    element.addEventListener('click', () => {
        clearActiveClass(dotsBanner);
        if (element.getAttribute('data-dot') == 0) {
            firstTitleBanner.textContent = bannerTitleFirstChange[element.getAttribute('data-dot')];
            secondTitleBanner.textContent = bannerTitleSecondChange[element.getAttribute('data-dot')];
            element.classList.add('active');
            counterBanner = 0;
        } else if (element.getAttribute('data-dot') == 1) {
            firstTitleBanner.textContent = bannerTitleFirstChange[element.getAttribute('data-dot')];
            secondTitleBanner.textContent = bannerTitleSecondChange[element.getAttribute('data-dot')];
            element.classList.add('active');
            counterBanner = 1;
        } else {
            firstTitleBanner.textContent = bannerTitleFirstChange[element.getAttribute('data-dot')];
            secondTitleBanner.textContent = bannerTitleSecondChange[element.getAttribute('data-dot')];
            element.classList.add('active');
            counterBanner = 2;
        }
    })
})

// MENU EFFECTS
//Mobile menu support
hamBtn.addEventListener('click', () => {
    hamBtn.classList.toggle('active');
    menuMobile.classList.toggle('active');
})

// Cick menu mobile and remove class active
menuMobile.addEventListener('click', () => {
    menuMobile.classList.remove('active');
})

// Spróbować przerobić tak obsługę modali by po kliknięciu któregoś z przycisków wywołujących modal - pojawiał się odpowiedni modal.
// Dodać przyciskom ta sama klasę by pobrać je za jednym razem.
// Dodać przyciskom atrybuty data-
// Dodać modalom ta sama klasę by pobrać je za jednym razem.
// Dodać modalom atrybuty data- odpowiadające wywołującym je przyciskom.
// MODAL EFFECTS
//Show modal-header
showModalHeaderBtns.forEach(element => {
    element.addEventListener('click', () => {
        modalHeader.classList.add('active');
        mainWrapper.classList.add('active');
    })
})

// Close modal-header
modalHeaderCloseBtn.addEventListener('click', () => {
    modalHeader.classList.remove('active');
    mainWrapper.classList.remove('active');
})

// Modal-done support
modalDoneBtn.addEventListener('click', (e) => {
    // e.preventDefault();
    modalDone.classList.add('active')
})

// Modal video support
showModalVideoBtn.addEventListener('click', () => {
    modalVideo.classList.add('active');
    mainWrapper.classList.add('active');
})
closeModalVideoBtn.addEventListener('click', () => {
    modalVideo.classList.remove('active');
    mainWrapper.classList.remove('active');
    video.pause();
})

// Nie dałem rady zrobić efektów scrolowania w czystym JS.
// SCROLL EFFECTS 
// Scroll page to start
$(document).ready(() => {
    $(".scroll-up").click(() => {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });
});

// Show scroll button
window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    if (scrollValue > 100) {
        scrollBtn.classList.add('active');
    } else scrollBtn.classList.remove('active');
})

// Scroll to section after click button menu
const topbarHeight = document.querySelector('.topbar').clientHeight;

function chooseSection(attr) {
    $('html, body').animate({
        scrollTop: $('.' + attr).offset().top - topbarHeight
    }, 500);
}
$('.menu-xl li a, .menu-sm li a').on('click', (e) => {
    const attrValue = $(e.target).attr('data-scroll');
    if (attrValue) {
        chooseSection(attrValue);
    }
})

// Section projects support
function clearActiveClass(domElements) {
    domElements.forEach(element => {
        if (element.classList.contains('active')) {
            element.classList.remove('active');
        }
    })
}

function addClassActiveBtn(element) {
    element.classList.add('active');
}

function addClassActiveSection(section, attr) {
    section.forEach(element => {
        if (element.getAttribute('data-link') === attr) {
            element.classList.add('active');
        }
    })
}
projectsBtn.forEach(element => {
    element.addEventListener('click', () => {
        const attrValue = element.getAttribute('data-link');
        clearActiveClass(sectionBox);
        clearActiveClass(projectsBtn);

        if (attrValue) {
            addClassActiveBtn(element);
            addClassActiveSection(sectionBox, attrValue);
        }
    })
})
// Section team support
const teamBoxes = document.querySelectorAll('.team-content');
const dotsTeam = document.querySelectorAll('.team .dot');
let counterTeam = 1;

const changeTeamBoxes = () => {
    teamBoxes.forEach(box => {
        box.classList.remove('active');
    })
    dotsTeam.forEach(dot => {
        dot.classList.remove('active');
    })

    if (counterTeam === teamBoxes.length) {
        counterTeam = 0;
    }
    teamBoxes.forEach(box => {
        const attrData = box.getAttribute('data-value');
        if (attrData == counterTeam) {
            box.classList.add('active');
        }
    })
    dotsTeam.forEach(dot => {
        const dotDataAttr = dot.getAttribute('data-dot');
        if (dotDataAttr == counterTeam) {
            dot.classList.add('active')
        }
    })
    counterTeam++;
}
setInterval(changeTeamBoxes, 4000);

// Section team click
dotsTeam.forEach(element => {
    element.addEventListener('click', () => {
        clearActiveClass(dotsTeam);
        teamBoxes.forEach(box => {
            box.classList.remove('active');
        })
        if (element.getAttribute('data-dot') == 0) {
            teamBoxes.forEach(box => {
                const attrData = box.getAttribute('data-value');
                if (attrData == 0) {
                    box.classList.add('active');
                }
            })
            element.classList.add('active');
            counterTeam = 0;
        } else if (element.getAttribute('data-dot') == 1) {
            teamBoxes.forEach(box => {
                const attrData = box.getAttribute('data-value');
                if (attrData == 1) {
                    box.classList.add('active');
                }
            })
            element.classList.add('active');
            counterTeam = 1;
        } else {
            teamBoxes.forEach(box => {
                const attrData = box.getAttribute('data-value');
                if (attrData == 2) {
                    box.classList.add('active');
                }
            })
            element.classList.add('active');
            counterTeam = 2;
        }
    })
})
// Section clients support
const clientsBoxes = document.querySelectorAll('.clients-box');
const dotsClients = document.querySelectorAll('.clients .dot');
let clientsCounter = 1;
const changeClientsBoxes = () => {
    clientsBoxes.forEach(box => {
        box.classList.remove('active');
    })
    dotsClients.forEach(dot => {
        dot.classList.remove('active');
    })
    if (clientsCounter === clientsBoxes.length) {
        clientsCounter = 0;
    }
    clientsBoxes.forEach(box => {
        const attrData = box.getAttribute('data-value');
        if (attrData == clientsCounter) {
            box.classList.add('active');
        }
    })
    dotsClients.forEach(dot => {
        const dotDataAttr = dot.getAttribute('data-dot');
        if (dotDataAttr == clientsCounter) {
            dot.classList.add('active')
        }
    })
    clientsCounter++;
}
setInterval(changeClientsBoxes, 4000);
// Section clients click
dotsClients.forEach(element => {
    element.addEventListener('click', () => {
        clearActiveClass(dotsClients);
        clientsBoxes.forEach(box => {
            box.classList.remove('active');
        })
        if (element.getAttribute('data-dot') == 0) {
            clientsBoxes.forEach(box => {
                const attrData = box.getAttribute('data-value');
                if (attrData == 0) {
                    box.classList.add('active');
                }
            })
            element.classList.add('active');
            clientsCounter = 0;
        } else if (element.getAttribute('data-dot') == 1) {
            clientsBoxes.forEach(box => {
                const attrData = box.getAttribute('data-value');
                if (attrData == 1) {
                    box.classList.add('active');
                }
            })
            element.classList.add('active');
            clientsCounter = 1;
        } else {
            clientsBoxes.forEach(box => {
                const attrData = box.getAttribute('data-value');
                if (attrData == 2) {
                    box.classList.add('active');
                }
            })
            element.classList.add('active');
            clientsCounter = 2;
        }
    })
})

// Section premium support
const premiumBoxes = document.querySelectorAll('.premium-content');
const dotsPremium = document.querySelectorAll('.premium .dot');
let premiumCounter = 1;
const changePremiumBoxes = () => {
    premiumBoxes.forEach(box => {
        box.classList.remove('active');
    })
    dotsPremium.forEach(dot => {
        dot.classList.remove('active');
    })
    if (premiumCounter === premiumBoxes.length) {
        premiumCounter = 0;
    }
    premiumBoxes.forEach(box => {
        const attrData = box.getAttribute('data-value');
        if (attrData == premiumCounter) {
            box.classList.add('active');
        }
    })
    dotsPremium.forEach(dot => {
        const dotDataAttr = dot.getAttribute('data-dot');
        if (dotDataAttr == premiumCounter) {
            dot.classList.add('active')
        }
    })
    premiumCounter++;
}
setInterval(changePremiumBoxes, 4000);
// Section premium click
dotsPremium.forEach(element => {
    element.addEventListener('click', () => {
        clearActiveClass(dotsPremium);
        premiumBoxes.forEach(box => {
            box.classList.remove('active');
        })
        if (element.getAttribute('data-dot') == 0) {
            premiumBoxes.forEach(box => {
                const attrData = box.getAttribute('data-value');
                if (attrData == 0) {
                    box.classList.add('active');
                }
            })
            element.classList.add('active');
            premiumCounter = 0;
        } else if (element.getAttribute('data-dot') == 1) {
            premiumBoxes.forEach(box => {
                const attrData = box.getAttribute('data-value');
                if (attrData == 1) {
                    box.classList.add('active');
                }
            })
            element.classList.add('active');
            premiumCounter = 1;
        } else {
            premiumBoxes.forEach(box => {
                const attrData = box.getAttribute('data-value');
                if (attrData == 2) {
                    box.classList.add('active');
                }
            })
            element.classList.add('active');
            premiumCounter = 2;
        }
    })
})