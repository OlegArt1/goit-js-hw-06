const textInput = document.querySelector("#validation-input");
const inputLength = document.querySelector('input[data-length="6"]');
textInput.addEventListener("blur", () => {
    if (textInput.value === inputLength.dataset.length)
    {
        textInput.style.borderColor = "#4caf50";
    }
    else if (textInput.value === '')
    {
        textInput.value = "Error";
    }
    else {
        textInput.style.borderColor = "#f44336";
    }
});