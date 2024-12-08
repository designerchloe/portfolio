//header definitions

const uxDesignerLink = document.getElementById("ux-designer-link");
const uxDesignerImages = document.getElementById("ux-designer-images");
const creativeDeveloperLink = document.getElementById("creative-developer-link");
const creativeDeveloperImages = document.getElementById("creative-developer-images");
const arEnthusiastLink = document.getElementById("ar-enthusiast-link");
const arEnthusiastImages = document.getElementById("ar-enthusiast-images");
const aboutParagraph = document.getElementById("about-paragraph");

//mobile animation

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


uxDesignerLink.addEventListener('mouseenter', () => {
    if (window.innerWidth > 600) {

    uxDesignerImages.style.display = 'block';
    creativeDeveloperLink.style.opacity = 0.2;
    arEnthusiastLink.style.opacity = 0.2;
    aboutParagraph.style.opacity = 0.2;
    uxDesignerLink.style.cursor = 'default';
    uxDesignerImages.style.zIndex = 12;
    let delay = 50;

    for (const child of uxDesignerImages.children) {
        setTimeout(() => {
            child.style.visibility = 'visible';
            child.style.opacity = 1;
            }, delay);
            delay += 100;
        }

    }

});

uxDesignerLink.addEventListener('mouseout', () => {
    if (window.innerWidth > 600) {

        creativeDeveloperLink.style.opacity = 1;
        arEnthusiastLink.style.opacity = 1;
        aboutParagraph.style.opacity = 1;
        uxDesignerImages.style.zIndex = 1;
        let delay = 100;
        for (const child of uxDesignerImages.children) {
            setTimeout(() => {
                child.style.opacity = 0;
                setTimeout(() => {
                    child.style.visibility = 'hidden';
                }, 300);
            }, delay);
            delay += 100;
        };

    }
});


creativeDeveloperLink.addEventListener('mouseenter', () => {
    if (window.innerWidth > 600) {

        uxDesignerLink.style.opacity = 0.2;
        arEnthusiastLink.style.opacity = 0.2;
        aboutParagraph.style.opacity = 0.2;
        creativeDeveloperLink.style.cursor = 'default';
        creativeDeveloperImages.style.zIndex = 12;
        let delay = 50;
        for (const child of creativeDeveloperImages.children) {
            setTimeout(() => {
            child.style.visibility = 'visible';
            child.style.opacity = 1;
            }, delay);
            delay += 100;
        }

    }
});

creativeDeveloperLink.addEventListener('mouseout', () => {
    if (window.innerWidth > 600) {

        uxDesignerLink.style.opacity = 1;
        arEnthusiastLink.style.opacity = 1;
        aboutParagraph.style.opacity = 1;
        creativeDeveloperImages.style.zIndex = 1;
        let delay = 100;
        for (const child of creativeDeveloperImages.children) {
            setTimeout(() => {
                child.style.opacity = 0;
                setTimeout(() => {
                    child.style.visibility = 'hidden';
                }, 300);
            }, delay);
            delay += 100;
        };

    }
});

arEnthusiastLink.addEventListener('mouseenter', () => {
    if (window.innerWidth > 600) {

        arEnthusiastImages.style.display = 'block';
        uxDesignerLink.style.opacity = 0.2;
        creativeDeveloperLink.style.opacity = 0.2;
        aboutParagraph.style.opacity = 0.2;
        arEnthusiastLink.style.cursor = 'default';
        arEnthusiastImages.style.zIndex = 12;
        let delay = 50;
        for (const child of arEnthusiastImages.children) {
            setTimeout(() => {
                child.style.visibility = 'visible';
                child.style.opacity = 1;
                }, delay);
                delay += 100;
        }

    }
});

arEnthusiastLink.addEventListener('mouseout', () => {
    if (window.innerWidth > 600) { 
    
        uxDesignerLink.style.opacity = 1;
        creativeDeveloperLink.style.opacity = 1;
        aboutParagraph.style.opacity = 1;
        arEnthusiastImages.style.zIndex = 1;
        let delay = 100;
        for (const child of arEnthusiastImages.children) {
            setTimeout(() => {
                child.style.opacity = 0;
                setTimeout(() => {
                    child.style.visibility = 'hidden';
                }, 300);
            }, delay);
            delay += 100;
        };

    }
});



//tabs

const workTab = document.querySelector('a.work');
const playTab = document.querySelector('a.play');
const aboutTab = document.querySelector('a.about');
const work = document.querySelector('#work');
const play = document.querySelector('#play');
const about = document.querySelector('#about');

play.style.display = 'none';
about.style.display = 'none';

playTab.addEventListener('click', () => {
    work.style.display = 'none';
    about.style.display = 'none';
    play.style.display = '';
    playTab.classList.add('selected');
    workTab.classList.remove('selected');
    aboutTab.classList.remove('selected');
});

workTab.addEventListener('click', () => {
    play.style.display = 'none';
    about.style.display = 'none';
    work.style.display = '';
    playTab.classList.remove('selected');
    workTab.classList.add('selected');
    aboutTab.classList.remove('selected');
});

aboutTab.addEventListener('click', () => {
    work.style.display = 'none';
    play.style.display = 'none';
    about.style.display = '';
    aboutTab.classList.add('selected');
    workTab.classList.remove('selected');
    playTab.classList.remove('selected');
});

//work section fade ins

const elementsToFadeIn = document.querySelectorAll(".fade-in-up-on-scroll");
if (elementsToFadeIn) {
  window.addEventListener("scroll", function(event) {
    elementsToFadeIn.forEach(function(element) {
      if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("fade-in");
      } else {
        element.classList.remove("fade-in");
      }
    });
  });
}

//cursor

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

// window.addEventListener('mousemove', cursor);

elementsToFadeIn.forEach(function(element) {
    element.addEventListener('mousemove', cursor);
});

elementsToFadeIn.forEach(function(element) {
    element.addEventListener('mouseout', disappear);
});


//masonry grid

const container = document.querySelector('.container');
const columnForGap = document.querySelector('.column');

function generateGrid(columns, posts) {
    container.innerHTML = '';
    //store all column arrays which contain the relevant posts
    let columnWrappers = {};

    //create column item array and add this to the columnWrapper object
    for(let i = 0; i < columns; i++) {
        columnWrappers[`column${i}`] = [];
    };

    for (let i = 0; i < posts.length; i++) {
        const column = i % columns;
        columnWrappers[`column${column}`].push(posts[i]);
    }
    
    for (let i = 0; i < columns; i++) {
        let columnPosts = columnWrappers[`column${i}`];
        let column = document.createElement('div');
        column.classList.add('column');
        if (window.innerWidth <= 600) {
            column.classList.add('small-gap');
        }
        if (window.innerWidth <= 1000) {
            column.classList.add('medium-gap');
        }

        columnPosts.forEach(post => {
            let postDiv = document.createElement('div');
            postDiv.classList.add('post');
            let image = document.createElement('img');
            image.src = post.image;
            let textContainer = document.createElement('div');
            textContainer.classList.add("post-text");
            let title = document.createElement('p');
            title.innerHTML = post.title;
            let date = document.createElement('p');
            date.innerHTML = post.date;

            textContainer.appendChild(title);
            textContainer.appendChild(date);
            postDiv.appendChild(image);
            postDiv.appendChild(textContainer);
            column.appendChild(postDiv);
        })
        container.appendChild(column);
    }
    

};


let previousScreenSize = window.innerWidth;
window.addEventListener('resize', () => {
    imageIndex = 0;

    if (window.innerWidth < 600 && previousScreenSize >= 600) {
        container.style.gap = '16px';
        generateGrid(1, posts);
    } else if(window.innerWidth >= 600 && window.innerWidth < 1000 && (previousScreenSize < 600 || previousScreenSize >= 1000)){
        container.style.gap = '24px';
        generateGrid(2, posts);
    } else if (window.innerWidth >= 1000 && previousScreenSize < 1000) {
        generateGrid(3, posts);
    }
    previousScreenSize = window.innerWidth;
})

//page load
window.addEventListener('load', () => {
    if (previousScreenSize < 600) {
        container.style.gap = '16px';
        generateGrid(1, posts);
    } else if (previousScreenSize >= 600 && previousScreenSize < 1000){
        container.style.gap = '24px';
        generateGrid(2, posts);
    } else {
        generateGrid(3, posts);
    }
    previousScreenSize = window.innerWidth;
})

generateGrid(3, posts);

//copy email

const email = document.querySelector('#email').innerHTML;
const emailLink = document.querySelector('#email-link');

function copyEmail() {
  navigator.clipboard.writeText(email);
  console.log('copied to clipboard');
}

emailLink.addEventListener('click', copyEmail);
let icon = document.querySelector('.icon-sm');

emailLink.addEventListener('mouseover', () => {
    icon.style.opacity = 1;
})

emailLink.addEventListener('mouseout', () => {
    icon.style.opacity = 0;
})

