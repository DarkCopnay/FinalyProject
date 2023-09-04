let topnav_menu = document.getElementById("topnav_menu");
let topnan_menu_button = document.getElementById("topnan_menu_button");
let topnav_menu_close = document.getElementById("topnav_menu_close");

function ModulNavigationMenu() {
    topnan_menu_button.addEventListener("click", function() {
        topnav_menu.style.display = "flex";
        setTimeout(function() {
            topnav_menu.style.left = "0%";
        }, 100);
    });
    topnav_menu_close.addEventListener("click", function() {
        topnav_menu.style.left = "100%";

        setTimeout(function() {
            topnav_menu.style.display = "none";

            ModulNavigationMenu();
        }, 1000)
    })
}

export {ModulNavigationMenu};