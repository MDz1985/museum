const exploreImg = document.querySelector('.explore-img-container');
const exploreOld = document.querySelector('.explore-old-image')
const exploreLine = document.querySelector('.explore-slider');



console.log(exploreOld.offsetWidth)

function exploreSliderMove(e) {
    // console.log(e.offsetX)

    exploreOld.style.width = String(e.offsetX/exploreImg.offsetWidth*100) + '%';
}
// exploreLine.addEventListener("mousemove", exploreSliderMove);


exploreImg.addEventListener("mouseover", function(e){
    exploreSliderMove(e); 
    exploreImg.addEventListener("mousemove", exploreSliderMove);
});

exploreImg.addEventListener("mouseout", function(e){
    exploreImg.removeEventListener("mousemove", exploreSliderMove);
});