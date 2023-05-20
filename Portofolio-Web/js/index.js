// Navbar purpose
const navbar_menu = document.querySelector(".nav_menu");
const nav_hamburger = document.querySelector(".nav_hamburger");
const nav_close = document.querySelector(".nav_close");

// menampilkan navbar
nav_hamburger.onclick = () => {
  navbar_menu.classList.toggle("active");
};

nav_close.onclick = () => {
  navbar_menu.classList.toggle("active");
};

// menghilangkan navbar
document.addEventListener("click", function (e) {
  if (!nav_hamburger.contains(e.target) && !navbar_menu.contains(e.target)) {
    navbar_menu.classList.remove("active");
  }
});
