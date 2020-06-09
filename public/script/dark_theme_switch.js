let lightTheme = true;

function toggleTheme() {
    const themeSwitch = document.getElementById("brightness");
    const everything = document.querySelector("*");

    if (lightTheme) {
        themeSwitch.src = "./asset/dark.svg";
        lightTheme = false;
        everything.style.color = "whitesmoke";
        everything.style.backgroundColor = "darkslategray";
    } else {
        themeSwitch.src = "./asset/light.svg";
        lightTheme = true;
        everything.style.color = "darkslategray";
        everything.style.backgroundColor = "whitesmoke";
    }
}

export {toggleTheme}