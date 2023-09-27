import { ModulMarketPlace } from "./components/ModulMarketPlace.js";
import { ModulNavigationMenu } from "./components/ModulNavigationMenu.js";
import { ModulTimer } from "./components/ModulTimer.js";
import { ModulWelcomePreloader } from "./components/ModulWelcomePreloader.js";

ModulNavigationMenu();

if (window.location.href == "http://127.0.0.1:5500/") {
    ModulTimer(24, 60, 0);
    ModulWelcomePreloader();
}

switch (window.location.href) {
    case "http://127.0.0.1:5500/":
        ModulTimer(24, 60, 0);
        ModulWelcomePreloader();
        break;
    
    case "http://127.0.0.1:5500/pages/MarketPlace.html":
        ModulMarketPlace();
        break;
}