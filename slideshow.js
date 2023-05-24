let slideShow = 0;
runSlide();

function runSlide() {
  let i;
  let slide = document.getElementsByClassName("slideshow");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";  
  }
  slideShow++;
  if (slideShow > slide.length) {slideShow = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slide[slideShow-1].style.display = "block";  
  dots[slideShow-1].className += " active";
  setTimeout(runSlide, 5000);
}

function farveSkift(element, Skift) {
  element.style.backgroundColor = Skift; 
}