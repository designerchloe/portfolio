//SVG Element Creation
const svgNS = "http://www.w3.org/2000/svg";
const svgElement = document.createElementNS(svgNS, "svg");

// Set the attributes for the SVG element
svgElement.setAttribute("width", "32");
svgElement.setAttribute("height", "32");
svgElement.setAttribute("viewBox", "0 0 32 32");
svgElement.setAttribute("fill", "none");
svgElement.setAttribute("xmlns", svgNS);
svgElement.setAttribute("class", "icon");

// Create the first path element
const path1 = document.createElementNS(svgNS, "path");
path1.setAttribute("fill-rule", "evenodd");
path1.setAttribute("clip-rule", "evenodd");
path1.setAttribute("d", "M26.3346 15.9997C26.3346 15.4474 25.8869 14.9997 25.3346 14.9997H6.66797C6.11568 14.9997 5.66797 15.4474 5.66797 15.9997C5.66797 16.552 6.11568 16.9997 6.66797 16.9997H25.3346C25.8869 16.9997 26.3346 16.552 26.3346 15.9997Z");
path1.setAttribute("fill", "#BEB8AA");

// Create the second path element
const path2 = document.createElementNS(svgNS, "path");
path2.setAttribute("fill-rule", "evenodd");
path2.setAttribute("clip-rule", "evenodd");
path2.setAttribute("d", "M26.3346 9.33301C26.3346 8.78072 25.8869 8.33301 25.3346 8.33301H6.66797C6.11568 8.33301 5.66797 8.78072 5.66797 9.33301C5.66797 9.88529 6.11568 10.333 6.66797 10.333H25.3346C25.8869 10.333 26.3346 9.88529 26.3346 9.33301Z");
path2.setAttribute("fill", "#BEB8AA");

// Create the third path element
const path3 = document.createElementNS(svgNS, "path");
path3.setAttribute("fill-rule", "evenodd");
path3.setAttribute("clip-rule", "evenodd");
path3.setAttribute("d", "M26.3346 22.6663C26.3346 22.1141 25.8869 21.6663 25.3346 21.6663H6.66797C6.11568 21.6663 5.66797 22.1141 5.66797 22.6663C5.66797 23.2186 6.11568 23.6663 6.66797 23.6663H25.3346C25.8869 23.6663 26.3346 23.2186 26.3346 22.6663Z");
path3.setAttribute("fill", "#BEB8AA");

// Append all paths to the SVG element
svgElement.appendChild(path1);
svgElement.appendChild(path2);
svgElement.appendChild(path3);


//Selections & Definitions

const header = document.querySelector('header');
const main = document.querySelector('main');
const nav = document.querySelector('.anchor-nav');
const anchors = document.querySelectorAll('.anchor-nav a');
let isMenuOpen = false;


//Event Listeners

window.addEventListener('load', () => {
    if (window.innerWidth < 900) {
        header.appendChild(nav);
        nav.style.opacity = 0;
        header.appendChild(svgElement);
        anchors.forEach(anchor => {
            anchor.addEventListener('click', () => {
                setTimeout(() => {
                    nav.style.opacity = 0;
                    isMenuOpen = false;
                }, 300)
            })
        });
    }
});


svgElement.addEventListener('click', () => {
    if (!isMenuOpen) {
        nav.style.opacity = 1;
        isMenuOpen = true;
    } else {
        nav.style.opacity = 0;
        isMenuOpen = false;
    }
    
});

window.addEventListener('resize', () => {
  if (window.innerWidth < 900) {
    header.appendChild(svgElement);
    main.removeChild(nav);
    nav.style.opacity = 0;
    header.appendChild(nav);
    anchors.forEach(anchor => {
        anchor.addEventListener('click', () => {
            setTimeout(() => {
                nav.style.opacity = 0;
                isMenuOpen = false;
            }, 300)
        })
    });
  } else {
    header.removeChild(svgElement);
    main.appendChild(nav);
    nav.style.opacity = 1;
  }
});