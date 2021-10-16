const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');


function textInput() {
    if (input.value === "") {
        return output.textContent = "Anonymous";
    }
    return output.textContent = input.value;
}

input.addEventListener("input", textInput);