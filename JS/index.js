let menuShow = document.getElementsByClassName("menuButton1")[0];
let menuHide = document.getElementsByClassName("menuButton2")[0];

menuShow.addEventListener("click", () => {
  let menuBar = document.getElementsByClassName("menuBar")[0];
  menuBar.style.display = "flex";
  menuHide.style.display = "block";
  menuShow.style.display = "none";
  menuBar.classList ="menuBar animate__animated animate__bounceInLeft ";

});


menuHide.addEventListener("click", () => {
  let menuBar = document.getElementsByClassName("menuBar")[0];
  menuBar.style.display = "none";
  menuHide.style.display = "none";
  menuShow.style.display = "block";
});
