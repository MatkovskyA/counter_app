let button = document.querySelector(".button__plus");
let button2 = document.querySelector(".button__reset");
let counterText = document.querySelector(".counter__meaning");
let counter = 0;

button.addEventListener("click", function() {
    counter = counter + 1;
    counterText.innerText = counter;
});

button2.addEventListener("click", function () {
    counter = 0;
    counterText.innerText = counter;
})


