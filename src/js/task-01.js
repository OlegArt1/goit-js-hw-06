
function Categories()
{
    const categoriesElement = document.querySelector("ul");

    const itemElements = document.querySelectorAll(".item");

    categoriesElement.style.marginTop = '20px';

    categoriesElement.style.marginLeft = '20px';

    console.log("\nNumber of categories:", itemElements.length + ";\n\n");
    
    for (let i = 0; i < itemElements.length; i += 1)
    {
        console.log("\n\tCategory: ", itemElements[i].firstElementChild.textContent + ";");
        
        console.log("\n\tElements: ", itemElements[i].lastElementChild.children.length + ";");
    }
}