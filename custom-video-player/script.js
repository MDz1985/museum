const player = document.querySelector('.player');
const video = player.querySelector('.video');
const progressSlider = player.querySelector('progressSlider');
const playButton = player.querySelector('.playButton');
const playCentral = player.querySelector('.central');




//PLAY
function play() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    if (video.paused){playCentral.style.zIndex = '10';}
   else {playCentral.style.zIndex = '0';}
}
playButton.addEventListener('click', play);
playCentral.addEventListener('click', play)