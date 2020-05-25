console.log("works");
/* Variabes globales */
//Nodos
const buttonGetButtons = document.querySelector("#btnBotones");

const allButtons = document.querySelector("#botones");

const background = document.querySelector("#background");

// let eventDelegation = document.querySelector(e.target.classList[1]);

//Listeners
/* btnBotones.addEventListener("click", addButtons); */

//Funciones
//function declaration
/* function addButtons(e) {
  e.preventDefault();
  console.log("Diste click en el boton negro");
} */

//function expresion
const addButtons = function (e) {
  e.preventDefault();
  console.log("Diste click en el boton negro");
  botones.innerHTML = `<button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-danger">Danger</button>
    <button class="btn btn-success">Success</button>
    <button class="btn btn-warning">Warning</button> `;
};

// const colorChange = function (e) {
//   e.preventDefault();
// };

const delegacion = function (e) {
  e.preventDefault();
  // console.log(e.target.classList[1]);
  const colorButton = e.target.classList[1];
  switch (colorButton) {
    case "btn-primary":
      console.log("Diste click en primary");
      background.className = "bg-primary ";
      break;

    case "btn-secondary":
      console.log("Diste click en secundary");
      background.className = "bg-secondary";
      break;

    case "btn-danger":
      background.className = "bg-danger";
      break;

    case "btn-success":
      background.className = "bg-success";
      break;

    case "btn-warning":
      background.className = "bg-warning";
      break;
  }
};

/* //Con if
if (e.target.classList[1]) {
  const colorButton = e.target.classList[1];
  background.className = "bg-primary";
} else {
  background.className = "bg-secondary";
} */

//Listeners-evento
btnBotones.addEventListener("click", addButtons);
allButtons.addEventListener("click", delegacion);
// eventDelegation.addEventListener("click", colorChange);

//Tenemos que detectar cada uno de los botones y ejecutar una accion
//Primero hay que detectar el container, haciendo un click en el container y que cuando hagamos un click en todo ese container aparezca algo en la consola
//e.target.classList detecta las diferentes clases de los diferentes botones
