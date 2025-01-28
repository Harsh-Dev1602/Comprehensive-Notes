
let lIF = document.getElementById("logInF");

lIF.onsubmit = () => {
  
  let emailLog = document.getElementById("emailLog");
  let passLog = document.getElementById("passLog");

   let wlogE=document.getElementById("wlogInEmail");
   let wlogP=document.getElementById("wlogInPass");
   let wBE =document.getElementById("wboxE");
    let wBP =document.getElementById("wboxP");
   let logInB = document.getElementById("logInB");


  let storedData = localStorage.getItem(btoa(emailLog.value));
  // alert(storedData);

  if (!storedData) {
    
    wlogE.style.display ="block";
    wBE.style.boxShadow = "0.1px 0.1px 5px #ff0000";
    wBE.style.height= "auto";
    logInB.disabled = true;
    logInB.style.backgroundColor = "#ccc";
    logInB.style.cursor = "not-allowed";

    emailLog.onclick = ()=>{
   emailLog.value=""
      wlogE.style.display ="none";
      wBE.style.boxShadow = "0.1px 0.1px 5px transparent";
      wBE.style.height= "40px"; 
      logInB.disabled = false;
      logInB.style.backgroundColor = "#065fb9";
      logInB.style.cursor = "pointer";
    }
     
  } else {
    const text = JSON.parse(storedData);
    const correctEmail = text.email;
    const correctPassword = text.password;
    if (btoa(emailLog.value) == correctEmail && btoa(passLog.value) == correctPassword) {
    
      sessionStorage.setItem("user",btoa(emailLog.value));
      window.location.replace("index.html");
     
      lIF.reset();
    }
     else if (btoa(emailLog.value) == correctEmail && btoa(passLog.value) != correctPassword) {
      wlogP.style.display ="block";
    wBP.style.boxShadow = "0.1px 0.1px 5px #ff0000";
    wBP.style.height= "auto";
    logInB.disabled = true;
    logInB.style.backgroundColor = "#ccc";
    logInB.style.cursor = "not-allowed";

    passLog.onclick = ()=>{
      passLog.value=""
      wlogP.style.display ="none";
      wBP.style.boxShadow = "0.1px 0.1px 5px transparent";
      wBP.style.height= "40px"; 
      logInB.disabled = false;
      logInB.style.backgroundColor = "#065fb9";
      logInB.style.cursor = "pointer";
    }
    
    }
    
  }
  return false;
}
