//tabs

const workTab = document.querySelector('a.work');
const playTab = document.querySelector('a.play');
const work = document.querySelector('#work');
const play = document.querySelector('#play');

play.style.display = 'none';

playTab.addEventListener('click', () => {
    work.style.display = 'none';
    play.style.display = '';
    playTab.classList.add('selected');
    workTab.classList.remove('selected');
});

workTab.addEventListener('click', () => {
    work.style.display = '';
    play.style.display = 'none';
    playTab.classList.remove('selected');
    workTab.classList.add('selected');
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
    // element.addEventListener('wheel', cursor);
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