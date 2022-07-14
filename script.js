//CHANGING IMAGES

const imgs = document.getElementById('imgs');
const img = document.querySelectorAll('#imgs img');

let idx = 0;

let interval = setInterval(run, 3000);

function run() {
    idx++
    changeImage()
} // run is intiated on page load when the script for let interval is read. Once read it begins in to increment and initate the changeImage function.

function changeImage() {
    if(idx > img.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    } //remember that the idx is what is responsible for assigning a label to the images [ 0-3 ]. The minus 1 is used to make sure that the the img.length number result matches the index. Length starts at 1, index starts at 0.
    
    imgs.style.transform = `translateX(${idx * -500}px)` // value has to be manipulated through CSS style in order to create the effect of the image carousel. If/Else statement must end before its idx value is read and applied to this step.
}

// To this point this is all you need for a carousel to operate without the buttons.

//CHANGING IMAGES


//CHOOSING IMAGE AND RESETING VIEWING TIME
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

function resetInterval() {
        clearInterval(interval)
    interval = setInterval(run, 3000)
} // the purpose of resetInterval is to allow the user time to look at the image. Before adding this, it didn't matter what image you were on, there was a countdown that upon ending would move to whatever the next image was regardless of when you arrived at the image.

rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})

//CHOOSING IMAGE AND RESETING VIEWING TIME