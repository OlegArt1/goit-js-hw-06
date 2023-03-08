
const inputText = document.querySelector("#name-input");

const spanOutput = document.querySelector("#name-output");

const text = document.querySelector("h1");

inputText.style.marginTop = '20px';

inputText.style.marginLeft = '20px';

text.style.marginTop = '20px';

text.style.marginLeft = '40px';

inputText.addEventListener("input", (event) =>
{
    spanOutput.textContent = event.currentTarget.value;
    
    if (spanOutput.textContent === "")
    {
        spanOutput.textContent = "Anonymous";
    }
});