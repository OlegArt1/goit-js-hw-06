
const controlElement = document.querySelector("#controls");

const boxElement = document.querySelector("#boxes");

const inputNumber = controlElement.firstElementChild;

const createButton = controlElement.firstElementChild.nextElementSibling;

const destroyButton = controlElement.lastElementChild;

const body = document.body;

let number = 30;

let count = 0;

controlElement.style.marginTop = '30px';

controlElement.style.marginLeft = '20px';

createButton.style.marginLeft = '5px';

inputNumber.style.width = '200px';

function addStyleElement(element, number)
{
    element.style.width = number + "px";
    
    element.style.height = number + "px";
    
    element.style.margin = "30px 0 0 30px";
    
    element.style.border = "1px solid black";
    
    element.style.backgroundColor = getRandomHexColor();
    
    return element;
}
function getRandomHexColor()
{
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function createBoxes(amount)
{
    for (let i = amount.value; i > 0; i -= 1)
    {
        boxElement.insertAdjacentHTML("afterend", "<div class='box-element'></div>");
    
        const newElement = document.querySelector(".box-element");
    
        number += 10;
  
        addStyleElement(newElement, number);
    }
    count = body.children.length - 5;
}
function destroyBoxes()
{
    number = 30;

    for (let i = 0; i < count; i += 1)
    {
        const newElements = document.querySelector(".box-element");

        newElements.remove();
    
        if (newElements === null)
        {
            console.log("null");
        }
    }
}
createButton.addEventListener("click", (event) =>
{
    if (inputNumber.value === '')
    {
        alert("Пустая колонка! Заполните колонку!");
    }
    createBoxes(inputNumber);
});
destroyButton.addEventListener("click", () =>
{
    destroyBoxes();
});