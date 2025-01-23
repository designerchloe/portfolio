const headers = document.querySelectorAll('h1');
let activeIndex = 0;
const totalHeaders = headers.length;
let animationRunning = false;
let animationFrameId = null;

function animateHeader() {
    if (window.innerWidth >= 600) {
        if (animationRunning) {
            headers.forEach(header => header.style.opacity = '1');
            animationRunning = false;
            cancelAnimationFrame(animationFrameId);
        }
    return;
    }

    animationRunning = true;
    headers.forEach((header, index) => {
        header.style.opacity = index === activeIndex ? '1' : '0.3';
    });

    activeIndex = (activeIndex + 1) % totalHeaders;

    animationFrameId = setTimeout(() => requestAnimationFrame(animateHeader), 5000);
};

let resizeTimeout;

function handleResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        if (!animationRunning && window.innerWidth < 600) {
        // Reset activeIndex to 0 to start cleanly
        activeIndex = 0;
        animateHeader();
        } else {
        animateHeader();
        }
    }, 1000);
  }

animateHeader();
window.addEventListener('resize', handleResize);