const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const hexLetter = ["a", "b", "c", "d", "e", "f"];

btn.addEventListener('click', () => {
    const randomHex = getRandomHex();
    // console.log(randomHex);
    document.body.style.backgroundColor = randomHex;
    color.textContent = randomHex;
});

function getRandomHex() {
    let sum = '';
    for(let i = 0; i < 3; i++){
        const letter = Math.floor(Math.random()*hexLetter.length);
        const hexResult = Math.floor(Math.random()*10) + letter;
        sum += hexLetter[letter] + hexResult;
    }
    return "#" + sum;
}