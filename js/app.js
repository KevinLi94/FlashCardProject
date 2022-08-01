console.log("Hello World")

const definition = document.querySelector(".definition");
const term = document.querySelector(".term");
const term2 = document.querySelector(".term2");
const checkButton = document.querySelector(".check");
const nextButton = document.querySelector(".next");

data = Object.entries(words)

function getRandomWord() {
    randomTerm = data[Math.floor(Math.random()*data.length)];
    term.innerHTML = `<h3>${randomTerm[0]}</h3>`;
    definition.innerHTML = `<h3>${randomTerm[1]}</h3>`;
}

nextButton.addEventListener("click", function() {
    console.log("You clicked Next button")
    getRandomWord();
});