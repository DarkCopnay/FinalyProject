let btns = document.querySelectorAll(".btns");
let btn_NFT = document.getElementById("btn_NFT");
let btn_Collections = document.getElementById("btn_Collections");
let MarketPlace_step_2_box = document.querySelectorAll(".step_2_box");
let MarketPlace_step_5_box = document.querySelectorAll(".step_5_box");
let NFT_MarketPlace = document.getElementById("NFT_MarketPlace");
let Collections_MarketPlace = document.getElementById("Collections_MarketPlace");

function ModulMarketPlace() {
    btns.forEach(function(btn) {
         btn.addEventListener("click", function() {
            let line = btn.childNodes[5];

            btns.forEach(function(btn) {
                let line = btn.childNodes[5];
                let ActivClass = line.classList.contains("activ");

                if (ActivClass == true) {
                    line.classList.remove("activ");
                }
            });

            line.classList.add("activ");
         });

         btn.addEventListener("click", function() {
            let h2 = btn.childNodes[1];

            switch (h2.innerText) {
                case "NFTs":
                    Collections_MarketPlace.style.opacity = 0;
                    setTimeout(function() {
                        Collections_MarketPlace.style.display = "none";
                    }, 600);

                    NFT_MarketPlace.style.display = "flex";
                    setTimeout(function() {
                        NFT_MarketPlace.style.opacity = 1;
                    }, 400);
                    break;
                
                case "Collections":
                    Collections_MarketPlace.style.display = "flex";
                    setTimeout(function() {
                        Collections_MarketPlace.style.opacity = 1;
                    }, 400);

                    NFT_MarketPlace.style.opacity = 0;
                    setTimeout(function() {
                        NFT_MarketPlace.style.display = "none";
                    }, 400);
                    break;
            }
         })
    });

    btn_NFT.childNodes[3].innerText = MarketPlace_step_5_box.length; 
    btn_Collections.childNodes[3].innerText = MarketPlace_step_2_box.length;
}

export {ModulMarketPlace};