let slideIndex = 0;
let slides = document.querySelectorAll('.slider img');

function nextSlide() {
 slideIndex++;
 if (slideIndex >= slides.length) {
  slideIndex = 0;
 }
 showSlide();
}

function prevSlide() {
 slideIndex--;
 if (slideIndex < 0) {
  slideIndex = slides.length - 1;
 }
 showSlide();
}

function showSlide() {
 
    for(let i=0; i<slides.length; i++){
        if(slideIndex !== i){
            slides[i].style.display = 'none';
        }
    }
    slides[slideIndex].style.display = '';
}

showSlide();