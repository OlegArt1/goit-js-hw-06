const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () =>
{
    const textValidation = textInput.value;

    if (textValidation.indexOf(textInput.getAttribute("data-length")) !== -1 || textValidation.length === Number(textInput.getAttribute("data-length")))
    {
        textInput.classList.add("valid");

        if (textInput.classList.contains("invalid"))
        {
            textInput.classList.replace("invalid", "valid");
        }
    }
    else if (textInput.value == "")
    {
        textInput.setAttribute("placeholder", "Error! Empty line");
    }
    else
    {
        textInput.classList.add("invalid");

        if (textInput.classList.contains("valid"))
        {
            textInput.classList.replace("valid", "invalid");
        }
    }
});