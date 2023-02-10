const fontSizeInput = document.querySelector("#font-size-control");
const fontSizeOutput = document.querySelector("#text");
fontSizeInput.addEventListener("input", (event) => {
    fontSizeOutput.style.fontSize = fontSizeInput.value + 'px';
});