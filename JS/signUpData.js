
let sUF = document.getElementById("signUpF");

sUF.onsubmit = () => {
    let uName = btoa(document.getElementById("fullname").value);
    let uEmail = btoa(document.getElementById("email").value);
    let uNum = btoa(document.getElementById("num").value);
    let uPass = btoa(document.getElementById("pass").value);

    var userData = {
        name: uName,
        number: uNum,
        email: uEmail,
        password: uPass
    }


    if (uName != "" && uNum != "" && uEmail != "" && uPass != "") {
        
        var userTextData = JSON.stringify(userData);
        // alert(userTextData);
        localStorage.setItem(uEmail, userTextData);
        let sB = document.getElementById("signUpB");
        sB.style.backgroundColor =  "#065fb97b";
        sB.innerHTML = " Sign up successfully.... ";
        sB.style.cursor = "block";
        sB.style.cursor = "wait";
        sB.disabled = true;
        setTimeout(() => {
            sB.style.backgroundColor = " #065fb9";
            sB.innerHTML = "Sign Up";
            sB.disabled = false;
            sB.style.cursor = "pointer";
            sUF.reset();
            let sU = document.querySelector("#signUp");
            let lI = document.querySelector("#logIn");
            sU.style.display = "none";
            lI.style.display = "flex";
            
        }, 3000);
        return false;
    }

}

//  check  Email id  already exist...
let uEmail_input = document.getElementById("email");

uEmail_input.onchange = () => {

    let uEmail = btoa(document.getElementById("email").value);
    let wE = document.getElementById("wEmail");
    let bE = document.getElementById("boxEmail");
    let sB = document.getElementById("signUpB");
    if (localStorage.getItem(uEmail) != null) {
        wE.style.display = "block";
        bE.style.boxShadow = "0.1px 0.1px 5px #ff0000";
        bE.style.height= "auto";
        sB.disabled = true;
        sB.style.backgroundColor = "#ccc";
        sB.style.cursor = "not-allowed";

        uEmail_input.onclick = () => {
            uEmail_input.value = " ";
            wE.style.display = "none";
            bE.style.boxShadow= "0.1px 0.1px 5px transparent";
            bE.style.height= "40px";
            sB.disabled = false;
            sB.style.backgroundColor = "#065fb9";
            sB.style.cursor = "pointer";
        }
    }
}