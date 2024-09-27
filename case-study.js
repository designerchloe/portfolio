//arrows 

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const height = rect.height;
    return (
      rect.top <= 300 &&
      rect.top >= (parseInt(`-${height}`)) + 200
    );
  }

  function handler() {
    if (isElementInViewport(introElement)) {
        introArrow.style.opacity = '1'; 
      } else {
        introArrow.style.opacity = '0'; 
      };

    if (isElementInViewport(contextElement)) {
        contextArrow.style.opacity = '1'; 
      } else {
        contextArrow.style.opacity = '0'; 
      };

    if (isElementInViewport(problemElement)) {
        problemArrow.style.opacity = '1'; 
      } else {
        problemArrow.style.opacity = '0'; 
      };

    if (isElementInViewport(processElement)) {
        processArrow.style.opacity = '1'; 
      } else {
        processArrow.style.opacity = '0'; 
      };

    if (isElementInViewport(solutionElement)) {
        solutionArrow.style.opacity = '1'; 
      } else {
        solutionArrow.style.opacity = '0'; 
      };

    if (isElementInViewport(userTestingElement)) {
        userTestingArrow.style.opacity = '1'; 
      } else {
        userTestingArrow.style.opacity = '0'; 
      };

    if (isElementInViewport(improvementsElement)) {
        improvementsArrow.style.opacity = '1'; 
      } else {
        improvementsArrow.style.opacity = '0'; 
      };

    if (isElementInViewport(finalDesignsElement)) {
        finalDesignsArrow.style.opacity = '1'; 
      } else {
        finalDesignsArrow.style.opacity = '0'; 
      };

    if (isElementInViewport(theDifferenceElement)) {
        theDifferenceArrow.style.opacity = '1'; 
      } else {
        theDifferenceArrow.style.opacity = '0'; 
      };
  }
  
//   const targetElement = document.getElementById('context'); 
//   const elementToShow = document.getElementById('a-context'); 

const introElement = document.getElementById('intro');
const introArrow = document.getElementById('a-intro');
const contextElement = document.getElementById('context');
const contextArrow = document.getElementById('a-context');
const problemElement = document.getElementById('problem');
const problemArrow = document.getElementById('a-problem');
const processElement = document.getElementById('process');
const processArrow = document.getElementById('a-process');
const solutionElement = document.getElementById('solution');
const solutionArrow = document.getElementById('a-solution');
const userTestingElement = document.getElementById('user-testing');
const userTestingArrow = document.getElementById('a-user-testing');
const improvementsElement = document.getElementById('improvements');
const improvementsArrow = document.getElementById('a-improvements');
const finalDesignsElement = document.getElementById('final-designs');
const finalDesignsArrow = document.getElementById('a-final-designs');
const theDifferenceElement = document.getElementById('the-difference');
const theDifferenceArrow = document.getElementById('a-the-difference');
  
window.addEventListener('scroll', handler);

  
//cursor

let promo = document.querySelector('.promo-area');
let mouseCursor = document.querySelector('#cursor');
mouseCursor.style.display = 'none';

function cursor(e) {
    mouseCursor.style.display = '';
    mouseCursor.classList.remove('fade-out');
    mouseCursor.classList.add('fade');
    mouseCursor.style.opacity = '1';
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
};

function disappear() {
    mouseCursor.style.display = '';
    mouseCursor.classList.remove('fade');
    mouseCursor.classList.add('fade-out');
    mouseCursor.style.opacity = "0";
}

promo.addEventListener('mousemove', cursor);

promo.addEventListener('mouseout', disappear);