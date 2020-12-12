$(document).ready(function(){
    var $status = $('.reviews__pag');
    var $slickElement = $('.reviews__list');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.html('<span class="reviews__pag-num">' + i + '</span>' + '<span>' + '/' + '</span>' + '<span class="reviews__pag-num">' + slick.slideCount + '</span>');
    });

    $slickElement.slick({
        slideToShow: 1,
        arrows: true, 
        appendArrows: $(".reviews__controls"),
        adaptiveHeight: true
    });
  });
