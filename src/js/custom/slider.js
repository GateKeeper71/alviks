export default function makeSliders() {
	const windowWidth = $(window).outerWidth();
	const sliders = $('.c-partialProjectSlider__frame');
	var items = 1;

	if (windowWidth > 480) {
		items = 2;
	}

	if (windowWidth > 768) {
		items = 3;
	}

	if (windowWidth > 1100) {
		items = 4;
	}

	sliders.each((index, element) => {
		var
			slider = $(element),
			wrapper = slider.find('.c-partialProjectSlider__wrapper'),
			slides = slider.find('.c-partialProjectSlider__slide'),
			projects = slider.find('.c-partialProjectSlider__project'),
			leftButton = slider.parent().find('.c-partialProjectSlider__leftButton'),
			rightButton = slider.parent().find('.c-partialProjectSlider__rightButton'),

			// Current slide number
			left = 0;

		// Wrap first elements in a slide
		projects.slice(0, items).wrapAll("</li><li class='c-partialProjectSlider__slide'>");

		projects.each((index, element) => {
			index++;

			// Group together projects in a slide
			if (index % items === 0) {
				projects.slice(index, index + items).wrapAll("</li><li class='c-partialProjectSlider__slide'>");
			}
		});

		// Refresh slides
		slides = slider.find('.c-partialProjectSlider__slide');

		// Calculate slides
		wrapper.css("width", (slides.length * 100) + "%");
		slides.css("width", `${$(element).outerWidth()}px`);
		projects.css("width", `${$(element).outerWidth() / items}px`);

		// Hide arrows if only one slide
		if (slides.length < 2) {
			leftButton.css('display', 'none');
			rightButton.css('display', 'none');
		}

		// Event listeners
		leftButton.click(e => prevSlide(e.target));
		rightButton.click(e => nextSlide(e.target));

		function nextSlide(target) {
			if (left !== (slides.length * -1) + 1) {
				left--;
				wrapper.css("left", `${left*100}%`);
			} else {
				left = 0;
				wrapper.css("left", `${left*100}%`);
			}
		}

		function prevSlide(target) {
			if (left > 0) {
				if (left < 0) {
					left++;
				} else {
					left = 0;
				}
				wrapper.css("left", `${left * 100}%`)
			} else {
				left = slides.length - 1;
				wrapper.css("left", `${left * -100}%`);
			}
		}
	});
}
