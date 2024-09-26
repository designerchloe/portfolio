//arrows 

const groups = ['intro', 'context', 'problem'];

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
      }
  }
  
//   const targetElement = document.getElementById('context'); 
//   const elementToShow = document.getElementById('a-context'); 

const introElement = document.getElementById('intro');
const introArrow = document.getElementById('a-intro');
const contextElement = document.getElementById('context');
const contextArrow = document.getElementById('a-context');
const problemElement = document.getElementById('problem');
const problemArrow = document.getElementById('a-problem');
  
  window.addEventListener('scroll', handler);

  
