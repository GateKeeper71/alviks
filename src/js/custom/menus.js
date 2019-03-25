$(() => {
	$(".c-fixedHeader__sideMenu .icon-link").click((e) => {
		$(e.target).closest(".icon-link").toggleClass("toggle");
	});
});
