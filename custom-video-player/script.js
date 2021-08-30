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
video.addEventListener('timeupdate', progressFunc);

//VOLUME BUTTON
function noVolume() {

    video.volume = 0;
    volumeSlider.value = 0;
    volumeIcon.src = 'svg/novolume.svg'
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


//KEYBOARD
function keyboard(e){
    
    e.preventDefault() 
    
    switch (e.keyCode){
        case 32:
            play();
            break
        case 77:
            noVolume();
            break;
        case 75:
            play();
            break;
            
            
        case 74:
            back();
            break;
        
            

    }
    
}
window.addEventListener("keydown", keyboard);
