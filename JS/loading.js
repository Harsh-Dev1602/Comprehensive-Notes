window.addEventListener("load", () => {
  let loading = document.querySelector("#loading");
  let home = document.querySelector(".home")[0];

  setTimeout(() => {
    loading.style.display = "none";
    home.style.display = "block";
  },1000);
});
