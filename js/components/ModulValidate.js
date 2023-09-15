let input_user = document.getElementById("input_user");
let input_email = document.getElementById("input_email");
let input_password = document.getElementById("input_password");
let input_password_retry = document.getElementById("input_password_retry");

let input_user_valid = document.getElementById("input_user_valid");
let input_email_valid = document.getElementById("input_email_valid");
let input_password_valid = document.getElementById("input_password_valid");
let input_password_retry_valid = document.getElementById("input_password_retry_valid");


function ModulValidate() {
    input_user.addEventListener("focus", function() {
        setInterval(function() {
            switch (input_user.value) {
                case "":
                    input_user.style.border = "1px solid red";
                    input_user_valid.style.display = "block";
                    input_user_valid.innerText = "*Enter your nickname"
                    break;
                
                default:
                    input_user.style.border = "none"; 
                    input_user_valid.style.display = "none";
                    input_user_valid.innerText = ""
            }
        }, 10)
    });

    // input_email.addEventListener("focus", function() {
    //     setInterval(function() {
    //         switch (input_email.value) {
    //             case "":
    //                 input_email.style.border = "1px solid red";
    //                 input_email_valid.style.display = "block";
    //                 input_email_valid.innerText = "*Enter your E-mail";
    //                 break;

    //             case (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/):
    //                 input_email.style.border = "1px solid red";
    //                 input_email_valid.style.display = "block";
    //                 input_email_valid.innerText = "*Enter your E-mail";
    //                 break;
                    
    //             default:
    //                 input_email.style.border = "none";
    //                 input_email_valid.style.display = "none";
    //                 input_email_valid.innerText = "";
    //         }
    //     }, 10);
    // })
}

export {ModulValidate};