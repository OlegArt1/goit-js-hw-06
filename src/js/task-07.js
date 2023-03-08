
const inputFontSize = document.querySelector("#font-size-control");

const outputFontSize = document.querySelector("#text");

inputFontSize.style.marginTop = '10px';

inputFontSize.style.marginLeft = '20px';

outputFontSize.style.marginLeft = '40px';

inputFontSize.addEventListener("input", (event) =>
{
    outputFontSize.style.fontSize = inputFontSize.value + 'px';
});