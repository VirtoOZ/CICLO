import { ibg } from "./functions.js";
//когда весь контент загрузится
window.onload = function () {
	ibg();
	document.addEventListener("click", documentActions);
	// Actions (делигирование события click)
	function documentActions(e) {
		const targetElement = e.target; // кладем в переменную нажатый объект

	}
	//<BURGER>=================================

	//</BURGER>=================================
}