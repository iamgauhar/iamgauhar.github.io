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

  window.open(
    "https://drive.google.com/file/d/1rBWPjKObkRzsPfa9bjihdLW50bOCpkoO/view?usp=share_link",
    "_blank"
  );
});



AOS.init();



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

// document.querySelector("#send-mail").addEventListener("click", (e) => {
//   e.preventDefault()
//   const email = document.querySelector("#email").value
//   sendEmail(email)
// })