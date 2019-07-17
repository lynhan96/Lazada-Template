// ; (function ($, window, document, undefined) {



//   // Add our plugin to fn
//   $.fn.extend({
//     carousel: function (options) {

//     }
//   })
// })(jQuery, window, document, undefined)

(function ($) {
    var defaults = {
      slideIndex: 1
    }

    $.fn.carousel = function(options) {
      var parent = $(this)

      if (options.autoPlay && options.delay > 0) {
        setInterval(
          function() {
            defaults.slideIndex += 1
            var slides = parent.find(".carousel-item")
            if (defaults.slideIndex > slides.length) {defaults.slideIndex = 1}
            showSlides(defaults.slideIndex, parent)
          }
          , options.delay);
      }

      showSlides(defaults.slideIndex, parent)

      parent.find('.prev').click(function(){
        defaults.slideIndex -= 1
        var slides = parent.find(".carousel-item")
        if (defaults.slideIndex < 1) {defaults.slideIndex = slides.length}
        showSlides(defaults.slideIndex, parent)
      })

      parent.find('.next').click(function(){
        defaults.slideIndex += 1
        var slides = parent.find(".carousel-item")
        if (defaults.slideIndex > slides.length) {defaults.slideIndex = 1}

        showSlides(defaults.slideIndex, parent)
      })

      parent.find('.dot').click(function(){
        defaults.slideIndex = parseInt($(this).data('position'))
        showSlides(defaults.slideIndex, parent)
      })
    }
})(jQuery);

function showSlides(slideIndex, parent) {
  var i;
  var slides = parent.find(".carousel-item")
  var dots = parent.find(".dot")

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";  
  dots[slideIndex - 1].className += " active";
}