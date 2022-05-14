import season from "./season.js";

const  wrapperDot = document.querySelector('.wrapper-dot');
let dots = document.querySelectorAll('.dot');

console.log(dots);

wrapperDot.addEventListener('click', (e) => {
    let currentDot = e.target;
        console.log(currentDot);
});

