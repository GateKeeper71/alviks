import anime from "animejs";
import Headroom from "headroom.js";

export function Navbar() {
	document.addEventListener("DOMContentLoaded", () => {

		/* Navbar folding clickable submenu */
		const list = document.querySelectorAll(".am-has-submenu");
		list.forEach((item) => {
			item.addEventListener("click", (evt) => {
				evt.preventDefault();

				const parentElemSibling = evt.target.parentElement.nextElementSibling;

				parentElemSibling.classList.toggle("dn-m");
				parentElemSibling.classList.contains("dn-m") ? blob.reverse() : blob.play();

			});
		});

		anime.easings["myCustomEasingName"] = function(t) {
			return Math.pow(Math.sin(t * 3), 3);
		};

		const blob = anime({
			targets: ".am-submenu .db",
			translateY: function(el, i) {
				return (i + 1) * 10;
			},
			duration: 300,
			delay: function(el, i) {
				return i * 100;
			},
			autoplay: false,
			easing: "myCustomEasingName"
		});

		const menuBtn = document.getElementById("menu");
		const sidebar = document.getElementById("sidebar");

		menuBtn.addEventListener("click", (e) => {
			sidebar.classList.toggle("slider-reset");
		});

		$("#sidebar .close").click(() => {
			sidebar.classList.toggle("slider-reset");
		});

	});
}
