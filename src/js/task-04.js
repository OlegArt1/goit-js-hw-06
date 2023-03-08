
let counterValue = 0;

const spanValue = document.querySelector("#value");

const divCounter = document.querySelector("#counter");

const decrementButton = document.querySelector('#counter button[data-action="decrement"]');

const incrementButton = document.querySelector('#counter button[data-action="increment"]');

spanValue.style.paddingLeft = '10px';

spanValue.style.paddingRight = '10px';

divCounter.style.marginTop = '20px';

divCounter.style.marginLeft = '20px';

const incrementClick = () =>
{
    counterValue++;
    
    spanValue.textContent = counterValue;
};
const decrementClick = () =>
{
    counterValue--;
    
    spanValue.textContent = counterValue;
};
incrementButton.addEventListener("click", incrementClick);

decrementButton.addEventListener("click", decrementClick);