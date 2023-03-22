// eslint-disable-next-line no-undef
$(window).scroll(function () {
    // eslint-disable-next-line no-undef
    if ($(this).scrollTop() > 800) {
      // eslint-disable-next-line no-undef
      $('.pageup').fadeIn();
    } else {
      // eslint-disable-next-line no-undef
      $('.pageup').fadeOut()
    }
  });
  // eslint-disable-next-line no-undef
  $("a[href^='#up']").click(function () {
    // eslint-disable-next-line no-undef
    const _href = $(this).attr("href");
    // eslint-disable-next-line no-undef
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
  })