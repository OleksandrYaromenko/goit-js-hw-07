const idElement = document.querySelector("#categories");
const children = idElement.children
console.log(`Number of categories: ${children.length}`)
const itemElement = document.querySelectorAll(".item")
itemElement.forEach((element) => {

let elementTitle = element.querySelector('h2').textContent;

let oneTitleElements = element.querySelectorAll('li');
let oneTitleElemntsQty = oneTitleElements.length;

	console.log(`Category: ${elementTitle}`);
  console.log(`Elemenst: ${oneTitleElemntsQty}`);

});