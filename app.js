//change title
const currentTitle = document.title;
window.addEventListener("blur",() => {
  document.title="TORNA PRESTO";
});
window.addEventListener("focus",() =>{
  document.title=currentTitle;
});

const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

//dark theme
const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg"
var theme = "dark";
document.body.style="background-color: var(--bs-dark);transition: 0.5s;"
const root = document.querySelector(":root");
const container = document.getElementsByClassName("theme-container")[0];
const themeIcon = document.getElementById("theme-icon");
container.addEventListener("click", setTheme);

//slider product
const products = [
  {
    id: 1,
    title: "Ascanio Romagnani",
    par:"Dal punto di vista tecnico, questo attaccante è un vero artista del pallone. La sua capacità di controllo di palla è sublime, riuscendo a mantenere il possesso anche sotto pressione. La sua tecnica di tiro è impeccabile, capace di segnare da qualsiasi posizione: potenti conclusioni da fuori area, precisi colpi di testa e raffinate conclusioni sottoporta sono tutte nel suo repertorio. La sua versatilità gli permette di giocare sia come centravanti puro che come seconda punta, adattandosi alle diverse esigenze tattiche della squadra.Nonostante la sua forza, questo attaccante possiede un'eleganza naturale nei movimenti. Ogni suo gesto sembra studiato e armonioso, trasformando le azioni più fisiche in momenti di pura arte calcistica. Le sue progressioni palla al piede sono fluide e aggraziate, incantando il pubblico con dribbling sofisticati e passaggi millimetrici. La sua capacità di unire potenza ed eleganza lo rende un giocatore unico nel panorama calcistico mondiale.",
    colors: [
      {
        code: "jarvis",
        img: "ascanio.jpg",
      }
    ],
  },
  {
    id: 2,
    title: "Matteo Alessandrini",
    par:"Il Matador è uno dei calciatori più formidabili e temuti nel panorama calcistico mondiale. Il soprannome, che evoca l'immagine di un torero audace e coraggioso, si adatta perfettamente a questo giocatore alto e possente, capace di dominare le difese avversarie con la sua presenza fisica e abilità tecnica.Fuori dal campo, il Matador è conosciuto per il suo carisma e la sua personalità affabile. È un beniamino dei tifosi, non solo per le sue prestazioni sul campo, ma anche per la sua umiltà e il suo impegno nelle attività sociali e comunitarie. La sua capacità di connettersi con le persone lo rende un ambasciatore ideale per il calcio e un modello per le giovani generazioni.",
    colors: [
      {
        code: "renzi",
        img: "matteo.jpg" ,
      }
    ],
  },
  {
    id: 3,
    title: "Valerio Falanga",
    par:"Questo calciatore è conosciuto per la sua straordinaria intelligenza di gioco, una qualità che lo rende uno dei giocatori più ammirati e rispettati nel panorama calcistico mondiale. La sua capacità di leggere le situazioni di gioco e prendere decisioni rapide e precise lo distingue come un maestro della tattica e della strategia sul campo.La sua intelligenza di gioco è la qualità che lo rende veramente speciale. Questo giocatore possiede una visione periferica incredibile, riuscendo a vedere opportunità di passaggio che altri non noterebbero. È un maestro nel leggere il gioco e anticipare le mosse degli avversari, posizionandosi sempre in modo ottimale. La sua capacità di prendere decisioni rapide e accurate sotto pressione è impressionante, rendendolo il cervello della squadra.",
    colors: [
      {
        code: "lightgray",
        img: "valerio.jpg",
      }
    ],
  },
  {
    id: 4,
    title: "Michele Pellicci",
    par:"Il giocatore difensivo in questione è uno dei baluardi più temuti e rispettati nel panorama calcistico mondiale. La sua abilità nelle scivolate e la sua resistenza in campo lo rendono un elemento fondamentale per la difesa della sua squadra, capace di fermare anche gli attaccanti più pericolosi con interventi precisi e puliti.La specialità di questo difensore sono le scivolate. Le sue scivolate sono sempre tempestive e pulite, riuscendo a sottrarre il pallone agli avversari senza commettere fallo. La sua precisione in questi interventi è frutto di un'ottima tecnica e di una lettura del gioco sopraffina. Oltre alle scivolate, è abile nei colpi di testa, sfruttando la sua altezza e il suo tempismo per respingere i cross e le palle inattive.",
    colors: [
      {
        code: "black",
        img: "michele 2.jpg",
      }
    ],
  },
  {
    id: 5,
    title: "Lorenzo Adducci",
    par:"Lorenzo Adducci Neuer è conosciuto per il suo stile di gioco unico come sweeper-keeper, cioè un portiere che gioca molto fuori dalla propria area di rigore, intervenendo spesso come un difensore aggiunto. È apprezzato per la sua eccellente capacità di leggere il gioco, i riflessi rapidi, la distribuzione della palla e la sicurezza nelle uscite.",
    colors: [
      {
        code: "lightgray",
        img: "lorenzo.jpg",
      }
    ],
  },
];

let choosenProduct = products[0];
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductdescription = document.querySelector(".productDescription");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];
    //cambiare paragrafo
    currentProductdescription.textContent = choosenProduct.par;
    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});
currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});


//dark theme function
function setTheme() {
  switch (theme) {
  case "dark":
      document.body.style.color="black"
      document.getElementById("sottotitoli").style.color = "gray";
      setLight();
      theme = "light";
      break;
  case "light":
      document.body.style.color="white"
      setDark();
      document.getElementById("sottotitoli").style.color = "white";
      theme = "dark";
      break;
  }
}
function setLight() {
  root.style.setProperty(
  "--bs-dark",
  "linear-gradient(318.32deg, #c3d1e4 0%, #dde7f3 55%, #d4e0ed 100%)"
  );
  container.classList.remove("shadow-dark");
  setTimeout(() => {
  container.classList.add("shadow-light");
  themeIcon.classList.remove("change");
  }, 300);
  themeIcon.classList.add("change");
  themeIcon.src = sun;
}
function setDark() {
  root.style.setProperty("--bs-dark", "#212529");
  container.classList.remove("shadow-light");
  setTimeout(() => {
  container.classList.add("shadow-dark");
  themeIcon.classList.remove("change");
  }, 300);
  themeIcon.classList.add("change");
  themeIcon.src = moon;
}