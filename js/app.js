console.log("Hello World")

const definition = document.querySelector(".definition");
const term = document.querySelector(".term");
const checkButton = document.querySelector(".check");
const nextButton = document.querySelector(".next");

let words = {
    Hello: "Привет",
    Bye: "Пока",
    As: "Как"
}

data = Object.entries(words)

function getRandomWord() {
    randomTerm = data[Math.floor(Math.random() * data.length)];
    term.innerHTML = `<h3>${randomTerm[0]}</h3>`;
    definition.innerHTML = `<h3>${randomTerm[1]}</h3>`;
}

checkButton.addEventListener("click", function() {
    console.log("You clicked Check button")
    definition.style.display = "block";
});

nextButton.addEventListener("click", function() {
    console.log("You clicked Next button")
    getRandomWord();
});