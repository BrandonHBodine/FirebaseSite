$(function() {
  'use strict';
  var count = 0;
  $('.sure').on('click', function() {
    var footerElement;
    if (count <= 1) {
      footerElement = $('<div><p>No.</p></div>');
    } else {
      footerElement = $('<div><p>Please Stop.</p></div>');
      $('.sure').attr('disabled', 'disabled');
      $('.sure').off();
    }
    footerElement.removeClass('footer-original');
    footerElement.addClass('footer-imposter footer-container');
    console.log(footerElement);
    $('.footer').append(footerElement);
    $('html, body').animate({
      scrollTop: $(document).height()
    }, 1000);
    count++;
  });
});
