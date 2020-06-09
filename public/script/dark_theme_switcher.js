let lightTheme = getTheme();

function getTheme() {
    const themeDataString = localStorage.getItem('themeData');
    if (themeDataString === null) {
        const themeData = {
            lightTheme: true
        }
        localStorage.setItem("themeData", JSON.stringify(themeData));
        return true;
    } else {
        const themeData = JSON.parse(themeDataString);
        return themeData['lightTheme'];
    }
}

function toggleTheme() {
    const themeSwitch = document.getElementById("brightness");
    const everything = document.querySelector("*");

    if (lightTheme) {
        themeSwitch.src = "./asset/light.svg";
        lightTheme = false;
        everything.style.color = "whitesmoke";
        everything.style.backgroundColor = "darkslategray";
    } else {
        themeSwitch.src = "./asset/dark.svg";
        lightTheme = true;
        everything.style.color = "darkslategray";
        everything.style.backgroundColor = "whitesmoke";
    }

    setLocalStorage(lightTheme);
}

function setLocalStorage(lightTheme) {
    const themeData = {
        lightTheme: lightTheme
    }

    localStorage.setItem("themeData", JSON.stringify(themeData));
}

export {toggleTheme}