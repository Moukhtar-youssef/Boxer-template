var icon = document.querySelector(".icon");
var menu = document.querySelector(".menu ul");
icon.addEventListener("click", () => {
  icon.classList.toggle("active");
  menu.classList.toggle("show");
});
