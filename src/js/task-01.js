function Categories()
{    
    const categoriesElement = document.querySelector("#categories");
    const itemElements = document.querySelectorAll(".item");

    console.log("Number of categories: ", itemElements.length);
    
    for (let i = 0; i < 3; i += 1)
    {
        console.log("Category: ", itemElements[i].firstElementChild.textContent);
        console.log("Elements: ", itemElements[i].lastElementChild.children.length);
    }
}