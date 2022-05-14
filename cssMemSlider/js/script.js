import season from "./season.js";

const wrapperDot = document.querySelector('.wrapper-dot');
let img = document.querySelector('.slideshow-container');
let text = document.querySelector('.text');
let autor = document.querySelector('.block-autor');
let dots = document.querySelectorAll('.dot');

wrapperDot.addEventListener('click', (e) => {
    dots.forEach((elem) => {
        if (elem.classList.contains('active')) {
            elem.classList.remove('active')
        }

        if (e.target.classList.contains('dot')) {
            e.target.classList.add('active');
            e.target.classList.add('fade');
            img.classList.add('fade')
        }
    });

    for(let key in season) {
        if(e.target.id === season[key].id){
            img.style.backgroundImage = `url(${season[key].src})`;
            console.log(season[key].text);
            text.innerHTML = season[key].text; 
            autor.innerHTML = season[key].autor;
        } 
    }
});


/* let reRender = (obj = season) => {

        for(let key in season) {
        if(e.target.id === obj[key].id){
            img.style.backgroundImage = `url(${obj[key].src})`;
            console.log(obj[key].text);
            text.innerHTML = obj[key].text; 
            autor.innerHTML = obj[key].autor;
        } 
    }
};

reRender(); */

setInterval(() => console.log('Bobbi'), 5000);

// ================ set ID for all elements ==========================

function addId(arr) {
    arr.forEach((elem, index) => {
        elem.id = `0${index}`;
    });
};

addId(dots);

// ============== disable text selection =============== ============

const disableselect = () => {
    return false
};
wrapperDot.onselectstart = disableselect
wrapperDot.onmousedown = disableselect





