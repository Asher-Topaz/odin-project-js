const button = document.querySelector("button"); 

function greet() {
    const name = prompt("what is your name?");
    alert(`Hello ${name}, nice to see you`);
}

button.addEventListener("click", greet);
