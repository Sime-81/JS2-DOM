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
