//Selections & Definitions

const container = document.querySelector('.container');
const columnForGap = document.querySelector('.column');

//Functions

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


//Event Listeners

let previousScreenSize = window.innerWidth; //declare previous screen size to compare when resizing or loading

window.addEventListener('resize', () => {
    imageIndex = 0;

    if (window.innerWidth < 600 && previousScreenSize >= 600) {
        container.style.gap = '16px';
        generateGrid(1, posts);
    } else if (window.innerWidth >= 600 && window.innerWidth < 1000 && (previousScreenSize < 600 || previousScreenSize >= 1000)){
        container.style.gap = '24px';
        generateGrid(2, posts);
    } else if (window.innerWidth >= 1000 && previousScreenSize < 1000) {
        generateGrid(3, posts);
    }
    previousScreenSize = window.innerWidth;
});


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
});


//Function Call

generateGrid(3, posts);