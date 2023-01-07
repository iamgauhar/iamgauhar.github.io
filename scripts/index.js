document.querySelector("#resume").addEventListener("click", () => {
  // location.href = "https://drive.google.com/file/d/1xr0EwCPD00gk6ilTQ8BAvheR3HTUYnDp/view?usp=share_link";
  window.open(
    "https://drive.google.com/file/d/1xr0EwCPD00gk6ilTQ8BAvheR3HTUYnDp/view?usp=share_link",
    "_blank"
  );
});

// Navbar script
// document.querySelector("canvas").style.position = "relative";
const nav = function () {
  document.querySelector(".menu-link").addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelector(".menu-overlay").classList.toggle("open");
    document.querySelector(".menu").classList.toggle("open");
  });
};

nav();
