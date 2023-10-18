import { assets } from "../../../../assets/Assets";
import { useEffect } from "react";

export default function PreLoader() {
    document.body.style.overflow = "hidden";

    useEffect(() => {
        const PreLoaderTimeout =  setTimeout(function() {
            document.getElementById("Welcome").style.opacity = 1;
            document.getElementById("Welcome").style.transform = "translateY(0)";
    
            setTimeout(function() {
                document.getElementById("to").style.opacity = 1;
                document.getElementById("to").style.transform = "translateY(0)";
    
                setTimeout(function() {
                    document.getElementById("logo").style.opacity = 1;
                    document.getElementById("logo").style.transform = "translateY(0)";
    
                    setTimeout(function() {
                        document.getElementById("Welcome").style.transform = "translateY(-25px)";
                        document.getElementById("to").style.transform = "translateY(-25px)";
                        document.getElementById("logo").style.transform = "translateY(-25px)";
                    }, 1100)
    
                    setTimeout(function() {
                        document.getElementById("OpenButton").style.opacity = 1;
                        document.getElementById("OpenButton").style.transform = "translateY(0)";
                    }, 1200);
                }, 500);
            }, 300);
        }, 100);

        return () => {clearTimeout(PreLoaderTimeout)};
    })

    function ClosePreloader() {
        setTimeout(function() {
            document.getElementById("OpenButton").style.transform = "translateY(-25px)";
            document.getElementById("OpenButton").style.opacity = 0;

            document.getElementById("Welcome").style.transform = "translateY(0px)";
            document.getElementById("to").style.transform = "translateY(0px)";
            document.getElementById("logo").style.transform = "translateY(0px)";

            setTimeout(function() {
                document.getElementById("welcome_preloader").style.top = "-100%";
                document.body.style.overflowY = "scroll";
                
                setTimeout(function() {
                    document.getElementById("welcome_preloader").style.display = "none";
                }, 2000);
            }, 1500)
        }, 200)
    }

    return (
        <section id="welcome_preloader">
            <section className="welcome_preloader_blur"></section>
            <section className="welcome_preloader_content_top">
                <h2 id="Welcome">Welcome</h2>
                <h2 id="to">to</h2>
                <img id="logo" src={assets.logo} alt="logo"/>
            </section>
            <section className="welcome_preloader_content_down">
                <button id="OpenButton" onClick={ClosePreloader}>OPEN</button>
            </section>
        </section>
    )
}