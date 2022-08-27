const menuBar = document.querySelector(".menuBtn");
const iconMenu = document.querySelector(".menuBtn i");

menuBar.addEventListener("click", () => {
  document.body.classList.toggle("menuActive");
  if (document.body.className == "menuActive") {
    iconMenu.className = "fa-solid fa-xmark";
  } else {
    iconMenu.className = "fa-solid fa-bars";
  }
});

const animationLeft = {
  origin: "left",
  distance: "50px",
  duration: 800,
  delay: 200,
};

const animationRight = {
  origin: "right",
  distance: "50px",
  duration: 800,
  delay: 200,
};

ScrollReveal().reveal(".textSection", animationLeft);

ScrollReveal().reveal(".divImg", animationRight);

ScrollReveal().reveal(" #materiaPrincipal", animationLeft);

ScrollReveal().reveal(".materiaLateral", animationRight);

ScrollReveal().reveal("#one", {
  origin: "top",
  distance: "50px",
  duration: 300,
  delay: 200,
});

ScrollReveal().reveal("#two", {
  origin: "top",
  distance: "50px",
  duration: 300,
  delay: 300,
});

ScrollReveal().reveal("#three", {
  origin: "top",
  distance: "50px",
  duration: 300,
  delay: 400,
});
