document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const navList = document.getElementById("nav-list");

  navToggle.addEventListener("click", function () {
    if (window.innerWidth <= 480) {
      navList.classList.toggle("show");
    }
  });
});
