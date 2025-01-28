window.addEventListener("load", () => {
  let loading = document.querySelector("#loading");
  let home = document.querySelector(".home");

  setTimeout(() => {
    loading.style.display = "none";
    home.style.display = "block";
  },1000);
});
