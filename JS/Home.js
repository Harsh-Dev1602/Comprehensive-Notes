window.onload = () => {
  if (sessionStorage.getItem("user") == null) {
    window.location.replace("SignUpLogIn.html");
  } else {
    let userEmail = sessionStorage.getItem("user");
    let textEmail = localStorage.getItem(userEmail);
    let objData = JSON.parse(textEmail);
    //  set a user name  in Navbar
    let displayName = document.getElementById("displayName");

    displayName.innerHTML = atob(objData.name);
    displayName.className = "ProName";

    //   set a  LogOut button in navbar
    let li = document.getElementsByTagName("li")[3];
    li.style.display = "none";
    let li1 = document.getElementsByTagName("li")[7];
    li1.style.display = "none";

    let profileContainer = document.getElementById("profileContainer");

    let h = document.getElementsByClassName("home")[0];
    let profileDropdown = document.getElementById("profileDropdown");
    profileContainer.onclick = () => {
      profileDropdown.style.display =
      profileDropdown.style.display === "flex" ? "none" : "flex";
     
        h.style.display === "flex" ? "none" : "flex";

    };

    let lOB = document.getElementById("logOutButton");
    let lOB2 = document.getElementById("logOutButton2");

    if (lOB) {
      lOB.onclick = () => {
        window.sessionStorage.removeItem("user");
        window.location.replace("SignUpLogIn.html");
      };
    }

    if (lOB2) {
      lOB2.onclick = () => {
        window.sessionStorage.removeItem("user");
        window.location.replace("../SignUpLogIn.html");
      };
    }
  }
};
