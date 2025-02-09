"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = (noCount % 6);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Prepara el pototok, tenemo una cita el 14 de Febrero :3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "Nio",
    "Estás segura?",
    "Desgraciade, acepta mielde",
    "Te voy a lapear el pototok, acepta caraje",
    "Te la voy a meter por el pototok desgraciade, acepta",
    "Gei gei gei gei",
    "Ya no te voy a comprar salchipapas",
    "Mala",
    "Ya pue oie, acepta",
    "Pon no de nuevo y ya verás lo que te va a pasar",
    "Chau, gei",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);

  if (messages[messageIndex] === "Chau, gei") {
    catImg.src = "img/creepy.png";
    titleElement.style.display = "none";
    buttonsContainer.style.display = "none";
    catImg.style.width = "100vw";
    catImg.style.height = "100vh";
    catImg.style.margin = "0";
    catImg.style.objectFit = "cover";
  }
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
