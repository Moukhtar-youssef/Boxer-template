var icon = document.querySelector(".icon");
var menu = document.querySelector(".menu ul");
icon.addEventListener("click", () => {
  icon.classList.toggle("active");
  menu.classList.toggle("show");
});
// changing the color of header according to the window scroll
let sections = document.querySelectorAll("section");
let links = document.querySelectorAll(".navbar .container ul li a");
let menu_links = document.querySelectorAll(".menu ul li a");
window.addEventListener("scroll", () => {
  let user_position = document.documentElement.scrollTop;
  sections.forEach((section) => {
    if (
      user_position >= section.offsetTop - 70 &&
      user_position <= section.offsetHeight + section.offsetTop
    ) {
      links.forEach((link) => {
        if (
          section.id.toLocaleLowerCase() == link.className.toLocaleLowerCase()
        ) {
          console.log(link.textContent.toLocaleLowerCase());
          removeactive(links);
          setactive(link);
        }
      });
      menu_links.forEach((link) => {
        if (
          section.id.toLocaleLowerCase() == link.className.toLocaleLowerCase()
        ) {
          removeactive(menu_links);
          setactive(link);
        }
      });
    }
  });
});
function removeactive(links) {
  links.forEach((element) => {
    element.classList.remove("active");
  });
}
function setactive(link) {
  link.classList.add("active");
}
function animate(parent, ...childs) {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= parent.offsetTop - 70) {
      childs.forEach((element) => {
        let childarray = Array.from(element);
        if (childarray.length === 0) {
          element.style.cssText =
            "opacity:1;transform:translate(0,0);-webkit-transform:translate(0,0));-moz-transform:translate(0,0);-ms-transform:translate(0,0);-o-transform:translate(0,0);transform: scale(1);-webkit-transform: scale(1);-moz-transform: scale(1);-ms-transform: scale(1);-o-transform: scale(1);";
        } else {
          childarray.forEach((e) => {
            e.style.cssText =
              "opacity:1;transform:translate(0,0);-webkit-transform:translate(0,0));-moz-transform:translate(0,0);-ms-transform:translate(0,0);-o-transform:translate(0,0);transform: scale(1);-webkit-transform: scale(1);-moz-transform: scale(1);-ms-transform: scale(1);-o-transform: scale(1);";
          });
        }
      });
    }
  });
}
