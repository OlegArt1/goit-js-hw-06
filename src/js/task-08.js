
const form = document.querySelector(".login-form");

const submit = document.querySelector("button");

form.addEventListener("submit", handleSubmit);

form.style.marginTop = '30px';

form.style.marginLeft = '20px';

submit.style.marginTop = '20px';

function handleSubmit(event)
{
    event.preventDefault();

    const
    {
        elements: { email, password }

    } = event.currentTarget;

    if (email.value === "" || password.value === "")
    {
        return alert("Не все поля заполнены! Все поля должны быть заполнены!");
    }
    console.log("\nОтправка данных!");

    console.log(`\nLogin: ${email.value}; Password: ${password.value};`);

    event.currentTarget.reset();
}