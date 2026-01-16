const mobileMenu = document.querySelector(".mobile-menu");
const burger = document.querySelector(".burger");
const page = document.body;
// const logo = document.querySelector(".logo");
const toggleButtons = document.querySelectorAll(".mobile-menu__toggle");
const mobileHeader = document.querySelector(".mobile-menu__header");
const mobileList = document.querySelector(".mobile-menu__list");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger_opened");
  mobileHeader.classList.toggle("hidden");
  mobileMenu.classList.toggle("mobile-menu_opened");
  page.classList.toggle("page_locked");
});

mobileMenu.addEventListener("scroll", () => {
  mobileHeader.classList.toggle("shadow-md", mobileMenu.scrollTop > 0);
});

toggleButtons.forEach((button) => {
  const submenu = button
    .closest(".mobile-menu__item")
    .querySelector(".mobile-menu__submenu");
  const arrow = button
    .closest(".mobile-menu__item")
    .querySelector(".mobile-menu__arrow");

  button.addEventListener("click", (e) => {
    // e.stopPropagation();
    // console.log("Клик по кнопке подменю", e.target);
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", !isExpanded);
    submenu.classList.toggle("mobile-menu__submenu--opened");

    if (arrow) {
      arrow.classList.toggle("rotate-180");
    }
  });
});
