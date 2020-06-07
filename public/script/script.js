const helloList = ["Hello", "Hola"];
const helloContainer = document.getElementById('hello');
let prev = 0;
let randIndex = prev;

setInterval(() => {
    while (randIndex === prev) {
        randIndex = Math.ceil(Math.random() * helloList.length) - 1;
    }

    helloContainer.innerHTML = `<p>${helloList[randIndex]}!</p>`;
    prev = randIndex;
}, 500);