

// Declare a global variable named allBoldItems.
let allBoldItems;
// Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

// Create a function called highlight() that changes the color of all the bold text to blue.
function getBoldItems(){
    allBoldItems = document. getElementsByTagName("strong");
}

function highlight(){
   getBoldItems(); 
   for (const boldItem of allBoldItems){
    boldItem.style.color = "blue";
   }
}

function returnNormal(){
    getBoldItems()
for (const item of allBoldItems){
    item.style.color = "black";
}
}

const paragraph =  document.querySelector("p");
paragraph.addEventListener("mouseover",highlight);
paragraph.addEventListener("mouseout",returnNormal);

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example