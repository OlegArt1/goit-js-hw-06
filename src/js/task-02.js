        const ingredients = [
        'Potatoes',
        'Mushrooms',
        'Garlic',
        'Tomatos',
        'Herbs',
        'Condiments',
      ];
        const list = document.querySelector("#ingredients");
        const addList = ingredients.map((ingredients) => `<li class='item'>${ingredients}</li>`).join("");
        list.innerHTML = addList;