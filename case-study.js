//anchor link arrows

// const contextPos = document.querySelector('#context').getBoundingClientRect();
// console.log(contextPos);


// function arrows() {
//     if (contextPos.top >= 0 && contextPos.bottom <= window.innerHeight) {
//         const arrow = document.querySelector('#a-context');
//         arrow.style.opacity = 1;
//     };
// }

// window.addEventListener('scroll', arrows);


function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  const targetElement = document.getElementById('context'); 
  const elementToShow = document.getElementById('a-context'); 
  
  window.addEventListener('scroll', () => {
    if (isElementInViewport(targetElement)) {
      elementToShow.style.opacity = '1'; 
    } else {
      elementToShow.style.opacity = '0'; 
    }
  });
