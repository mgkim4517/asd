$('.info-toggle').click(function() {
  if ($(this).hasClass('open')) {
      $(this).removeClass('open').next('.toggle-contents').slideUp();
  } else {
      $('.info-toggle').removeClass('open').next('.toggle-contents').slideUp();
      $(this).addClass('open').next('.toggle-contents').slideDown();
  }
});