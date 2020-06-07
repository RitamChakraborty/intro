const helloList = ["Hello", "Hola"];
const helloContainer = document.getElementById('hello');
helloContainer.innerHTML = `<p>Hello!</p>`;

setInterval(() => {
    let randIndex = Math.ceil(Math.random() * helloList.length) - 1;
    helloContainer.innerHTML = `<p>${helloList[randIndex]}!</p>`;
}, 500);