const themeSwitch = document.getElementById("theme-switch");

const enableDarkmode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
    document.body.classList.remove("darkmode");
    localStorage.removeItem("darkmode");
};

if (localStorage.getItem("darkmode") === "active") {
    enableDarkmode();
}

themeSwitch.addEventListener("click", () => {
    if (document.body.classList.contains("darkmode")) {
        disableDarkmode();
    } else {
        enableDarkmode();
    }
});