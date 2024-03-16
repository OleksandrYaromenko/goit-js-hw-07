let input = document.querySelector('#name-input');
let output = document.querySelector('#name-output');
input.addEventListener("input", nameReturn);
function nameReturn(event) {
    const newName = event.target.value.trim()
     if (event === "") {
         output.textContent = "Anonymous"
         return
    }
    output.textContent = newName
}
