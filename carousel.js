//Scroll vertikalt 
const element = document.querySelector(".carousel");

element.addEventListener('wheel', (event) => {
  event.preventDefault();

  element.scrollBy({
    left: event.deltaY < 0 ? -30 : 30,
    
  });
});

// Tilfældig rækkefølge af billederne
 // Array med det data som skal randomize
 let tasker = [
  {
    imgSrc: 'billeder/tasker/taske5.jpg',
    imgAlt: 'stof taske',
  },
  {
    imgSrc: 'billeder/tasker/taske1.jpg',
    imgAlt: 'sort læder taske',
  },
  {
    imgSrc: 'billeder/tasker/taske7.png',
    imgAlt: 'skuldertaske',
  },
  {
    imgSrc: 'billeder/tasker/taske6.png',
    imgAlt: 'stof taske',
  },
  {
    imgSrc: 'billeder/tasker/taske3.jpg',
    imgAlt: 'gul taske',
  }
];

// Funktion som randomizer rækkefølgen
function randomizeTasker() {
  let randomizedTasker = [];
  while (randomizedTasker.length < tasker.length) {
    let index = Math.floor(Math.random() * tasker.length);
    if (!randomizedTasker.includes(tasker[index])) {
      randomizedTasker.push(tasker[index]);
    }
  }
  return randomizedTasker;
}

// Kalder funktionen
let randomizedTasker = randomizeTasker();

// Variable til at gemmen HTML'en for carousellen
let carouselHTML = '';

// Looper igennem de randomized elementer i eventet tilføjer det til carouselHTML variablen
for (let i = 0; i < randomizedTasker.length; i++) {
  let tasker = randomizedTasker[i];
  carouselHTML += `
    <div class="hest">
      <div class="hvidhest">
          <div class="tasker">
              <img src="${tasker.imgSrc}" class="billederne" alt="${tasker.imgAlt}">
          </div>
      </div>
  </div>
  `;
}

// Indsætter det i events.html
document.querySelector('.carousel').innerHTML = carouselHTML;
