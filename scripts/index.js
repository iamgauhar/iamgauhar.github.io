let headerr = document.getElementById("header");
window.addEventListener("scroll", function () {
  if (window.pageYOffset >= 250) {
    headerr.classList.add("stick");
  } else {
    headerr.classList.remove("stick");
  }
});

let menubar = document.querySelector(".menuList");
let close = document.querySelector(".menuList");
const openMenu = () => {
  menubar.style.left = "0";
};
const closeMenu = () => {
  menubar.style.left = "-100%";
};

const goTo = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

document.querySelector("#resume").addEventListener("click", () => {
  // location.href = "https://drive.google.com/file/d/1xr0EwCPD00gk6ilTQ8BAvheR3HTUYnDp/view?usp=share_link";
  window.open(
    "https://drive.google.com/file/d/1xr0EwCPD00gk6ilTQ8BAvheR3HTUYnDp/view?usp=share_link",
    "_blank"
  );
});

AOS.init();
// Navbar script
// document.querySelector("canvas").style.position = "relative";
// const nav = function () {
//   document.querySelector(".menu-link").addEventListener("click", (e) => {
//     e.preventDefault();

//     document.querySelector(".menu-overlay").classList.toggle("open");
//     document.querySelector(".menu").classList.toggle("open");
//   });
// };

// nav();
