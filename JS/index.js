let menuShow = document.getElementsByClassName("menuButton1")[0];
let menuHide = document.getElementsByClassName("menuButton2")[0];

menuShow.addEventListener("click", () => {
  let menuBar = document.getElementsByClassName("menuBar")[0];
  menuBar.style.display = "flex";
  menuHide.style.display = "block";
  menuShow.style.display = "none";
  menuBar.classList = "menuBar animate__animated animate__fadeInLeftBig ";

});


menuHide.addEventListener("click", () => {
  let menuBar = document.getElementsByClassName("menuBar")[0];
  menuHide.style.display = "none";
  menuShow.style.display = "block";
  menuBar.classList = "menuBar animate__animated animate__fadeOutLeftBig ";
  setTimeout(() => {
    menuBar.style.display = "none";
  }, 500)

});
let menuBar = document.getElementsByClassName("menuBar")[0];

menuBar.addEventListener("click", () => {
  let menuBar = document.getElementsByClassName("menuBar")[0];
  menuHide.style.display = "none";
  menuShow.style.display = "block";
  menuBar.classList = "menuBar animate__animated animate__fadeOutLeftBig ";
  setTimeout(() => {
    menuBar.style.display = "none";
  }, 500)

});
