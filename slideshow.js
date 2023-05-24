let galleriShow = 0;
runGalleri();

function runGalleri() {
  let i;
  let galleri = document.getElementsByClassName("billedeslide");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < galleri.length; i++) {
    galleri[i].style.display = "none";  
  }
  galleriShow++;
  if (galleriShow > galleri.length) {galleriShow = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  galleri[galleriShow-1].style.display = "block";  
  dots[galleriShow-1].className += " active";
  setTimeout(runGalleri, 4000); // skift ved 4 sek
}

function skiftFarve(element, Farve) {
  element.style.backgroundColor = Farve; 
}