// Bannershow start (Emilie)
let bannershow = document.getElementById("banner-container");
let paragraffer = bannershow.getElementsByClassName("rullendetekst");
let intervalTid = 2000; // Skift tekst hvert 2. sekund

// Definerer betingelserne for bannershowet
function visTekst(index) {
  for (let i = 0; i < paragraffer.length; i++) {
    if (i === index) {
        paragraffer[i].style.display = "block";
    } else {
        paragraffer[i].style.display = "none";
    }
  }
}

// Definerer funktionen så bannershowet kan køre
function startBannershow() {
    let index = 0;
    setInterval(function () {
      visTekst(index);
      index = (index + 1) % paragraffer.length;
    }, intervalTid);
  }

startBannershow();

// Event
bannershow.addEventListener("mouseover", function() {
    bannershow.style.backgroundColor = "#000000"; // Ændre til sort
});

bannershow.addEventListener("mouseout", function() {
    bannershow.style.backgroundColor = "#99A1A7"; // Ændre tilbage til grå
});

// Bannershow slut