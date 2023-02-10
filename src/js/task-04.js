let counterValue = 0;
const spanValue = document.querySelector("#value");
const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');
const incrementClick = () => {
    counterValue++;
    spanValue.textContent = counterValue;
};
const decrementClick = () => {
    counterValue--;
    spanValue.textContent = counterValue;
};
incrementBtn.addEventListener("click", incrementClick);
decrementBtn.addEventListener("click", decrementClick);