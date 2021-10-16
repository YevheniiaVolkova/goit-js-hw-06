const inputFontSize = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");

const sliderInput = () => {
  inputText.style.fontSize = `${inputFontSize.value}px`;
};

inputFontSize.addEventListener("input", sliderInput);