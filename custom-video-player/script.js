const player = document.querySelector('.player');
const video = player.querySelector('.video');
const progressBar = player.querySelector('.progress_filled');
const progress =player.querySelector('.progress')
const playButton = player.querySelector('.playButton');
const playCentral = player.querySelector('.central');
const backButton = player.querySelector('.backButton');
const fowardButton = player.querySelector('.forwardButton');
const volumeSlider = player.querySelector('.volumeSlider')
const volumeButton = player.querySelector('.volumeButton')
const volumeIcon = document.getElementById('volumeIcon')
const playIcon = document.getElementById('playIcon')
const fullScreenButton = player.querySelector('.fullScreenButton')


     
//PLAY
function play() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    
    if (video.paused){
        playCentral.style.zIndex = '10';
        playIcon.src = 'svg/play.svg';

    }
    else {
       playCentral.style.zIndex = '0';
       playIcon.src = 'svg/pause.svg';
    }
}
playButton.addEventListener('click', play);
playCentral.addEventListener('click', play);
video.addEventListener('click', play);

//BACK & FORWARD
function back() {
    video.currentTime -= 2;
}
function forward() {
    video.currentTime += 2;
}
backButton.addEventListener('click', back);
fowardButton.addEventListener('click', forward);

//PROGRESS
function progressFunc() {
  progressBar.style.flexBasis = `${(video.currentTime / video.duration) * 100}%`;
  if (video.currentTime === video.duration) {
    playIcon.src = 'svg/play.svg'; 
}
}
function move(e) {
    video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
}

video.addEventListener('timeupdate', progressFunc);
progress.addEventListener('click', move);

let prevSlider, prevVolume;
//VOLUME BUTTON
function noVolume() {
if (video.volume > 0){
    prevSlider = volumeSlider.value;
    prevVolume = video.volume;
    video.volume = 0;
    volumeSlider.value = 0;
    volumeIcon.src = 'svg/novolume.svg';
} else {
    volumeSlider.value = prevSlider;
    video.volume = prevVolume;
    volumeIcon.src = 'svg/volume.svg'
}
    
}
volumeButton.addEventListener('click', noVolume)
//VOLUME
function levelChange() {
    video.volume = this.value;
    if (video.volume === 0) {
        volumeIcon.src = 'svg/novolume.svg'
    } else {
        volumeIcon.src = 'svg/volume.svg'
    }
    
}
volumeSlider.addEventListener('change', levelChange);
volumeSlider.addEventListener('mousemove', levelChange);

//FULLSCREEN
//player.webkitRequestFullscreen(); 

function fullscreen (){
    if (document.webkitFullscreenElement && document.webkitFullscreenElement.nodeName == 'VIDEO') {
        video.webkitExitFullScreen();
    }else if (document.fullscreenElement && document.fullscreenElement.nodeName == 'VIDEO') {
        video.exitFullScreen();
    }else if (document.mozFullscreenElement && document.mozFullscreenElement.nodeName == 'VIDEO') {
        video.mozExitFullScreen();
    


   }else{
    if(video.requestFullscreen) {
        //console.log('a');
      video.requestFullscreen();
    } else if(video.webkitRequestFullscreen) {
        //console.log('b');
      video.webkitRequestFullscreen();
    } else if(video.mozRequestFullscreen) {
        //console.log('c');
      video.mozRequestFullScreen();
    } 
}
    
}
   
   
fullScreenButton.addEventListener('click', fullscreen);
//fullScreenButton.addEventListener('click', fullscreen(video.src))

//KEYBOARD
function keyboard(e){
    
    e.preventDefault() //default disable
    
    switch (e.keyCode){
        case 32: //' '
            play();
            break
        case 77: // m
            noVolume();
            break;
        case 75:  //k
            play();
            break;
        case 76: //l
            forward();
            break;  
        case 74: //j
            back();
            break;
        case 70:  //f
            //console.log('f')
            fullscreen ();
            break;
        case 190: //>
            if (event.shiftKey && video.playbackRate < 2) {
                video.playbackRate += 0.25;
                //console.log(video.playbackRate);
            }
            break;
        case 188: //<
            if (event.shiftKey && video.playbackRate >0) {
                video.playbackRate -= 0.25;
                //console.log(video.playbackRate);
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

console.log ('30/30: реализован функционал плеера, добавлены обязательные клавиши управления с клавиатуры, а также 13 клавиш YouTube: j,k,l,0,1,2,3,4,5,6,7,8,9')