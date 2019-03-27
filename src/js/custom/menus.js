$(() => {
	$(".c-fixedHeader__sideMenu .icon-link").click((e) => {
		$(".c-fixedHeader__sideMenu .icon-link").removeClass("toggle");
		$(e.target).closest(".icon-link").toggleClass("toggle");
	});
});
