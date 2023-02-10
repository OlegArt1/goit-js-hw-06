function Categories()
{    
    const categoriesElement = document.querySelector("#categories");
    const itemElements = document.querySelectorAll(".item");

    const itemFirstElementChild = categoriesElement.firstElementChild.firstElementChild;
    const itemFirstLengthElementChild = categoriesElement.firstElementChild.lastElementChild;

    const itemElementChild = categoriesElement.firstElementChild.nextElementSibling.firstElementChild;
    const itemLengthElementChild = categoriesElement.firstElementChild.nextElementSibling.lastElementChild;    

    const itemLastElementChild = categoriesElement.lastElementChild.firstElementChild;
    const itemLastLengthElementChild = categoriesElement.lastElementChild.lastElementChild;
    
    console.log("Number of categories: ", itemElements.length);
    
    console.log("Category: ", itemFirstElementChild.textContent);
    console.log("Elements: ", itemFirstLengthElementChild.children.length);
    
    console.log("Category: ", itemElementChild.textContent);
    console.log("Elements: ", itemLengthElementChild.children.length);
    
    console.log("Category: ", itemLastElementChild.textContent);
    console.log("Elements: ", itemLastLengthElementChild.children.length);
}