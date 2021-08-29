const player = document.querySelector('.player');
const video = player.querySelector('.video');
const progressBar = player.querySelector('.progress_filled');
const progress =player.querySelector('.progress')
const playButton = player.querySelector('.playButton');
const playCentral = player.querySelector('.central');
const backButton = player.querySelector('.backButton');
const fowardButton = player.querySelector('.forwardButton');
const volumeSlider = player.querySelector('.volumeSlider')


//PLAY
function play() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    if (video.paused){playCentral.style.zIndex = '10';}
   else {playCentral.style.zIndex = '0';}
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
}
video.addEventListener('timeupdate', progressFunc);

//VOLUME BUTTON


//VOLUME
function levelChange() {
    video.volume = this.value;
}
volumeSlider.addEventListener('change', levelChange);
volumeSlider.addEventListener('mousemove', levelChange);

