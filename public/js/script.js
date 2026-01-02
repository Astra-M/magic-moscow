const mobileMenu = document.querySelector(".mobile-menu");
const burger = document.querySelector(".burger");
const page = document.body;
const logo = document.querySelector(".logo");
const toggleButtons = document.querySelectorAll(".mobile-menu__toggle");
const excursionsItem = document.querySelector(".mobile-menu__item--excursions");
const excursionsSubmenu = document.querySelector(".mobile-menu__submenu");
const subitems = document.querySelectorAll(".mobile-menu__subitem");
burger.addEventListener("click", (e) => {
  burger.classList.toggle("burger_opened");
  mobileMenu.classList.toggle("mobile-menu_opened");
  page.classList.toggle("page_locked");
  logo.classList.toggle("logo_hidden");
});
// excursionsItem.addEventListener("click", (e) => {
//   e.stopPropagation();
//   excursionsSubmenu.classList.toggle("mobile-menu__submenu--opened");
//   console.log("mobile-menu__submenu--opened");
// });

// subitems.forEach((item) => {
//   item.addEventListener("click", () => {
//     item.classList.add("mobile-menu__subitem--active");
//   });
// });



toggleButtons.forEach((button) => {
  const submenu = button
    .closest(".mobile-menu__item")
    .querySelector(".mobile-menu__submenu");
  const arrow = button
    .closest(".mobile-menu__item")
    .querySelector(".mobile-menu__arrow");

  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", !isExpanded);
    submenu.classList.toggle("mobile-menu__submenu--opened");

    if (arrow) {
      arrow.classList.toggle("rotate-180");
    }
  });
});
