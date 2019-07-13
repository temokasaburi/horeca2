$(document).ready(function() {
  $("#burger-btn").click(function() {
    event.preventDefault();
    $("div.buregrmenu").toggleClass("open");
    $("html").toggleClass("overflow-h");
  });

  $(".search-drop-toggle").click(function() {
    event.preventDefault();
    $("section.search-section").toggleClass("open");
    $("html").toggleClass("overflow-h");
  });

  // header animation
  $(".animated-menu").hover(function() {
    // console.log($(this).find(".underbar").css());
  });

  $(".product-filter-menu").click(function() {
    if (
      $(this)
        .next(".submenu")
        .css("display") == "block"
    ) {
      $(this)
        .next(".submenu")
        .fadeOut(300);
    } else {
      $("ul.submenu").fadeOut(300);
      $(this)
        .next(".submenu")
        .fadeIn(300);
    }
  });
});
