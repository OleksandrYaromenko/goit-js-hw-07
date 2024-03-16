
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
 const btn = document.querySelector(".change-color");
const spanColorElement = document.querySelector(".color")
btn.addEventListener("click", () => {
  const rndCol = getRandomHexColor();
  document.body.style.backgroundColor = rndCol;
  spanColorElement.innerHTML = rndCol;
  console.log(rndCol)
});
