import "./format.js";
import { touchedField, handleError } from "./auth.js";
import { Post } from "../data/mock.js";

const query = (q) => document.querySelector(q);
const queryAll = (q) => document.querySelectorAll(q);

const form = query(".form");
const allInputs = queryAll("input");

function onSubmit(event, fields) {
  // VERICA-SE O EVENT DO CLICK TEM A CLASSE BTN
  if (!event.target.classList.contains("btn")) return;

  const [name, email, CPF] = fields;
  sendData(name.value, email.value, CPF.value);
}

form.addEventListener("blur", (event) => touchedField(event), true);

form.addEventListener("click", (event) => {
  handleError(event, allInputs);
  if (!handleError(event, allInputs)) onSubmit(event, allInputs);
});

function currentDate() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const currentDate = `${day}/0${month + 1}/${year}`;

  return currentDate;
}

function sendData(name, email, CPF) {
  const users = {
    name,
    email,
    CPF,
    currentDate: currentDate(),
  };
  // ENVIANDO DADOS PARA O JSON-SERVER
  Post(users);
  // .then(() => (window.location.href = "./../list/list.html"))
  // .catch((error) => console.error(error.message));
}
