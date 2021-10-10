// Identify class 'left' in html
const left = document.querySelector('.left');
// Identify class 'right' in html
const right = document.querySelector('.right');
// Identify class 'container' in html
const container = document.querySelector('.container');

// ___Left Side___
// When mouse hovers ** into ** left side of screen
// Add 'hover-left' class to 'container' class (see what is it doing in CSS file) 
left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
});

// When mouse hovers ** out of ** left side of screen
// Remove 'hover-left' class from 'container' class
left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
});

// ___Right Side___
// When mouse hovers ** into ** right side of screen
// Add 'hover-right' class 'container' class (see what is it doing in CSS file) 
right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
});

// When mouse hovers ** out of ** right side of screen
// Remove 'hover-right' class from 'container' class
right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
});

