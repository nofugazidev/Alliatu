const menuBtn = document.querySelector(".menu");
const menuIcon = document.querySelector(".menu i");
const navContainer = document.querySelector(".nav-container");

menuBtn.addEventListener("click", () => {
  navContainer.classList.toggle("is-open");

  if (navContainer.classList.contains("is-open")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  } else {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  }
});
