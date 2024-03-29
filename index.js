// Selecteurs
//document.querySelector('').[Commande à executer];
//document.querySelector('').style.background = 'yellow';
// const baliseHTML = document.querySelectore('');

//Click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-click");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

/*
Ordre de priorité d'application css 

<div> > #id > .class > baliseHTML  

*/

// --------------------------------------------------------
// Mouse event

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(1.3) translate(-39%, -39%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

// Je préfère mouseover pour éviter les bugs de survole d'autre élément
questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0, 0, 0, 0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "rgba(0, 0, 0, 1)";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

// --------------------------------------------------------
// KeyPress event

const keypreesContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = () => {
  const audio = new Audio();
  audio.src = "./Enter.mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  ring();
});

// -----------------------------------------------------------
// Scroll Event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//-----------------------------------------------------------
// Form Events
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let languafe = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
      <h3>Pseudo : ${pseudo}</h3>
      <h4>Language préféré : ${language}</h4>
    
    `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

//-------------------------------------------------------------
// Load event
window.addEventListener("load", () => {
  console.log("Document Chargé !");
});

//-------------------------------------------------------------
// ForEach
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    console.log(e.target);
  });
});

//-------------------------------------------------------------
// addEventListener Vs onclick
// On ne peut attribuer plusieur événement au onclick
// document.body.onclick = function() {
//   console.log("Scroll !");
// } // veille méthode 

// addEventListener deux avantages en plus on peut faire deux event en même temps, plus troisième argument 

// Bubbling => fin (de base l'eventlistener est paramétré en mode Bubbling)
document.body.addEventListener("click", () => {
  console.log('click 1 !');
}, false);


// Usecapture
document.body.addEventListener("click", () => {
  console.log('click 2 !');
}, true);

//---------------------------------------------------------------
// Stop propagation 
// questionContainer.addEventListener("click", (e) => {
//   alert("Test !");
//   e.stopPropagation();
// })

// removeEventListener 
// Permet d'enlever un evenement en faisant une action 

//---------------------------------------------------------------
// BOM

//console.log(window.innerHeight);
//console.log(window.scrollY);
//window.open('http://google.com', "cour js", height=600, width=800);
//window.close()

// Evénement adossés à Window
//alert("hello");

// confirm
btn2.addEventListener("click", (e) => {
  confirm("Voulez-vous vraiment vous tromper ?");
  
});

// prompt
btn1.addEventListener("click", () => {
  let answer = prompt("Entrez votre nom !");

  questionContainer.innerHTML += "<h3>Bien joué mon donut sucré au sucre <3 " + answer + "</h3>"
})

// Timer, compte à rebours 
// setTimeout(() => {
//   questionContainer.style.borderRadius = "300px";
// }, 2000) //Temps en milliseconde

// let interval = setInterval(() => {
//   document.body.innerHTML += `
//     <div class='box'>
//       <h2>Nouvelle Boite !</h2>
//     </div>
//   `;
// }, 2000)

// document.body.addEventListener("click", (e) => {
//   e.target.remove();
//   clearInterval(interval);
// });

// Location
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// location.replace("http://lequipe.fr");

// window.onload = () => {
//   location.href = "http://twitter.fr"
// };

//Navigator
// console.log(navigator.userAgent);

// History
// console.log(history)
// window.history.back()
// history.go(-2)

//---------------------------------------------------------------
//SetProperty
window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty('--y', e.layerY + "px");
});

