const menu = document.querySelector(".menu");
const burger = document.querySelector(".burger");
const page = document.body;
const logo = document.querySelector(".logo");

burger.addEventListener("click", (e) => {
  burger.classList.toggle("burger_opened");
  menu.classList.toggle("menu_opened");
  page.classList.toggle("page_locked");
  logo.classList.toggle("logo_hidden");
});
