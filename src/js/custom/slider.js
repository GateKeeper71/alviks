$(() => {
    var slider = $(".c-partialProjectSlider__frame"),
        wrapper = $(".c-partialProjectSlider__wrapper"),
        slides = $(".c-partialProjectSlider__slide"),
        projects = $(".c-partialProjectSlider__project"),
        left = 0;

    // Wrap first 5 elements in a slide
    projects.slice(0, 5).wrapAll("</li><li class='c-partialProjectSlider__slide'>");
    projects.each(index => {
        index++

        // Group together 5 projects in a slide
        if( index % 5 === 0 ) {
            projects.slice(index, index+5).wrapAll("</li><li class='c-partialProjectSlider__slide'>");
        }
    })

    slides = $(".c-partialProjectSlider__slide");

    // Event listeners
    $(".c-partialProjectSlider__leftButton").click(() => prevSlide());
    $(".c-partialProjectSlider__rightButton").click(() => nextSlide());

    console.log( (slides.length * -1) )

    function nextSlide() {
        if( left !== (slides.length * -1) + 1 ) {
            left--;
            const current = $(".c-partialProjectSlider__rightButton").css("left");
            wrapper.css("left", `${left*100}%`)
            console.log("Left: " + left);
        }
    }

    function prevSlide() {
        if( left < 0 ) {
            left++;
            const current = $(".c-partialProjectSlider__rightButton").css("left");
            wrapper.css("left", `${left*100}%`)
            console.log("Left: " + left);
        }
    }
});
