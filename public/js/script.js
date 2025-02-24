const menu = document.querySelector(".menu");
const burger = document.querySelector(".burger__icon");
const header = document.querySelector(".header");
const page = document.querySelector(".page");

burger.addEventListener("click", (e) => {
  burger.classList.toggle("burger__icon_active");
  menu.classList.toggle("menu_opened");
  header.classList.toggle("header_100vh");
  page.classList.toggle("page_locked");
    // console.log("скрипт выполнен");
});
// const menu = document.querySelector(".menu");

// const body = document.body;
// if (menu & burger) {
//   menu.classList.toggle(".menu_visible");
//   burger.classList.add(".burger_hidden");
// }
// if (menu && menuBtn) {
// 	menuBtn.addEventListener('click', e => {
// 		menu.classList.toggle('active')
// 		menuBtn.classList.toggle('active')
// 		body.classList.toggle('lock')
// 	})

// 	menu.addEventListener('click', e => {
// 		if (e.target.classList.contains('menu__body')) {
// 			menu.classList.remove('active')
// 			menuBtn.classList.remove('active')
// 			body.classList.remove('lock')
// 		}
// 	})

// 	menu.querySelectorAll('.menu__link').forEach(link => {
// 		link.addEventListener('click', () => {
// 			menu.classList.remove('active')
// 			menuBtn.classList.remove('active')
// 			body.classList.remove('lock')
// 		})
// 	})
// }
