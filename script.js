/*js file for site*/

document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded.');
})

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'slides/2.jpg',
        'slides/1.jpg',
        'slides/3.jpg',
        'slides/4.jpg',
        'slides/5.jpg',
        'slides/6.jpg',
        'slides/7.jpg',
        'slides/8.jpg',
        'slides/9.jpg',
        'slides/10.jpg',
        'slides/11.jpg',
        'slides/12.png',
        'slides/13.jpg',
        'slides/14.jpg',
    ];
    let index = 0;
    const displayTime = 5000;
    const interval = displayTime;

    const bg1 = document.getElementById('bg1');
    const bg2 = document.getElementById('bg2');
    let current = bg1;
    let next = bg2;

    function changeBackground() {
        index = (index + 1) % images.length;
        next.style.backgroundImage = `url(${images[index]})`;
        next.classList.add('visible');
        current.classList.remove('visible');
        [current, next] = [next, current];
    }

    bg1.style.backgroundImage = `url(${images[0]})`;
    bg1.classList.add('visible');
    bg2.style.backgroundImage = `url(${images[1]})`;
    setInterval(changeBackground, interval);
});

document.addEventListener('DOMContentLoaded', () => {
    const hiddenElements = document.querySelectorAll('.hidden');
    function handleVisibility() {
        hiddenElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight) {
                element.classList.add('visible');
            }
        });
    }
    handleVisibility();
    document.addEventListener('scroll', () => {
        handleVisibility();
    });
});

