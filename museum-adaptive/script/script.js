const player = document.querySelector('.player');
const progressBar = player.querySelector('.progress-slider_filled');
const progress = player.querySelector('.progress-slider')
const volumeBar = player.querySelector('.volume-slider_filled');
const volume = player.querySelector('.volume-slider');
const buyButton = document.querySelector('.amount-button-buy');
const ticketsForm = document.querySelector('.form');
const closeButton = document.querySelector('.close-form');
const bookButton = document.querySelector('.book-button');
//slider
const welcomeSlideBar = document.querySelector('.slide-panel');
const slideNumber = welcomeSlideBar.querySelector('.slide-number');
const leftArrow = welcomeSlideBar.querySelector('.left-arrow');
const rightArrow = welcomeSlideBar.querySelector('.right-arrow');
const firstRectangle = welcomeSlideBar.querySelector('.first-rectangle');
const secondRectangle = welcomeSlideBar.querySelector('.second-rectangle');
const thirdRectangle = welcomeSlideBar.querySelector('.third-rectangle');
const fourthRectangle = welcomeSlideBar.querySelector('.fourth-rectangle');
const fifthRectangle = welcomeSlideBar.querySelector('.fifth-rectangle');

let a = [firstRectangle,secondRectangle,thirdRectangle,fourthRectangle,fifthRectangle];
let n = 0;

// console.log (firstRectangle.style);
// secondRectangle.style.fill = '#D2B183';

function changeRectangleUp(){
    a[n].style.fill = 'white';
    if (n<4){
        n++;
    } else {
        n=0;
    }
    a[n].style.fill = '#D2B183';
    slideNumber.textContent = '0'+String(n+1);
    
}
function changeRectangleDown(){
    a[n].style.fill = 'white';
    if (n>0){
        n--;
    } else {
        n=4;
    }
    a[n].style.fill = '#D2B183';
    slideNumber.textContent = '0'+String(n+1);
    
}

rightArrow.addEventListener('click', changeRectangleUp);
leftArrow.addEventListener('click', changeRectangleDown);
// buttons.forEach(button => {
//     button.addEventListener('click', function (e) {
//         const x = e.clientX
//         const y = e.clientY

//         const buttonTop = e.target.offsetTop
//         const buttonLeft = e.target.offsetLeft

//         const xInside = x - buttonLeft
//         const yInside = y - buttonTop

//         const circle = document.createElement('span')
//         circle.classList.add('circle')
//         circle.style.top = yInside + 'px'
//         circle.style.left = xInside + 'px'

//         this.appendChild(circle)

//         setTimeout(() => circle.remove(), 500)
//     })
// })



function riple (e) {
        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
}

bookButton.addEventListener('click', riple);




function move(e) {
    progressBar.style.flexBasis = String(e.offsetX/progress.offsetWidth*100) + '%';
}
function moveVolume(e) {
    volumeBar.style.flexBasis = String(e.offsetX/volume.offsetWidth*100) + '%';
}

progress.addEventListener("mousedown", function(e){
    move(e); 
    this.addEventListener("mousemove", move);
});

progress.addEventListener("mouseup", function(e){
    this.removeEventListener("mousemove", move);
});

volume.addEventListener("mousedown", function(e){
    moveVolume(e); 
    this.addEventListener('mousemove', moveVolume);
});

volume.addEventListener("mouseup", function(e){
    this.removeEventListener('mousemove', moveVolume);
});

function buyTickets(){
    console.log(ticketsForm.style.width)
    ticketsForm.style.visibility = 'visible';
    ticketsForm.style.transform = 'none';
}

function buyTicketsClose(){
    console.log(ticketsForm.style.width)

    ticketsForm.style.transform = 'translateX(-100%)';
}

buyButton.addEventListener('click', buyTickets);
closeButton.addEventListener('click',buyTicketsClose);



const gallery = document.querySelector('.art-container');
// console.log (gallery.children.length);
let artArray = []
const pictureAdress = 'assets/galery/galery';
let pictures = gallery.firstElementChild;
for (i = 0; i < gallery.children.length; i++){
    artArray.push(pictureAdress + String(i+1) + '.jpg');

}
let sortArray = artArray.sort(sortFunction);  

function sortFunction(a, b) {  
  return 0.5 - Math.random();
}  

// console.log(sortArray);
for (i = 0; i < gallery.children.length; i++){
    
    pictures.src = sortArray[i];
    if (i !== gallery.children.length-1){
        pictures = pictures.nextElementSibling;
    }
    //    console.log(pictures.src);
}


// gallery.innerHTML += '<img src="'+artArray[0]+'"><br>';
// gallery.innerHTML += '<img src="'+artArray+'"><br>';
// gallery.firstElementChild
// console.log (gallery.children.length);




console.log(`Ваша оценка - 127 баллов 
Отзыв по пунктам ТЗ:
Не выполненные/не засчитанные пункты:
1) Форма покупки билетов 
feedback: 0

2) Форма покупки билетов 
feedback: 0


3) Форма покупки билетов 
feedback: 0

4) при нажатии на бургер-иконку меню появляется, плавно выдвигаясь слева, бургер-иконка изменяется на крестик. При нажатии на крестик меню исчезает, плавно возвращаясь назад, иконка крестика превращается в бургер-иконку 
feedback: 0

5) ссылки в меню работают, обеспечивая плавную прокрутку по якорям 
feedback: 0

6) при клике по ссылке в адаптивном меню, или при клике по любому месту сайта, кроме самого адаптивного меню, меню закрывается 
feedback: 0

7) вёрстка меню соответствует макету на всех проверяемых разрешениях 
feedback: 0

8) Результат проверки скорости сайта для мобильных устройств: 0 to 49 (red): Poor - не выполнено 0 ,баллов; 50 to 89 (orange): Needs Improvement - частично выполнено - 4 баллов; 90 to 100 (green): Good - выполнено полностью - 8 баллов 
feedback: 0

Частично выполненные пункты:
1) YouTube-видео в плейлисте в секции 'Video', маленькие видео выровнены по краям большого 
feedback: +1

Выполненные пункты:
1) Блок header 
feedback: +4

2) Секция Welcome 
feedback: +4

3) Секция Visiting 
feedback: +4

4) Секция Explore 
feedback: +4

5) Секция Video 
feedback: +4

6) Секция Gallery 
feedback: +4

7) Секция Tickets 
feedback: +4

8) Секция Contacts 
feedback: +4

9) Блок footer  
feedback: +4


10) Блок header 
feedback: +4

11) Секция Welcome 
feedback: +4

12) Секция Visiting 
feedback: +4

13) Секция Explore 
feedback: +4

14) Секция Video 
feedback: +4

15) Секция Gallery 
feedback: +4

16) Секция Tickets 
feedback: +4

17) Секция Contacts 
feedback: +4

18) Блок footer  
feedback: +4

19) Блок header 
feedback: +4

20) Секция Welcome 
feedback: +4

21) Секция Visiting 
feedback: +4

22) Секция Explore 
feedback: +4

23) Секция Video 
feedback: +4

24) Секция Gallery 
feedback: +4

25) Секция Tickets 
feedback: +4

26) Секция Contacts 
feedback: +4

27) Блок footer  
feedback: +4

28) Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки,  элементы не должны скрываться, обрезаться, наезжать друг на друга, если это не предусмотрено макетом. 
feedback: +4

29) слайдера в секции 'Welcome' 
feedback: +2

30) слайдера сравнения изображений в секции 'Explore' 
feedback: +2

31) кастомного видеоплеера в секции 'Video' 
feedback: +2

32) слайдера в секции 'Video' 
feedback: +2

33) галереи изображений и изображений в ней 
feedback: +2


34) карты 
feedback: +2

`)