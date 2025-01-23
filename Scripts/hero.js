//Selections & Definitions

const uxDesignerLink = document.getElementById("ux-designer-link");
const uxDesignerImages = document.getElementById("ux-designer-images");
const creativeDeveloperLink = document.getElementById("creative-developer-link");
const creativeDeveloperImages = document.getElementById("creative-developer-images");
const arEnthusiastLink = document.getElementById("ar-enthusiast-link");
const arEnthusiastImages = document.getElementById("ar-enthusiast-images");
const aboutParagraph = document.getElementById("about-paragraph");

//Functions

let animationTimeout; //initial definition for trigger handler

const showUXDesignImages = () => {
    if (window.innerWidth > 600) { 
        animationTimeout = setTimeout(() => { //timeout ensures that accidental hovers <150ms don't trigger animation

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
    
        }, 150); 
    }
};

const hideUXDesignImages = () => {
    if (window.innerWidth > 600) {
        clearTimeout(animationTimeout); //reset trigger handler

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
};

const showCreativeDevImages = () => {
    if (window.innerWidth > 600) {
        animationTimeout = setTimeout(() => {

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

        }, 150);

    }
};

const hideCreativeDevImages = () => {
    if (window.innerWidth > 600) {
        clearTimeout(animationTimeout);

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
};

const showAREnthusiastImages = () => {
    if (window.innerWidth > 600) {
        animationTimeout = setTimeout(() => {

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

        }, 150);

    }
};

const hideAREnthusiastImages = () => {
    if (window.innerWidth > 600) { 
        clearTimeout(animationTimeout);
    
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
};

//Event Listeners, including focus for keyboard users

uxDesignerLink.addEventListener('mouseenter', showUXDesignImages);
uxDesignerLink.addEventListener('focus', showUXDesignImages);
uxDesignerLink.addEventListener('mouseout', hideUXDesignImages);
uxDesignerLink.addEventListener('focusout', hideUXDesignImages);

creativeDeveloperLink.addEventListener('mouseenter', showCreativeDevImages);
creativeDeveloperLink.addEventListener('focus', showCreativeDevImages);
creativeDeveloperLink.addEventListener('mouseout', hideCreativeDevImages);
creativeDeveloperLink.addEventListener('focusout', hideCreativeDevImages);

arEnthusiastLink.addEventListener('mouseenter', showAREnthusiastImages);
arEnthusiastLink.addEventListener('focus', showAREnthusiastImages);
arEnthusiastLink.addEventListener('mouseout', hideAREnthusiastImages);
arEnthusiastLink.addEventListener('focusout', hideAREnthusiastImages);
