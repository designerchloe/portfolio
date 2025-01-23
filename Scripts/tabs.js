//Selections & Definitions

const workTab = document.querySelector('button.work');
const playTab = document.querySelector('button.play');
const aboutTab = document.querySelector('button.about');
const work = document.querySelector('#work');
const play = document.querySelector('#play');
const about = document.querySelector('#about');


//Initialize to only show work display

play.style.display = 'none';
about.style.display = 'none';


//Functions

const showPlayTab = () => {
    work.style.display = 'none';
    about.style.display = 'none';
    play.style.display = '';
    playTab.classList.add('selected');
    workTab.classList.remove('selected');
    aboutTab.classList.remove('selected');
};

const showWorkTab = () => {
    play.style.display = 'none';
    about.style.display = 'none';
    work.style.display = '';
    playTab.classList.remove('selected');
    workTab.classList.add('selected');
    aboutTab.classList.remove('selected');
};

const showAboutTab = () => {
    work.style.display = 'none';
    play.style.display = 'none';
    about.style.display = '';
    aboutTab.classList.add('selected');
    workTab.classList.remove('selected');
    playTab.classList.remove('selected');
};

//Event Listeners

playTab.addEventListener('click', showPlayTab);

workTab.addEventListener('click', showWorkTab);

aboutTab.addEventListener('click', showAboutTab);