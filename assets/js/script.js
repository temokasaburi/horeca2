$( "#burger-btn" ).click(function() {
    event.preventDefault();
    $( "div.buregrmenu" ).toggleClass('open');
    $( 'html' ).toggleClass('overflow-h');
  });
  