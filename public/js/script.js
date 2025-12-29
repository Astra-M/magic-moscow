const mobileMenu = document.querySelector(".mobile-menu");
const burger = document.querySelector(".burger");
const page = document.body;
const logo = document.querySelector(".logo");
const excursionsItem = document.querySelector(".mobile-menu__item--excursions");
const excursionsSubmenu = document.querySelector(".mobile-menu__submenu");
burger.addEventListener("click", (e) => {
  burger.classList.toggle("burger_opened");
  mobileMenu.classList.toggle("mobile-menu_opened");
  page.classList.toggle("page_locked");
  logo.classList.toggle("logo_hidden");
});
excursionsItem.addEventListener("click", (e) => {
  e.stopPropagation(); // если нужно
  excursionsSubmenu.classList.toggle("mobile-menu__submenu--opened");
});
