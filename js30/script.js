const leftSection = document.querySelector('.leftSection');
const rightSection = document.querySelector('.rightSection');
const upButton = document.querySelector('.upButton');
const downButton = document.querySelector('.downButton');
//const container = document.querySelector('.container')

const slidesCount = rightSection.children.length;
let timer = true;

let firstRight = rightSection.children[0];
let cloneFirstRight = firstRight.cloneNode(true);  //copy of the first right slide 
rightSection.insertBefore(cloneFirstRight,rightSection.lastChild);

let lastRight = rightSection.children[slidesCount - 1];
let cloneLastRight = lastRight.cloneNode(true);  //copy of the last right slide 
rightSection.insertBefore(cloneLastRight,rightSection.firstChild);

let firstLeft = leftSection.children[slidesCount - 1];
let cloneFirstLeft = firstLeft.cloneNode(true);  //copy of the first left slide 
leftSection.insertBefore(cloneFirstLeft,leftSection.firstChild);

let lastLeft = leftSection.children[1];
let clonelastLeft = lastLeft.cloneNode(true);  //copy of the first left slide 
leftSection.insertBefore(clonelastLeft,leftSection.lastChild);

rightSection.style.top = '-100vh';
leftSection.style.top = -slidesCount * 100 + 'vh';

let slideIndex = 0;

upButton.addEventListener('click', () =>{
    if (timer == true) { 
        listSlide('up');
      
        timer = false; 
        timeOut();   
        }
})

downButton.addEventListener('click', () =>{
    if (timer == true) { 
        listSlide('down');
        
        timer = false; 
        timeOut();   
        }
})

function listSlide(direction) {
    if (direction === 'up') {
        slideIndex++;

        if (slideIndex % slidesCount === 0 ) {
            rightSection.style.top = `${(slideIndex-1) * 100}vh`; //+300 +700
            if (slideIndex < 0)    {
                leftSection.style.top = `${Math.abs(slideIndex) * 100-400}vh`; //(-4,-8) 0 400
            } else {
                leftSection.style.top = `-${(slideIndex+4) * 100}vh`; //-800
            }
        }
    } else if (direction === 'down') {
        slideIndex--;

        if (slideIndex < 0 && (slideIndex-3) % slidesCount ===0) {
            //        alert(slideIndex + '<0')  
            leftSection.style.top = `${Math.abs(slideIndex+1) * 100}vh`; //(-1,-5,-9) 0 400 800
            rightSection.style.top = `${(slideIndex - slidesCount) * 100}vh` //-100 300 700 1100
        } else if ((slideIndex > 0) && (slideIndex+1) % slidesCount  === 0) {
             //       alert(slideIndex)  
            rightSection.style.top = `${(slideIndex - slidesCount) * 100}vh`; //3 7 11  -100 -500
            leftSection.style.top = `-${(slideIndex+1) * 100}vh`; //3 7 11  
        } 
    }
    
    const height = document.querySelector('.container').clientHeight;

    if (slideIndex < 0) {
        rightSection.style.transform = `translateY(${Math.abs(slideIndex) * height}px)`;
        leftSection.style.transform = `translateY(${slideIndex * height}px)`;    
    } else{
        rightSection.style.transform = `translateY(-${slideIndex * height}px)`;
        leftSection.style.transform = `translateY(${slideIndex * height}px)`;    
    }
}

function timeOut() {
    setTimeout(function() {timer = true;}, 500);
}