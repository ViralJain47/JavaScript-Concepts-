const slider = document.querySelectorAll(".slider img");
let slideIndex = 0;
let intervalId = null;
// initializeSlide();
document.addEventListener("DOMContentLoaded",initializeSlide);

function initializeSlide(){
    if(slider.length>0){
        slider[slideIndex].classList.add("displaySlide"); 
        intervalId = setInterval(nextSlide,1000);
    }

}

function showSlide(index){

    if(index >= slider.length)
    {
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slider.length - 1;
    }
    slider.forEach(slide =>{
        slide.classList.remove("displaySlide");
    })
    slider[slideIndex].classList.add("displaySlide");

}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}