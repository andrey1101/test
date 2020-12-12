const hamburgerBtn = document.querySelector('.header__hamburger-btn');
const scheduleMoreBtn = document.querySelector('.schedule__icon-btn');

hamburgerBtn.addEventListener('click', toggleMenu);
scheduleMoreBtn.addEventListener('click', openHelpMenu);

function toggleMenu() {
    const navMenu = document.querySelector('.header__nav-menu');
    const headerItemLinks = [...document.querySelectorAll('.header__item-link')];

    navMenu.classList.toggle('header__nav-menu--open');
    hamburgerBtn.classList.toggle('header__hamburger-btn--active');

    function checkMenu(){
        headerItemLinks.forEach((headerItemLink, i) => {
            headerItemLink.addEventListener("click", function () {
             navMenu.classList.remove('header__nav-menu--open');
                hamburgerBtn.classList.remove('header__hamburger-btn--active');
            });
        })
    }
    checkMenu()
}

function openHelpMenu() {
    scheduleMoreBtn.classList.toggle('schedule__icon-btn--active');
}

function openMoreInfo(){
    const ArrProgramMoreBtn = [...document.querySelectorAll('.program__item-btn')];
    const ArrProgramMoreBlock = [...document.querySelectorAll('.program__item-more')];

    ArrProgramMoreBtn.forEach((programMoreBtn, i) => {
        programMoreBtn.addEventListener("click", function () {
            ArrProgramMoreBtn[i].classList.toggle("program__item-btn--active");
            ArrProgramMoreBlock[i].classList.toggle("program__item-more--active");
        });
    })
}

function timetableHover(){
    const ArrTimetableDesk = [...document.querySelectorAll('.timetable__item-desc')];
    const ArrTimetableDate = [...document.querySelectorAll('.timetable__item-date')];

    function timetableDeskHover() {
    ArrTimetableDesk.forEach((timetableDesk, i) => {
        timetableDesk.addEventListener("mouseover", function () {
            ArrTimetableDesk[i].setAttribute('id', 'item-active')
            ArrTimetableDate[i].setAttribute('id', 'item-active')
        });
        timetableDesk.addEventListener("mouseleave", function () {
            ArrTimetableDesk[i].removeAttribute('id', 'item-active')
            ArrTimetableDate[i].removeAttribute('id', 'item-active')
         });
    })
    }

    function timetableDateHover() {
        ArrTimetableDate.forEach((timetableDate, i) => {
            timetableDate.addEventListener("mouseover", function () {
                ArrTimetableDate[i].setAttribute('id', 'item-active')
                ArrTimetableDesk[i].setAttribute('id', 'item-active')
            });
            timetableDate.addEventListener("mouseleave", function () {
                ArrTimetableDate[i].removeAttribute('id', 'item-active')
                ArrTimetableDesk[i].removeAttribute('id', 'item-active')
             });
        })
        }

    timetableDeskHover()
    timetableDateHover()
}

timetableHover()
openMoreInfo()