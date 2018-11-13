$(() => {
    var slider = $(".c-partialProjectSlider__frame"),
        wrapper = $(".c-partialProjectSlider__wrapper"),
        slides = $(".c-partialProjectSlider__slide"),
        projects = $(".c-partialProjectSlider__project"),

        // Current slide number
        left = 0,

        // Time before auto-slide
        delay = 5000,

        // Auto-slide function
        timer = setInterval(nextSlide, delay);

    // Wrap first 5 elements in a slide
    projects.slice(0, 4).wrapAll("</li><li class='c-partialProjectSlider__slide'>");
    projects.each(index => {
        index++

        // Group together 5 projects in a slide
        if( index % 4 === 0 ) {
            projects.slice(index, index+4).wrapAll("</li><li class='c-partialProjectSlider__slide'>");
        }
    })

    slides = $(".c-partialProjectSlider__slide");

    // Event listeners
    $(".c-partialProjectSlider__leftButton").click(() => {
        prevSlide();
        resetTimer();
    })
    $(".c-partialProjectSlider__rightButton").click(() => {
        nextSlide();
        resetTimer();
    })

    function nextSlide() {
        if( left !== (slides.length * -1) + 1 ) {
            left--;
            wrapper.css("left", `${left*100}%`);
        } else {
            left = 0;
            wrapper.css("left", `${left*100}%`);
        }
    }

    function prevSlide() {
        if( left > 0 ) {
            if( left < 0 ) {
                left++;
            } else {
                left = 0;
            }
            wrapper.css("left", `${left*100}%`)
        } else {
            left = slides.length - 1;
            wrapper.css("left", `${left*-100}%`);
        }
    }

    function resetTimer() {
        clearInterval(timer);
        timer = setInterval(nextSlide, delay);
    }
});
