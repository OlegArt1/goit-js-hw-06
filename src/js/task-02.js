
const ingredients =
[
    'Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'
];
const list = document.querySelector("#ingredients");

const add_list = ingredients.map((ingredients) => `<li class='item'>${ingredients}</li>`).join("");

list.style.marginLeft = '10px';

list.style.marginTop = '10px';

list.innerHTML = add_list;