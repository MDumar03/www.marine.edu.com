const startBtn = document.getElementById('startBtn');
const exitBtn = document.getElementById('exitBtn');
const popupInfo = document.getElementById('popupInfo');
const main = document.querySelector('.main');

const hamburger = document.querySelector('.hamburger');
        const navbar = document.querySelector('.navbar');

        hamburger.addEventListener('click', () => {
            navbar.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
};

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
};

document.getElementById("next-Btn").addEventListener("click", function() {
    window.location.href = 'marine.html';
});