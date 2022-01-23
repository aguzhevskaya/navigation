const headerBurger = document.querySelector(".header__burger");
const nav = document.querySelector(".navigation");
const mobilBg = document.querySelector(".mobil-bg");
const dropBtn = document.querySelector(".drop__btn");
const dropBtn2 = document.querySelector(".drop__btn--2");
const dropdownContent = document.querySelector(".dropdown__content");
const dropdown2Content = document.querySelector (".dropdown__content--2");

headerBurger.addEventListener("click", function () {
	nav.classList.toggle("active");
	mobilBg.classList.toggle("active");
	dropdownContent.classList.remove("active");
	dropdown2Content.classList.remove("active");
})

dropBtn.addEventListener("click", function () {
	dropdownContent.classList.toggle("active");
	dropBtn.classList.add("selected");
	
})

dropBtn2.addEventListener("click", function () {
	dropdown2Content.classList.toggle("active");
	dropBtn2.classList.add("selected");

})

mobilBg.addEventListener("click", function() {
	nav.classList.remove("active");
	mobilBg.classList.remove("active");
})

