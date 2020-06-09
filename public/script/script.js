import {setTheme} from "./theme_setter.js";
import {toggleTheme} from "./dark_theme_switcher.js";
import {helloList} from "./hello_list.js";

// Set primary theme from local storage data
setTheme();

// Change theme
const themeSwitch = document.getElementById('brightness');
themeSwitch.addEventListener('click', toggleTheme);

const helloContainer = document.getElementById('hello');
let prev = 0;
let randIndex = prev;

setInterval(() => {
    while (randIndex === prev) {
        randIndex = Math.ceil(Math.random() * helloList.length) - 1;
    }

    helloContainer.innerHTML = `<p>${helloList[randIndex]}!</p>`;
    prev = randIndex;
}, 1000);