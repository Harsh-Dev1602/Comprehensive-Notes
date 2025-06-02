let sUBtn = document.querySelector("#signUpButton");

sUBtn.addEventListener("click", () => {
  let sU = document.querySelector("#signUp");
  let lI = document.querySelector("#logIn");
  let sUF = document.querySelector("#signUpF");
  sU.style.display = "flex";
  lI.style.display = "none";
  sUF.reset();

});

let lIBtn = document.querySelector("#logInButton");

lIBtn.addEventListener("click", () => {
  let sU = document.querySelector("#signUp");
  let lI = document.querySelector("#logIn");
  let lIF = document.querySelector("#logInF");
  sU.style.display = "none";
  lI.style.display = "flex";
  lIF.reset();

});


