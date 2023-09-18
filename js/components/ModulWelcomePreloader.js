let welcome_preloader = document.getElementById("welcome_preloader");
let welcome_preloader_content_top = document.querySelectorAll(".welcome_preloader_content_top");
let welcome_preloader_content_down = document.querySelectorAll(".welcome_preloader_content_down");

function  ModulWelcomePreloader() {
    if (document.cookie != 1) {
        welcome_preloader_content_top.forEach(function(wpc) {
            let welcome = wpc.childNodes[1];
            let to = wpc.childNodes[3];
            let logo = wpc.childNodes[5];
            document.body.style.overflow = "hidden";
    
            setTimeout(function() {
                welcome.style.opacity = 1;
                welcome.style.transform = "translateY(0)";
                setTimeout(function() {
                    to.style.opacity = 1;
                    to.style.transform = "translateY(0)";
                    setTimeout(function() {
                        logo.style.opacity = 1;
                        logo.style.transform = "translateY(0)";
                        setTimeout(function() {
                            wpc.style.transform = "translateY(-25px)";
                        }, 1100);
                    }, 500);
                }, 300)
            }, 100)
        });
    
        welcome_preloader_content_down.forEach(function(wpc) {
            let OPEN = wpc.childNodes[1];
    
            setTimeout(function() {
                OPEN.style.transform = "translateY(0)";
                OPEN.style.opacity = 1;
            }, 3000);
    
            OPEN.addEventListener("click", function() {
    
                OPEN.style.transform = "scale(0.9)";
                setTimeout(function() {
                    OPEN.style.transform = "scale(1)"
                    setTimeout(function() {
                        OPEN.style.transform = "translateY(-25px)";
                        OPEN.style.opacity = 0;
    
                        welcome_preloader_content_top.forEach(function(wpc) {wpc.style.transform = "translateY(0px)";});
    
                        setTimeout(function() {
                            welcome_preloader.style.top = "-100%"
                            document.body.style.overflowY = "scroll";
    
                            setTimeout(function() {
                                welcome_preloader.style.display = "none";
                                document.cookie = 1;
                            }, 1500);
                        }, 1000)
                    }, 200)
                }, 180)
            })
        });
    } else {
        document.body.overflowY = "scroll";
        welcome_preloader.style.display = "none";
        welcome_preloader.style.top = "-100%";
    }
}

export {ModulWelcomePreloader}