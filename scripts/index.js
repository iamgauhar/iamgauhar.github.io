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
  menubar.style.left = "-110%";
};

const goTo = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

document.querySelector("#resume-button-2").addEventListener("click", () => {
  // location.href = "https://drive.google.com/u/0/uc?id=1xr0EwCPD00gk6ilTQ8BAvheR3HTUYnDp&export=download";
  // window.open(
  //   "https://drive.google.com/u/0/uc?id=1xr0EwCPD00gk6ilTQ8BAvheR3HTUYnDp&export=download",
  // );
  // window.open(
  //   "https://drive.google.com/file/d/1xr0EwCPD00gk6ilTQ8BAvheR3HTUYnDp/view?usp=share_link",
  //   "_blank"
  // );
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


function sendEmail(email) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "fw21.0693@gmail.com",
    Password: "lkzdyimaymcobego",
    To: 'iamgauhar@gmail.com',
    From: email,
    Subject: "This is the subject",
    Body: "And this is the body"
  }).then(
    message => alert(message)
  );
}

document.querySelector("#send-mail").addEventListener("click", (e) => {
  e.preventDefault()
  const email = document.querySelector("#email").value
  sendEmail(email)
})