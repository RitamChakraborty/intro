function setTheme() {
    const themeDataString = localStorage.getItem('themeData');

    if (themeDataString === null) {
        const themeData = {
            lightTheme: true
        }
        localStorage.setItem("themeData", JSON.stringify(themeData));
    }

    setPrimaryTheme();
}

function setPrimaryTheme() {
    const everything = document.querySelector("*");
    const themeSwitch = document.getElementById("brightness");
    const themeData = JSON.parse(localStorage.getItem('themeData'));

    if (themeData['lightTheme']) {
        everything.style.color = "darkslategray";
        everything.style.backgroundColor = "whitesmoke";
        themeSwitch.src = "./asset/dark.svg";
    } else {
        everything.style.color = "whitesmoke";
        everything.style.backgroundColor = "darkslategray";
        themeSwitch.src = "./asset/light.svg";
    }
}

export {setTheme}