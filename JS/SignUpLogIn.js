let sUBtn = document.querySelector("#signUpButton");

sUBtn.addEventListener("click", () => {
  let sU = document.querySelector("#signUp");
  let lI = document.querySelector("#logIn");
  sU.style.display = "flex";
  lI.style.display = "none";
});

let lIBtn = document.querySelector("#logInButton");

lIBtn.addEventListener("click", () => {
  let sU = document.querySelector("#signUp");
  let lI = document.querySelector("#logIn");
  sU.style.display = "none";
  lI.style.display = "flex";
});


