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
        .parent()
        .removeClass("toggle");
      $(this)
        .next(".submenu")
        .fadeOut(300);
    } else {
      $("ul.submenu").fadeOut(300);
      $(".product-filter ul li").each(function(index, item) {
        $(item).removeClass("toggle");
      });
      $(this)
        .parent()
        .addClass("toggle");
      $(this)
        .next(".submenu")
        .fadeIn(300);
    }
  });

  var array = [];
  $(".styled-checkbox").change(function() {
    if (this.checked) {
      array.push($(this).prop("value"));
    } else {
      var index = array.indexOf($(this).prop("value"));
      if (index > -1) {
        array.splice(index, 1);
      }
    }

    // axios(send, array)
  });
});
