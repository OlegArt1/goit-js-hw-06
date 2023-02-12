const textInput = document.querySelector("#validation-input");
const inputLength = document.querySelector('input[data-length="6"]');

textInput.addEventListener("blur", () =>
{
    const textValidation = textInput.value;

    if (textValidation.indexOf('6') != -1 || textValidation == 6)
    {
        textInput.setAttribute("class", "valid");
    }
    else if (textInput.value == '')
    {

        textInput.setAttribute("placeholder", "error");
        textInput.setAttribute("border-color", "#bdbdbd");
    }
    else
    {
        textInput.setAttribute("class", "invalid");
    }
});