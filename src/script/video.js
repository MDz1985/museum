const player = document.querySelector('.player');
const progressBar = player.querySelector('.progress-slider_filled');
const progress = player.querySelector('.progress-slider')
const volumeBar = player.querySelector('.volume-slider_filled');
const volume = player.querySelector('.volume-slider');
const message = player.querySelector('.video-message');






// const player = document.querySelector('.player');
const video = player.querySelector('.video');
// const progressBar = player.querySelector('.progress_filled');
// const progress =player.querySelector('.progress')
const playButton = player.querySelector('.play-icon');
const playCentral = player.querySelector('.central-button');
const centralVideo = player.querySelector('.central')
// const backButton = player.querySelector('.backButton');
// const fowardButton = player.querySelector('.forwardButton');
// const volumeSlider = player.querySelector('.volumeSlider')    !!!!!
const volumeButton = player.querySelector('.volume-icon')
// const volumeIcon = document.getElementById('volumeIcon')
// const playIcon = document.getElementById('playIcon')
const fullScreenButton = player.querySelector('.fullscreen-button')

video.volume = 0.44;

    






//PLAY
let playStatus = 'play';
function play() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    // video.style.width = '100%'
    
    // video.contentWindow.postMessage({"event":"command","func":"playVideo","args":""}
// );
    if (video.paused){
        playCentral.style.display = 'block';
        // centralVideo.style.zIndex = '1';
        playButton.src = 'assets/svg/player/play.svg'
        playStatus = 'play';
        // playButton.style.background = `url('assets/svg/player/play.svg')no-repeat`
    }
    else {
        playCentral.style.display = 'none';
        // centralVideo.style.zIndex = '0';
        playStatus = 'pause';
        
    // playButton.style.background = `url('assets/svg/player/pause.svg')no-repeat`
        playButton.src = 'assets/svg/player/pause.svg'
    
    }
}
playButton.addEventListener('click', play);
playButton.addEventListener('mouseover', playHover);
playButton.addEventListener('mouseout', playHoverOut);
function playHover(){
    playButton.src = 'assets/svg/player/'+ playStatus + 'Hover.svg';
}
function playHoverOut(){
    playButton.src = 'assets/svg/player/'+ playStatus + '.svg';
    console.log(playStatus);
}
// playCentral.addEventListener('click', play);

centralVideo.addEventListener('click', play);







//PROGRESS
function progressFunc() {
  progressBar.style.flexBasis = `${(video.currentTime / video.duration) * 100}%`;
  if (video.currentTime === video.duration) {
    video.pause();
    // play();
    video.currentTime = 0;
    playButton.src = 'assets/svg/player/play.svg';
    playCentral.style.display = 'block';
    playStatus = 'play';
}
}

function move(e) {
    progressBar.style.flexBasis = String(e.offsetX/progress.offsetWidth*100) + '%';
    video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
}
    


video.addEventListener('timeupdate', progressFunc);


progress.addEventListener("mousedown", function(e){
    move(e); 
    this.addEventListener("mousemove", move);
});

progress.addEventListener("mouseup", function(e){
    this.removeEventListener("mousemove", move);
});
    









//VOLUME BUTTON

let volumeStatus = 'volume';
let prevVolume = 0.01;

function noVolume() {
if (video.volume > 0){
    // prevSlider = volumeSlider.value;
    prevVolume = video.volume;
    video.volume = 0;
    volumeBar.style.flexBasis = '0%';
    volumeButton.src = 'assets/svg/player/mute.svg';
    volumeStatus = 'mute';
    // volumeButton.style.background  = `url('assets/svg/player/mute.svg')`;
} else {
    volumeBar.style.flexBasis = String(prevVolume*100) + '%';
    video.volume = prevVolume;
    volumeButton.src = 'assets/svg/player/volume.svg'
    volumeStatus = 'volume';
    // volumeButton.style.background = `url('assets/svg/player/volume.svg')`;
    prevVolume = 0.01;
}
    
}
volumeButton.addEventListener('click', noVolume)
volumeButton.addEventListener('mouseover', volumeHover);
volumeButton.addEventListener('mouseout', volumeHoverOut);
function volumeHover(){
    volumeButton.src = 'assets/svg/player/'+ volumeStatus + 'Hover.svg';
}
function volumeHoverOut(){
    volumeButton.src = 'assets/svg/player/'+ volumeStatus + '.svg';
}




// //VOLUME
function moveVolume(e) {
    volumeBar.style.flexBasis = String(Math.floor(10000 * e.offsetX / volume.offsetWidth) / 100) + '%';
    if (Math.floor(100 * e.offsetX / volume.offsetWidth) / 100 < 0){
        video.volume = 0;
    } else if (Math.floor(100 * e.offsetX / volume.offsetWidth) / 100 > 1){
        video.volume = 1;
    } else{
        video.volume = Math.floor(100 * e.offsetX / volume.offsetWidth) / 100;
    }
    if (video.volume === 0) {
        volumeButton.src = 'assets/svg/player/mute.svg'
        // volumeButton.style.background  = `url('assets/svg/player/mute.svg')`;
    } else {
        volumeButton.src = 'assets/svg/player/volume.svg'
        // volumeButton.style.background = `url('assets/svg/player/volume.svg')`;
    }
    
        // console.log(video.volume)   

}



volume.addEventListener("mousedown", function(e){
    moveVolume(e); 
    this.addEventListener('mousemove', moveVolume);
});

volume.addEventListener("mouseup", function(e){
    this.removeEventListener('mousemove', moveVolume);
});






//FULLSCREEN
//player.webkitRequestFullscreen(); 

function fullscreen (){
    if (document.webkitFullscreenElement && document.webkitFullscreenElement.nodeName == 'VIDEO') {
        video.webkitExitFullScreen();
    }else if (document.fullscreenElement && document.fullscreenElement.nodeName == 'VIDEO') {
        video.exitFullScreen();
    
    


   }else{
       if(video.requestFullscreen) {
           //console.log('a');
         video.requestFullscreen();
       } else if(video.webkitRequestFullscreen) {
           //console.log('b');
         video.webkitRequestFullscreen();
       }
    }
    
}
   
   
fullScreenButton.addEventListener('click', fullscreen);



//KEYBOARD


function keyboard(e){
    
    let a = e.prevent
    // e.preventDefault() //default disable
    
    switch (e.keyCode){
        case 32: //' '
        console.log(e)
            e.preventDefault() 
            play();
            break
        case 77: // m
            // e.preventDefault() 
            noVolume();
            break;
        case 75:  //k
            // e.preventDefault() 
            play();
            break;
        case 76: //l
            // e.preventDefault() 
            forward();
            break;  
        case 74: //j
            // e.preventDefault() 
            back();
            break;
        case 70:  //f
            // e.preventDefault() 
            fullscreen ();
            break;
        case 190: //>
            // e.preventDefault() 
            if (event.shiftKey && video.playbackRate < 2) {
                video.playbackRate += 0.25;
                message.innerText = String(video.playbackRate);
                message.style.zIndex = '1';
                timeOut1();
                // message.style.zIndex = '0';

                //console.log(video.playbackRate);
            }
            break;
        case 188: //<
            // e.preventDefault() 
            if (event.shiftKey && video.playbackRate >0) {
                video.playbackRate -= 0.25;
                message.innerText = String(video.playbackRate);
                message.style.zIndex = '1';
                timeOut1();
                
            }
            break;
        case 48: //0  
            
            video.currentTime = 0;
            break;
        case 49:  //1  
            
            video.currentTime = 0.1 * video.duration;
            break;
        case 50: //2
            
            video.currentTime = 0.2 * video.duration;
            break;
        case 51: //3
            
            video.currentTime = 0.3 * video.duration;
            break;
        case 52: //4
            video.currentTime = 0.4 * video.duration;
            break;
        case 53: //5
            video.currentTime = 0.5 * video.duration;
            break;
        case 54: //6
            video.currentTime = 0.6 * video.duration;
            break;
        case 55: //7
            video.currentTime = 0.7 * video.duration;
            break;
        case 56: //7
            video.currentTime = 0.8 * video.duration;
            break;
        case 57: //7
            video.currentTime = 0.9 * video.duration;
            break;
    }
    
}

window.addEventListener("keydown", keyboard);

function timeOut1() {
    setTimeout(function() {message.style.zIndex = '0';}, 1000);
}

console.log (`Ваша оценка - 100 баллов 
Отзыв по пунктам ТЗ:
Не выполненные/не засчитанные пункты:
1) если видео с YouTube проигрывается, клик по кнопке Pause останавливает его проигрывание. Также проигрывание видео останавливается, если кликнуть по другому слайду или кнопке Play в центре другого слайда. В указанной ситуации другое видео должно запуститься, а текущее остановиться. Невозможно проигрывание нескольких YouTube видео одновременно 

2) если внутри слайда проигрывается видео с YouTube, клик по стрелке перелистывания слайдов или клик по буллету останавливает проигрывание видео 

3) есть возможность перелистывания слайдов с видео влево и вправо кликами по стрелкам. Слайды перелистываются по одному, при этом также меняется основное видео 

4) есть возможность перелистывания слайдов кликами по буллетам (кружочки внизу слайдера), при этом также меняется основное видео 

5) слайды перелистываются плавно с анимацией смещения вправо или влево (для смены основного видео анимация смещения не требуется и не проверяется) 

6) перелистывание слайдов бесконечное (зацикленное) 

7) при перелистывании слайдов буллет активного слайда подсвечивается (выделяется стилем) 

8) если основное видео проигрывалось при перелистывании слайдера, проигрывание видео останавливается, прогресс бар сдвигается к началу, иконки "Play" на панели управления и по центру видео меняются на первоначальные 

9) даже при частых кликах по стрелкам нет ситуации, когда слайд после перелистывания находится не по центру, нет ситуации, когда видны одновременно два слайда 

10) панель управления в полноэкранном режиме визуально выглядит так же, как на макете - кнопки равномерно распределены по всей ширине страницы, относительные размеры между кнопками и ползунками, а также относительные размеры самих кнопок остались прежними 

11) при прокрутке страницы вниз появление картин секции Galery сопровождается анимацией: изображения плавно поднимаются снизу вверх, увеличиваясь и создавая эффект выплывания. В качестве образца анимации используйте анимацию на сайте Лувра https://www.louvre.fr/ 

12) если прокрутить страницу вверх и затем снова прокручивать вниз, анимация появления картин повторяется 

13) при обновлении страницы, если она к тому моменту была прокручена до секции Galery, анимация картин повторяется 

14) при обновлении страницы сохраняется выбранное ранее количество билетов Basic и Senior, выбранный тип билета, общая цена за них 

15) когда при клике по кнопке Buy now открывается форма, она уже содержит данные, указанные на странице сайта - количество билетов, их тип, общая цена за них 

16) когда пользователь выбирает дату в форме слева, она отображается в билете справа 

17) нельзя выбрать дату в прошлом 

18) когда пользователь выбирает время в форме слева, оно отображается в билете справа 

19) время можно выбирать с 9:00 до 18:00 с интервалом в 30 минут 

20) можно изменить тип билета в поле Ticket type слева при этом меняется тип билета, цена билета и общая стоимость билетов справа 

21) можно изменить количество билетов каждого типа в поле слева при этом меняется количество билетов и общая стоимость билетов справа 

22) валидация имени пользователя. Имя пользователя должно содержать от 3 до 15 символов, в качестве символов могут быть использованы буквы английского или русского алфавита в нижнем или верхнем регистре и пробелы 

23) валидация e-mail должна пропукать только адреса вида username@example.com, где: username - имя пользователя, должно содержать от 3 до 15 символов (буквы, цифры, знак подчёркивания, дефис), не должно содержать пробелов; @ - символ собачки; example - домен первого уровня состоит минимум из 4 латинских букв; com - домен верхнего уровня, отделяется от домена первого уровня точкой и состоит минимум из 2 латинских букв 

24) валидация номера телефона: номер содержит только цифры; без разделения или с разделением на две или три цифры; разделение цифр может быть через дефис или пробел; с ограничением по количеству цифр не больше 10 цифр 

25) при попытке ввода в форму невалидного значения выводится предупреждение, например, "номер телефона может содержать только цифры" 

Выполненные пункты:
1) есть возможность перелистывания слайдов влево и вправо кликами по стрелкам 
feedback: +4

2) есть возможность перелистывания слайдов влево и вправо свайпами (движениями) мышки 
feedback: +4 (свайп подразумевает собой нажатие на клавишу мыши+движение мыши вправо/влево при проверке отключить toggle режим
) 
3) есть возможность перелистывания слайдов кликами по буллетам (квадратики внизу слайдера) 
feedback: +2


4) слайды перелистываются плавно с анимацией смещения вправо или влево 
feedback: +4

5) перелистывание слайдов бесконечное (зацикленное) 
feedback: +4

6) при перелистывании слайдов буллет активного слайда подсвечивается (выделяется стилем) 
feedback: +2

7) при перелистывании слайдов кликами или свайпами меняется номер активного слайда 
feedback: +2

8) даже при частых кликах или свайпах нет ситуации, когда слайд после перелистывания находится не по центру, нет ситуации, когда видны одновременно два слайда 
feedback: +2

9) при клике по самому слайду или кнопке Play в центре слайда, внутри слайда проигрывается видео с YouTube. Никакие изменения с основным видео при этом не происходят 
feedback: +2

10) при клике по кнопке "Play" слева внизу на панели видео начинается проигрывание видео, иконка кнопки при этом меняется на "Pause", большая кнопка "Play" по центру видео исчезает. Повторный клик на кнопку останавливает проигрывание видео, иконка меняется на первоначальную, большая кнопка "Play" по центру видео снова отображается 
feedback: +4

11) при клике по большой кнопке "Play" по центру видео, или при клике по самому видео, начинается проигрывание видео, иконка кнопки "Play" слева внизу на панели видео меняется на "Pause", большая кнопка "Play" по центру видео исчезает. Клик на видео, которое проигрывается, останавливает проигрывание видео, иконка кнопки "Play" слева внизу на панели видео меняется на первоначальную, большая кнопка "Play" по центру видео снова отображается 
feedback: +4

12) прогресс-бар отображает прогресс проигрывания видео 
feedback: +2

13) перетягивание ползунка прогресс-бара позволяет изменить время с которого проигрывается видео 
feedback: +2

14) если прогресс-бар перетянуть до конца, видео останавливается, соответственно, меняется внешний вид кнопок "Play" 
feedback: +2

15) при клике на иконку динамика происходит toggle звука и самой иконки (звук включается или выключается, соответственно изменяется иконка) 
feedback: +2

16) при перемещении ползунка громкости звука изменяется громкость видео 
feedback: +2

17) если ползунок громкости звука перетянуть до 0, звук выключается, иконка динамика становится зачеркнутой 
feedback: +2

18) если при выключенном динамике перетянуть ползунок громкости звука от 0, звук включается, иконка громкости перестаёт быть зачёркнутой 
feedback: +2

19) при нажатии на кнопку fullscreen видео переходит в полноэкранный режим, при этом видео и панель управления разворачиваются во весь экран. При нажатии на кнопку fullscreen повторно видео выходит из полноэкранного режима. Нажатие на клавишу для выхода из полноэкранного режима Esc не проверяем и не оцениваем 
feedback: +2


20) клавиша Пробел — пауза, при повторном нажатии - play 
feedback: +2

21) Клавиша M (англ) — отключение/включение звука 
feedback: +2

22) Клавиша F — включение/выключение полноэкранного режима 
feedback: 

23) Клавиши SHIFT+, (англ) — ускорение воспроизведения ролика 
feedback: +2

24) Клавиши SHIFT+. (англ) — замедление воспроизведения ролика 
feedback: +2

25) ползунок можно перетягивать мышкой по горизонтали 
feedback: +2

26) ползунок никогда не выходит за границы картины 
feedback: +2

27) при перемещении ползунка справа налево плавно появляется нижняя картина 
feedback: +2

28) при перемещении ползунка слева направо плавно появляется верхняя картина 
feedback: +2

29) при обновлении страницы ползунок возвращается в исходное положение 
feedback: +2

30) при изменении количества билетов Basic и Senior пересчитывается общая цена за них 
feedback: +4

31) у каждого типа билетов своя цена (20 €, 25 €, 40 € для Basic и половина этой стоимости для Senior). При изменении типа билета пересчитывается общая цена за них 
feedback: +4

32) в секции Contacts добавлена интерактивная карта 
feedback: +4

33) на карте отображаются маркеры, расположение и внешний вид маркеров соответствует макету 
feedback: +4

34) стиль карты соответствует макету 
feedback: +4

35) Любой собственный дополнительный функционал, улучшающий качество проекта. Например, ночная тема, плавная смена изображений в блоке Tickets, всплывающее окно с информацией про картины и их авторов, кнопка прокрутки страницы вверх, возможность проголосовать за понравившиеся картины с сохранением данных в local storage, всё зависит от вашей фантазии и чувства вкуса. Для удобства проверки выполненный вами дополнительный функционал включите в самооценку, которую выведите в консоль браузера 
feedback: +10 добавлены дополнительные кнопки управления плеером : k,0,1,2,3,4,5,6,7,8,9 и прокрутка слайдера в секции welcome колесом мыши


`)