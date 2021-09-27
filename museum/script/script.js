const player = document.querySelector('.player');
const progressBar = player.querySelector('.progress-slider_filled');
const progress = player.querySelector('.progress-slider')
const volumeBar = player.querySelector('.volume-slider_filled');
const volume = player.querySelector('.volume-slider');
const buyButton = document.querySelector('.amount-button-buy');
const ticketsForm = document.querySelector('.form');
const closeButton = document.querySelector('.close-form');
// const buttons = document.querySelectorAll('.ripple')

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