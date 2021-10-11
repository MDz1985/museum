const slidesBox = document.querySelector('.welcome-slide-container-box')
const width = slidesBox.clientWidth;
const slides = document.querySelector('.welcome-slide');
let slidesCount = slides.children.length;

let firstSlide = slides.children[0];
let cloneFirstSlide = firstSlide.cloneNode(true);  //copy of the first right slide 
slides.insertBefore(cloneFirstSlide, slides.lastChild);

let lastRight = slides.children[slidesCount - 1];
let cloneLastRight = lastRight.cloneNode(true);  //copy of the last right slide 
slides.insertBefore(cloneLastRight,slides.firstChild);

// slidesCount = slides.children.length;
slides.style.width = String((slidesCount+2) * 100) + '%';
slides.style.left = '-100%';

let slideIndex = 0;
let timer = true;


const firstSquare = welcomeSlideBar.querySelector('.first-rectangle');
const secondSquare = welcomeSlideBar.querySelector('.second-rectangle');
const thirdSquare = welcomeSlideBar.querySelector('.third-rectangle');
const fourthSquare = welcomeSlideBar.querySelector('.fourth-rectangle');
const fifthSquare = welcomeSlideBar.querySelector('.fifth-rectangle');
let squaresArray = [firstSquare, secondSquare, thirdSquare, fourthSquare, fifthSquare];
let squaresNumber = 0;

//SQUARES
firstSquare.addEventListener('click', () =>{
    while (squaresNumber > 0){
        listSlide('left');
    }
})
secondSquare.addEventListener('click', () =>{
    if (squaresNumber > 1){
        while (squaresNumber > 1){
            listSlide('left');
        }
    }else{
        while (squaresNumber < 1){
            listSlide('right');
        }
    }
})
thirdSquare.addEventListener('click', () =>{
    if (squaresNumber > 2){
        while (squaresNumber > 2){
            listSlide('left');
        }
    }else{
        while (squaresNumber < 2){
            listSlide('right');
        }
    }
})
fourthSquare.addEventListener('click', () =>{
    if (squaresNumber > 3){
        while (squaresNumber > 3){
            listSlide('left');
        }
    }else{
        while (squaresNumber < 3){
            listSlide('right');
        }
    }
})
fifthSquare.addEventListener('click', () =>{
    if (squaresNumber > 4){
        while (squaresNumber > 4){
            listSlide('left');
        }
    }else{
        while (squaresNumber < 4){
            listSlide('right');
        }
    }
})  

        
    
    
    

      


//ARRROWS
rightArrow.addEventListener('click', () =>{
    if (timer == true) { 
        listSlide('right');
      
        timer = false; 
        timeOut();   
        }
})

leftArrow.addEventListener('click', () =>{
    if (timer == true) { 
        listSlide('left');
        
        timer = false; 
        timeOut();   
        }
})


let direction = '';
function swipe(e) {
    
   
    if (e.movementX > 0){
        direction = 'left';
            
            
        
    } else if (e.movementX < 0){
       direction = 'right';
        
    } else {return;}

    if (timer == true) { 
        listSlide(direction);
        direction = '' ;  
        timer = false; 
        timeOut();   
        }
    
    
    
    
    // progressBar.style.flexBasis = String(e.offsetX/progress.offsetWidth*100) + '%';
    // video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
}
    

 
// slidesBox.addEventListener("mousemove", swipe);



slidesBox.addEventListener("mousedown", function(e){
    
    swipe(e); 
    this.addEventListener("mousemove", swipe);
});

slidesBox.addEventListener("mouseup", function(e){
    
    this.removeEventListener("mousemove", swipe);
});
    



function myFunction(event) {
    var y = event.deltaY;
    if (y < 0){
        if (timer == true) { 
        listSlide('left');
        timer = false; 
        timeOut();   
        }
    } else if (y > 0){
        if (timer == true) { 
            listSlide('right');
            timer = false; 
            timeOut();   
        }
    }

  }











function listSlide(direction) {
    if (direction === 'right') {
       

       squaresArray[squaresNumber].style.fill = 'white';
        if (squaresNumber < 4){
           squaresNumber++;
        } else {
           squaresNumber=0;
        }
       squaresArray[squaresNumber].style.fill = '#D2B183';
        slideNumber.textContent = '0'+String(squaresNumber + 1);
        
        
        
        slideIndex++;


        if (slideIndex % slidesCount === 0 ) {
            slides.style.left = `${(slideIndex-1) * width}px`; 
            
        }
    } else if (direction === 'left') {
       squaresArray[squaresNumber].style.fill = 'white';
        if (squaresNumber > 0){
           squaresNumber--;
        } else {
           squaresNumber = 4;
        }
       squaresArray[squaresNumber].style.fill = '#D2B183';
        slideNumber.textContent = '0' + String(squaresNumber + 1);
        
        slideIndex--;

        if (slideIndex < 0 && (slideIndex-4) % slidesCount === 0) {
            
            slides.style.left = `${(slideIndex - slidesCount) * width}px`;
        } else if ((slideIndex > 0) && (slideIndex+1) % slidesCount  === 0) {
            
            slides.style.left = `${(slideIndex - slidesCount) * width}px`;
            
        } 
    }
    
    const height = document.querySelector('.container').clientHeight;

    if (slideIndex < 0) {
        slides.style.transform = `translateX(${Math.abs(slideIndex) * 100 / 7}%)`;
          
    } else{
        slides.style.transform = `translateX(-${slideIndex * 100 / 7}%)`;
        
    }
}

function timeOut() {
    setTimeout(function() {timer = true;}, 500);
}