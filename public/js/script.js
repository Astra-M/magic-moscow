// const menu = document.querySelector('.menu__body')

const burger = document.querySelector(".burger__icon");
burger.addEventListener("click", (e) => {
  burger.classList.toggle("burger__icon_active");
  console.log("скрипт выполнен");
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
