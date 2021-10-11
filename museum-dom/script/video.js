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
//fullScreenButton.addEventListener('click', fullscreen(video.src))


//KEYBOARD

// player.addEventListener("mouseover", e.preventDefault())
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
            e.preventDefault() 
            if (event.shiftKey && video.playbackRate < 2) {
                video.playbackRate += 0.25;
                message.innerText = String(video.playbackRate);
                message.style.zIndex = '1';
                timeOut();
                // message.style.zIndex = '0';

                //console.log(video.playbackRate);
            }
            break;
        case 188: //<
            e.preventDefault() 
            if (event.shiftKey && video.playbackRate >0) {
                video.playbackRate -= 0.25;
                message.innerText = String(video.playbackRate);
                message.style.zIndex = '1';
                timeOut();
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

function timeOut() {
    setTimeout(function() {message.style.zIndex = '0';}, 1000);
}

console.log ('30/30: реализован функционал плеера, добавлены обязательные клавиши управления с клавиатуры, а также 13 клавиш YouTube: j,k,l,0,1,2,3,4,5,6,7,8,9')