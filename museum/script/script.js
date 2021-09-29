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




console.log(`Оценка - 141.5 балла 
Отзыв по пунктам ТЗ:
Не выполненные/не засчитанные пункты:
1) при перезагрузке (обновлении) страницы картины в блоке Galery отображаются в рандомном порядке 

Частично выполненные пункты:
1) вёрстка формы соответствует макету +5

2) при кликам по кнопке Discover the Louvre и карточкам секции Visiting открываются полноэкранные панорамы Google Street View встроенные в страницы вашего сайта при помощи iframe +2.5

3) кнопке "Book" в форме покупки билетов добавлен ripple-эффект. Демо: https://50projects50days.com/projects/button-ripple-effect/  +1

Выполненные пункты:
1) Вёрстка валидная. Для проверки валидности вёрстки используйте сервис https://validator.w3.org/. Валидной вёрстке соответствует надпись "Document checking completed. No errors or warnings to show."  +10

2) header, main, footer +2

3) семь элементов section (по количеству секций) +2

4) только один заголовок h1 +2

5) семь заголовков h2 (по количеству секций) +2

6) шесть заголовков h3 (по количеству карточек) +2

7) два элемента nav (основная и вспомогательная панель навигации) +2

8) три списка ul > li > a (основная и вспомогательная панель навигации, ссылки на соцсети) +2

9) тринадцать кнопок button (четыре из них в секции Video, пять в секции Tickets, по две - стрелки слайдера и плейлиста) +2

10) три тега input type="radio" (в секции Tickets) +2

11) два тега input type="number"(в секции Tickets) +2

12) два тега input type="range" (громкось и прогрес-бар видео) +2

13) для всех элементов img указан обязательный атрибут alt +2

14) блок header +5

15) секция Welcome +5

16) секция Visiting +5

17) секция Explore +5

18) секция Video +5

19) секция Gallery +5

20) секция Tickets +5

21) секция Contacts +5

22) блок footer +5

23) форма плавно выдвигается слева при открытии и плавно возвращается назад при закрытии. В открытом состоянии под формой есть полупрозрачный overlay, который занимает весь экран. Форма и overlay прокручиваются вместе со страницей +2

24) форма открывается при клике по кнопке Buy Now в секции Tickets и закрывается кликом по иконке с крестиком в верхнем правом углу или кликом по overlay +2

25) при вёрстке формы используются следующие элементы: form, input type="date", input type="time", input type="text", input type="email", input type="tel", input type="number", select +8

26) добавлен favicon +2

27) для построения сетки используются флексы или гриды +2

28) при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2

29) фоновый цвет каждого блока и секции тянется на всю ширину страницы +2

30) иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2

31) расстояние между буквами, там, где это требуется по макету, регулируется css-свойством letter-spacing +2

32) переключаются радиокнопки в блоке Tickets, одновременно может быть выбрана только одна кнопка +2

33) в блоке Contacts правильно указанны ссылки на почту mailto и на телефон tel +2

34) в футере добавлены ссылки на соцсети. Круглая граница вокруг иконок соцсетей выполнена при помощи css +2

35) плавная прокрутка по якорям +5

36) параллакс +5

37) изменение стиля интерактивных элементов при наведении и клике. Интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты – изменение цвета фона или шрифта, появление подчёркивания и т.д. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили, если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +5

38) обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +4

39) интерактивность при наведении карточек в секции Visiting предусматривает плавное растягивание подчёркивания заголовка карточки на всю ширину карточки +2

40) интерактивность при наведении иконок социальных сетей в футере предусматривает изменение цвета иконки и круглой границы вокруг иконки на золотистый +2

41) можно передвигать ползунки громкости и прогресс-бара видео, при этом цвет шкалы до и после ползунка отличается и соответствует макету +2

42) кликами по кнопкам + и - в секции Tiskets можно менять количество билетов Basic и Senior от 0 до 20 +2


`)