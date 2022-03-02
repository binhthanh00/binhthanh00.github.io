const menuOpen = document.querySelector(".nav_collapse");
const menuClose = document.querySelector(".nav_close");
const headerMenu = document.querySelector(".header .nav");

menuOpen.addEventListener("click", function() {
  headerMenu.classList.add("is-open");
});

menuClose.addEventListener("click", function() {
  headerMenu.classList.remove("is-open");
});

document.addEventListener("click", function(event) {
  if (
    !headerMenu.contains(event.target) &&
    !event.target.matches(".nav_collapse")
  ) {
    headerMenu.classList.remove("is-open");
  }
});


