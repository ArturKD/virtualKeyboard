import i18Obj from "./lang";
import "/src/styles/main.scss";
import { showKeyboard } from "./modules/KeyboardContent/KeyboardContent";
import { showHeader } from "./modules/Header/Header";
import { shiftSymbols, unshiftSymbols } from "./modules/Taranslate/Symbols";

const SAVED_LANG = "en";
let currentLanguage = localStorage.getItem("language") || SAVED_LANG;
function saveLanguage() {
  localStorage.setItem("language", currentLanguage);
}

const body = document.querySelector("body");
body.insertAdjacentHTML("afterbegin", showKeyboard());
body.insertAdjacentHTML("afterbegin", showHeader());

const DATA = document.querySelectorAll("[data-i18]");
const letters = document.querySelectorAll(".letter");
const digits = document.querySelectorAll(".digit");
const symbols = document.querySelectorAll(".symbol");
const shifts = document.querySelectorAll(".shift");
const controlLeft = document.querySelector("#ControlLeft");
const altLeft = document.querySelector("#AltLeft");
const textarea = document.querySelector(".textarea");
const keyboard = document.querySelector(".keyboard");

let checkCapslock = false;
let cursorPosition = 0;
let textareaText = "";

function getLanguage() {
  DATA.forEach((el) => {
    const elem = el;
    elem.textContent = i18Obj[currentLanguage][elem.dataset.i18];
  });
}

function changeLetters() {
  if (checkCapslock) {
    letters.forEach((elem) => {
      const letter = elem;
      letter.textContent = letter.textContent.toLowerCase();
    });
  } else {
    letters.forEach((elem) => {
      const letter = elem;
      letter.textContent = letter.textContent.toUpperCase();
    });
  }
}

function deleteText() {
  if (cursorPosition > 0) {
    textareaText =
      textareaText.substring(0, textarea.selectionStart - 1) +
      textareaText.substring(textarea.selectionEnd);
    cursorPosition -= 1;
  }
}

function deleteTextOnKeyDel() {
  textareaText =
    textareaText.substring(0, textarea.selectionStart) +
    textareaText.substring(textarea.selectionEnd + 1);
}

textarea.addEventListener("click", () => {
  cursorPosition = textarea.selectionStart;
});

function enterText(text) {
  textareaText =
    textareaText.substring(0, cursorPosition) +
    text +
    textareaText.substring(cursorPosition);
  cursorPosition += text.length;
}

function updateTextarea() {
  textarea.textContent = textareaText;
  textarea.selectionStart = cursorPosition;
  textarea.focus();
}

function toUpperAndLowerCase(key) {
  if (checkCapslock) {
    key.classList.remove("capslock-active");
    key.classList.remove("active");
    key.classList.remove("active-background");
    letters.forEach((l) => {
      const letter = l;
      letter.textContent = letter.textContent.toLowerCase();
    });
    checkCapslock = false;
  } else if (!checkCapslock) {
    letters.forEach((elem) => {
      const letter = elem;
      letter.textContent = letter.textContent.toUpperCase();
    });
    key.classList.add("capslock-active");
    key.classList.add("active");
    key.classList.add("active-background");
    checkCapslock = true;
  }
}

function changeLanguage() {
  if (currentLanguage === "ru") {
    currentLanguage = "en";
  } else if (currentLanguage === "en") {
    currentLanguage = "ru";
  }
  saveLanguage();
  if (checkCapslock) {
    DATA.forEach((el) => {
      const elem = el;
      elem.textContent =
        i18Obj[currentLanguage][elem.dataset.i18].toUpperCase();
    });
  } else if (!checkCapslock) {
    DATA.forEach((el) => {
      const elem = el;
      elem.textContent =
        i18Obj[currentLanguage][elem.dataset.i18].toLowerCase();
    });
  }
}

function determinePressedKey(key) {
  if (key.classList.contains("key") && !key.classList.contains("control-key")) {
    enterText(key.textContent);
  }
  if (key.classList.contains("arrow")) {
    enterText(key.textContent);
  }
  if (key.classList.contains("capslock")) {
    toUpperAndLowerCase(key);
  }
  if (key.classList.contains("enter")) {
    enterText("\n");
  }
  if (key.classList.contains("tab")) {
    enterText("\t");
  }
  if (key.classList.contains("backspace")) {
    deleteText();
  }
  if (key.classList.contains("del")) {
    deleteTextOnKeyDel();
  }
  updateTextarea();
}

function pressKey(e) {
  let key;
  if (e.code) {
    key = document.querySelector(`#${e.code}`);
  } else {
    key = document.querySelector(`#ShiftRight`);
  }

  if (key) {
    if (key.classList.contains("key")) {
      e.preventDefault();
    }
    if (key.classList.contains("control-key")) {
      key.classList.add("active-background");
    }
    key.classList.add("active");
    if (key.classList.contains("shift")) {
      shiftSymbols(currentLanguage, symbols, digits);
      changeLetters();
    }
    determinePressedKey(key);
  }
  if (
    controlLeft.classList.contains("active") &&
    altLeft.classList.contains("active")
  ) {
    changeLanguage();
  }
}

function determineUpKey(key) {
  if (key.classList.contains("shift")) {
    if (!checkCapslock) {
      letters.forEach((elem) => {
        const letter = elem;
        letter.textContent = letter.textContent.toLowerCase();
      });
    } else if (checkCapslock) {
      letters.forEach((elem) => {
        const letter = elem;
        letter.textContent = letter.textContent.toUpperCase();
      });
    }
    unshiftSymbols(currentLanguage, symbols, digits);
  }
}

function releaseKey(e) {
  let key;
  if (e.code) {
    key = document.querySelector(`#${e.code}`);
  } else {
    key = document.querySelector(`#ShiftRight`);
  }
  if (key) {
    if (
      key.classList.contains("control-key") &&
      !key.classList.contains("capslock")
    ) {
      key.classList.remove("active-background");
    }
    if (!key.classList.contains("capslock")) {
      key.classList.remove("active");
    }
    determineUpKey(key);
  }
}
function whatKeyPressed(e) {
  const key = e.target;
  determinePressedKey(key);
}

document.addEventListener("keydown", pressKey);
document.addEventListener("keyup", releaseKey);

shifts.forEach((elem) =>
  elem.addEventListener("mousedown", () => {
    shiftSymbols(currentLanguage, symbols, digits);
    changeLetters();
  })
);

shifts.forEach((elem) =>
  elem.addEventListener("mouseup", (e) => {
    const key = e.target;
    determineUpKey(key);
  })
);
keyboard.addEventListener("click", whatKeyPressed);
getLanguage();
