import Popper from "popper.js";

$(() => {

	/**
	 * Side Icon Menu
	 */
	$(".c-fixedHeader__sideMenu .icon-link").click((e) => {
		const element = $(e.target).closest(".icon-link");

		$(".c-fixedHeader__sideMenu .icon-link.toggle").not(element).removeClass("toggle");

		if (!element.hasClass("toggle")) {
			element.addClass("toggle");
		} else {
			element.removeClass("toggle");
		}
	});

	/**
	 * Pop ups
	 */
	const triggers = document.querySelectorAll(".am-tooltip-reference");

	triggers.forEach((item) => {

		const sibling = item.nextElementSibling;

		item.addEventListener("click", (event) => {
			const element = $(event.target).closest(".icon-link");

			event.preventDefault();
			pop.update();

			if (element.length > 0) {
				$(".c-fixedHeader__sideMenu .icon-link").next().not(element.next()).addClass("dn");
				if (element.next().hasClass("dn")) {
					element.next().removeClass("dn");
				} else {
					element.next().addClass("dn");
				}
			} else {
				$(sibling).toggleClass('dn');
			}
		});

		const pop = new Popper(item, sibling, {
			trigger: "click",
			placement: "bottom",
		});

	});

	/**
	 * Scroll
	 */
	$(window).scroll(() => {
		if ($(window).scrollTop() > 400) {
			$(".c-fixedHeader .navbar").addClass("background");
		} else {
			$(".c-fixedHeader .navbar").removeClass("background");
		}
	});
});
