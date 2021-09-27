const leftSection = document.querySelector('.leftSection');
const rightSection = document.querySelector('.rightSection');
const upButton = document.querySelector('.upButton');
const downButton = document.querySelector('.downButton');
const container = document.querySelector('.container')

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

/*
var scrollPos = 0;
upButton.scroll(function(){
   var st = $(this).scrollTop();
   if (st > scrollPos){
       alert('ghjhldhdsljdhls')
    }else {
        alert ('kjkljj');
      }
      scrollPos = st;
   });
*/
/*
function onWheel(e) {
    
    e = e || window.event;
    var delta = e.deltaY || e.detail || e.wheelDelta;
    
    if (delta < 0) {//мотаем вверх и стопорим если скролл уже вверху
    if (rightSection.scrollTop == 0) e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    }
    else {//когда мотаем вниз, стопорим скролл на низу
    //if (content.clientHeight + content.scrollTop - 55 > content.scrollHeight)
    if (container.clientHeight+rightSection.scrollTop >= 548)
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    }
    }
    
onWheel(rightSection)
*/

/*
function scroll(){
    //var elem = document.getElementById(id);
    var second = document.getElementById('second');
    var third = document.getElementById('third');
    var tempScrollTop = 0;
    var currentScrollTop = elem.scrollTop;
    if (tempScrollTop < currentScrollTop ){
      //scrolling down
        if(id == 'first'){
           second.className = 'scroll-one';
        } else if(id == 'second'){
           third.className = 'scroll-one';
        }
    }
    else if ( currentScrollTop < tempScrollTop){
    //scrolling up
        if(id == 'third'){
            third.className = 'scroll-down-third';
        } else if(id == 'second'){
           second.className = 'scroll-down';
        }
    }
    tempScrollTop = currentScrollTop;
  }

*/
 // инициализация документа
/*
 function populate(e) {
    var delta = e.deltaY || e.detail || e.wheelDelta;
    //alert (Window.pageYOffset)
    if (delta >0) {
        listSlide('up');
    } else if (delta <0){
        listSlide('down');
    }
    //if (timer == true) { 
        //listSlide('up');
      //alert (window.pageYOffset)
      //  timer = false; 
        //timeOut();   
        }
//}
    let e = 0
populate();
*/

function myFunction(event) {
    var y = event.deltaY;
    if (y < 0){
        if (timer == true) { 
        listSlide('up');
        timer = false; 
        timeOut();   
        }
    } else if (y > 0){
        if (timer == true) { 
            listSlide('down');
            timer = false; 
            timeOut();   
        }
    }

  }


//myFunction()

/*
addOnWheel(text, function(e) {

    var delta = e.deltaY || e.detail || e.wheelDelta;

    // отмасштабируем при помощи CSS
    if (delta > 0) scale += 0.05;
    else scale -= 0.05;

    text.style.transform = text.style.WebkitTransform = text.style.MsTransform = 'scale(' + scale + ')';

    // отменим прокрутку
    e.preventDefault();

  window.addEventListener('wheel', populate);
*/





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




    /*slideIndex--;

    if (slideIndex < 0 && (slideIndex-3) % slidesCount ===0) {
        //        alert(slideIndex + '<0')  
        leftSection.style.top = `${Math.abs(slideIndex+1) * 100}vh`; //(-1,-5,-9) 0 400 800
        rightSection.style.top = `${(slideIndex - slidesCount) * 100}vh` //-100 300 700 1100
    } else if ((slideIndex > 0) && (slideIndex+1) % slidesCount  === 0) {
         //       alert(slideIndex)  
        rightSection.style.top = `${(slideIndex - slidesCount) * 100}vh`; //3 7 11  -100 -500
        leftSection.style.top = `-${(slideIndex+1) * 100}vh`; //3 7 11  
    } 


const height = document.querySelector('.container').clientHeight;

if (slideIndex < 0) {
    rightSection.style.transform = `translateY(${Math.abs(slideIndex) * height}px)`;
    leftSection.style.transform = `translateY(${slideIndex * height}px)`;    
} else{
    rightSection.style.transform = `translateY(-${slideIndex * height}px)`;
    leftSection.style.transform = `translateY(${slideIndex * height}px)`;    
}
*/





/*
if (elem.addEventListener) {
    if ('onwheel' in document) {
      // IE9+, FF17+
      elem.addEventListener ("wheel", onWheel, false);
    } else if ('onmousewheel' in document) {
      // устаревший вариант события
      elem.addEventListener ("mousewheel", onWheel, false);
    } else {
      // 3.5 <= Firefox < 17, более старое событие DOMMouseScroll пропустим
      elem.addEventListener ("MozMousePixelScroll", onWheel, false);
    }
  } else { // IE<9
    elem.attachEvent ("onmousewheel", onWheel);
  }
  
  function onWheel(e) {
    e = e || window.event;
  
    // wheelDelta не дает возможность узнать количество пикселей
    var delta = e.deltaY || e.detail || e.wheelDelta;
  
    var info = document.getElementById('delta');
  
    info.innerHTML = +info.innerHTML + delta;
  
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);
  }
  */