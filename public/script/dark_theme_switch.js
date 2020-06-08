let lightTheme = true;

function toggleTheme() {
    const themeSwitch = document.getElementById('brightness');

    if (lightTheme) {
        themeSwitch.src = "./asset/dark.svg";
        lightTheme = false;
    } else {
        themeSwitch.src = "./asset/light.svg";
        lightTheme = true
    }
}

export {toggleTheme}