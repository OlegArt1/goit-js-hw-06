
const inputText = document.querySelector("#validation-input");

inputText.style.marginTop = '20px';

inputText.style.marginLeft = '20px';

inputText.addEventListener("blur", () =>
{
    const textValidation = inputText.value;

    if (textValidation.indexOf(inputText.getAttribute("data-length")) !== -1 ||
    
        textValidation.length === Number(inputText.getAttribute("data-length")))
    {
        inputText.classList.add("valid");

        if (inputText.classList.contains("invalid"))
        {
            inputText.classList.replace("invalid", "valid");
        }
    }
    else if (inputText.value == "")
    {
        inputText.setAttribute("placeholder", "Error! Empty line!");
    }
    else
    {
        inputText.classList.add("invalid");

        if (inputText.classList.contains("valid"))
        {
            inputText.classList.replace("valid", "invalid");
        }
    }
});